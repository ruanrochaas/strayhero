import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  logar(obj:any){
    let url = "https://rocky-retreat-19084.herokuapp.com/usuarios/email/" + obj.email;
    return this.http.post(url, obj).toPromise();
  }
}
