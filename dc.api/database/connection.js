const mongoose = require('mongoose');
const config = require('../config/env')

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
const uri = config.URL_MONGO_DB

module.exports = () => {
    mongoose.connect(uri, options).then(() => {
        console.log('mongo conectado!');
    }).catch(err => {
        console.log(err)
        console.log('mongo não conectado')
    });

    return mongoose.connection;
}