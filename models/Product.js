const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
    },
    img : {
        type : String,
        required : true,
        trim : true,
    },
    price : {
        type : Number,
        required : true,
        min : 0,
    },
    desc : {
        type : String,
        trim : true,
    },
})


let Product = new mongoose.model('Product',productSchema);
module.exports = Product;