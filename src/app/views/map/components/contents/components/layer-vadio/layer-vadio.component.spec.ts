/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LayerVadioComponent } from './layer-vadio.component';

describe('LayerVadioComponent', () => {
  let component: LayerVadioComponent;
  let fixture: ComponentFixture<LayerVadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerVadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerVadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
