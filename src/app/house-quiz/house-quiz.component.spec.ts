import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseQuizComponent } from './house-quiz.component';

describe('HouseQuizComponent', () => {
  let component: HouseQuizComponent;
  let fixture: ComponentFixture<HouseQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
