class CardNews extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"})
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
      
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card")
        
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card__left");

        const autor = document.createElement("span")
        autor.textContent = "By " + (this.getAttribute("autor") || "By Anonymous");

        const linkTitle = document.createElement("a")
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p")
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card__right")
        const newImage = document.createElement("img")
        cardRight.appendChild(newImage)
        
        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

       


        return componentRoot;

    }

    styles(){}
}
customElements.define("card-new",CardNews)