import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersAcContactsListComponent } from './pers-ac-contacts-list.component';

describe('PersAcContactsListComponent', () => {
  let component: PersAcContactsListComponent;
  let fixture: ComponentFixture<PersAcContactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersAcContactsListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersAcContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
