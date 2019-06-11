import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackAcaoUsuarioComponent } from './feedback-acao-usuario.component';

describe('FeedbackAcaoUsuarioComponent', () => {
  let component: FeedbackAcaoUsuarioComponent;
  let fixture: ComponentFixture<FeedbackAcaoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackAcaoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackAcaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
