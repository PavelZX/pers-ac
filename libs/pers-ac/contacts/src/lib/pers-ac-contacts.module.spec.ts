import { async, TestBed } from '@angular/core/testing';
import { PersAcContactsModule } from './pers-ac-contacts.module';

describe('PersAcContactsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PersAcContactsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PersAcContactsModule).toBeDefined();
  });
});
