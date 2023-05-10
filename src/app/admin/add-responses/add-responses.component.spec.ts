import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResponsesComponent } from './add-responses.component';

describe('AddResponsesComponent', () => {
  let component: AddResponsesComponent;
  let fixture: ComponentFixture<AddResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResponsesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
