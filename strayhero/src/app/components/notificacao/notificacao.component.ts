import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.scss']
})
export class NotificacaoComponent implements OnInit {
  
  feedbackTitulo = 'TITULO';
  feedbackTexto = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis at, beatae fugiat laborum,
  nemo necessitatibus mollitia, in reiciendis unde dolor aut sapiente rem laboriosam. Dignissimos est id illum quod impedit!
  nemo necessitatibus mollitia, in reiciendis unde dolor aut sapiente rem laboriosam. Dignissimos est id illum quod impedit!`;


  constructor() { }

  ngOnInit() {
  }

}
