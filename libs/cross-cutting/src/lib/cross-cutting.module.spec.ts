import { async, TestBed } from '@angular/core/testing';
import { CrossCuttingModule } from './cross-cutting.module';

describe('CrossCuttingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CrossCuttingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CrossCuttingModule).toBeDefined();
  });
});
