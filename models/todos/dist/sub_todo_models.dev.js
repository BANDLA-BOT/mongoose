"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sub = void 0;

var mongoose = require('mongoose');

var sub_todo = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    "default": false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});
var Sub = mongoose.model('sub_todo', sub_todo);
exports.Sub = Sub;
//# sourceMappingURL=sub_todo_models.dev.js.map
