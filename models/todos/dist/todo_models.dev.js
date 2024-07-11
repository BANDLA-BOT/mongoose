"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todoModel = void 0;

var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
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
  },
  subTodos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'sub_todo'
  }]
}, {
  timestamps: true
});
var todoModel = mongoose.model('todo', todoSchema);
exports.todoModel = todoModel;
//# sourceMappingURL=todo_models.dev.js.map
