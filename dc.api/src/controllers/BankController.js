const CRUD = require('../interfaces/crud')('Bank')

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
    draft: async({ userId, value, establishmentName, }) => {
        const bank = await CRUD.findOne({ user_id: userId })
        bank.balance -= value
        bank.extract.push({
            value,
            establishmentName,
        })
        bank.save()
        return bank
    }
}