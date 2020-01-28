const { db } = require('../db')


const addCustomer = CustomerValue => {

    return db.addCustomer(CustomerValue)
}

const readCustomer = _ => {
    return db.readCustomer()
}

const readCustomerById = id => {
    console.log(id)
    return db.readCustomerById(id)
}
module.exports = { addCustomer, readCustomer ,readCustomerById }