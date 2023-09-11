class TituloDinamico extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"})

        //Base do componente
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = this.getAttribute("titulo") //cria uma propriedade para a tag

        //Estilizar o componente

        const style = document.createElement("style")
                             //template string ``
        style.textContent = `
           h1{
            color:red;
           }
        
        ` 

        //Enviar para a shadow
        //anexando à árvore fantasma shadow
        shadow.appendChild(componentRoot)
        shadow.appendChild(style)
    }
}                            //o hifém é required
customElements.define('titulo-dinamico', TituloDinamico)