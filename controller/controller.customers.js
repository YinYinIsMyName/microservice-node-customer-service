const { CustomersService } = require('../services')
const response = require('../model/response')
const addCustomer = (req, res) => {
    const CustomerRequestedInputValue = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,

    }
    CustomersService.addCustomer(CustomerRequestedInputValue).then(data => {
        if (data.length == 0) {
            res.json(response({ message: "no data to be displayed", success: false }))
        }
        res.json(response({ success: true, payload: null }))
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })
}

const readCustomer = (req, res) => {
    return CustomersService.readCustomer().then(data => {
        res.json(response({ success: true, payload: data }))
    })
        .catch(err => {
            res.json({ message: err, success: false })
        })
}
const readCustomerById = (req, res) => {
    //query string /getbooks?id=1
    const id = req.query.id
    return CustomersService.readCustomerById(id).then(data => {
        data.length == 0 ? res.json(response({ message: "no data to be displayed", success: false }))
            :
            res.json(response({ success: true, payload: data }))
    })
        .catch(err => {
            res.json(response({ message: err, success: false }))
        })
}
module.exports = { addCustomer, readCustomer, readCustomerById }