const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const contactSchema = new Schema({
  fname: {type:String},
  lname: {type:String},
  phone: {type:String},
  email: {type:String},
  gender:{type:String},
  status: {
    type: String,
    enum: ['active', 'deleted'],
    default: 'active',
  },
  customer_id: { type: mongoose.Schema.Types.ObjectId }
});

const Contact = mongoose.model('contact', contactSchema,'contact');

module.exports = { Contact };
