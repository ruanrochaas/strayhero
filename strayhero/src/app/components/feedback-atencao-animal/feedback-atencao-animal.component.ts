import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-atencao-animal',
  templateUrl: './feedback-atencao-animal.component.html',
  styleUrls: ['./feedback-atencao-animal.component.scss']
})
export class FeedbackAtencaoAnimalComponent implements OnInit {

  @Input() imagem;

  constructor() { }

  ngOnInit() {
  }

}
