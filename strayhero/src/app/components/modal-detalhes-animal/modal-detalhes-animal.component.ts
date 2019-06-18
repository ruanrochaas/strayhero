import { Component, OnInit, OnDestroy } from '@angular/core';
import { PubSubService } from 'angular7-pubsub';
import { Subscription } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

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

  constructor(private pubsub: PubSubService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.animalSub = this.pubsub.$sub("modal-animal").subscribe((res)=>{
      this.animal = res;
      this.nome = res.nome;
      this.recuperarUsuario();
      //console.log(this.animal);
      this.feedbackBarras();
      this.aberto = true;
    })
  }

  darAmor(){
    if(this.animal.statusAtencao < 100){
      this.animal.statusAtencao += 10;
      this.animal.dataAtencao = Date.now();
    } else if(this.animal.statusAtencao = 100){
      this.animal.statusAtencao = 100;
    }
    this.feedbackBarras();
  }

  alimentar(){
    if(this.animal.statusComida < 100){
      if(this.dono.dinheiro >= this.valorCuidado){
        this.animal.statusComida += 10;
        this.animal.dataComida = Date.now();
        this.dono.dinheiro -= this.valorCuidado;
        console.log(this.dono.dinheiro);
      }
    } else if(this.animal.statusComida = 100){
      this.animal.statusComida = 100;
    }
    this.feedbackBarras();
  }

  darRemedio(){
    if(this.animal.statusSaude < 100){
      if(this.dono.dinheiro >= this.valorCuidado){
        this.animal.statusSaude += 10;
        this.animal.dataSaude = Date.now();
        this.dono.dinheiro -= this.valorCuidado;
        console.log(this.dono.dinheiro);
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
      this.usuarioService.atualizarUsuario(this.dono).then((res)=>{
        console.log("Usuario atualizado com sucesso!")
      }).catch((e)=>{
        console.log(e);
      });
      this.pubsub.$pub("atualizar-usuario", this.dono);
      this.pubsub.$pub("atualizar-posicaoBarra", this.dono.statusAmbiente);
      this.pubsub.$pub("atualizar-qtdmoedas", this.dono.dinheiro);
      this.pubsub.$pub("feedback-titulo", {nivel:this.dono.nivel, pontuacao:this.dono.pontuacao});
      this.animal = undefined;
      this.dono = undefined;
      this.nome = "Doguinho";
      this.statusAtencao = "";
      this.statusComida = "";
      this.statusSaude = "";
      this.aberto = false;
    }
  }

  ngOnDestroy(){
    this.animalSub.unsubscribe();
  }
}
