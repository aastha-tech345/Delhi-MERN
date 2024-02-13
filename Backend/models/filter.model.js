const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filterSchema = new Schema({
  fname: { type: String },
  lname: { type: String },
  dob: { type: String },
  plz: { type: String },
  telephone: { type: String },
  mobile: { type: String },
  client_id: { type: String },
  next_shipping: { type: String },
  permanent_donors: { type: String },
  status:{type:String},
  is_deleted: {
    type: String,
    enum: ["active", "deleted"],
    default: "active",
  },
  added_by:{type:String},
  parent_id: { type: mongoose.Schema.Types.ObjectId },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

const FilterSchema = mongoose.model("filter", filterSchema);

module.exports = { FilterSchema };
