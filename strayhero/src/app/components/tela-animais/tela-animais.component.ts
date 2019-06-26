import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { PubSubService } from 'angular7-pubsub';
import { Subscription } from 'rxjs';
import { AnimaisService } from 'src/app/services/animais.service';

@Component({
  selector: 'app-tela-animais',
  templateUrl: './tela-animais.component.html',
  styleUrls: ['./tela-animais.component.scss']
})
export class TelaAnimaisComponent implements OnInit {

  feedbackAtivo = false;
  usuarioLogado: any;
  animais: any;
  idUsuarioLogado: string;
  atualizarUsuarioSub: Subscription;

  constructor(private usuarioService: UsuarioService, private animaisService: AnimaisService, private roteador: Router, private pubsub: PubSubService) {}

  ngOnInit() {
    this.idUsuarioLogado = localStorage.getItem("usuarioLogado");
    if(this.idUsuarioLogado == undefined){
      this.roteador.navigate(["/login"]);
    } else {
      this.recuperarUsuarioLogado();
      this.atualizarUsuarioSub = this.pubsub.$sub("atualizar-usuario").subscribe((res)=>{
        this.usuarioLogado = res;
        this.recuperarAnimais();
      });
    }
  }

  recuperarUsuarioLogado(){
    this.usuarioService.recuperarUsuario(this.idUsuarioLogado).then((res)=>{
      this.usuarioLogado = res;
      this.atualizarHud();
      this.recuperarAnimais();
    }).catch((e)=>{
      alert("Algo de errado não está certo. hehe")
    });
  }

  atualizarHud(){
    this.pubsub.$pub("atualizar-posicaoBarra", this.usuarioLogado.statusAmbiente);
    this.pubsub.$pub("atualizar-qtdmoedas", this.usuarioLogado.dinheiro);
    this.pubsub.$pub("feedback-titulo", {nivel:this.usuarioLogado.nivel, pontuacao:this.usuarioLogado.pontuacao});
    this.pubsub.$pub("feedback-animais", this.usuarioLogado.animaisAdotados);
  }

  calcularStatus(){
    let totalNecessidade = 0;
    for(let animal of this.animais){
      let statusComida = 0;
      let statusSaude = 0;
      let necessidade = 0;
      if(animal.statusComida < 50){
        statusComida = 50 - animal.statusComida;
      }
      if(animal.statusSaude < 50){
        statusSaude = 50 - animal.statusSaude;
      }
      necessidade += (statusComida + statusSaude);
      totalNecessidade += necessidade;
    }
    if (totalNecessidade == this.usuarioLogado.dinheiro) {
      this.usuarioLogado.statusAmbiente = -36;
    } else if (totalNecessidade - this.usuarioLogado.dinheiro >= 10 && totalNecessidade - this.usuarioLogado.dinheiro < 30) {
      this.usuarioLogado.statusAmbiente = -10;
    } else if (totalNecessidade - this.usuarioLogado.dinheiro >= 30) {
      this.usuarioLogado.statusAmbiente = 8;
    } else if (this.usuarioLogado.dinheiro - totalNecessidade >= 10 && this.usuarioLogado.dinheiro - totalNecessidade < 30) {
      this.usuarioLogado.statusAmbiente = -61;
    } else if (this.usuarioLogado.dinheiro - totalNecessidade >= 30) {
      this.usuarioLogado.statusAmbiente = -80;
    }
    if(totalNecessidade == 0){
      this.usuarioLogado.statusAmbiente = -36;
    }
    this.pubsub.$pub("atualizar-posicaoBarra", this.usuarioLogado.statusAmbiente);
    this.atualizarUsuario();
  }

  recuperarAnimais(){
    this.animaisService.recuperarAnimais(this.usuarioLogado.animaisAdotados).then((res)=>{
      this.animais = res;
      this.calcularStatus();
    }).catch((e)=>{
      console.log(e);
    })
  }

  atualizarUsuario(){
    this.usuarioService.atualizarUsuario(this.usuarioLogado).then((res)=>{
      console.log("Usuario atualizado com sucesso!");
    }).catch((e)=>{
      console.log(e);
    })
  }
}
