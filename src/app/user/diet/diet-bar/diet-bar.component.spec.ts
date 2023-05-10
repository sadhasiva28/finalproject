import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietBarComponent } from './diet-bar.component';

describe('DietBarComponent', () => {
  let component: DietBarComponent;
  let fixture: ComponentFixture<DietBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
