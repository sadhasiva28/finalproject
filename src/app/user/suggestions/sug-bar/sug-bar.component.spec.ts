import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugBarComponent } from './sug-bar.component';

describe('SugBarComponent', () => {
  let component: SugBarComponent;
  let fixture: ComponentFixture<SugBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
