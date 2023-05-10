import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumClickComponent } from './forum-click.component';

describe('ForumClickComponent', () => {
  let component: ForumClickComponent;
  let fixture: ComponentFixture<ForumClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
