const mongoose = require("mongoose");

const authPersonSchema = {
  healthCare_fname: { type: String },
  healthCare_lname: { type: String },
  healthCare_address: { type: String },
  healthCare_phone: { type: String },
};

const authPowerPersonSchema = {
  powerOfAttorney_fname: { type: String },
  powerOfAttorney_lname: { type: String },
  powerOfAttorney_address: { type: String },
  powerOfAttorney_phone: { type: String },
};

const healthCareSchema = {
  healthCareMasterData: { type: String },
  healthCareData: [authPersonSchema],
};

const powerofattorneySchema = {
  AttorneyMasterData: { type: String },
  adoptDataFromHealthcare: { type: String },
  powerOfAttorneyData: [authPowerPersonSchema],
};
const careProvisionSchema = {
  CareProvisionMasterData: { type: String },
};

const securingattorneySchema = {
  SecuringMasterData: { type: String },
};

const attorneySchema = new mongoose.Schema({
  healthCare: healthCareSchema,
  powerOfAttorney: powerofattorneySchema,
  careProvision: careProvisionSchema,
  securingattorney: securingattorneySchema,
  customer_id: { type: mongoose.Schema.Types.ObjectId },
});

const Attorney = mongoose.model("attorney", attorneySchema, "attorney");

module.exports = { Attorney };
