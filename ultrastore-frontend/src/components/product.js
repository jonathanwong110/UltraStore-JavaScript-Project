class Product {
    constructor(productJSON) {
        this.baseUrl = 'http://localhost:3000/api/v1/products'
        this.id = productJSON.id
        this.title = productJSON.title
        this.price = productJSON.price
        this.description = productJSON.description
        this.image = productJSON.image
    }

    renderCard() {
        const productCard = `<div class='card' data-id='${this.id}'>
        <h2><a href="http://localhost:3000/api/v1/products/${this.id}">${this.title}</a></h2>
        <img src=${this.image} class="image"/>
        <h3>$${this.price}</h3>
        <p>${this.description}</p></div>`
        return productCard
    }
}