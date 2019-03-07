import { OnInit,Component, Input, ChangeDetectionStrategy, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../../models/models';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'kryptand-ingredients-container',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './ingredients-container.component.html'
})
export class IngredientsContainerComponent implements OnInit,OnChanges{

	@Input() id:string;
	public ingredients$:Observable<Ingredient[]>;
	constructor(private ingredientService:IngredientService){

  }
  ngOnChanges(changes:SimpleChanges){
	  if(changes.id.currentValue!==changes.id.previousValue){
		this.ingredients$=this.ingredientService.list<Ingredient>({paramName:"categoryId",value:changes.id.currentValue});
	  }
  }
  ngOnInit(): void {
	  if(this.id!==undefined&&this.id!==null){
		this.ingredients$=this.ingredientService.list<Ingredient>({paramName:"categoryId",value:"08d6a257-50d0-9a4c-b2c6-124f64c8d75d"});
	  }
  }

}
