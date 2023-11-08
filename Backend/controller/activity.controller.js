const ActivityInfomation = require("../models/activity.model");
const  CustomerModel  = require("../models/customer.model");

exports.createActivity = async (req, res) => {
  try {
    const { title, adinistration, editor } = req.body;

    const user = await CustomerModel.Customer.findOne({ created_by: "customer" });
    if (!user) {
      return res
        .status(400)
        .send({ message: "No customer found to link as parent" });
    }
    const activity = new ActivityInfomation.Activity({
      title,
      adinistration,
      editor,
      added_by: null,
      customer_id: user._id,
    });

    const result = await activity.save();
    res.status(201).json({
      message: "activity was created",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating activity" });
  }
};


exports.getActivityData = async(req,res)=>{
  const result = await ActivityInfomation.Activity.findOne({_id:req.params.id})
  res.send(result)
}