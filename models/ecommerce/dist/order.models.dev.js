"use strict";

var mongoose = require('mongoose');

var orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product'
  },
  quantity: {
    type: Number,
    required: true
  }
});
var orderSchema = new mongoose.Schema({
  orderPrice: {
    type: Number
  },
  customer: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  orderItems: {
    type: [orderItemSchema]
  },
  address: {
    type: String
  },
  status: {
    type: String,
    "enum": ["PENDING", "CANCELLED", "DELIVERED"],
    "default": 'PENDING'
  }
}, {
  timestamps: true
});
var orderModel = mongoose.model('order', orderSchema);
module.exports = orderModel;
//# sourceMappingURL=order.models.dev.js.map
