import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilsComponent } from './appareils.component';

describe('AppareilsComponent', () => {
  let component: AppareilsComponent;
  let fixture: ComponentFixture<AppareilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppareilsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppareilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
