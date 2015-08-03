'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    book_id: Number,
    user_id: Number,
    title: String,
    description: String,
    tags: [{
        text: String
    }],
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    book:{
        type: Schema.ObjectId,
        ref: 'Book'
    }

});

module.exports = mongoose.model('Review', ReviewSchema);
