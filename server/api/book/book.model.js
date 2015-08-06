'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  author: String,
  publisher: String,
  publish_date: Date,
  amazon_url: String,
  amazon_image: String,
  isbn: String,
});

module.exports = mongoose.model('Book', BookSchema);

