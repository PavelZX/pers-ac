import { async, TestBed } from '@angular/core/testing';
import { PersAcAuthModule } from './pers-ac-auth.module';

describe('PersAcAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PersAcAuthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PersAcAuthModule).toBeDefined();
  });
});
