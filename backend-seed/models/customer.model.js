const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  fname: String,
  lname: String,
  gender: String,
  email: String,
  phone: String,
  skype: String,
  customer_id:{type:String}
});

const taskSchema = new Schema({
  title: String,
  start_date: Date,
  deadline: Date,
  assigned_to: String,
  employees: [String],
  task_status: String,
  customer_id:{type:String}
});

const customerSchema = new Schema({
  fname: {type:String},
  lname: {type:String},
  phone: {type:String},
  email: {type:String},
  title: {type:String},
  gender: {type:String},
  primary_contact: {type:String},
  coustomerInfo: {
    fname: {type:String},
    lname: {type:String},
    gender: {type:String},
    email: {type:String},
    phone: {type:String},
  },
  contacts: contactSchema,
  tasks: taskSchema,
  created_by: { type: Schema.Types.ObjectId, ref: 'Customer' },
  customer_id: { type: Schema.Types.ObjectId, ref: 'Customer' },
  parent_id: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Customer = mongoose.model('customer', customerSchema,'customer');

module.exports = { Customer };
