import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isNoU } from '@household/cross-cutting';
import { Ingredient } from '../../models/models';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'kryptand-ingredient-form-container',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './ingredient-form-container.component.html'
})
export class IngredientFormContainerComponent implements OnInit{
  @Input() ingredientTypeId: string;
  @Output() shouldUpdate: EventEmitter<any> = new EventEmitter();
  constructor(private ingredientService: IngredientService) {}
  ngOnInit(): void {}
  save(ingredient: Ingredient) {
	
    isNoU(ingredient, 'save-type-ingredient-type');
    if (this.ingredientTypeId !== undefined && this.ingredientTypeId !== null) {
      const ingredientToSave: Ingredient = {
        name: ingredient.name,
        ingredientTypeId: this.ingredientTypeId
			};
			console.debug(ingredientToSave);
      this.ingredientService
        .save<Ingredient>(ingredientToSave)
        .subscribe(_ => this.shouldUpdate.emit(true));
    }
  }
}
