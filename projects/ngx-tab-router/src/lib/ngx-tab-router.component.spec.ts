import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTabRouterComponent } from './ngx-tab-router.component';

describe('NgxTabRouterComponent', () => {
  let component: NgxTabRouterComponent;
  let fixture: ComponentFixture<NgxTabRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTabRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTabRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
