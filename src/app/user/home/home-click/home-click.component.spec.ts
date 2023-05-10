import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClickComponent } from './home-click.component';

describe('HomeClickComponent', () => {
  let component: HomeClickComponent;
  let fixture: ComponentFixture<HomeClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
