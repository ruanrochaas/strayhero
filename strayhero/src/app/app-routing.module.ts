import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaLoginComponent } from "./components/tela-login/tela-login.component";
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
import { TelaAnimaisComponent } from './components/tela-animais/tela-animais.component';

const routes: Routes = [
  {path: "" , redirectTo: "/cadastro", pathMatch: "full"},
  {path: "login", component: TelaLoginComponent},
  {path: "cadastro", component: TelaCadastroComponent},
  {path: "index", component: TelaAnimaisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
