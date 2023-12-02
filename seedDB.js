const Product = require('./models/Product');
const mongoose = require('mongoose');

let products = [
    {
        name : "Iphone 15",
        img : "https://images.unsplash.com/photo-1695048132783-4b9f77bde5be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZSUyMDE1fGVufDB8fDB8fHww",
        price : 89999,
        desc : "very costly"
    },
    {
        name : "MacBook Air M2",
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-starlight-select-20220606?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1653084303732",
        price : 134999,
        desc : "MacBook Air laptop, now in 13-inch and 15-inch models. With the blazing-fast M2 chip, all-day battery life, and a stunning Liquid Retina display."
    },
    {
        name : "Samsung S23",
        img : "https://images.unsplash.com/photo-1696355607944-650405f2aa2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMHMyM3xlbnwwfHwwfHx8MA%3D%3D",
        price : 68999,
        desc : "Take the pictures of your life. Do you want to capture and share special moments in their entire fascination? And that's it! With the legendary camera"
    },
    {
        name : "Samsung S23 Ultra",
        img : "https://images.unsplash.com/photo-1688762473728-3a20023e1fe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Ftc3VuZyUyMHMyMyUyMHVsdHJhfGVufDB8fDB8fHww",
        price : 135999,
        desc : "More innovation, less footprint – Galaxy S23 Ultra's striking symmetrical design returns with one major difference: recycled and eco-conscious materials. "
    },
    
]

async function seed(){
    await Product.insertMany(products);
    console.log("data seeded");
}

module.exports = seed;