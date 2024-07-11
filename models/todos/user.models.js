const mongoose = require('mongoose');

 const user_schema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    gender:String,
    phone:Number,
    height:Number,
    weight:Number,
    eyeColor:String,
    password:String,

}, {timestamps:true})

const User = mongoose.model('User', user_schema)
module.exports = User