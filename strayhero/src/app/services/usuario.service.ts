import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://rocky-retreat-19084.herokuapp.com/usuarios/';

  constructor(private http:HttpClient) { }

  recuperarUsuario(id:string){
    let novaUrl = this.url + id;
    return this.http.get(novaUrl).toPromise();
  }

  atualizarUsuario(obj:any){
    let novaUrl = this.url + obj["_id"];
    console.log(novaUrl);
    return this.http.put(novaUrl, obj).toPromise();
  }
}
