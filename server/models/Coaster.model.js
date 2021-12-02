const { Schema, model } = require("mongoose");

const coasterSchema = new Schema(
  {
    title: String,
    description: String,
    inversions: Number,
    length: Number,
    imageUrl: String
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Coaster = model("Coaster", coasterSchema);

module.exports = Coaster;
