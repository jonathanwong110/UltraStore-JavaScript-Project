class Product {
    constructor(productJSON) {
        this.id = productJSON.id
        this.title = productJSON.title
        this.price = productJSON.price
        this.description = productJSON.description
        this.image = productJSON.image
    }

    renderCard() {
        const productCard = `<div class='card' data-id='${this.id}'>
        <h2><a href="#">${this.title}</a></h2>
        <img src=${this.image} />
        <h3>$${this.price}</h3>
        <p>${this.description}</p></div>`
        return productCard
    }
}