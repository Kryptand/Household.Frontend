import { switchMap } from 'rxjs/internal/operators';
import {
  OnInit,
  Component,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Ingredient } from '../../models/models';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'kryptand-ingredients-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ingredients-container.component.html'
})
export class IngredientsContainerComponent implements OnInit, OnChanges {
  @Input() id: string;
  public addMode = false;
  public ingredients$: Observable<Ingredient[]>;
  public refreshToken$ = new BehaviorSubject(undefined);
  constructor(private ingredientService: IngredientService) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.id.currentValue !== changes.id.previousValue) {
      this.ingredients$ = this.refreshToken$.pipe(
        switchMap(() =>
          this.ingredientService.list<Ingredient>({
            paramName: 'categoryId',
            value: changes.id.currentValue
          })
        )
      );
    }
  }
  public search(term: string) {
    this.ingredients$ =  this.refreshToken$.pipe(
        switchMap(() =>this.ingredientService.list<Ingredient>(
      { paramName: 'categoryId', value: this.id },
      { paramName: 'ingredientName', value: term }
    )));
  }
  ngOnInit(): void {}
  delete(ingredient: Ingredient): void {
    this.ingredientService
      .delete(ingredient.id)
      .subscribe(_ => this.refreshToken$.next(undefined));
  }
}
