class Products {
    constructor() {
        this.products = []
        this.adapter = new ProductsAdapter
        this.fetchAndLoadProducts()
    }

    fetchAndLoadProducts() {
        this.adapter
        .getProducts()
        .then(products => {
            return console.log(products)
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        console.log('rendering')
    }
}