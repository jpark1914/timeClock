const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//MIDDLE WARE
app.use(bodyParser.json())

//API ENDPOINTS
const person = require('./api/routes/person');
app.use('/api/person', person);




const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost: ${port}`)
})

module.exports = app;
