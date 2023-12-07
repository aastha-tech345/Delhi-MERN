const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const printSchema = new Schema({
  designation: { type: String },
  content: { type: String },
  status: {
    type: String,
    enum: ["active", "deleted"],
    default: "active",
  },
//   customer_id: { type: mongoose.Schema.Types.ObjectId },
  customer_id: { type: String },
});

const printTemplate = mongoose.model("print", printSchema, "print");

module.exports = { printTemplate };
