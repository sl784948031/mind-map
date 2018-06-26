import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresourceComponent } from './tresource.component';

describe('TresourceComponent', () => {
  let component: TresourceComponent;
  let fixture: ComponentFixture<TresourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
