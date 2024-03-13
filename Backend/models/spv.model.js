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

const motivatedSchema = new mongoose.Schema({
  determination_diagonose: { type: String },
  relative_rejection: { type: String },
  angst_textbox: { type: String },
  motivation_text: { type: String },
});
const scopeSchema = new mongoose.Schema({
  process_dementia: { type: String },
  brain_servercare: { type: String },
});
const hopelessSchema = new mongoose.Schema({
  nolife_resuscitation: { type: String },
  noartificial_palliative: { type: String },
});
const artificialSchema = new mongoose.Schema({
  natual_rejection: { type: String },
  liquid: { type: String },
});
const complanindSchema = new mongoose.Schema({
  palliative_mind_clouding: { type: String },
});

const medicationSchema = new mongoose.Schema({
  medicate: { type: String },
});
const abodeSchema = new mongoose.Schema({
  familiar_hospice: { type: String },
  close_hospice: { type: String },
});

const accompanimentSchema = new mongoose.Schema({
  doctor: { type: String },
  assistance: { type: String },
  rejection_organejection: { type: String },
});
const pacemakerSchema = new mongoose.Schema({
  pacemaker: { type: String },
});
const euthanasiaSchema = new mongoose.Schema({
  euthanasia: { type: String },
  research_purposes: { type: String },
});
const funeralSchema = new mongoose.Schema({
  cremation_burial: { type: String },
  funeral_arrangements: { type: String },
  funeral_wishes: { type: String },
});
const commitmentSchema = new mongoose.Schema({
  immediately_discretionary: { type: String },
});
const intensiveSchema = new mongoose.Schema({
  intensive_care_medicine: { type: String },
});

const revivalSchema = new mongoose.Schema({
  resuscitate_revival: { type: String },
  resuscitation_medicine: { type: String },
});
const lifeSchema = new mongoose.Schema({
  high_restricted: { type: String },
  satisfied_enjoy: { type: String },
  burden: { type: String },
  life_quality: { type: String },
});
const worthSchema = new mongoose.Schema({
  family_friend: { type: String },
  independence_mentally: { type: String },
  others_work: { type: String },
  nature: { type: String },
  cultural: { type: String },
  worth_living: { type: String },
});
const waiverSchema = new mongoose.Schema({
  independence_contact: { type: String },
  healthy_sports: { type: String },
  independence_mobility: { type: String },
  drink_cultural: { type: String },
  others: { type: String },
  waiver: { type: String },
});
const restrictionsSchema = new mongoose.Schema({
  mobility_personal: { type: String },
  communication_ingestion: { type: String },
  thinking_independence: { type: String },
  restrictions: { type: String },
});
const acceptSchema = new mongoose.Schema({
  gladly_tempary: { type: String },
  necessary_load: { type: String },
  accept_help: { type: String },
});
const notworthliviingSchema = new mongoose.Schema({
  not_worth_living: { type: String },
});

const todSchema = new mongoose.Schema({
  end_beyond: { type: String },
  angst_remove: { type: String },
  salvation: { type: String },
  tod: { type: String },
});
const dyingwishesSchema = new mongoose.Schema({
  fast_consciously: { type: String },
  farewell_notalong: { type: String },
  dying_wishes: { type: String },
});
const fearofdyingSchema = new mongoose.Schema({
  painful_tedious: { type: String },
  helpless_maintained: { type: String },
  alone_anonymous: { type: String },
  fearofdying_anonymous: { type: String },
});
const spvInfoSchema = new mongoose.Schema(
  {
    motivation: motivatedSchema,
    scope: scopeSchema,
    hopeless: hopelessSchema,
    artificial: artificialSchema,
    complanind: complanindSchema,
    medication: medicationSchema,
    abode: abodeSchema,
    accompaniment: accompanimentSchema,
    pacemaker: pacemakerSchema,
    euthanasia: euthanasiaSchema,
    funeral: funeralSchema,
    commitment: commitmentSchema,
    intensive: intensiveSchema,
    revival: revivalSchema,
    life: lifeSchema,
    worth: worthSchema,
    waiver: waiverSchema,
    restrictions: restrictionsSchema,
    accept: acceptSchema,
    notworthliviing: notworthliviingSchema,
    tod: todSchema,
    dyingwishes: dyingwishesSchema,
    fearofdying: fearofdyingSchema,
    // situation: situationSchema,
    // determination: determinationSchema,
    // whereabout: whereaboutSchema,
    // support: supportSchema,
    // funeralwishes: funeralwishesSchema,
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
