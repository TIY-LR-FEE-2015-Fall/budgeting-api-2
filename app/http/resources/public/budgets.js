// Module dependencies.
var express = require('express');
var router = express.Router();
var api = {};

// ALL
api.budgets = function(req) {
  return req.store.recordCollection('Budget');
};

// GET
api.budget = function(req) {
  return req.store.recordItemById('Budget', req.params.id);
};

// POST
api.addBudget = function(req) {
  return req.store.createRecord('Budget');
};

// PUT
api.editBudget = function(req) {
  return req.store.updateRecord('Budget', req.params.id);
};

// DELETE
api.deleteBudget = function(req) {
  return req.store.destroyRecord('Budget', req.params.id);
};

router.get('/budgets', api.budgets);
router.post('/budgets', api.addBudget);

router.route('/budgets/:id')
  .get(api.budget)
  .put(api.editBudget)
  .delete(api.deleteBudget);

module.exports = router;
