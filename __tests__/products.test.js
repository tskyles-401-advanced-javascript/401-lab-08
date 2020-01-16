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
        });
      });
  });

  it('should get() products', () => {
    const obj = { name: 'test', quantity: 10 };
    return mockRequest.post('/api/v1/products')
      .send(obj)
      .then(results => {
        return mockRequest.get('/api/v1/products')
          .then(data => {
            Object.keys(testProduct).forEach(key => {
              expect(data.body.results[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('should get() a product', () => {
    const obj = { name: 'test', quantity: 10 };
    return mockRequest.post('/api/v1/products')
      .send(obj)
      .then(results => {
        return mockRequest.get(`/api/v1/products/${results.body.id}`)
          .then(data => {
            Object.keys(obj).forEach(key => {
              expect(data.body[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('should post a product', () => {
    const obj = { name: 'test', quantity: 10 };
    return mockRequest.post('/api/v1/products')
      .send(obj)
      .then(results => {
        Object.keys(obj).forEach(key => {
          expect(results.body[key]).toEqual(obj[key]);
        });
      });
  });

  it('should update a new food', () => {
    let updated = { name: 'carrots', price: 1 };

    return product.get(1)
      .then(record => {
        Object.keys(testProduct).forEach(key => {
          expect(record[key]).toEqual(testProduct[key]);
        });
      });
  });
});
