import { Component, OnInit, OnDestroy } from '@angular/core';
import { PubSubService } from 'angular7-pubsub';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-progresso-usuario',
  templateUrl: './progresso-usuario.component.html',
  styleUrls: ['./progresso-usuario.component.scss']
})
export class ProgressoUsuarioComponent implements OnInit, OnDestroy {

  tituloSub: Subscription;
  titulo = "Aprendiz";
  feedbackBarra = "zero";

  constructor(private pubsub: PubSubService) { }

  ngOnInit() {
    this.tituloSub = this.pubsub.$sub("feedback-titulo").subscribe((res)=>{
      this.verificarTitulo(res.nivel);
      this.atualizarBarra(res.pontuacao);
    });
  }

  verificarTitulo(nivel){
    if(nivel == 1){
      this.titulo = "Aprendiz";
    } else if(nivel == 2){
      this.titulo = "Cuidador";
    } else if(nivel == 3){
      this.titulo = "Defensor";
    } else if(nivel == 4){
      this.titulo = "Guardião";
    } else if(nivel == 5){
      this.titulo = "Herói";
    }
  }

  atualizarBarra(pontuacao){
    if(pontuacao < 5){
      this.feedbackBarra = "zero";
    } else if(pontuacao <= 10){
      this.feedbackBarra = "dez";
    } else if(pontuacao <= 20){
      this.feedbackBarra = "vinte";
    } else if(pontuacao <= 30){
      this.feedbackBarra = "trinta"; 
    } else if(pontuacao <= 40){
      this.feedbackBarra = "quarenta";
    } else if(pontuacao <= 50){
      this.feedbackBarra = "cinquenta";
    } else if(pontuacao <= 60){
      this.feedbackBarra = "sessenta";
    } else if(pontuacao <= 70){
      this.feedbackBarra = "setenta";
    } else if(pontuacao <= 80){
      this.feedbackBarra = "oitenta";
    } else if(pontuacao <= 90){
      this.feedbackBarra = "noventa";
    } else if(pontuacao <= 100){
      this.feedbackBarra = "cem";
    } else if(pontuacao > 100){
      alert("Parabéns, você passou de nível");
    }
  }
 
  ngOnDestroy(){
    this.tituloSub.unsubscribe();
  }
}
