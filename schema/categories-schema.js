'use strict';

const mongoose = require('mongoose');

let categories = mongoose.Schema( {
  name: { type: 'string', required: true },
});

module.exports = mongoose.model('categories', categories);