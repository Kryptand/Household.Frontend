import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@household/material';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { IngredientTypeFormComponent } from './components/ingredient-type-form/ingredient-type-form.component';
import { SearchbarComponent } from './components/search-bar/search-bar.component';
import { IngredientFormContainerComponent } from './containers/ingredient-form-container/ingredient-form-container.component';
import { IngredientTypeContainerComponent } from './containers/ingredient-type-container/ingredient-type-container.component';
import { IngredientTypeFormContainerComponent } from './containers/ingredient-type-form-container/ingredient-type-form-container.component';
import { IngredientsContainerComponent } from './containers/ingredients-container/ingredients-container.component';
import { IngredientTypeService } from './services/ingredient-type.service';
import { IngredientService } from './services/ingredient.service';
@NgModule({
  declarations: [
    IngredientTypeContainerComponent,
    IngredientsContainerComponent,
    SearchbarComponent,
    IngredientTypeFormContainerComponent,
    IngredientFormComponent,
    IngredientFormContainerComponent,
    IngredientTypeFormComponent
  ],
  imports: [
    CommonModule,
   MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: IngredientTypeContainerComponent
      }
    ])
  ],
  providers: [IngredientTypeService, IngredientService]
})
export class IngredientModule {}
