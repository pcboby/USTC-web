/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MenuQuickComponent } from './menu-quick.component';

describe('MenuQuickComponent', () => {
  let component: MenuQuickComponent;
  let fixture: ComponentFixture<MenuQuickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuQuickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
