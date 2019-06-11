import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackAtencaoAnimalComponent } from './feedback-atencao-animal.component';

describe('FeedbackAtencaoAnimalComponent', () => {
  let component: FeedbackAtencaoAnimalComponent;
  let fixture: ComponentFixture<FeedbackAtencaoAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackAtencaoAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackAtencaoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
