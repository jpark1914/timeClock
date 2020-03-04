const Sequelize = require('sequelize');
const PersonModel = require('./models/person');
const TimeStampModel = require('./models/timeStamp');

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
})
Person.hasMany(TimeStamp);
TimeStamp.belongsTo(Person);

module.exports ={
    Person,
    TimeStamp
}