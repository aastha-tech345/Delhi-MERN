const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema(
  {
    icon: {
      type: String,
      // title:{type:String},
      // administration:{type:String},
    },
    message: {
      type: String,
      // title:{type:String},
      // administration:{type:String},
    },
    // email:{
    //   title:{type:String},
    //   administration:{type:String},
    // },
    // print:{
    //   title:{type:String},
    //   administration:{type:String},
    // },
    is_deleted: {
      type: String,
      enum: ["active", "deleted"],
      default: "active",
    },
    customer_id: { type: mongoose.Schema.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);

const Activity = mongoose.model("activity", activitySchema);

module.exports = { Activity };
