const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailSchema = new Schema({
  designation: { type: String },
  content: { type: String },
  status: {
    type: String,
    enum: ["active", "deleted"],
    default: "active",
  },
  customer_id: { type: mongoose.Schema.Types.ObjectId },
});

const EmailTemplate = mongoose.model("email", emailSchema, "email");

module.exports = { EmailTemplate };
