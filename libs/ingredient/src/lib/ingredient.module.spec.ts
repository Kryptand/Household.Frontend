import { async, TestBed } from '@angular/core/testing';
import { IngredientModule } from './ingredient.module';

describe('IngredientModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IngredientModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IngredientModule).toBeDefined();
  });
});
