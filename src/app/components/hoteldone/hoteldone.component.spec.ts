import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteldoneComponent } from './hoteldone.component';

describe('HoteldoneComponent', () => {
  let component: HoteldoneComponent;
  let fixture: ComponentFixture<HoteldoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoteldoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteldoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
