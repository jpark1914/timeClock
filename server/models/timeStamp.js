module.exports = (sequelize, type) => {
    return sequelize.define('timeStamp', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        time: {
            type: type.TIME,
            allowNull: false
        }
    })
}