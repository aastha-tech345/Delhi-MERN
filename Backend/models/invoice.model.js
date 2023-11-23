const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const invoiceSchema = new Schema({
  product:{type:String},
  alreadyPaid:{type:String},
  paymentMethod:{type:String},
  invoiceAmount:{type:String},
  invoiceDate:{type:String},
  deliveryDate:{type:String},
  colleague:{type:String},
  customer_id: { type: mongoose.Schema.Types.ObjectId },
});

const Invoice = mongoose.model('invoice', invoiceSchema,'invoice');

module.exports = { Invoice };
