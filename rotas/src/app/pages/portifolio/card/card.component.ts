import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  id: string = "0"
  constructor(
    private activeRoute: ActivatedRoute,
    private navegador: Router //Executar uma ação e forçar voltar para alguma rota

    ) {
    //http://localhost:4200/portifolio/{1}
    this.activeRoute.params.subscribe(
      res => console.log(res)

    )

    //http://localhost:4200/portifolio/1?{name="jose"&token=123} 
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )

  }
  ngOnInit(): void {
    //setInterval(()=>{
    //  this.navegador.navigate(['/'])
   // },5000)
  }

}
