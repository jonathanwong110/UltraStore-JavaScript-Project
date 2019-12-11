class Products {
    constructor() {
        this.products = []
        this.adapter = new ProductsAdapter
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadProducts()
    }

    initiBindingsAndEventListeners() {
        this.productsContainer = document.getElementById('products-container')
        this.newProductTitle = document.getElementById('new-product-title')
        this.newProductPrice = document.getElementById('new-product-price')
        this.newProductDescription = document.getElementById('new-product-description')
        this.newProductImage = document.getElementById('new-product-image')
        this.productForm = document.getElementById('new-product-form')
        this.productForm.addEventListener('submit', this.createProduct.bind(this))
        this.productsContainer.addEventListener('dblclick', this.handleProductClick.bind(this))
        this.productsContainer.addEventListener('blur', this.updateProduct.bind(this), true)
        this.productsContainer.addEventListener('click', this.deleteProduct.bind(this), true)
    }

    handleProductClick(e) {
        const card = e.target
        card.contentEditable = true
        card.focus()
        card.classList.add('editable')
    }

    updateProduct(e) {
        const card = e.target.parentElement
        card.contentEditable = false
        card.classList.remove('editable')
        const newProductTitle = card.querySelector('h2').innerHTML
        const newProductPrice = card.querySelector('h3').innerHTML
        const newProductDescription = card.querySelector('p').innerHTML
        const newProductImage = card.querySelector('img').src
        const id = card.dataset.id
        this.adapter.updateProduct(newProductTitle, newProductPrice, newProductDescription, newProductImage, id)
    }

    createProduct(e) {
        e.preventDefault()
        const titleValue = this.newProductTitle.value
        const priceValue = this.newProductPrice.value
        const descriptionValue = this.newProductDescription.value
        const imageValue = this.newProductImage.value
        this.adapter.createProduct(titleValue, priceValue, descriptionValue, imageValue).then(product => {
            this.products.push(new Product(product))
            this.newProductTitle.value = ""
            this.newProductPrice.value = ""
            this.newProductDescription.value = ""
            this.newProductImage.value = ""
            this.render()
        })
    }

    deleteProduct(e) {
        e.preventDefault()
        const card = e.target.parentElement
        const id = card.dataset.id
        this.adapter.deleteProduct(id)
    }


    fetchAndLoadProducts() {
        this.adapter.getProducts().then(products => {
            products.forEach(product => this.products.push(new Product(product)))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        this.productsContainer.innerHTML = this.products.map(product => product.renderCard()).join('')
    }
}