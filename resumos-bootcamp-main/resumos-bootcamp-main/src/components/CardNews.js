//Componentes são funções js que acaba retornando + javascript, html e css
class CardNews extends HTMLElement{
    constructor(){
        super(); //Invoca o método construtor de quem está herdando

                             //anexa uma sombra 
                             //fantasma        //closed o mundo exterior não pode modificala
                                               //open pode ser modificado pelo mundo externo
        const shadow = this.attachShadow({mode:"open"})  //A classe que foi chamada em super()
        shadow.innerHTML = "<h1>Hellow José</h1>" //cria um selector tag card-news
    }
   
}
customElements.define('card-news', CardNews) //definindo que vai ser utilizado através do seletor card-news
