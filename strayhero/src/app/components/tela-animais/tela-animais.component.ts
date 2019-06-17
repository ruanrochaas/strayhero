import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { PubSubService } from 'angular7-pubsub';

@Component({
  selector: 'app-tela-animais',
  templateUrl: './tela-animais.component.html',
  styleUrls: ['./tela-animais.component.scss']
})
export class TelaAnimaisComponent implements OnInit {

  feedbackAtivo = false;
  usuarioLogado: any;
  idUsuarioLogado: string;

  constructor(private usuarioService: UsuarioService, private roteador: Router, private pubsub: PubSubService) {}

  ngOnInit() {
    this.idUsuarioLogado = localStorage.getItem("usuarioLogado");
    if(this.idUsuarioLogado == undefined){
      this.roteador.navigate(["/login"]);
    } else {
      this.recuperarUsuarioLogado();
    }
  }

  recuperarUsuarioLogado(){
    this.usuarioService.recuperarUsuario(this.idUsuarioLogado).then((res)=>{
      this.usuarioLogado = res;
      this.atualizarHud();
    }).catch((e)=>{
      alert("Algo de errado não está certo. hehe")
    });
  }

  atualizarHud(){
    this.pubsub.$pub("atualizar-posicaoBarra", this.usuarioLogado.statusAmbiente);
    this.pubsub.$pub("atualizar-qtdmoedas", this.usuarioLogado.dinheiro);
    this.pubsub.$pub("feedback-titulo", {nivel:this.usuarioLogado.nivel, pontuacao:this.usuarioLogado.pontuacao});
  }

  teste(){
    console.log(this.usuarioLogado);
  }
}
