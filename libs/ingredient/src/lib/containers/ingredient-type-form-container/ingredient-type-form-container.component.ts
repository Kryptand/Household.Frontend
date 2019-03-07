import { OnInit,Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { IngredientTypeService } from '../../services/ingredient-type.service';
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
	@Output() shouldUpdate:EventEmitter<any>=new EventEmitter();
	public selectedElement$:Observable<IngredientType>;
	constructor(private ingredientService:IngredientTypeService){

  }
  ngOnInit(): void {
	  if(this.id!==undefined&&this.id!==null){
		this.selectedElement$=this.ingredientService.getOne<IngredientType>(this.id);
	  }
  }
  saveType(type:IngredientType){
	isNoU(type,'save-type-ingredient-type');
	if(this.id!==undefined&&this.id!==null){
		this.ingredientService.update<IngredientType>(type).subscribe(_=>this.shouldUpdate.emit(true));
	  }
	  this.ingredientService.save<IngredientType>(type).subscribe(_=>this.shouldUpdate.emit(true));
  }

}
