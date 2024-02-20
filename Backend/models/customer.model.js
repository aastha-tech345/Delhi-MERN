const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderingMaterialsSchema = {
  orderNumber: { type: String, default: "" },
  newsletterDate: { type: String, default: "10.01.23" },
  extras: { type: String, default: "" },
  newsletterSubscription: { type: String, default: "" },
};

const customerInfoStatuSchema = {
  clientStatus: { type: Array, default: [] },
  dataProtection: { type: Boolean, default: false },
  employee: { type: String, default: "" },
  customerInfo_lname: { type: String, default: "" },
  dataCollection: { type: String, default: "10.01.23" },
};

const customerContactSchema = {
  title: { type: String, default: "" },
  salution: { type: String, default: "" },
  gender: { type: String, default: "" },
  fname: { type: String, default: "" },
  lname: { type: String, default: "" },
  dob: { type: String, default: "10.01.23" },
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
  alreadyPaid: { type: Boolean, default: false },
};

const customerDepositSchema = {
  deposit: { type: Boolean, default: false },
  emergencyPass: { type: Boolean, default: false },
  reminderStamp: { type: String, default: "10.01.23" },
  updateStamp: { type: String, default: "10.01.23" },
  nextBrand: { type: String, default: "10.01.23" },
  lastStamp: { type: String, default: "10.01.23" },
  startDeposit: { type: String, default: "10.01.23" },
};

const customerBurialSchema = {
  termination: { type: Boolean, default: false },
  terminationDeath: { type: Boolean, default: false },
  notTermination: { type: Boolean, default: false },
  financialReasons: { type: Boolean, default: false },
};

const customerInfo = {
  fname: { type: String },
  lname: { type: String },
  phone: { type: String },
  email: { type: String },
  plz: { type: String, default: " " },
  city: { type: String, default: " " },
  street: { type: String, default: " " },
  land: { type: String, default: " " },
  startDate: { type: String, default: "10.01.23" },
  dob: { type: String, default: "10.01.23" },
  status: { type: Array, default: [] },
  id: { type: String },
  created_by: { type: Schema.Types.ObjectId, ref: "User" },
  services: { type: Schema.Types.ObjectId, ref: "SpvInfo" }
};
const customerSchema = new Schema(
  {
    customer: customerInfo,
    orderingMaterials: orderingMaterialsSchema,
    customerInfoStatu: customerInfoStatuSchema,
    those: [],
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
