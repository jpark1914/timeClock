const express = require('express');
const router = express.Router();
const {Person, TimeStamp} = require('../../sequelize');

//Persons
router.get('/', async (req, res) =>{
    console.log('Getting your request for people');
    await Person.findAll()
    .then(people => res.json(people));
})

router.post('/', (req, res) => {
    console.log(`Request body is ` +req.body);
    console.log(`The request is  `+ req);
    Person.create({
        fname: req.body.fname,
        lname: req.body.lname
    })
    .then(person => res.json(person));
})

module.exports = router;