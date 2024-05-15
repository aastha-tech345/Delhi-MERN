const mongoose = require("mongoose");

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
  salution: { type: Array, default: [] },
  country: { type: String },
  title: { type: String },
});

const motivatedSchema = new mongoose.Schema({
  determination: { type: String },
  diagonose: { type: String },
  relative: { type: String },
  rejection: { type: String },
  angst: { type: String },
  motivation: { type: String },
});
const scopeSchema = new mongoose.Schema({
  dry_process: { type: String },
  dementia: { type: String },
  brain: { type: String },
  servercare: { type: String },
});
const hopelessSchema = new mongoose.Schema({
  nolife_measures: { type: String },
  no_palliative: { type: String },
  no_resuscitation: { type: String },
  no_artificial: { type: String },
});
const artificialSchema = new mongoose.Schema({
  natual: { type: String },
  rejection: { type: String },
  liquid: { type: String },
});
const complanindSchema = new mongoose.Schema({
  palliative: { type: String },
  mind_clouding: { type: String },
});

const medicationSchema = new mongoose.Schema({
  medicate: { type: String },
  medicate_relief: { type: String },
});
const abodeSchema = new mongoose.Schema({
  familiar_environment: { type: String },
  hospice: { type: String },
  close_ones: { type: String },
  hospital: { type: String },
  hospital_no: { type: String },
});

const accompanimentSchema = new mongoose.Schema({
  doctor: { type: String },
  assistance: { type: String },
  rejection_organejection: { type: String },
});
const pacemakerSchema = new mongoose.Schema({
  pacemaker: { type: String },
  defibrillator: { type: String },
  neither_nor: { type: String },
});
const euthanasiaSchema = new mongoose.Schema({
  euthanasia_yes: { type: String },
  euthanasia_no: { type: String },
  research_purposes: { type: String },
});
const funeralSchema = new mongoose.Schema({
  cremation: { type: String },
  burial: { type: String },
  funeral_arrangements: { type: String },
  funeral_wishes: { type: String },
});
const commitmentSchema = new mongoose.Schema({
  immediately: { type: String },
  discretionary: { type: String },
});
const intensiveSchema = new mongoose.Schema({
  intensive_care_medicine_yes: { type: String },
  intensive_care_medicine_no: { type: String },
});

const revivalSchema = new mongoose.Schema({
  resuscitate_quickly: { type: String },
  revival_no: { type: String },
  resuscitation_op: { type: String },
  resuscitation_medicine_no: { type: String },
});

const lifeSchema = new mongoose.Schema({
  very_high: { type: String },
  satisfied: { type: String },
  restricted: { type: String },
  enjoy_life: { type: String },
  burden: { type: String },
  life_quality: { type: String },
});

const worthSchema = new mongoose.Schema({
  family: { type: String },
  acquaintances: { type: String },
  independence: { type: String },
  mentally: { type: String },
  others: { type: String },
  work: { type: String },
  nature: { type: String },
  sport: { type: String },
  cultural: { type: String },
  worth_living: { type: String },
  travel: { type: String },
});
const waiverSchema = new mongoose.Schema({
  independence: { type: String },
  social_contact: { type: String },
  mentally_healthy: { type: String },
  active_sports: { type: String },
  independence_waive: { type: String },
  mobility: { type: String },
  eatdrink: { type: String },
  cultural: { type: String },
  others: { type: String },
  no_waiver: { type: String },
});
const restrictionsSchema = new mongoose.Schema({
  mobility: { type: String },
  personal_hygiene: { type: String },
  ingestion: { type: String },
  communication: { type: String },
  thinking: { type: String },
  independence: { type: String },
  restrictions: { type: String },
});
const acceptSchema = new mongoose.Schema({
  gladly: { type: String },
  temporary: { type: String },
  necessary: { type: String },
  no_load: { type: String },
  accept_help: { type: String },
});
const notworthliviingSchema = new mongoose.Schema({
  not_worth_living: { type: String },
});

const todSchema = new mongoose.Schema({
  end_life: { type: String },
  beyond: { type: String },
  angst: { type: String },
  remove: { type: String },
  salvation: { type: String },
  tod: { type: String },
});
const dyingwishesSchema = new mongoose.Schema({
  fast: { type: String },
  consciously: { type: String },
  farewell: { type: String },
  no_along: { type: String },
  dying_wishes: { type: String },
});
const fearofdyingSchema = new mongoose.Schema({
  painful: { type: String },
  tedious: { type: String },
  helpless: { type: String },
  poorly_maintained: { type: String },
  alone: { type: String },
  anonymous: { type: String },
  fearofdying: { type: String },
  fear_anonymous: { type: String },
});

const phaseSchema = new mongoose.Schema({
  dignified: { type: String },
  professional: { type: String },
  assistance: { type: String },
  quiet: { type: String },
  without_extension: { type: String },
  consciously: { type: String },
  own_environment: { type: String },
  anonymous_phase: { type: String },
  last_phase_of_life: { type: String },
});
const experiencesSchema = new mongoose.Schema({
  dry_experiences: { type: String },
});

const additionalValueSchema = new mongoose.Schema({
  sending: { type: String },
  sendingValue: { type: String },
});

const organSchema = new mongoose.Schema({
  organ_donation_yes: { type: String },
  organ_donation_no: { type: String },
  organ_research_purposes: { type: String },
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
    phase: phaseSchema,
    experiences: experiencesSchema,
    additionalValue: additionalValueSchema,
    organ: organSchema,
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
