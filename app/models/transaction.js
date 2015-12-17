'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  notes: { type: String },
  amount: { type: Number },
  createdAt: { type: Date, default: Date.now },
  budget: { type: ObjectId, ref: 'Budget', childPath: 'transactions' },
};

var transactionSchema = new Schema(fields);

transactionSchema.plugin(relationship, {relationshipPathName: 'budget'});

module.exports = mongoose.model('Transaction', transactionSchema);
