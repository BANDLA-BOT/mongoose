"use strict";

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phno: Number
});
var User = mongoose.model('person', userSchema);
module.exports = User;
//# sourceMappingURL=user.dev.js.map
