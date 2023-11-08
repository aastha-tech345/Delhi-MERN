const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const healthCareSchema = new Schema({
  master_data: { type: String },
});
const pawerofattorneySchema = new Schema({
  master_data: { type: String },
  adopt_data: { type: String },
});
const careProvisionSchema = new Schema({
  master_data: { type: String },
});
const securingattorneySchema = new Schema({
  master_data: { type: String },
  adopt_data: { type: String },
});
const attorneySchema = new Schema({
  healthcare: healthCareSchema,
  power: pawerofattorneySchema,
  provision: careProvisionSchema,
  securing: securingattorneySchema,
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  added_by: { type: String },
});

const Attorney = mongoose.model("attorney", attorneySchema, "attorney");

module.exports = { Attorney };
