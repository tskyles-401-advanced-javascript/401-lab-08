'use strict';

const DataModel = require('@tskyles/mongo-model-package');

class Products extends DataModel {
  constructor() {
    let schema = {
      category_id: { type: 'string', required: true },
      price: { type: 'number', required: true },
      weight: { type: 'number' },
      quantity: { type: 'number', required: true },
    };
    super(schema);
  }
}

module.exports = Products;