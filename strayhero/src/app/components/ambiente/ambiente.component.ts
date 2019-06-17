import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PubSubService } from 'angular7-pubsub';
import { AnimaisService } from 'src/app/services/animais.service';

@Component({
  selector: 'app-ambiente',
  templateUrl: './ambiente.component.html',
  styleUrls: ['./ambiente.component.scss']
})
export class AmbienteComponent implements OnInit, OnDestroy {

  posicoesPossiveis = ["2x2","2x3","2x4","3x3","3x5","4x1","4x2","4x3","5x1","5x2","5x3","5x4","5x5","6x2","6x4"];
  posicoesDesocupadas = ["2x2","2x3","2x4","3x3","3x5","4x1","4x2","4x3","5x1","5x2","5x3","5x4","5x5","6x2","6x4"];
  posicoesOcupadas = [];
  animaisSub: Subscription;
  animais: any;
  animaisIds = [];

  constructor(private pubsub: PubSubService, private animaisService:AnimaisService) { }

  ngOnInit() {
    this.animaisSub = this.pubsub.$sub("feedback-animais").subscribe((res)=>{
      this.animaisIds = res;
      this.buscarAnimais();
    });
  }

  buscarAnimais(){
    this.animaisService.recuperarAnimais(this.animaisIds).then((res)=>{
      this.animais = res;
      this.mostrarAnimais();
    }).catch((e)=>{
      console.log(e);
    })
  }

  mostrarAnimais(){
    for(let animal of this.animais){
      if(this.posicoesDesocupadas.length != 0){
        let index = Math.floor(Math.random()*(this.posicoesDesocupadas.length - 1)); //tem alguma coisa estranha aqui...
        let idElem = this.posicoesDesocupadas[index];
        this.pubsub.$pub("render-animal",{idAni:idElem,animalObj:animal});
        this.posicoesOcupadas.push(idElem);
        this.posicoesDesocupadas.splice(index,1);
      }
    }
  }

  ngOnDestroy(){
    this.animaisSub.unsubscribe();
  }
}
