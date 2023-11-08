const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const invoiceSchema = new Schema({
  product:{type:String},
  already_paid:{type:String},
  payment_method:{type:String},
  invoice_amount:{type:String},
  invoice_date:{type:String},
  delivery_date:{type:String},
  colleague:{type:String},
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  added_by:{type:String}
});

const Invoice = mongoose.model('invoice', invoiceSchema,'invoice');

module.exports = { Invoice };
