import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesPrincipalComponent } from './botoes-principal.component';

describe('BotoesPrincipalComponent', () => {
  let component: BotoesPrincipalComponent;
  let fixture: ComponentFixture<BotoesPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoesPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoesPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
