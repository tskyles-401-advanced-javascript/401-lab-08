const DataModel = require('../models/mongo-model');
const schema = require('../schema/categories-schema');

/**
 * model for categories
 * @class Categories
 * @extends {DataModel}
 */
class Categories extends DataModel {
  constructor() {
    super(schema);
  }
}

module.exports = Categories;