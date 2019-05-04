import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CadastroService {

  constructor(private http:HttpClient) { }

  cadastrar(obj:any){
    return this.http.post("http://192.168.1.3:4200/api/api/cadastro", obj);
  }
}
