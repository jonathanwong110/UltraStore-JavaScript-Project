class Product {
    constructor(productJSON) {
        this.baseUrl = 'http://localhost:3000/api/v1/products'
        this.id = productJSON.id
        this.title = productJSON.title
        this.price = productJSON.price
        this.description = productJSON.description
        this.image = productJSON.image
        this.reviews = productJSON.reviews
    }

    renderCard() {
        const productCard = `<div class='card' data-id='${this.id}'>
        <img class="selectable" src='${this.image}' height="100" width="100">
        <h2 class="selectable">${this.title}</h2>
        <h3 class="selectable">${this.price} USD</h3>
        <p class="selectable">${this.description}</p>
        <button class="viewable" data-product-id=${this.id}>Show Product</button>
        <button class="removable" data-product-id=${this.id}>Delete Product</button>
        </div>`
        return productCard
    }
}