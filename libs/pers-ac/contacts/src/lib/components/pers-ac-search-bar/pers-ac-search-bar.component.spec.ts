import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersAcSearchBarComponent } from './pers-ac-search-bar.component';

describe('PersAcSearchBarComponent', () => {
  let component: PersAcSearchBarComponent;
  let fixture: ComponentFixture<PersAcSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersAcSearchBarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersAcSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
