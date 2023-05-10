import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietClickComponent } from './diet-click.component';

describe('DietClickComponent', () => {
  let component: DietClickComponent;
  let fixture: ComponentFixture<DietClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
