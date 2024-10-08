const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { 
        type: String, 
     },
    email: {
        type: String,
        required: true,
        unique: true,
     },
    password: { 
        type: String, 
        required: true,
      },
    age: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('User', userSchema)