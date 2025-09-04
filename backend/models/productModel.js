const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    ratings:String,
    images:[
        {
            images:String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numberOfReviews:String,
    createdAt:Date
})

const productModel = mongoose.model('Product',productSchema)
module.exports = productModel