import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SresourceComponent } from './sresource.component';

describe('SresourceComponent', () => {
  let component: SresourceComponent;
  let fixture: ComponentFixture<SresourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SresourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
