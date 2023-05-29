import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptaiListComponent } from './receptai-list.component';

describe('ReceptaiListComponent', () => {
  let component: ReceptaiListComponent;
  let fixture: ComponentFixture<ReceptaiListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptaiListComponent]
    });
    fixture = TestBed.createComponent(ReceptaiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
