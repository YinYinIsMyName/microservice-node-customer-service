const express = require('express')
const route = express.Router()
const CustomerRouter = require('./routes.customers')

route.use('/', CustomerRouter)

module.exports = route