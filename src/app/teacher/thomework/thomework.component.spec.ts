import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThomeworkComponent } from './thomework.component';

describe('ThomeworkComponent', () => {
  let component: ThomeworkComponent;
  let fixture: ComponentFixture<ThomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
