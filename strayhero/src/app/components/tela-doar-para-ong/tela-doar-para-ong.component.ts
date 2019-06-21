import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PubSubService } from 'angular7-pubsub';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-doar-para-ong',
  templateUrl: './tela-doar-para-ong.component.html',
  styleUrls: ['./tela-doar-para-ong.component.scss']
})
export class TelaDoarParaOngComponent implements OnInit {

  subUsuario: Subscription;
  usuario: any;

  constructor(private pubsub: PubSubService, private usuarioService: UsuarioService, private router: Router) {
    this.usuario = this.router.getCurrentNavigation().extras.state;
    console.log(this.usuario);
  }

  ngOnInit() {
  }

  doar(){
    this.usuario.dinheiro += 50;
    this.atualizarUsuario();
  }

  atualizarUsuario(){
    this.usuarioService.atualizarUsuario(this.usuario).then(()=>{
      console.log("Usuario atualizado com sucesso!");
      window.location.href='./index';
    }).catch((e)=>{
      console.log(e);
    });
  }

  botVoltar(){
    window.location.href='./index';
  }
}
