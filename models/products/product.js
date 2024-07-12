const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
    },
    rating:{
        type:Number
    },
    user_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
})
const productModel = mongoose.model('products', productSchema)
module.exports = productModel