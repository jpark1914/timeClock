const express = require('express');
const router = express.Router();
const { TimeStamp } = require('../../sequelize');

router.get('/', async (req, res) =>{
    await TimeStamp.findAll()
    .then((time)=> res.json(time));
})

router.post('/:id', (req, res) => {
    TimeStamp.create({
        timeIn: req.body.timeIn
    })
    .then(timesIn => res.json(timesIn))
})

module.exports = router;