/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LayerImageComponent } from './layer-image.component';

describe('LayerImageComponent', () => {
  let component: LayerImageComponent;
  let fixture: ComponentFixture<LayerImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
