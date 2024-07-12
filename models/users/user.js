const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    phno:Number
})
const User = mongoose.model('person', userSchema);
module.exports = User