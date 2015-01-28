'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ShoppinglistSchema = new Schema({
  name: String,
  info: String,
  active: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Shoppinglist', ShoppinglistSchema);