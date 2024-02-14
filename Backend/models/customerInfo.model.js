const mongoose = require("mongoose");

const orderingMaterialsSchema = {
  orderNumber: { type: String, default: "" },
  newsletterDate: { type: String, default: "" },
  extras: { type: String, default: "" },
  newsletterSubscription: { type: String, default: "" },
};

const customerInfoStatuSchema = {
  clientStatus: { type: Array, default: [] },
  dataProtection: { type: String, default: "" },
  employee: { type: String, default: "" },
  lname: { type: String, default: "" },
  dataCollection: { type: String, default: "" },
};

const customerContactSchema = {
  title: { type: String, default: "" },
  salution: { type: String, default: "" },
  gender: { type: String, default: "" },
  fname: { type: String, default: "" },
  lname: { type: String, default: "" },
  dob: { type: String, default: "" },
  name: { type: String, default: "" },
};

const customerBillSchema = {
  billAddress: { type: String, default: "" },
  billPlz: { type: String, default: "" },
  billLand: { type: String, default: "" },
  billOrt: { type: String, default: "" },
};

const customerDeliverySchema = {
  fname: { type: String, default: "" },
  lname: { type: String, default: "" },
  plz: { type: String, default: "" },
  address: { type: String, default: "" },
  land: { type: String, default: "" },
  ort: { type: String, default: "" },
  phone: { type: String, default: "" },
  mobile: { type: String, default: "" },
  alreadyPaid: { type: String, default: "" },
};

const customerDepositSchema = {
  deposit: { type: String, default: "" },
  emergencyPass: { type: String, default: "" },
  reminderStamp: { type: String, default: "" },
  updateStamp: { type: String, default: "" },
  nextBrand: { type: String, default: "" },
  lastStamp: { type: String, default: "" },
  startDeposit: { type: String, default: "" },
};

const customerBurialSchema = {
  termination: { type: String, default: "" },
  terminationDeath: { type: String, default: "" },
  notTermination: { type: String, default: "" },
  financialReasons: { type: String, default: "" },
};

const customerInfoSchema = new mongoose.Schema(
  {
    orderingMaterials: orderingMaterialsSchema,
    customerInfoStatu: customerInfoStatuSchema,
    those: [],
    // email: { type: String },
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
