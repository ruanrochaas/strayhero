import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaDialogo1Component } from './caixa-dialogo1.component';

describe('CaixaDialogo1Component', () => {
  let component: CaixaDialogo1Component;
  let fixture: ComponentFixture<CaixaDialogo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaDialogo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaDialogo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
