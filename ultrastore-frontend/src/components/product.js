class Product {
    constructor(productJSON) {
        this.id = productJSON.id
        this.title = productJSON.title
        this.price = productJSON.price
        this.description = productJSON.description
    }

    renderLi() {
        return `<li>${this.title} - ${this.price} - ${this.description} </li>`
    }
}