/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LayerVectorComponent } from './layer-vector.component';

describe('LayerVectorComponent', () => {
  let component: LayerVectorComponent;
  let fixture: ComponentFixture<LayerVectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerVectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerVectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
