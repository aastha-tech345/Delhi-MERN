const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = new Schema(
  {
    document_title: { type: String },
    document_type: { type: String },
    document_upload: { type: String },
    // customer_id: { type: String},
    added_by: { type: mongoose.Schema.Types.ObjectId },
    customer_id: { type: mongoose.Schema.Types.ObjectId },
    status: {
      type: String,
      enum: ["active", "deleted"],
      default: "active",
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Document = mongoose.model("document", documentSchema);

module.exports = { Document };
