'use strict';

require('@code-fellows/supergoose');
const mockRequest = require(supergoose(server));

describe('product routes', () => {
  const obj = { name: 'test', quantity: 50 };
  it('should create a new product', () => {
    return product.create(testProduct)
      .then(record => {
        Object.keys(testProduct).forEach(key => {
          expect(record[key]).toEqual(testProduct[key]);
        })
      })
  })

  it('should get a new food', () => {
    return product.get()
      .then(record => {
        Object.keys(testProduct).forEach(key => {
          expect(record[key]).toEqual(testProduct[key]);
        })
      })
  })

  it('should update a new food', () => {
    let updated = { name: 'carrots', price: 1 };

    return product.get(1)
      .then(record => {
        Object.keys(testProduct).forEach(key => {
          expect(record[key]).toEqual(testProduct[key]);
        })
      })
  })
} 