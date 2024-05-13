const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const invoiceSchema = new Schema(
  {
    product: { type: String },
    alreadyPaid: { type: Boolean },
    paymentMethod: { type: String },
    invoiceAmount: { type: String },
    invoiceDate: { type: String },
    deliveryDate: { type: String },
    transaction_no: { type: String },
    incoming_payment: { type: String },
    employeeData: [],
    customer_id: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Invoice = mongoose.model("invoice", invoiceSchema);

module.exports = { Invoice };
