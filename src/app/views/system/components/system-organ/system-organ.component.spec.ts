/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SystemOrganComponent } from './system-organ.component';

describe('SystemOrganComponent', () => {
  let component: SystemOrganComponent;
  let fixture: ComponentFixture<SystemOrganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemOrganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemOrganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
