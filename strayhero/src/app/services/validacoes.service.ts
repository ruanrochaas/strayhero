import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacoesService {

  constructor() { }

  checkarSenhas(pass1,pass2):boolean{
    if(pass1 != pass2){console.log("Senhas diferentes"); return false;};
    return true;
  }
}
