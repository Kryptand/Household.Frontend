import { async, TestBed } from '@angular/core/testing';
import { HouseplanModule } from './houseplan.module';

describe('HouseplanModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HouseplanModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HouseplanModule).toBeDefined();
  });
});
