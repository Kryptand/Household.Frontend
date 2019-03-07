import { OnInit,Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { IngredientTypeService } from '../../services/ingredient-type.service';
import { IngredientType } from '../../models/ingredient-type';
import { Observable } from 'rxjs';
import { isNoU } from '@household/cross-cutting';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'kryptand-ingredient-type-form',
  templateUrl: './ingredient-type-form.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./ingredient-type-form.component.scss']
})
export class IngredientTypeFormComponent implements OnInit{

	@Input() type:IngredientType;
	@Output() submitEvent:EventEmitter<IngredientType>=new EventEmitter();
	typeForm=this.fb.group({
		type:['',Validators.required]
	})
	constructor(private fb:FormBuilder){

	  }
	get typeInValid():boolean{
		return this.typeForm.get('type').invalid;
	}
  ngOnInit(): void {
	if(this.type!==undefined&&this.type!==null){
		this.typeForm.patchValue({
			type:this.type.type
		})
	}
  }
  submit():void{
	  if(!this.typeInValid){
		this.submitEvent.emit(this.typeForm.value);
	  }

  }

}
