import { Component } from '@angular/core';

import { CadastroService } from '../../services/cadastro.service';
import { ValidacoesService } from '../../services/validacoes.service';

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

  public constructor(private cadastroService:CadastroService, private valicoesService:ValidacoesService){}

  enviar(obj:any){
    if(obj == null) return;//corrigir depois
    this.cadastroService.cadastrar(obj).subscribe(
      (res : any)=>{alert("Cadastro realizado com sucesso! =D")}
    );
  }

  criarObj(email, username, pass1, pass2):any{
    if (!this.valicoesService.checkarSenhas(pass1,pass2)) {
      return null;
    } ;
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
