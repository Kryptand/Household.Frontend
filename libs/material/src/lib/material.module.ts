import { MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
const MAT_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatCardModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  exports: [MAT_MODULES],
  imports: [MAT_MODULES, CommonModule]
})
export class MaterialModule {}
