import { Component } from '@angular/core';

import { CadastroService } from '../../services/cadastro.service';
import { ValidacoesService } from '../../services/validacoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent {
  v_email:string = "";
  v_nome: string = "";
  v_senha1: string = "";
  v_senha2: string = "";
  cl_email: string = "";
  cl_nome: string = "";
  cl_senha1: string = "";
  cl_senha2: string = "";

  public constructor(private roteador: Router, private cadastroService:CadastroService, private valicoesService:ValidacoesService){
    let loggedUser = localStorage.getItem("usuarioLogado");
    if (loggedUser){
      this.roteador.navigate(["/index"]);
    }
  }

  enviar(obj:any){
    if(obj == null) return;//corrigir depois
    this.cadastroService.cadastrar(obj).then((res)=>{
      //Chamar Modal aqui!
      this.roteador.navigate(["/login"]);
    }).catch((e)=>{
      this.feedbackErro(e);
    });
  }

  criarObj(email, nome, senha1, senha2):any{
    if (!this.valicoesService.checkarSenhas(senha1, senha2)) {
      return null;
    };
    if (!this.valicoesService.checkarCamposVazios(email, nome, senha1, senha2)){
      //Chamar Modal
      this.feedbackVazio(email, nome, senha1, senha2);
      alert('Modal: Nenhum campo pode ficar vazio!');
      return null;
    }
    if(!this.feedbackEmail(email)){
      return null;
    }
    let obj = {
              "animaisAdotados": [],
              "email": email,
              "username": nome,
              "password": senha1,
              "statusAmbiente": 50,
              "nivel": 1,
              "pontuacao": 0,
              "dinheiro": 50
            };
    return obj;
  }

  feedbackErro(e){
    let erros = ["email_1","username_1"];
    let erroMsg: string = e.error.errmsg;
    if (erroMsg.includes(erros[0])) {
      this.v_email = "Email já cadastrado!";
      this.cl_email = "erro";
    } else if (erroMsg.includes(erros[1])) {
      this.v_nome = "Nome de usuário já cadastrado!";
      this.cl_nome = "erro";
    }
  }

  feedbackVazio(email, nome, senha1, senha2){
    if (email == "") this.cl_email = "erro";
    if (nome == "") this.cl_nome = "erro";
    if (senha1 == "") this.cl_senha1 = "erro";
    if (senha2 == "") this.cl_senha2 = "erro";
  }

  feedbackEmail(email){
    let emailP1 = email.substring(0, email.indexOf("@"));
    let emailP2 = email.substring(email.indexOf("@")+ 1, email.length);

    if ((emailP1.length >=1) && (emailP2.length >=3) && (emailP1.search("@")==-1) && (emailP2.search("@")==-1) && (emailP1.search(" ")==-1) && 
    (emailP2.search(" ")==-1) && (emailP2.search(".")!=-1) && (emailP2.indexOf(".") >=1)&& (emailP2.lastIndexOf(".") < emailP2.length - 1)){
      return true;
    } else {
      this.v_email = "Formato de email inválido.";
      this.cl_email = "erro";
      return false;
    }
  }
}
