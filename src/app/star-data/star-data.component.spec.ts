import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarDataComponent } from './star-data.component';

describe('StarDataComponent', () => {
  let component: StarDataComponent;
  let fixture: ComponentFixture<StarDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
