const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbconfig');

const Form = sequelize.define('Form', {
    uniqueId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    phonenumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true
    },
    isGraduate: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        required: true
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
