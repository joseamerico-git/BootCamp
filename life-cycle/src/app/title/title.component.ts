import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() nome: string = '';
  constructor() {
    console.log('Construtor ' + this.nome);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges '+ this.nome); //Age quando um conteudo é alterado
  }
  ngOnInit(): void {
    this.nome = this.nome +"x"
    console.log('OnInit' + this.nome);
  }
}
