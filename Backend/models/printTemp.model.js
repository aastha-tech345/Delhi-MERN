const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const printSchema = new Schema({
  theme:{type:String},
  news:{type:String},
  added_by:{type:String}
});

const Print = mongoose.model('printTemplate', printSchema,'printTemplate');

module.exports = { Print };
