import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaDialogo2Component } from './caixa-dialogo2.component';

describe('CaixaDialogo2Component', () => {
  let component: CaixaDialogo2Component;
  let fixture: ComponentFixture<CaixaDialogo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaDialogo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaDialogo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
