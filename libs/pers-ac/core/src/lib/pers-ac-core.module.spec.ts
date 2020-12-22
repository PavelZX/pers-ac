import { async, TestBed } from '@angular/core/testing';
import { PersAcCoreModule } from './pers-ac-core.module';

describe('PersAcCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PersAcCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PersAcCoreModule).toBeDefined();
  });
});
