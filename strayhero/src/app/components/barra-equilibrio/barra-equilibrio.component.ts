import { Component, OnInit, OnDestroy } from '@angular/core';
import { PubSubService } from 'angular7-pubsub';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-barra-equilibrio',
  templateUrl: './barra-equilibrio.component.html',
  styleUrls: ['./barra-equilibrio.component.scss']
})
export class BarraEquilibrioComponent implements OnInit, OnDestroy {

  posicaoBarraSub: Subscription;
  posicaoBarra: string = "bom";

  constructor(private pubsub: PubSubService) { }

  ngOnInit() {
    this.posicaoBarraSub = this.pubsub.$sub("atualizar-posicaoBarra").subscribe((res)=>{
      if(res <= -80){
        this.posicaoBarra = "pessimo-esq";
      } else if(res <= -61){
        this.posicaoBarra = "ruim-esq";
      } else if(res <= -36){
        this.posicaoBarra = "bom";
      } else if(res <= -10){
        this.posicaoBarra = "ruim-dir";
      } else if(res > -10){
        this.posicaoBarra = "pessimo-dir";
      }
    });
  }

  ngOnDestroy(){
    this.posicaoBarraSub.unsubscribe();
  }

}
