const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    }
})


let Product = new mongoose.model('Product',productSchema);
module.exports = Product;