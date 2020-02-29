/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SystemLogSysComponent } from './system-log-sys.component';

describe('SystemLogSysComponent', () => {
  let component: SystemLogSysComponent;
  let fixture: ComponentFixture<SystemLogSysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemLogSysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemLogSysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
