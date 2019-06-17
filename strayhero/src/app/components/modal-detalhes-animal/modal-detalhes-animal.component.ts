import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-detalhes-animal',
  templateUrl: './modal-detalhes-animal.component.html',
  styleUrls: ['./modal-detalhes-animal.component.scss']
})
export class ModalDetalhesAnimalComponent implements OnInit {

  constructor() { }

  statusAtencao: number = 90;
  statusComida: number = 90;
  statusSaude: number = 90;

  ngOnInit() {
  }

  aumentarStatus(status){
    
    
  }


}
