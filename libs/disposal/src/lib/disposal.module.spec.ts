import { async, TestBed } from '@angular/core/testing';
import { DisposalModule } from './disposal.module';

describe('DisposalModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DisposalModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DisposalModule).toBeDefined();
  });
});
