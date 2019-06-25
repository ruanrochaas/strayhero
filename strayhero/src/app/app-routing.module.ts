import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaLoginComponent } from "./components/tela-login/tela-login.component";
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
import { TelaAnimaisComponent } from './components/tela-animais/tela-animais.component';
import { TelaDoarParaOngComponent } from './components/tela-doar-para-ong/tela-doar-para-ong.component';
import { TelaInicioComponent } from './components/tela-inicio/tela-inicio.component';

const routes: Routes = [
  {path: "" , redirectTo: "/cadastro", pathMatch: "full"},
  {path: "login", component: TelaLoginComponent},
  {path: "cadastro", component: TelaCadastroComponent},
  {path: "index", component: TelaAnimaisComponent},
  {path: "doacao", component: TelaDoarParaOngComponent},
  {path: "inicio", component: TelaInicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
