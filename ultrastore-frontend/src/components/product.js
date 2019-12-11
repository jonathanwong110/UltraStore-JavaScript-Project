class Product {
    constructor(productJSON) {
        this.baseUrl = 'http://localhost:3000/api/v1/products'
        this.baseUrlReviews = 'http://localhost:3000/api/v1/reviews'
        this.id = productJSON.id
        this.title = productJSON.title
        this.price = productJSON.price
        this.description = productJSON.description
        this.image = productJSON.image
        this.reviews = this.fetchAndLoadReviews()
    }

    fetchAndLoadReviews() {
        return fetch(`${this.baseUrlReviews}/${this.id}`).then(res => res.json()).then(reviews => reviews.map(review => new Review(review)))
    }

    renderCard() {
        const productCard = `<div class='card' data-id='${this.id}'>
        <img src='${this.image}' height="100" width="100">
        <h2>${this.title}</h2>
        <h3>${this.price}</h3>
        <p>${this.description}</p>
        <form id="new-review-form">
        ${this.reviews}
            Review: <input type="text" name="review">
            <input type="submit">
        </form>
        <br></br>
        <button class="remove" data-product-id=${this.id} onclick="deleteProduct()">Delete Product</button>
        </div>`
        return productCard
    }
}