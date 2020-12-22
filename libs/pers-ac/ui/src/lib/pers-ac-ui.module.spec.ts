import { async, TestBed } from '@angular/core/testing';
import { PersAcUiModule } from './pers-ac-ui.module';

describe('PersAcUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PersAcUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PersAcUiModule).toBeDefined();
  });
});
