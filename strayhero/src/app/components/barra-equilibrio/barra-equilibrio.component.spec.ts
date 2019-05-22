import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraEquilibrioComponent } from './barra-equilibrio.component';

describe('BarraEquilibrioComponent', () => {
  let component: BarraEquilibrioComponent;
  let fixture: ComponentFixture<BarraEquilibrioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraEquilibrioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraEquilibrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
