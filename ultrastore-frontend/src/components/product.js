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
        <img src='${this.image}' height="100" width="100">
        <h2>${this.title}</h2>
        <h3>${this.price} USD</h3>
        <p>${this.description}</p>
        <button class="show" data-product-id=${this.id} onclick="showProduct()">Show Product</button>
        <button class="remove" data-product-id=${this.id} onclick="deleteProduct()">Delete Product</button>
        </div>`
        return productCard
    }
}