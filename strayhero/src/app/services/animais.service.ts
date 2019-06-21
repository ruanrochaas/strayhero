import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {
  url = 'https://rocky-retreat-19084.herokuapp.com/animais/';

  constructor(private http:HttpClient) { }

  recuperarAnimais(ids){
    let novaUrl = this.url + "animaisInArray";
    return this.http.post(novaUrl,ids).toPromise();
  }

  criarAnimal(obj){
    return this.http.post(this.url,obj).toPromise();
  }

  atualizarAnimal(obj){
    let novaUrl = this.url + obj["_id"];
    return this.http.put(novaUrl, obj).toPromise();
  }
}
