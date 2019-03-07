import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AbstractBaseService} from '@household/services';
const INGREDIENT_BASE_URL='https://localhost:44327/api/ingredienttypes';

@Injectable()
export class IngredientTypeService extends AbstractBaseService{

	constructor(private http:HttpClient){
		super(INGREDIENT_BASE_URL,http);
	}
}
