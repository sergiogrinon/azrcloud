import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOfferComponent } from './training-offer.component';

describe('TrainingOfferComponent', () => {
  let component: TrainingOfferComponent;
  let fixture: ComponentFixture<TrainingOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
