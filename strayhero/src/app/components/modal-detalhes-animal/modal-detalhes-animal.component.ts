import { Component, OnInit, OnDestroy } from '@angular/core';
import { PubSubService } from 'angular7-pubsub';
import { Subscription } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AnimaisService } from 'src/app/services/animais.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-detalhes-animal',
  templateUrl: './modal-detalhes-animal.component.html',
  styleUrls: ['./modal-detalhes-animal.component.scss']
})
export class ModalDetalhesAnimalComponent implements OnInit, OnDestroy {

  animal: any;
  dono: any;
  animalSub: Subscription;
  aberto = false;
  nome = "Doguinho";
  valorCuidado = 10;
  statusAtencao = "";
  statusComida = "";
  statusSaude = "";
  animacao = "Animadog5sadddddteste.gif";
  feedbackInteragirCarinho = "";
  feedbackInteragirComida = "";
  feedbackInteragirSaude = "";

  constructor(private pubsub: PubSubService, private usuarioService: UsuarioService, private animaisService: AnimaisService, private router: Router) { }

  ngOnInit() {
    this.animalSub = this.pubsub.$sub("modal-animal").subscribe((res)=>{
      this.animal = res;
      this.nome = res.nome;
      this.recuperarUsuario();
      this.feedbackBarras();
      this.atualizarAnimacao();
      this.feedbackClickParaInteragir();
      this.aberto = true;
    })
  }

  darAmor(){
    if(this.animal.statusAtencao < 100){
      this.animacaoAmor();
      this.animal.statusAtencao += 10;
      this.feedbackClickParaInteragir();
      this.animal.dataAtencao = Date.now();
      this.dono.pontuacao += 1;
    } else if(this.animal.statusAtencao = 100){
      this.animal.statusAtencao = 100;
    }
    this.feedbackBarras();
  }

  alimentar(){
    if(this.animal.statusComida < 100){
      if(this.dono.dinheiro >= this.valorCuidado){
        this.animacaoAlimento();
        this.animal.statusComida += 10;
        this.feedbackClickParaInteragir();
        this.animal.dataComida = Date.now();
        this.dono.dinheiro -= this.valorCuidado;
        this.dono.pontuacao += 5;
      } else {
        this.atualizarAnimal();
        this.atualizarUsuario();
        this.router.navigate(["/doacao"],{ state: this.dono});
      }
    } else if(this.animal.statusComida = 100){
      this.animal.statusComida = 100;
    }
    this.feedbackBarras();
  }

  darRemedio(){
    if(this.animal.statusSaude < 100){
      if(this.dono.dinheiro >= this.valorCuidado){
        this.animacaoRemedio();
        this.animal.statusSaude += 10;
        this.feedbackClickParaInteragir();
        this.animal.dataSaude = Date.now();
        this.dono.dinheiro -= this.valorCuidado;
        this.dono.pontuacao += 5;
      } else {
        this.atualizarAnimal();
        this.atualizarUsuario();
        this.router.navigate(["/doacao"],{ state: this.dono});
      }
    } else if(this.animal.statusSaude = 100){
      this.animal.statusSaude = 100;
    }
    this.feedbackBarras();
  }

  recuperarUsuario(){
    this.usuarioService.recuperarUsuario(this.animal.dono).then((res)=>{
      this.dono = res;
    }).catch((e)=>{
      alert("Algo de errado não está certo. hehe")
    });
  }

  feedbackBarras(){
    this.statusAtencao = this.feedbackAssist(this.animal.statusAtencao);
    this.statusComida = this.feedbackAssist(this.animal.statusComida);
    this.statusSaude = this.feedbackAssist(this.animal.statusSaude);
  }

  feedbackAssist(val){
    if(val < 5){
      return "zero";
    } else if(val <= 10){
      return "dez";
    } else if(val <= 20){
      return "vinte";
    } else if(val <= 30){
      return "trinta"; 
    } else if(val <= 40){
      return "quarenta";
    } else if(val <= 50){
      return "cinquenta";
    } else if(val <= 60){
      return "sessenta";
    } else if(val <= 70){
      return "setenta";
    } else if(val <= 80){
      return "oitenta";
    } else if(val <= 90){
      return "noventa";
    } else if(val <= 100){
      return "cem";
    }
  }

  fecharModal(elem){
    if(event.target == elem){
      this.atualizarUsuario();
      this.atualizarAnimal();
      this.pubsub.$pub("atualizar-usuario", this.dono);
      this.pubsub.$pub("atualizar-posicaoBarra", this.dono.statusAmbiente);
      this.pubsub.$pub("atualizar-qtdmoedas", this.dono.dinheiro);
      this.pubsub.$pub("feedback-titulo", {nivel:this.dono.nivel, pontuacao:this.dono.pontuacao});
      this.pubsub.$pub("mudar-anim-animal");
      this.animal = undefined;
      this.dono = undefined;
      this.nome = "Doguinho";
      this.statusAtencao = "";
      this.statusComida = "";
      this.statusSaude = "";
      this.aberto = false;
    }
  }

  atualizarUsuario(){
    this.usuarioService.atualizarUsuario(this.dono).then((res)=>{
      console.log("Usuario atualizado com sucesso!");
    }).catch((e)=>{
      console.log(e);
    });
  }

  atualizarAnimal(){
    this.animaisService.atualizarAnimal(this.animal).then((res)=>{
      console.log("Animal atualizado com sucesso!");
    }).catch((e)=>{
      console.log(e);
    });
  }

  atualizarAnimacao(){
    if(this.animal.statusComida < 50 || this.animal.statusSaude < 50 || this.animal.statusAtencao < 50){
      this.animacao = "Animadog5sadddddteste.gif";
    } else {
      this.animacao = "Animadog1teste.gif";
    }
  }

  animacaoAmor(){
    this.animacao = "Animadog2Carinhoteste.gif";
    setTimeout(() => {
      this.atualizarAnimacao();
    }, 2000);
  }

  animacaoAlimento(){
    this.animacao = "Animadog3foodiiiiiteste.gif";
    setTimeout(() => {
      this.atualizarAnimacao();
    }, 2000);
  }

  animacaoRemedio(){
    this.animacao = "Animadog1susteste.gif";
    setTimeout(() => {
      this.atualizarAnimacao();
    }, 2000);
  }

  feedbackClickParaInteragir(){
    if(this.animal.statusComida < 50){
      this.feedbackInteragirComida = "feedback-interagir";
    } else {
      this.feedbackInteragirComida = "";
    }
    if(this.animal.statusSaude < 50){
      this.feedbackInteragirSaude = "feedback-interagir";
    } else {
      this.feedbackInteragirSaude = "";
    }
    if(this.animal.statusAtencao < 50){
      this.feedbackInteragirCarinho = "feedback-interagir";
    } else {
      this.feedbackInteragirCarinho = "";
    }
  }

  ngOnDestroy(){
    this.animalSub.unsubscribe();
  }
}
