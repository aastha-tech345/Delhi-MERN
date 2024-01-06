const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const printSchema = new Schema(
  {
    findBy:{type:String},
    designation: { type: String },
    content: { type: String },
    is_deleted: {
      type: String,
      enum: ["active", "deleted"],
      default: "active",
    },
    email_type: {
      type: Number,
      default: 0,
      enum: [0, 1],
    },
    customer_id: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const printTemplate = mongoose.model("printTemplate", printSchema);

module.exports = { printTemplate };
