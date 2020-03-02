/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArkMapComponent } from './ark-map.component';

describe('ArkMapComponent', () => {
  let component: ArkMapComponent;
  let fixture: ComponentFixture<ArkMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArkMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArkMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
