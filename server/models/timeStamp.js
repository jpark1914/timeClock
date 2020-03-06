module.exports = (sequelize, type) => {
    return sequelize.define('timeStamp', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        timeIn: {
            type: type.TIME,
            allowNull: true
        },
        timeOut: {
            type: type.TIME,
            allowNull: true
        },
        hoursWorked: {
            type: type.INTEGER,
            allowNull: true
        }
    })
}