'use strict';

const DataModel = require('@tskyles/mongo-model-package');
/**
 * model for products
 * @class Products
 * @extends {DataModel}
 */
class Products extends DataModel {
  constructor() {
    let schema = {
      name: { type: 'string', required: true },
      quantity: { type: 'number', required: true },
    };
    super(schema);
  }
}

module.exports = Products;