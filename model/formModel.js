const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbconfig');

const Form = sequelize.define('Form', {
    uniqueId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phonenumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isGraduate: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    timestamps: true,
});

(async () => {
    try {
        await sequelize.sync();
        console.log('Form table has been created successfully.');
    } catch (error) {
        console.error('Unable to create the table:', error);
    }
})();

module.exports = Form;
