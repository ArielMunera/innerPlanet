import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonreachComponent } from './buttonreach.component';

describe('ButtonreachComponent', () => {
  let component: ButtonreachComponent;
  let fixture: ComponentFixture<ButtonreachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonreachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
