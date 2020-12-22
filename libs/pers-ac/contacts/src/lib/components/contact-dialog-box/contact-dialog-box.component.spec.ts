import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDialogBoxComponent } from './contact-dialog-box.component';

describe('ContactDialogBoxComponent', () => {
  let component: ContactDialogBoxComponent;
  let fixture: ComponentFixture<ContactDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDialogBoxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
