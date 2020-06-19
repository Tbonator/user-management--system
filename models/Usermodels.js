const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    forename: {
        type: String,
        required: false
    },
    surname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: false
    },
    team: String,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)