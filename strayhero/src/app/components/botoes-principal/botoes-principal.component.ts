import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botoes-principal',
  templateUrl: './botoes-principal.component.html',
  styleUrls: ['./botoes-principal.component.scss']
})
export class BotoesPrincipalComponent implements OnInit {

  constructor(private roteador: Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem("usuarioLogado");
    this.roteador.navigate(["/login"]);
  }
}
