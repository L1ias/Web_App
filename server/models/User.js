const {Schema, model} = require("mongoose")

const User = new Schema({
    name: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isBlocked: {type: Boolean, default: false},
    isOnline: {type: Boolean, default: true},
    lastOnline: {type: Date, default: Date.now()}
})

module.exports = model('User', User)