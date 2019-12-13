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
        this.productsContainer.addEventListener('click', this.showProduct.bind(this), true)
    }

    handleProductClick(e) {
        const card = e.target
        if (card.attributes && card.attributes.class && card.attributes.class.value === "selectable") {
            card.contentEditable = true
            card.focus()
            card.classList.add('editable')
        }
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

    showProduct(e) {
        e.preventDefault()
        const card = e.target
        if (card.attributes && card.attributes.class && card.attributes.class.value === "showable") {
            const id = card.dataset.productId
            this.adapter.showProduct(id)
            const productDisplay = document.getElementById('product-show')
            productDisplay.innerHTML += '<h1>Currently Viewing</h1>'
            // const productCard = card.parentElement.innerHTML
            // productDisplay.innerHTML = '<h1>Currently Viewing</h1>' + productCard + '<h2>Reviews</h2>'
            let superProductImage = document.createElement("img");
            let superProductImageValue = document.createTextNode(card.parentElement.children[0].src);
            superProductImage.append(superProductImageValue);
            debugger
            productDisplay.appendChild(superProductImage)
            let superProductTitle = document.createElement("h2");
            let superProductTitleText = document.createTextNode(card.parentElement.children[1].innerHTML);
            superProductTitle.appendChild(superProductTitleText);
            productDisplay.appendChild(superProductTitle)
            let superProductPrice = document.createElement("h3");
            let superProductPriceText = document.createTextNode(card.parentElement.children[2].innerHTML);
            superProductPrice.appendChild(superProductPriceText);
            productDisplay.appendChild(superProductPrice)
            let superProductDescription = document.createElement("h3");
            let superProductDescriptionText = document.createTextNode(card.parentElement.children[3].innerHTML);
            superProductDescription.appendChild(superProductDescriptionText);
            productDisplay.appendChild(superProductDescription)
            productDisplay.innerHTML += '<h2>Reviews</h2>'
        }
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

    deleteProduct(e) {
        e.preventDefault()
        const card = e.target
        if (card.attributes && card.attributes.class && card.attributes.class.value === "removable") {
            const id = card.dataset.productId
            this.adapter.deleteProduct(id)  
        }
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