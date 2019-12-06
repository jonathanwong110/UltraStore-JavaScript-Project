class App {
    constructor() {
        this.products = []
        this.adapter = new ProductsAdapter
        this.fetchAndLoadProducts()
    }

    fetchAndLoadProducts() {
        this.adapter.getProducts().then(products => {
            console.log(products)
        })
    }
}