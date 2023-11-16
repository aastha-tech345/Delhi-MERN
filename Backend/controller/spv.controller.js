const SpvInfomation = require("../models/spv.model");
const CustomerModel = require("../models/customer.model");

exports.createSpv = async (req, res) => {
  try {
    const {
      motivation,
      resuscitation,
      situation,
      determination,
      whereabout,
      support,
      funeralwishes,
      atorney,
      fee,
      information,
    } = req.body;

    const user = await CustomerModel.Customer.findOne({
      created_by: "customer",
    });
    if (!user) {
      return res
        .status(400)
        .send({ message: "No customer found to link as parent" });
    }
    const spv = new SpvInfomation.SpvInfo({
      motivation,
      resuscitation,
      situation,
      determination,
      whereabout,
      support,
      funeralwishes,
      atorney,
      fee,
      information,
      added_by: null,
      customer_id: user._id,
    });

    const result = await spv.save();
    res.status(201).json({
      message: "spv was created",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating spv" });
  }
};

exports.getSpv = async(req,res)=>{
  const result = await SpvInfomation.SpvInfo.find()
  res.send(result)
}

exports.getSpvData = async(req,res)=>{
  const result = await SpvInfomation.SpvInfo.findOne({_id:req.params.id})
  res.send(result)
}

exports.getSpvDataUpdate = async(req,res)=>{
  const result = await SpvInfomation.SpvInfo.updateOne({_id:req.params.id},{$set:req.body})
  res.send(result)
}

exports.getSpvDataDelete = async(req,res)=>{
  const result = await SpvInfomation.SpvInfo.deleteOne({_id:req.params.id})
  res.send(result)
}


exports.getSpvSearch = async(req,res)=>{
  const result = await SpvInfomation.SpvInfo.find({
    "$or":[
      {fname:{$regex:req.params.key}}
    ]
  })
  res.send(result)
}