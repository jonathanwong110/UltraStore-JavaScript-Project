class Product {
    constructor(productJSON) {
        this.id = productJSON.id
        this.title = productJSON.title
        this.price = productJSON.price
        this.description = productJSON.description
    }

    renderCard() {
        const productCard = `<div class='card' data-id='${this.id}'>
        <h2>${this.title}</h2>
        <h3>$${this.price}</h3>
        <p>${this.description}</p><br></br>`
        return productCard
    }
}