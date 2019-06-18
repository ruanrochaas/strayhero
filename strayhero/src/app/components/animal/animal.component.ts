import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PubSubService } from 'angular7-pubsub';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
  animal: any;
  nome = "";

  constructor(private pubsub: PubSubService, private roteador: Router) { }

  ngOnInit() {
    this.animalSub = this.pubsub.$sub("render-animal").subscribe((res)=>{
      if(this.idAni == res.idAni){
        this.animal = res.animalObj;
        this.nome = this.animal.nome;
        this.renderizado = true;
      }
    });
  }

  abrirTelaAni(){
    this.pubsub.$pub("modal-animal", this.animal);
  }

  ngOnDestroy(){
    //this.renderizado = false;
    //this.animal = undefined;
    this.animalSub.unsubscribe();
  }
}
