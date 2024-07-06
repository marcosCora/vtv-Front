import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInspectorsComponent } from './add-inspectors.component';

describe('AddInspectorsComponent', () => {
  let component: AddInspectorsComponent;
  let fixture: ComponentFixture<AddInspectorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInspectorsComponent]
    });
    fixture = TestBed.createComponent(AddInspectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
