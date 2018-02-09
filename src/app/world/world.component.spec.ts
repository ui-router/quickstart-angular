import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldComponent } from './world.component';

@Component({ selector: 'ui-view', template: 'ui-views-stub' }) 
class UIViewStub {}

describe('WorldComponent', () => {
  let component: WorldComponent;
  let fixture: ComponentFixture<WorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldComponent, UIViewStub ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
