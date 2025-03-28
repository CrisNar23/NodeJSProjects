var express = require('express');
var router = express.Router();

var Product = require('../models/product');

/* GET home page. */
router.get('/', function (req, res, next) {
  Product.find(function (err, docs) {
    var productChunks = [];
    var chunksSize = 3;
    for (let i = 0; i < docs.length; i += chunksSize) {
      productChunks.push(docs.slice(i, i + chunksSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks });
  });
});

module.exports = router;
