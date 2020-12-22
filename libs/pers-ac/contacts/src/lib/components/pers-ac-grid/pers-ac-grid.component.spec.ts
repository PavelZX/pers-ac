import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersAcGridComponent } from './pers-ac-grid.component';

describe('PersAcGridComponent', () => {
  let component: PersAcGridComponent;
  let fixture: ComponentFixture<PersAcGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersAcGridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersAcGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
