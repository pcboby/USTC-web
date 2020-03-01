/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HouseModifyComponent } from './house-modify.component';

describe('HouseModifyComponent', () => {
  let component: HouseModifyComponent;
  let fixture: ComponentFixture<HouseModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
