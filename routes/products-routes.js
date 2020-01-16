'use strict';

const express = require('express');
const router = express.Router();
const products = require('../models/products-model');

router.get('/api/v1/products', getProducts);
router.get('/api/v1/products/:id', getProduct);
router.post('/api/v1/products/:id', postProduct);
router.put('/api/v1/products/:id', putProduct);
router.delete('/api/v1/products/:id', deleteProduct);
/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function getProducts(req, res, next){
  products.get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.status(200).json(output);
    })
    .catch(next);
}
/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function getProduct(req, res, next){
  products.get(req.params.id)
    .then(results => res.status(200).json(results[0]))
    .catch(next);
}
/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function postProduct(req, res, next){
  products.post(req.body)
    .then(results => res.status(200).json(results[0]))
    .catch(next);
}
/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function putProduct(req, res, next){
  products.put(req.params.id, req.body)
    .then(results => res.status(200).json(results[0]))
    .catch(next);
}
/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function deleteProduct(req, res, next){
  products.delete(req.params.id)
    .then(results => res.status(200).json(results));
}

module.exports = router;