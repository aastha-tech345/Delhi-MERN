const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = new Schema(
  {
    document_title: { type: String },
    document_type: [],
    // document_upload: [],
    document_upload: Object,
    // customer_id: { type: String},
    added_by: { type: mongoose.Schema.Types.ObjectId },
    customer_id: { type: mongoose.Schema.Types.ObjectId },
    is_deleted: {
      type: String,
      enum: ["active", "deleted"],
      default: "active",
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Document = mongoose.model("document", documentSchema);

module.exports = { Document };
