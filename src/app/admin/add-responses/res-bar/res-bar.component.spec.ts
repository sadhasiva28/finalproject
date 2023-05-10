import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResBarComponent } from './res-bar.component';

describe('ResBarComponent', () => {
  let component: ResBarComponent;
  let fixture: ComponentFixture<ResBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
