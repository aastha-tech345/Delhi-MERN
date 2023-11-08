const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const activitySchema = new Schema({
  title:{type:String},
  administration:{type:String},
  editor:{type:String},
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  added_by:{type:String}
});

const Activity = mongoose.model('activity', activitySchema,'activity');

module.exports = { Activity };
