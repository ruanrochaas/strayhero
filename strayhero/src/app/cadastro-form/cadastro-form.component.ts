import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent {
  fb_email:string = "";
  fb_nome: string = "";
  fb_senha1: string = "";
  fb_senha2: string = "";
  st_email: string = "invisivel";
  st_nome: string = "invisivel";
  st_senha1: string = "invisivel";
  st_senha2: string = "invisivel";

  enviar(obj:any):void{
    console.log(obj);
  }

  criarObj(email, username, pass1, pass2):any{
    if(pass1 != pass2){console.log("Senhas diferentes"); return null;};
    let obj = {"email":email, "username":username, "password":pass1};
    return obj;
  }

  verificarCampos(email, username, pass1, pass2):boolean{
    if(email == ""){
      //escrever casos
    }
    return true;
  }
}
