class Products {
    constructor() {
        this.products = []
        this.adapter = new ProductsAdapter
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadProducts()
    }

    initiBindingsAndEventListeners() {
        this.productsContainer = document.getElementById('products-container')
        this.productSingleDisplay = document.getElementById('product-single-display')
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
        this.productSingleDisplay.addEventListener('click', this.closeProduct.bind(this), true)
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
        if (card.attributes && card.attributes.class && card.attributes.class.value === "viewable") {
            const id = parseInt(card.dataset.productId)
            const productOuterDisplay = document.getElementById('product-single-display')
            productOuterDisplay.innerHTML = ""
            const productInnerDisplay = document.createElement("div")
            productInnerDisplay.setAttribute("id", "product-show")
            productOuterDisplay.appendChild(productInnerDisplay)
            productInnerDisplay.innerHTML += '<h1>Currently Viewing</h1>'
            let superProductImage = document.createElement("img")
            superProductImage.src = (card.parentElement.children[0].src)
            superProductImage.setAttribute("width", "250")
            superProductImage.setAttribute("height", "250")
            productInnerDisplay.append(superProductImage)
            productInnerDisplay.appendChild(superProductImage)
            let superProductTitle = document.createElement("h2")
            let superProductTitleText = document.createTextNode(card.parentElement.children[1].innerHTML)
            superProductTitle.appendChild(superProductTitleText)
            productInnerDisplay.appendChild(superProductTitle)
            let superProductPrice = document.createElement("h3")
            let superProductPriceText = document.createTextNode(card.parentElement.children[2].innerHTML)
            superProductPrice.appendChild(superProductPriceText)
            productInnerDisplay.appendChild(superProductPrice)
            let superProductDescription = document.createElement("h3")
            let superProductDescriptionText = document.createTextNode(card.parentElement.children[3].innerHTML)
            superProductDescription.appendChild(superProductDescriptionText)
            productInnerDisplay.appendChild(superProductDescription)
            const reviewForm = `<div id='card-reviews'>
            <h2>Reviews</h2>
            </div>`
            const closableButton = `<br></br> <button class="closable" onClick={closeProduct(e)}> Close </button>`
            productInnerDisplay.innerHTML += reviewForm
            productInnerDisplay.innerHTML += closableButton
            const specificProductReviews = this.products.filter(product => product.id === id)[0].reviews
            specificProductReviews.forEach(function (specificReview) {
                const elementForReview = document.createElement("li")
                const reviewDetail = document.createTextNode(specificReview.content)
                elementForReview.appendChild(reviewDetail)
                const spaceForReview = document.getElementById('card-reviews')
                spaceForReview.append(elementForReview)
            })
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
            card.parentElement.remove()
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

    closeProduct(e) {
        e.preventDefault()
        const card = e.target
        if (card.attributes.class.value === "closable") {
            const productOuterDisplay = document.getElementById('product-single-display')
            productOuterDisplay.innerHTML = ""
        }
    }

    render() {
        this.productsContainer.innerHTML = this.products.map(product => product.renderCard()).join('')
    }
}