const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  date: Date,
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "spendItUser" }],
  moneyspent: { type: Number, required: true },
  paidby: [{type:mongoose.Schema.Types.ObjectId,ref:"spendItUser"}],
  userspaid: [{type:mongoose.Schema.Types.ObjectId,ref:"spendItUser"}],
  perhead: Number
});

module.exports = mongoose.model("SpendItEvent", EventSchema);
