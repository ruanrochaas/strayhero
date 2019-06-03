import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAnimaisComponent } from './tela-animais.component';

describe('TelaAnimaisComponent', () => {
  let component: TelaAnimaisComponent;
  let fixture: ComponentFixture<TelaAnimaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaAnimaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
