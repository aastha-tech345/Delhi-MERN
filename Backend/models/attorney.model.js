const mongoose = require("mongoose");

const authPersonSchema = {
  healthCare_fname: { type: String },
  healthCare_lname: { type: String },
  healthCare_address: { type: String },
  healthCare_phone: [],
};

const authPowerPersonSchema = {
  powerOfAttorney_fname: { type: String },
  powerOfAttorney_lname: { type: String },
  powerOfAttorney_address: { type: String },
  powerOfAttorney_phone: [],
};

const healthCareSchema = {
  healthCareMasterData: { type: String },
  healthCareData: [authPersonSchema],
};

const powerofattorneySchema = {
  AttorneyMasterData: { type: String },
  adoptDataFromHealthcare: { type: String },
  powerOfAttorneys: [authPowerPersonSchema],
};
const careProvisionSchema = {
  CareProvisionMasterData: { type: String },
};

const securingattorneySchema = {
  SecuringMasterData: { type: String },
};

const attorneySchema = new mongoose.Schema({
  healthCare: healthCareSchema,
  powerOfAttorneyData: powerofattorneySchema,
  careProvision: careProvisionSchema,
  securingattorney: securingattorneySchema,
  customer_id: { type: mongoose.Schema.Types.ObjectId },
});

const Attorney = mongoose.model("attorney", attorneySchema, "attorney");

module.exports = { Attorney };
