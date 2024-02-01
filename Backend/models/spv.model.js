const mongoose = require("mongoose");

const motivationSchema = new mongoose.Schema({
  prevention: { type: String },
  illness: { type: String },
  selfDetermination: { type: String },
  relatives: { type: String },
  lessons: { type: String },
  matarialInformation: { type: String },
});

const resuscitationSchema = new mongoose.Schema({
  medicineDesired: { type: String },
  noIntensive: { type: String },
  revival: { type: String },
  noRevival: { type: String },
  resuscitationInformation: { type: String },
});

const situationSchema = new mongoose.Schema({
  dyingProcess: { type: String },
  brainInjury: { type: String },
  dementia: { type: String },
  situationInformation: { type: String },
});

const determinationSchema = new mongoose.Schema({
  essential: { type: String },
  noIntensive: { type: String },
  servere: { type: String },
  artificialHydration: { type: String },
  discomfort: { type: String },
  medication: { type: String },
  medicines: { type: String },
  organDonation: { type: String },
  researchPurpose: { type: String },
  defibrillator: { type: String },
  dyingYeast: { type: String },
  suicideOption: { type: String },
  commitment: { type: String },
  discretionaryArea: { type: String },
  rejection_organ: { type: String },
  pacemaker: { type: String },
  determination_noIntensive: { type: String },
  determinationInformation: { type: String },
});

const whereaboutSchema = new mongoose.Schema({
  familiarEnvironment: { type: String },
  hospice: { type: String },
  toHospital: { type: String },
  notHospital: { type: String },
});
const supportSchema = new mongoose.Schema({
  doctor: { type: String },
  mentalSupport: { type: String },
  absolutelyNot: { type: String },
  mentalInformation: { type: String },
});
const funeralwishesSchema = new mongoose.Schema({
  cremation: { type: String },
  burial: { type: String },
  arrangement: { type: String },
  miscellaneous: { type: String },
  funeralInformation: { type: String },
});
const atorneySchema = new mongoose.Schema({
  forms: { type: String },
  careOrder: { type: String },
});

const feeSchema = new mongoose.Schema({
  regular: { type: String },
  reduced: { type: String },
  feeInformation: { type: String },
});

const informationSchema = new mongoose.Schema({
  urgency: { type: String },
  alternateAddress: { type: String },
  creation: { type: String },
  cntactdetails: { type: String },
  fname: { type: String },
  lname: { type: String },
  address: { type: String },
  street: { type: String },
  plz: { type: String },
  ort: { type: String },
  phone: { type: String },
  mobile: { type: String },
  dataProtection: { type: String },
  deposit: { type: String },
});

const spvInfoSchema = new mongoose.Schema(
  {
    motivation: motivationSchema,
    resuscitation: resuscitationSchema,
    situation: situationSchema,
    determination: determinationSchema,
    whereabout: whereaboutSchema,
    support: supportSchema,
    funeralwishes: funeralwishesSchema,
    atorney: atorneySchema,
    fee: feeSchema,
    information: informationSchema,
    customer_id: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const SpvInfo = mongoose.model("spv", spvInfoSchema);

module.exports = {
  SpvInfo,
};
