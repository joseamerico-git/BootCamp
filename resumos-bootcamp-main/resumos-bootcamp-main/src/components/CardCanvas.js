class CardCanvas extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())


    }

    build() {

    }

    stylle() {

    }

}