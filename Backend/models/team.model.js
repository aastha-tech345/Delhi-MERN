const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    team_name: { type: String, required: true },
    team_members: { type: [String], required: true },
    team_manager: { type: String, required: true },
    description: { type: String, required: true },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Teams = mongoose.model("team", teamSchema);

module.exports = {
  Teams,
};
