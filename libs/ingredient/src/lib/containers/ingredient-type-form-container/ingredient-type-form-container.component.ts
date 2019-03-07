import { OnInit,Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { IngredientType } from '../../models/ingredient-type';
import { Observable } from 'rxjs';
import { isNoU } from '@household/cross-cutting';

@Component({
  selector: 'kryptand-ingredient-type-form-container',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './ingredient-type-form-container.component.html'
})
export class IngredientTypeFormContainerComponent implements OnInit{

	@Input() id:string;
	
	public selectedElement$:Observable<IngredientType>;
	constructor(private ingredientService:IngredientService){

  }
  ngOnInit(): void {
	  if(this.id!==undefined&&this.id!==null){
		this.selectedElement$=this.ingredientService.getOne<IngredientType>(this.id);
	  }
  }
  saveType(type:IngredientType){
	isNoU(type,'save-type-ingredient-type');
	if(this.id!==undefined&&this.id!==null){
		this.ingredientService.update<IngredientType>(type).subscribe(success=>console.debug(success));
	  }
	  this.ingredientService.save<IngredientType>(type).subscribe(success=>console.debug(success));
  }

}
