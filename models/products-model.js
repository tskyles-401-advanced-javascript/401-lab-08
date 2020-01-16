'use strict';

const DataModel = require('../models/mongo-model');
const schema = require('../schema/product-schema');

/**
 * model for products
 * @class Products
 * @extends {DataModel}
 */
class Products extends DataModel {
  constructor() {
    super(schema);
  }
}

module.exports = Products;