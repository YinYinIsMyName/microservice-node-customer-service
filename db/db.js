const mysql2 = require('mysql2')
const util = require('util')

const mypool = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

query = util.promisify(mypool.query).bind(mypool)

const addCustomer = customerValues => {
    const { name, age, address } = customerValues
    return query(`INSERT INTO customers_facts(name,age,address) VALUES (?,?,?)`, [name, age, address])
}

const readCustomer = _ => {
    return query(`SELECT * FROM customers_facts`)
}

const readCustomerById = id => {
    return query(`SELECT * FROM customers_facts WHERE id=${id}`)
}
module.exports = { addCustomer, readCustomer, readCustomerById }