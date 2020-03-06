const express = require('express');
const router = express.Router();
const { TimeStamp } = require('../../sequelize');

router.get('/', async (req, res) =>{
    await TimeStamp.findAll()
    .then((time)=> res.json(time));
})

router.post('/:id', (req, res) => {
    TimeStamp.create({
        timeIn: req.body.timeIn,
        timeOut: req.body.timeOut,
        hoursWorked: req.body.hoursWorked
    })
    .then(time => res.json(time))
})

module.exports = router;