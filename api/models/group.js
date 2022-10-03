const mongoose = require('mongoose')

const GroupSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    users : [{type:mongoose.Schema.Types.ObjectId, ref:'spendItUser'}],
    events: [{type:mongoose.Schema.Types.ObjectId, ref:'spendItEvent'}],
})

module.exports = mongoose.model('spendItGroup',GroupSchema)