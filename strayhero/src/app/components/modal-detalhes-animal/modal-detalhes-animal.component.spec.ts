import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalhesAnimalComponent } from './modal-detalhes-animal.component';

describe('ModalDetalhesAnimalComponent', () => {
  let component: ModalDetalhesAnimalComponent;
  let fixture: ComponentFixture<ModalDetalhesAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetalhesAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetalhesAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
