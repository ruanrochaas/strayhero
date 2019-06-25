import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AnimaisService } from 'src/app/services/animais.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.scss']
})
export class TelaInicioComponent implements OnInit {

  usuario: any;
  animal: any = {
      dono: "",
      nome: "Pingo",
      tipo: "cachorro",
      dataDoResgate: 0,
      morto: false,
      dataComida: 0,
      statusComida: 20,
      dataSaude: 0,
      statusSaude: 20,
      dataAtencao: 0,
      statusAtencao: 20
  };

  constructor(private usuarioService: UsuarioService, private animalService: AnimaisService, private router: Router) { 
    let loggedUser = localStorage.getItem("usuarioLogado");
    this.usuarioService.recuperarUsuario(loggedUser).then((res)=>{
      if(res["animaisAdotados"].length != 0){
        this.router.navigate(["/index"]);
      } else {
        this.usuario = res;
        this.animal.dono = this.usuario["_id"];
      }
    }).catch((e)=>{
      console.log(e);
    });
   }

  ngOnInit() {
  }

  atualizarUsuario(){
    this.usuarioService.atualizarUsuario(this.usuario).then((res)=>{
      this.router.navigate(["/index"]);
    }).catch((e)=>{
      console.log(e);
    })
  }

  criarAnimal(){
    this.animalService.criarAnimal(this.animal).then((res)=>{
      this.usuario.animaisAdotados.push(res["_id"]);
      this.atualizarUsuario();
    }).catch((e)=>{
      console.log(e);
    })
  }

  adotar(){
    this.criarAnimal();
  }
}
