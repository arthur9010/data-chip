const BANK = require('../interfaces/crud')('Bank')
const USER = require('../interfaces/crud')('User')

module.exports = {
    create: async (user) => {
        return await BANK.create(user)
    },
    findAll: async () => {
        return await BANK.findAll('name')
    },
    find: async(obj) => {
        return await BANK.findOne(obj)
    },
    debit: async({ chipId, value, establishmentName, }) => {
        const user = await USER.findOne({ chip_id: chipId.trim() })
        const bank = await BANK.findOne({ user_id: user._id })
        bank.balance -= value
        bank.extract.push({
            value,
            establishmentName,
        })
        bank.save()
        return bank
    }
}