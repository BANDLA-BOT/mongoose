const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    quantity:{
        type:Number,
        required:true
    }
})
const orderSchema = new mongoose.Schema(
    {
        orderPrice:{
            type:Number,
        },
        customer:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }],
        orderItems:{
            type:[orderItemSchema]
        },
        address:{
            type:String,
        },
        status:{
            type:String,
            enum:["PENDING", "CANCELLED", "DELIVERED"],
            default:'PENDING'
        }
    },
    {
        timestamps:true
    }
)

const orderModel = mongoose.model('order', orderSchema)
module.exports = orderModel