module.exports = (sequelize, type) => {
    return sequelize.define('person', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fname: {
            type: type.STRING
        },
        lname: {
            type: type.STRING
        }
    })
}