module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        phone_type: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {notEmpty: true},
        },
        phone_no: {
            allowNull: false,
            type: Sequelize.INTEGER,
            validate: {notEmpty: true},
        },
        // DEFINE YOUR MODEL HERE
    });
  
    return Phone;
};