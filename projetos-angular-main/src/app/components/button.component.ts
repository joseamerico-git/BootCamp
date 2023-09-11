import { Component, Input } from '@angular/core'

@Component({
    selector: 'my-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],

})
export class Button {
    @Input() label: string = '';
    buttonText: string = "ACESSAR";
    buttonTexts: string[] = ['VENDER', 'COMPRAR', 'TROCAR'];
    buttonObject = {
        label: 'adicionar ao carrinho'
    };
    buttonNumber: number = 1;

      getAlert(num:number){
        alert(num);
      }
        
    
}