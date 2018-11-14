import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoDataComponent } from './exo-data.component';

describe('ExoDataComponent', () => {
  let component: ExoDataComponent;
  let fixture: ComponentFixture<ExoDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
