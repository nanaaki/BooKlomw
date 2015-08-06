'use strict';

var _ = require('lodash');
var Book = require('./book.model');
var conf = require('../../../server/config/config.json');

var amazon = require('amazon-product-api');
var client = amazon.createClient({
  awsId: conf.AMAZON_ID,
  awsSecret: conf.AMAZON_SECRET,
  assocId: conf.AMAZON_ASSOC_ID
});


// Create a new book in the DB from amazon api
exports.create_from_isbn = function(req, res) {
  client.itemLookup({
    idType: 'ISBN',
    itemId: req.params.isbn,
    responseGroup: 'ItemAttributes,Offers,Images',
    domain: 'ecs.amazonaws.jp'
  }, function(err, results) {
    if (err) {
      console.log(err);
    } else {
      var api_res = {
        title:         results[0]['ItemAttributes'][0]['Title'][0],
        author:        results[0]['ItemAttributes'][0]['Author'],
        publisher:     results[0]['ItemAttributes'][0]['Publisher'][0],
        publishe_date: results[0]['ItemAttributes'][0]['PublicationDate'][0],
        amazon_url:    results[0]['DetailPageURL'][0],
        amazon_image:  results[0]['LargeImage'][0]['URL'],
        isbn:          req.params.isbn
      }

      Book.find({isbn: api_res['isbn']}, function (err, book) {
        if(err) { return handleError(res, err); }
        if(book.length==0) {
          Book.create(api_res, function(err, created_book) {
            if(err) { return handleError(res, err); }
            return res.status(201).json(created_book);
          });
        } else {
            return res.status(201).json(book);
        }
      });
    }
  });
};

// Get list of books
exports.index = function(req, res) {
  Book.find(function (err, books) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(books);
  });
};

// Get a single book
exports.show = function(req, res) {
  Book.findById(req.params.id, function (err, book) {
    if(err) { return handleError(res, err); }
    if(!book) { return res.status(404).send('Not Found'); }
    return res.json(book);
  });
};

// Creates a new book in the DB.
exports.create = function(req, res) {
  Book.create(req.body, function(err, book) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(book);
  });
};


// Updates an existing book in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Book.findById(req.params.id, function (err, book) {
    if (err) { return handleError(res, err); }
    if(!book) { return res.status(404).send('Not Found'); }
    var updated = _.merge(book, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(book);
    });
  });
};

// Deletes a book from the DB.
exports.destroy = function(req, res) {
  Book.findById(req.params.id, function (err, book) {
    if(err) { return handleError(res, err); }
    if(!book) { return res.status(404).send('Not Found'); }
    book.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
