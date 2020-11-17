const BANK = require('../interfaces/crud')('Bank')
const USER = require('../interfaces/crud')('User')

module.exports = {
    create: async (user) => {
        return await CRUD.create(user)
    },
    findAll: async () => {
        return await CRUD.findAll('name')
    },
    find: async(obj) => {
        return await CRUD.find(obj)
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