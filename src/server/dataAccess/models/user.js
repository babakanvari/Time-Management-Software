const mongoose = require('mongoose');

const UserModel = mongoose.model(
    "users",
    new mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: String,
        firstName: String,
        lastName: String,
        currentPosition: String,
        employmentDate: Date,
    })
);

module.exports = UserModel;