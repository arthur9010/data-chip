const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')
const load = require('consign')
const router = express.Router()
const port = 3000

const mongoSeed = require('./database/seeds/')()
const mongo = require('./database/connection')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json())
mongo()
.on('error', console.log)
.on('disconnected', mongo)


load({cwd: 'src',}).include('routers').then('controllers').into(app)

app.listen(port, () => console.log('API RODANDO NA PORTA ', port))


module.exports = app


