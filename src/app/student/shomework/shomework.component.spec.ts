import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShomeworkComponent } from './shomework.component';

describe('ShomeworkComponent', () => {
  let component: ShomeworkComponent;
  let fixture: ComponentFixture<ShomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
