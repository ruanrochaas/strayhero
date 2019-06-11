import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacoesService {

  constructor() { }

  checkarSenhas(pass1,pass2):boolean{
    if(pass1 != pass2) return false;
    return true;
  }

  checkarCamposVazios(email, username, pass1, pass2){
    if(email == "" || username == "" || pass1 == "" || pass2 == ""){
      return false;
    }
    return true;
  }
}
