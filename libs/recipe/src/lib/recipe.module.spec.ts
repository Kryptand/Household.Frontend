import { async, TestBed } from '@angular/core/testing';
import { RecipeModule } from './recipe.module';

describe('RecipeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RecipeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RecipeModule).toBeDefined();
  });
});
