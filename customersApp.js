const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
//.env configure
require('dotenv').config()

const customerRoute = require('./routes')
const PORT = process.env.Customer_PORT

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api/v1', customerRoute)

app.listen(PORT, () => {
    console.log(`Customers App is listening on ${PORT}`)
})