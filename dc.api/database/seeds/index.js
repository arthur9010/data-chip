const seeder = require('mongoose-seed');
const env = require('../../config/env')
const data = require('./data')
module.exports = () => {
    console.log('RODANDO SEEDS')
    seeder.connect(env.URL_MONGO_DB, function() {    
        seeder.loadModels([
            'src/models/User.js',
            'src/models/Bank.js',
        ])
        seeder.clearModels(['User'], function() {
            seeder.populateModels(data, function() {
                seeder.disconnect();
            })
        })
    })
}