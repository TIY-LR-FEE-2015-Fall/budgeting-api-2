'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var fields = {
  name: { type: String },
  startDate: { type: Date, default: Date.now },
  startingAmount: { type: Number },
  transactions: [{ type: ObjectId, ref: 'Transaction' }],
};

var budgetSchema = new Schema(fields);

module.exports = mongoose.model('Budget', budgetSchema);
