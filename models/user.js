const mongoose = require('mongoose')

// Create a schema
const userSchema = new mongoose.Schema({
    // Field with validation
    email: { type: String, required: true, unique: true },
    // Fields without validation
    name: String,
    age: Number,
    website: String
})

// Create model for schema (name must be singular)
const User = mongoose.model('User', userSchema)

module.exports = User