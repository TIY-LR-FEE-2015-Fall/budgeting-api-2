// Module dependencies.
var express = require('express');
var router = express.Router();
var api = {};

// ALL
api.transactions = function(req) {
  return req.store.recordCollection('Transaction');
};

// GET
api.transaction = function(req) {
  return req.store.recordItemById('Transaction', req.params.id);
};

// POST
api.addTransaction = function(req) {
  return req.store.createRecord('Transaction');
};

// PUT
api.editTransaction = function(req) {
  return req.store.updateRecord('Transaction', req.params.id);
};

// DELETE
api.deleteTransaction = function(req) {
  return req.store.destroyRecord('Transaction', req.params.id);
};

router.get('/transactions', api.transactions);
router.post('/transactions', api.addTransaction);

router.route('/transactions/:id')
  .get(api.transaction)
  .put(api.editTransaction)
  .delete(api.deleteTransaction);

module.exports = router;
