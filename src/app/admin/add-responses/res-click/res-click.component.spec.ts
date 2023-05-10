import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResClickComponent } from './res-click.component';

describe('ResClickComponent', () => {
  let component: ResClickComponent;
  let fixture: ComponentFixture<ResClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
