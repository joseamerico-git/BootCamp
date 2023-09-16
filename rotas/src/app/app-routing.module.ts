import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  {
    path:'',component:TitleComponent, pathMatch:'full'  //quando não tem nada geralmente utilizada 
    // rotas principais para evitar conflitos de rotas.
  },
  
  {
    path:'portifolio',component: CardComponent, children:[
      {path:"id", component:CardComponent},
    ]//quando existe um caminho de pastas na url

  },
  {
    path:'**',redirectTo:'' // rota coringa pra redirecionar caso digite uma rota que não existe.
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
