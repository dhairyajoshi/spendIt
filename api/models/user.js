const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  phoneNo: { type: String, unique: true, required: true },
  contacts: [{type:mongoose.Schema.Types.ObjectId,ref:"spendItUser"}]
});

module.exports = mongoose.model("spendItUser", UserSchema);
