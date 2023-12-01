const mongoose = require("mongoose");

const authPersonSchema = new mongoose.Schema({
  healthCare_fname: { type: String },
  healthCare_lname: { type: String },
  healthCare_address: { type: String },
  healthCare_phone: { type: String },
});

const authPowerPersonSchema = new mongoose.Schema({
  powerOfAttorney_fname: { type: String },
  powerOfAttorney_lname: { type: String },
  powerOfAttorney_address: { type: String },
  powerOfAttorney_phone: { type: String },
});

const healthCareSchema = new mongoose.Schema({
  healthCareMasterData: { type: String },
  healthCareData:[authPersonSchema]
});

const powerofattorneySchema = new mongoose.Schema({
  AttorneyMasterData: { type: String },
  adoptDataFromHealthcare: { type: String },
  powerOfAttorneys:[authPowerPersonSchema]
});

const careProvisionSchema = new mongoose.Schema({
  CareProvisionMasterData: { type: String },
});

const securingattorneySchema = new mongoose.Schema({
  SecuringMasterData: { type: String },
});

const attorneySchema = new mongoose.Schema({
  healthCare: healthCareSchema,
  powerOfAttorney: powerofattorneySchema,
  careProvision: careProvisionSchema,
  securingattorney: securingattorneySchema,
  customer_id: { type: mongoose.Schema.Types.ObjectId }
});

const Attorney = mongoose.model("attorney", attorneySchema, "attorney");

module.exports = { Attorney };
