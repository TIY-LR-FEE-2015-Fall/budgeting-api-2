var Mystique = require('mystique');

var TransactionTransformer = Mystique.Transformer.extend({
  resourceName: 'transaction',
  mapOut: function(transaction) {
    return {
      id: transaction.id,
      notes: transaction.notes,
      amount: transaction.amount,
      createdAt: transaction.createdAt,
      budget: transaction.budget,
    };
  },

  mapIn(req) {
    return {
      notes: req.body.transaction.notes,
      amount: req.body.transaction.amount,
      createdAt: req.body.transaction.createdAt,
      budget: req.body.transaction.budget,
    };
  },
});

Mystique.registerTransformer('Transaction', TransactionTransformer);
