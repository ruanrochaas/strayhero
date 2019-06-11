import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CadastroService {

  constructor(private http:HttpClient) { }

  cadastrar(obj:any){
    return this.http.post("http://192.168.1.11:4200/api/usuarios", obj).toPromise();
    //http://192.168.1.3:4200/api
  }
}
