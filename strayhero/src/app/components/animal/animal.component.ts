import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PubSubService } from 'angular7-pubsub';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AnimaisService } from 'src/app/services/animais.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit, OnDestroy {

  @Input() idAni: string;
  renderizado = false;
  animalSub: Subscription;
  apagarAnimais: Subscription;
  mudarFeedbackAnimacao: Subscription;
  animal: any;
  nome = ""; 
  feedbackStatus = "animal-triste";
  statusBalao = false;
  imgBalao = "";

  constructor(private pubsub: PubSubService, private animalService: AnimaisService) { }

  ngOnInit() {
    this.animalSub = this.pubsub.$sub("render-animal").subscribe((res)=>{
      if(this.idAni == res.idAni){
        this.animal = res.animalObj;
        this.nome = this.animal.nome;
        this.mudarAnimacao();
        this.mudarBaloes();
        this.atualizarNecessidades();
        this.renderizado = true;
      }
    });
    this.mudarFeedbackAnimacao = this.pubsub.$sub("mudar-anim-animal").subscribe((res)=>{
      this.mudarAnimacao();
      this.mudarBaloes();
      this.atualizarNecessidades();
    });
  }

  abrirTelaAni(){
    this.pubsub.$pub("modal-animal", this.animal);
  }

  mudarBaloes(){
    if(this.animal.statusAtencao < 50){
      this.imgBalao = "coracao-balao.png";
      this.statusBalao = true;
    } else if(this.animal.statusComida < 50){
      this.imgBalao = "comida-balao.png";
      this.statusBalao = true;
    } else if(this.animal.statusSaude < 50){
      this.imgBalao = "saude-balao.png";
      this.statusBalao = true;
    } else {
      this.imgBalao = "";
      this.statusBalao = false;
    }
  }

  mudarAnimacao(){
    let mediaStatus = (this.animal.statusAtencao + this.animal.statusComida + this.animal.statusSaude)/3;
    if(mediaStatus < 50){
      this.feedbackStatus = "animal-triste";
    } else if(mediaStatus > 50 && mediaStatus < 70){
      this.feedbackStatus = "animal-normal";
    } else {
      this.feedbackStatus = "animal-feliz";
    }
  }

  atualizarNecessidades(){
    let tempoParaReduzirStatus = 1;
    let dataAtual = Date.now();
    let difAtencaoMin = parseInt(String((dataAtual - this.animal.dataAtencao)/60/1000));
    let difComidaMin = parseInt(String((dataAtual - this.animal.dataComida)/60/1000));
    let difSaudeMin = parseInt(String((dataAtual - this.animal.dataSaude)/60/1000));

    if(difAtencaoMin > tempoParaReduzirStatus){
      this.animal.statusAtencao = 20;
      this.animal.dataAtencao = Date.now();
    }
    if(difComidaMin > tempoParaReduzirStatus){
      this.animal.statusComida = 20;
      this.animal.dataComida = Date.now();
    }
    if(difSaudeMin > tempoParaReduzirStatus){
      this.animal.statusSaude = 20;
      this.animal.dataSaude = Date.now();
    }
    
    if(difAtencaoMin > tempoParaReduzirStatus || difComidaMin > tempoParaReduzirStatus || difSaudeMin > tempoParaReduzirStatus){
      this.atualizarAnimal();
    }
  }

  atualizarAnimal(){
    this.animalService.atualizarAnimal(this.animal).then((res)=>{
      console.log("Animal atualizado com sucesso!");
    }).catch((e)=>{
      console.log(e);
    })
  }

  ngOnDestroy(){
    //this.renderizado = false;
    //this.animal = undefined;
    this.animalSub.unsubscribe();
    this.mudarFeedbackAnimacao.unsubscribe();
  }
}
