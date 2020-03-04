/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CheckPipelineSizeRangeComponent } from './check-pipeline-size-range.component';

describe('CheckPipelineSizeRangeComponent', () => {
  let component: CheckPipelineSizeRangeComponent;
  let fixture: ComponentFixture<CheckPipelineSizeRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPipelineSizeRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPipelineSizeRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
