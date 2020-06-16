const mongoose = require('../database/index');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    createAt: {
        type: Date,
        Default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;