const express  = require('express')
const route = express.Router()
const {CustomerController} = require('../controller')

route.post('/addcustomers',CustomerController.addCustomer)
route.get('/',CustomerController.readCustomer)
//query string api /getbyId?id=$id
route.get('/getbyId',CustomerController.readCustomerById)
module.exports = route