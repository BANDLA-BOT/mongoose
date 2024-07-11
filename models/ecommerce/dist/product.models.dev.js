"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productModel = void 0;

var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  productImage: {
    type: String
  },
  price: {
    type: Number,
    "default": 0
  },
  stock: {
    type: Number,
    "default": 0
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
}, {
  timestamps: true
});
var productModel = mongoose.model('product', productSchema);
exports.productModel = productModel;
//# sourceMappingURL=product.models.dev.js.map
