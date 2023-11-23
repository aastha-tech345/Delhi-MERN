const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const activitySchema = new Schema({
  phone:{
    title:{type:String},
    administration:{type:String},
  },
  message:{
    title:{type:String},
    administration:{type:String},
  },
  email:{
    title:{type:String},
    administration:{type:String},
  },
  print:{
    title:{type:String},
    administration:{type:String},
  },
  customer_id: { type: mongoose.Schema.Types.ObjectId},
});

const Activity = mongoose.model('activity', activitySchema,'activity');

module.exports = { Activity };
