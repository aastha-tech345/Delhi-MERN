const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    created_by:{type:String},
    team_name:{type:String},
    team_members:[String],
    team_manager:{type:String},
    description:{type:String},
    parent_id:{type:String}
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

const Teams = mongoose.model('team', teamSchema);

module.exports = {
    Teams
};