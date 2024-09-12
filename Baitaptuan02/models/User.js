const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
    },
    otp: {
        type: DataTypes.STRING(255),
        allowNull: true, // OTP có thể không tồn tại nếu người dùng chưa kích hoạt chức năng này
    },
    otpExpiration: {
        type: DataTypes.DATE,
        allowNull: true, // OTP expiration cũng có thể không tồn tại nếu chưa gửi OTP
    },
}, {
    tableName: 'users'
});

module.exports = User;
