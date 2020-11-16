const mongoose = require('mongoose')
const BankSchema = mongoose.Schema({
    _id: {
        type: String,
    },
    balance: {
        type: Number,
    },
    extract: [{
        value: Number,
        establishmentName: String,
    }],
    user_id: {
        type: String,
    }
})
mongoose.model('Bank', BankSchema)