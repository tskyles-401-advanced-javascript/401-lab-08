'use strict';

const { server } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = require(supergoose(server));

describe('categories routes', () => {

  it('should get() categoriess', () => {
    const obj = { name: 'test', quantity: 10 };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(results => {
        return mockRequest.get('/api/v1/categories')
          .then(data => {
            Object.keys(obj).forEach(key => {
              expect(data.body.results[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('should get() a categories', () => {
    const obj = { name: 'test', quantity: 10 };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(results => {
        return mockRequest.get(`/api/v1/categories/${results.body.id}`)
          .then(data => {
            Object.keys(obj).forEach(key => {
              expect(data.body[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('should post a categories', () => {
    const obj = { name: 'test', quantity: 10 };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(results => {
        Object.keys(obj).forEach(key => {
          expect(results.body[key]).toEqual(obj[key]);
        });
      });
  });

  it('should update a categories', () => {
    const obj = { name: 'test', quantity: 10 };
    let updated = { name: 'newTest', price: 1 };

    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(results => {
        return mockRequest.put(`/api/v1/categories/${results.body.id}`)
          .send(updated)
          .then(data => {
            Object.keys(updated).forEach(key => {
              expect(data.body[key]).toEqual(updated[key]);
            });
          });
      });
  });

  it('should delete a categories', () => {
    const obj = { name: 'test', quantity: 10 };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(results => {
        return mockRequest.delete(`/api/v1/categories/${results.body.id}`)
          .then(data => {
            Object.keys(obj).forEach(key => {
              expect(data.body[key]).not.toEqual(obj[key]);
            });
          });
      });
  });
});
