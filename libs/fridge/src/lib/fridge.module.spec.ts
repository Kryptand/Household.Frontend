import { async, TestBed } from '@angular/core/testing';
import { FridgeModule } from './fridge.module';

describe('FridgeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FridgeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FridgeModule).toBeDefined();
  });
});
