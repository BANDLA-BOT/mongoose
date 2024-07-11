"use strict";

var mongoose = require('mongoose');

var user_schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  gender: String,
  phone: Number,
  height: Number,
  weight: Number,
  eyeColor: String,
  password: String
}, {
  timestamps: true
});
var User = mongoose.model('User', user_schema);
module.exports = User;
//# sourceMappingURL=user.models.dev.js.map
