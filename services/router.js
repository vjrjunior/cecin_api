const express = require('express');
const router = new express.Router();
const products = require('../controllers/products.js');

router.route('/products/:id?')
  .get(products.get);
  // .post(products.post)
  // .put(products.put)
  // .delete(products.delete);

module.exports = router;
