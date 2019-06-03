import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { CaixaDialogo1Component } from './components/caixa-dialogo1/caixa-dialogo1.component';
import { BackgroundComponent } from './components/background/background.component';
import { BarraEquilibrioComponent } from './components/barra-equilibrio/barra-equilibrio.component';
import { TelaAnimaisComponent } from './components/tela-animais/tela-animais.component';
import { ProgressoUsuarioComponent } from './components/progresso-usuario/progresso-usuario.component';
import { MoedasComponent } from './components/moedas/moedas.component';
import { AmbienteComponent } from './components/ambiente/ambiente.component';
import { BotoesPrincipalComponent } from './components/botoes-principal/botoes-principal.component';
import { NotificacaoComponent } from './components/notificacao/notificacao.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { AnuncioComponent } from './components/anuncio/anuncio.component';
import { CaixaDialogo2Component } from './components/caixa-dialogo2/caixa-dialogo2.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroFormComponent,
    CaixaDialogo1Component,
    BackgroundComponent,
    BarraEquilibrioComponent,
    TelaAnimaisComponent,
    ProgressoUsuarioComponent,
    MoedasComponent,
    AmbienteComponent,
    BotoesPrincipalComponent,
    NotificacaoComponent,
    TelaCadastroComponent,
    TelaLoginComponent,
    AnuncioComponent,
    CaixaDialogo2Component,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
