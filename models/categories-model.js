const DataModel = require('@tskyles/mongo-model-package');
/**
 * model for categories
 * @class Categories
 * @extends {DataModel}
 */
class Categories extends DataModel {
  constructor() {
    let schema = {
      name: { type: 'string', required: true },
    };
    super(schema);
  }
}

module.exports = Categories;