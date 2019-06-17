import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PubSubService } from 'angular7-pubsub';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit, OnDestroy {

  @Input() idAni: string;
  renderizado = false;
  animalSub: Subscription;
  animal: any;
  nome = "";

  constructor(private pubsub: PubSubService) { }

  ngOnInit() {
    this.animalSub = this.pubsub.$sub("render-animal").subscribe((res)=>{
      if(this.idAni == res.idAni){
        this.renderizado = true;
        this.animal = res.animalObj;
        this.nome = this.animal.nome;
      }
    });
  }

  abrirTelaAni(){
    alert("Modal: Tela do Animal.")
  }

  ngOnDestroy(){
    //this.renderizado = false;
    //this.animal = undefined;
    this.animalSub.unsubscribe();
  }
}
