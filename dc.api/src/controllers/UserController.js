const CRUD = require('../interfaces/crud')('User')
module.exports = {
    create: async (user) => {
        return await CRUD.create(user)
    },
    findAll: async () => {
        return await CRUD.findAll('name')
    },
    find: async(obj) => {
        return await CRUD.find(obj)
    }
}