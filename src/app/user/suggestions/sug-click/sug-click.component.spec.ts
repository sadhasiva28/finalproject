import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugClickComponent } from './sug-click.component';

describe('SugClickComponent', () => {
  let component: SugClickComponent;
  let fixture: ComponentFixture<SugClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
