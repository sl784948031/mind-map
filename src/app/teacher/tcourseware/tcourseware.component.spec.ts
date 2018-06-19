import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoursewareComponent } from './tcourseware.component';

describe('TcoursewareComponent', () => {
  let component: TcoursewareComponent;
  let fixture: ComponentFixture<TcoursewareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcoursewareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcoursewareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
