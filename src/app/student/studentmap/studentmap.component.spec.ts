import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmapComponent } from './studentmap.component';

describe('StudentmapComponent', () => {
  let component: StudentmapComponent;
  let fixture: ComponentFixture<StudentmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
