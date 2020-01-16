'use strict';

const mongoose = require('mongoose');

const products = new mongoose.Schema( {
  name: { type: 'string', required: true },
  quantity: { type: 'number', required: true },
});

module.exports = mongoose.model('products', products);