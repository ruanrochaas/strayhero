import { Component, OnInit, OnDestroy } from '@angular/core';
import { PubSubService } from 'angular7-pubsub';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.component.html',
  styleUrls: ['./moedas.component.scss']
})
export class MoedasComponent implements OnInit, OnDestroy {

  qtdMoedasSub: Subscription;
  qtdMoedas = 0;

  constructor(private pubsub: PubSubService) { }

  ngOnInit() {
    this.qtdMoedasSub = this.pubsub.$sub("atualizar-qtdmoedas").subscribe((res)=>{
      this.qtdMoedas = res;
    });
  }

  ngOnDestroy(){
    this.qtdMoedasSub.unsubscribe();
  }
}
