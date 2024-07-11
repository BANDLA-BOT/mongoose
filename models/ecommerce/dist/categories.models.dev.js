"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryModel = void 0;

var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var CategoryModel = mongoose.model('category', categorySchema);
exports.CategoryModel = CategoryModel;
//# sourceMappingURL=categories.models.dev.js.map
