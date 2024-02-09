const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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

const customerInfo = {
  fname: { type: String },
  lname: { type: String },
  phone: { type: String },
  email: { type: String, unique: true },
  plz: { type: String },
  city: { type: String },
  street: { type: String },
  land: { type: String },
  startDate: { type: String },
  dob: { type: String },
  status: { type: String },
  id: { type: String },
};
const customerSchema = new Schema(
  {
    customer: customerInfo,
    orderingMaterials: orderingMaterialsSchema,
    customerInfoStatu: customerInfoStatuSchema,
    those: { type: String },
    customerContact: customerContactSchema,
    customerBills: customerBillSchema,
    customerDelivery: customerDeliverySchema,
    customerDeposit: customerDepositSchema,
    customerBurial: customerBurialSchema,
    // created_by: { type: Schema.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      enum: ["active", "deleted"],
      default: "active",
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Customer = mongoose.model("customer", customerSchema);

module.exports = { Customer };
