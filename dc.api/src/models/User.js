const { model, Schema } = require('mongoose')
const UserSchema = Schema({
    _id: {
        type: String,
        unique: true,
    },
    chip_id: {
        type: String,
        unique: true,
    },
    socialName: {
        type: String,
    },
    civilName: {
        type: String,
    },
    career: {
        type: String,
    },
    birthDate: {
        type: String,
    },
    cpf: {
        type: String,
        unique: true,
    },
    rg: {
        type: String,
    },
    biologicalSex: {
        type: String,
    },
    bloodGroup: {
        type: String,
    },
    weight: {
        type: String,
    },
    healthProblems: {
        type: Array,
    },
    allergies: {
        type: Array,
    },
})
model('User', UserSchema)