import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoDescriptionComponent } from './exo-description.component';

describe('ExoDescriptionComponent', () => {
  let component: ExoDescriptionComponent;
  let fixture: ComponentFixture<ExoDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
