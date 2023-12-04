const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = new Schema({
  document_title: { type: String },
  document_type: { type: String },
  document_upload: { type: String },
  // customer_id: { type: String},
  // added_by:{type:String}
  customer_id: { type: mongoose.Schema.Types.ObjectId },
  status: {
    type: String,
    enum: ["active", "deleted"],
    default: "active",
  },
});

const Document = mongoose.model("document", documentSchema, "document");

module.exports = { Document };
