/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CheckPipelineAppendagesComponent } from './check-pipeline-appendages.component';

describe('CheckPipelineAppendagesComponent', () => {
  let component: CheckPipelineAppendagesComponent;
  let fixture: ComponentFixture<CheckPipelineAppendagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPipelineAppendagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPipelineAppendagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
