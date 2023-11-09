const mongoose = require('mongoose');

const motivationSchema = new mongoose.Schema({
  prevention: { type: String },
  illness: { type: String },
  self_determination: { type: String },
  relatives: { type: String },
  lessons: { type: String },
});

const resuscitationSchema = new mongoose.Schema({
  medicine_desired: { type: String },
  no_intensive: { type: String },
  revival: { type: String },
  no_revival: { type: String },
});

const situationSchema = new mongoose.Schema({
  dyingProcess: { type: String },
  brain_injury: { type: String },
  dementia: { type: String },
});

const determinationSchema = new mongoose.Schema({
  essential: { type: String },
  no_intensive: { type: String },
  servere: { type: String },
  artificial_hydration: { type: String },
  discomfort: { type: String },
  medication: { type: String },
  medicines: { type: String },
  organ_donation: { type: String },
  research_purpose: { type: String },
  defibrillator: { type: String },
  dying_yeast: { type: String },
  suicide_option: { type: String },
  commitment: { type: String },
  discretionary_area: { type: String },
});


const whereaboutSchema = new mongoose.Schema({
  familiar_environment: { type: String },
  hospice: { type: String },
  to_hospital: { type: String },
  not_hospital: { type: String },
});
const supportSchema = new mongoose.Schema({
    doctor: { type: String },
    mental_support: { type: String },
    absolutely_not: { type: String },
  });
  const funeralwishesSchema = new mongoose.Schema({
    cremation: { type: String },
    burial: { type: String },
    arrangement: { type: String },
    miscellaneous: { type: String },
  });
  const atorneySchema = new mongoose.Schema({
    forms: { type: String },
    care_order: { type: String },
  });

  const feeSchema = new mongoose.Schema({
    regular: { type: String },
    reduced: { type: String },
  });

  const informationSchema = new mongoose.Schema({
    urgency: { type: String },
    alternate_address: { type: String },
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
    data_protection: { type: String },
    deposit: { type: String },
  });

const spvInfoSchema = new mongoose.Schema({
    motivation:motivationSchema,
    resuscitation:resuscitationSchema,
    situation:situationSchema,
    determination:determinationSchema,
    whereabout:whereaboutSchema,
    support:supportSchema,
    funeralwishes:funeralwishesSchema,
    atorney:atorneySchema,
    fee:feeSchema,
    information:informationSchema,
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
});

const SpvInfo = mongoose.model(
  'spv',
  spvInfoSchema,
  'spv'
);

module.exports = {
  SpvInfo,
};

