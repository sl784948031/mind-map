import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoursewareComponent } from './scourseware.component';

describe('ScoursewareComponent', () => {
  let component: ScoursewareComponent;
  let fixture: ComponentFixture<ScoursewareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoursewareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoursewareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
