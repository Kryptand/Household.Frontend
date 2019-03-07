import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Ingredient } from '../../models/models';
@Component({
  selector: 'kryptand-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent implements OnInit{

	@Output() submitEvent:EventEmitter<Ingredient>=new EventEmitter();
	ingredientForm=this.fb.group({
		name:['',Validators.required]
	})
	constructor(private fb:FormBuilder){

	  }
	get typeInValid():boolean{
		return this.ingredientForm.get('name').invalid;
	}
  ngOnInit(): void {
  }
  submit():void{
	  if(!this.typeInValid){
		this.submitEvent.emit(this.ingredientForm.value);
	  }

  }

}
