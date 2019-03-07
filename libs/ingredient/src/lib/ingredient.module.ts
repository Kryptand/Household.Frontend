import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IngredientTypeService } from './services/ingredient-type.service';
import { IngredientTypeContainerComponent } from './containers/ingredient-type-container/ingredient-type-container.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatInputModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngredientTypeFormComponent } from './components/ingredient-type-form/ingredient-type-form.component';
import { IngredientTypeFormContainerComponent } from './containers/ingredient-type-form-container/ingredient-type-form-container.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { IngredientService } from './services/ingredient.service';
import { IngredientsContainerComponent } from './containers/ingredients-container/ingredients-container.component';
@NgModule({
  declarations:[IngredientTypeContainerComponent,IngredientsContainerComponent,IngredientTypeFormContainerComponent,IngredientTypeFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: IngredientTypeContainerComponent} 
    ])
  ],
  providers:[IngredientTypeService,IngredientService]
})
export class IngredientModule {}
