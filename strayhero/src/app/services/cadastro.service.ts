import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CadastroService {

  constructor(private http:HttpClient) { }

  cadastrar(obj:any){
    return this.http.post("https://rocky-retreat-19084.herokuapp.com/usuarios", obj).toPromise();
    //http://192.168.1.11:4200/api/usuarios
  }
}
