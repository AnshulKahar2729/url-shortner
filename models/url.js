const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const urlSchema = new Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamps: { type: Number } }],
  },
  { timestamps: true }
);

const URL = model("Url", urlSchema);
module.exports = URL;
