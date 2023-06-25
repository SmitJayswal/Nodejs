const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    employee_full_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    job_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    primary_contact_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    primary_contact_mobile: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    primary_contact_relation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    secondary_contact_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    secondary_contact_mobile: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    secondary_contact_relation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = User;
