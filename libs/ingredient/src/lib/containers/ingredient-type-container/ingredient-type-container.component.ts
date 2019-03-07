import {switchMap} from 'rxjs/internal/operators';
import { OnInit,Component, ChangeDetectionStrategy } from '@angular/core';
import { IngredientTypeService } from '../../services/ingredient-type.service';
import { IngredientType } from '../../models/ingredient-type';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'kryptand-ingredient-type-container',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './ingredient-type-container.component.html',
  styleUrls: ['./ingredient-type-container.component.scss']
})
export class IngredientTypeContainerComponent implements OnInit{

  public addMode=false;
  public ingredientTypes$:Observable<IngredientType[]>;
  public selectedElement={};
  public refreshToken$ = new BehaviorSubject(undefined);
	constructor(private ingredientService:IngredientTypeService){

  }
  ngOnInit(): void {
	this.ingredientTypes$=this.refreshToken$.pipe(switchMap(()=>this.ingredientService.list<IngredientType>()));
  }
  deleteType(type:IngredientType):void{
	  this.ingredientService.delete(type.id).subscribe(_=>this.refreshToken$.next(undefined));
  }
}
