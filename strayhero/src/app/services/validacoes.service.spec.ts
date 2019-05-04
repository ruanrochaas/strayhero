import { TestBed } from '@angular/core/testing';

import { ValidacoesService } from './validacoes.service';

describe('ValidacoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidacoesService = TestBed.get(ValidacoesService);
    expect(service).toBeTruthy();
  });
});
