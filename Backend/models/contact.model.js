const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  fname: { type: String },
  lname: { type: String },
  phone: { type: String },
  email: { type: String },
  gender: { type: String },
  statu: { type: String },
  // customer_id: { type: String },
  added_by: { type: mongoose.Schema.Types.ObjectId },
  status: {
    type: String,
    enum: ["active", "deleted"],
    default: "active",
  },
  id: { type: String },
  customer_id: { type: mongoose.Schema.Types.ObjectId },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

const Contact = mongoose.model("contact", contactSchema);

module.exports = { Contact };
