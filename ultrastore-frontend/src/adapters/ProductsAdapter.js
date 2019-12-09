class ProductsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/products'
    }

    getProducts() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createProduct(titleValue, priceValue, descriptionValue, imageValue) {
        const product = {
            title: titleValue,
            price: priceValue,
            description: descriptionValue,
            image: imageValue
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ product }),
        }).then(res => res.json())
    }

    updateProduct(titleValue, priceValue, descriptionValue, imageValue, id) {
        const product = {
            title: titleValue,
            price: priceValue,
            description: descriptionValue,
            image: imageValue
        }
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ product }),
        }).then(res => res.json())
    }

}