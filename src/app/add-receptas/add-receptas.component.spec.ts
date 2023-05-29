import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReceptasComponent } from './add-receptas.component';

describe('AddReceptasComponent', () => {
  let component: AddReceptasComponent;
  let fixture: ComponentFixture<AddReceptasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddReceptasComponent]
    });
    fixture = TestBed.createComponent(AddReceptasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
