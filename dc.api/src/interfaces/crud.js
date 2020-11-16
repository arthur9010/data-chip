const mongoose = require('mongoose')
module.exports = (nameModel) => {
    require(`../models/${nameModel}`)
    const Model = mongoose.model(nameModel)
    return {
        create: async (regions) => {
            try {
                return await Model.create(regions)
            } catch (error) {
                console.error(error)
            }
        },
        findAll: async (sort=null) => {
            try {
                console.log(sort)
                return await Model.find({}).sort(sort)
            } catch (error) {
                console.error(error)
            }
        },
        findOne: async (obj, sort) => {
            try {
                return await Model.findOne(obj).sort()
            } catch (error) {
                console.error(error)
            }
        },
        find: async (obj, sort) => {
            try {
                return await Model.find(obj).sort()
            } catch (error) {
                console.error(error)
            }
        },
        delete: async (obj) => {
            try {
                return await Model.remove(obj)
            } catch (error) {
                console.error(error)
            }
        }
    }
}