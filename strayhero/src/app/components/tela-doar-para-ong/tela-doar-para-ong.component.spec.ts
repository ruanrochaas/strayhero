import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDoarParaOngComponent } from './tela-doar-para-ong.component';

describe('TelaDoarParaOngComponent', () => {
  let component: TelaDoarParaOngComponent;
  let fixture: ComponentFixture<TelaDoarParaOngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaDoarParaOngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDoarParaOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
