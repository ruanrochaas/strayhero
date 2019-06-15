import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ValidacoesService } from 'src/app/services/validacoes.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  v_email: string = "";
  v_pass: string = "";
  cl_email: string = "";
  cl_pass: string = "";

  constructor(private roteador: Router, private loginService: LoginService, private validacoesService: ValidacoesService) { }

  ngOnInit() {
  }

  enviar(email,pass){
    let obj = this.criarObj(email,pass);
    if(obj == null) return;//corrigir depois
    this.loginService.logar(obj).then((res)=>{
      // localStorage.setItem("usuarioLogado",res._id);
      this.roteador.navigate(["/index"]);
    }).catch((e)=>{
      this.feedbackErro(e);
    });
  }

  criarObj(email,pass){
    if(!this.feedbackVazios(email,pass)) return null;
    if(!this.feedbackEmail(email)) return null;
    return {email:email,password:pass};
  }

  feedbackErro(e){
    let erroMsg: string = e.error.errmsg;
    if (erroMsg == "usuario nao encontrado") {
      this.v_email = "Usuário não cadastrado!";
      this.cl_email = "erro";
    } else if (erroMsg == "senha incorreta") {
      this.v_pass = "";
      this.cl_pass = "erro";
    }
  }

  feedbackVazios(email,pass){
    if(email != "" && pass != "") return true;
    if (email == "") {
      this.cl_email = "erro";
    }
    if (pass == "") {
      this.cl_pass = "erro";
    }
    alert("Modal: Nenhum campo pode ficar vazio!");
    return false;
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
