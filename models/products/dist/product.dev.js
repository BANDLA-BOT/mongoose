"use strict";

var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  rating: {
    type: Number
  },
  user_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
});
var productModel = mongoose.model('products', productSchema);
module.exports = productModel;
//# sourceMappingURL=product.dev.js.map
