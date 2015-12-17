var Mystique = require('mystique');

var BudgetTransformer = Mystique.Transformer.extend({
  resourceName: 'budget',
  mapOut: function(budget) {
    return {
      id: budget.id,
      name: budget.name,
      startDate: budget.startDate,
      startingAmount: budget.startingAmount,
      transactions: budget.transactions,
    };
  },

  mapIn(req) {
    return {
      name: req.body.budget.name,
      startDate: req.body.budget.startDate,
      startingAmount: req.body.budget.startingAmount,
      transactions: req.body.budget.transactions,
    };
  },
});

Mystique.registerTransformer('Budget', BudgetTransformer);
