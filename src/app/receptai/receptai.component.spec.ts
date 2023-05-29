import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptaiComponent } from './receptai.component';

describe('ReceptaiComponent', () => {
  let component: ReceptaiComponent;
  let fixture: ComponentFixture<ReceptaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptaiComponent]
    });
    fixture = TestBed.createComponent(ReceptaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
