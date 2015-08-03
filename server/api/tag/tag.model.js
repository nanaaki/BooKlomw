'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TagSchema = new Schema({
  text: {type: String, require: true, unique: true}
});

module.exports = mongoose.model('Tag', TagSchema);
