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
        <h2>${this.title}</h2>
        <img src='${this.image}' height="100" width="100">
        <h3>${this.price}</h3>
        <p>${this.description}</p>
        <button class="remove" data-product-id=${this.id} "deleteProduct(${this.id})">Delete Product</button>
        </div>`
        return productCard
    }
}