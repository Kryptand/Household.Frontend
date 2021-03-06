import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractBaseService} from '@household/services';
const INGREDIENT_BASE_URL='https://localhost:44327/api/ingredients';

@Injectable()
export class IngredientService extends AbstractBaseService{

	constructor(private http:HttpClient){
		super(INGREDIENT_BASE_URL,http);
	}
}
