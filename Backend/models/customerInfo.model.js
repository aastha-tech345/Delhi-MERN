const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
  client_status: { type: String },
  data_protection: { type: String },
  employee: { type: String },
  data_collection: { type: String },
});

const contactSchema = new mongoose.Schema({
  salutation: { type: String },
  gender: { type: String },
  fname: { type: String },
  lname: { type: String },
  dob: { type: String },
});

const billSchema = new mongoose.Schema({
  address: { type: String },
  ort: { type: String },
  land: { type: String },
  plz: { type: String },
});

const deliverySchema = new mongoose.Schema({
  delivery_fname: { type: String },
  delivery_lname: { type: String },
  delivery_address: { type: String },
  delivery_ort: { type: String },
  delivery_land: { type: String },
  delivery_plz: { type: String },
  delivery_email: { type: String },
  delivery_phone: { type: String },
  delivery_mobile: { type: String },
  delivery_alreadyPaid: { type: String },
});

const depositSchema = new mongoose.Schema({
  spv_deposit: { type: String },
  opv_deposit: { type: String },
  hvd_deposit: { type: String },
  start_date: { type: String },
  last_stamp: { type: String },
  next_brand: { type: String },
  return_last_stamp: { type: String },
  emergency_pass: { type: String },
  memory: { type: String },
});

const customerInfoSchema = new mongoose.Schema({
  customer_id:{type:String},
  added_by: { type: String },
  ordered_question: { type: String },
  extras: { type: String },
  newsletter: { type: String },
  newsletter_subscription: { type: String },
  statu: statusSchema,
  those: { type: String },
  contact: contactSchema,
  bill: billSchema,
  delivery: deliverySchema,
  deposit: depositSchema,
  completion: { type: String },
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
});

const CustomerInfo = mongoose.model(
  'customerInfo',
  customerInfoSchema,
  'customerInfo'
);

module.exports = {
  CustomerInfo,
};
