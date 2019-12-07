class Products {
    constructor() {
        this.products = []
        this.adapter = new ProductsAdapter
        //this.bindEventListeners()
        this.fetchAndLoadProducts()
    }

    fetchAndLoadProducts() {
        this.adapter.getProducts().then(products => {
            products.forEach(product => this.products.push(product))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const productsContainer = document.getElementById('products-container')
        productsContainer.innerHTML = 'my products here'
    }
}