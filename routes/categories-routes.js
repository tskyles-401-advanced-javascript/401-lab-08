'use strict';

const express = require('express');
const router = express.Router();
const categories = require('../models/category-model');

router.get('/api/v1/categories', getCategories);
router.get('/api/v1/categories/:id', getCategory);
router.post('/api/v1/categories/:id', postCategory);
router.put('/api/v1/categories/:id', putCategory);
router.delete('/api/v1/categories/:id', deleteCategory);
/**
 * function for get routes
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function getCategories(req, res, next){
  categories.get()
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
function getCategory(req, res, next){
  categories.get(req.params.id)
    .then(results => res.status(200).json(results[0]))
    .catch(next);
}
/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function postCategory(req, res, next){
  categories.post(req.body)
    .then(results => res.status(200).json(results[0]))
    .catch(next);
}
/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function putCategory(req, res, next){
  categories.put(req.params.id, req.body)
    .then(results => res.status(200).json(results[0]))
    .catch(next);
}
/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function deleteCategory(req, res, next){
  categories.delete(req.params.id)
    .then(results => res.status(200).json(results));
}

module.exports = router;