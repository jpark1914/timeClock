const Sequelize = require('sequelize');
const PersonModel = require('./models/person');
const TimeStampModel = require('./models/timeStamp');
const _ = require('lodash');
const faker =require('faker');
const moment = require('moment');

const sequelize = new Sequelize('timeClock', 'jordan', 'Park7937!',
{
    dialect: 'postgres',
    host: 'localhost',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const Person = PersonModel(sequelize, Sequelize)

const TimeStamp = TimeStampModel(sequelize, Sequelize)

sequelize.sync({force: true})
.then(() => {
    console.log(`Database & tables created!`)
    _.times(10, () =>{
        return Person.create({
            fname: faker.name.firstName(),
            lname: faker.name.lastName()
        })
        .then(person => {
            return person.createTimeStamp({
                timeIn: moment().format('LT'),
                timeOut: moment().add(4,'hours').format('LT')
            })
        })
    })

})
Person.hasMany(TimeStamp);
TimeStamp.belongsTo(Person);



module.exports ={
    Person,
    TimeStamp
}