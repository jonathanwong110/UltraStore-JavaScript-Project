# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.create([
    { title: 'Hat', price: 30, description: 'new', image: 'https://www.rei.com/media/6f8be96e-a698-4076-9b6e-cb70e30445e6?size=512x682'},
    { title: 'Sneakers', price: 100, description: 'worn', image: 'https://cdn.shopify.com/s/files/1/0238/2821/products/Mens-193-Royale-Blanco-3RMW-Product-102_3d9c4e83-a5c5-4326-91b8-0308fa05101e.jpg?v=1563990962'},
    { title: 'Jeans', price: 50, description: 'new', image: 'https://media.gq.com/photos/5daf1e5e4e024d0009825d71/master/w_2000,h_1333,c_limit/Abercrombie-Jeans.jpg'},
    { title: 'Humidifier', price: 30, description: 'old', image: 'https://images-na.ssl-images-amazon.com/images/I/61uBEEYbpzL._SX425_.jpg'},
    { title: 'Headphones', price: 200, description: 'new', image: 'https://cnet4.cbsistatic.com/img/oRS5jU8S91e1L2aFDkg3UOpIIOo=/1200x675/2018/08/30/e7ad8666-7caf-41fd-9349-06fa647fd711/sony-1000xm3-7.jpg'}
])

Review.create([
    { content: "Testing Review 1", product_id: 1},
    { content: "Testing Review 2", product_id: 1},
    { content: "Testing Review 3", product_id: 2},
    { content: "Testing Review 4", product_id: 2},
    { content: "Testing Review 5", product_id: 3},
    { content: "Testing Review 6", product_id: 3},
    { content: "Testing Review 7", product_id: 4},
    { content: "Testing Review 8", product_id: 4},
    { content: "Testing Review 7", product_id: 5},
    { content: "Testing Review 8", product_id: 5}
])