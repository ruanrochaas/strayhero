import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { CaixaDialogo1Component } from './components/caixa-dialogo1/caixa-dialogo1.component';
import { BackgroundComponent } from './components/background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroFormComponent,
    CaixaDialogo1Component,
    BackgroundComponent
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
