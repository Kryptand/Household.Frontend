import { OnInit,Component, ChangeDetectionStrategy } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { IngredientType } from '../../models/ingredient-type';
import { Observable } from 'rxjs';

@Component({
  selector: 'kryptand-ingredient-type-container',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './ingredient-type-container.component.html',
  styleUrls: ['./ingredient-type-container.component.scss']
})
export class IngredientTypeContainerComponent implements OnInit{

	
	public ingredientTypes$:Observable<IngredientType[]>;
	constructor(private ingredientService:IngredientService){

  }
  ngOnInit(): void {
	this.ingredientTypes$=this.ingredientService.list<IngredientType>();
  }
  deleteType(type:IngredientType):void{
	  this.ingredientService.delete(type.id).subscribe(success=>console.debug(success));
  }
}
