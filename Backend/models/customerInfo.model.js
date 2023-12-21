const mongoose = require("mongoose");

const orderingMaterialsSchema = new mongoose.Schema({
  orderNumber: { type: String },
  newsletterDate: { type: String },
  extras: { type: String },
  newsletterSubscription: { type: String },
});

const customerInfoStatuSchema = new mongoose.Schema({
  clientStatus: [],
  dataProtection: { type: String },
  employee: { type: String },
  lname: { type: String },
  dataCollection: { type: String },
});

const customerContactSchema = new mongoose.Schema({
  title: { type: String },
  salution: { type: String },
  gender: { type: String },
  fname: { type: String },
  lname: { type: String },
  dob: { type: String },
  name: { type: String },
});

const customerBillSchema = new mongoose.Schema({
  billAddress: { type: String },
  billPlz: { type: String },
  billLand: { type: String },
  billOrt: { type: String },
});

const customerDeliverySchema = new mongoose.Schema({
  fname: { type: String },
  lname: { type: String },
  plz: { type: String },
  address: { type: String },
  land: { type: String },
  ort: { type: String },
  phone: { type: String },
  mobile: { type: String },
  alreadyPaid: { type: String },
});

const customerDepositSchema = new mongoose.Schema({
  deposit: { type: String },
  emergencyPass: { type: String },
  reminderBrand: { type: String },
  updateStamp: { type: String },
  nextBrand: { type: String },
});

const customerBurialSchema = new mongoose.Schema({
  termination: { type: String },
  terminationDeath: { type: String },
  notTermination: { type: String },
  financialReasons: { type: String },
});
const customerInfoSchema = new mongoose.Schema(
  {
    orderingMaterials: orderingMaterialsSchema,
    customerInfoStatu: customerInfoStatuSchema,
    those: { type: String },
    email:{type:String},
    customerContact: customerContactSchema,
    customerBills: customerBillSchema,
    customerDelivery: customerDeliverySchema,
    customerDeposit: customerDepositSchema,
    customerBurial: customerBurialSchema,
    customer_id: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const CustomerInfo = mongoose.model("customerInfo", customerInfoSchema);

module.exports = {
  CustomerInfo,
};
