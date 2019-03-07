import {isNoU} from '@household/cross-cutting';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
export abstract class AbstractBaseService{
	private baseUrl:string;
	private httpClient:HttpClient;
	constructor(baseUrl:string,httpClient:HttpClient){
		this.baseUrl=baseUrl;
		this.httpClient=httpClient;
	}
	public getOne<T>(id:string):Observable<T>{
		isNoU(id,'get-one-id');
		return this.httpClient.get<T>(`${this.baseUrl}/${id}`);
	}
	public list<T>(...additionalParameterMap:{paramName: string;value:string}[]):Observable<T[]>{
		let additionalParameters:string="";
		if(additionalParameterMap.length){
			additionalParameterMap.forEach((param,index,arr)=>{
				if(param.paramName!==null&&param.paramName!==undefined&&param.value!==null&&param.value!==undefined){
					additionalParameters+=`${param.paramName}=${param.value}`;
					if(arr.length-1!==index){
						additionalParameters+='&';
					}
				}
				
			})
		}
		return this.httpClient.get<T[]>(`${this.baseUrl}${additionalParameters?"?"+additionalParameters:''}`);
	}
	public save<T>(entity:T):Observable<any>{
		isNoU(entity,'save-entity');
		return this.httpClient.post(this.baseUrl,entity);
	}
	public delete(id:string):Observable<any>{
		isNoU(id,'delete-entity');
		return this.httpClient.delete(`${this.baseUrl}/${id}`);
	}

	public update<T>(entity:T):Observable<any>{
		isNoU(entity,'update-entity');
		return this.httpClient.put(this.baseUrl,entity);
	}

}