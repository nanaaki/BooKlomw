'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    book_id: Number,
    user_id: Number,
    tag_ids: Array,
    description: String
});

module.exports = mongoose.model('Review', ReviewSchema);
