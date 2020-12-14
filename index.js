const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))

// Require Mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/familyTree')

// Shortcut to Mongoose connection
const db = mongoose.connection
console.log(db)

// Import models
const User = require('./models/user')

db.once('open', () => {
    // Printing to see what host and port MongoDB is on
    console.log(`Connected to MongoDB on ${db.host}: ${db.port}`)
})

// Log any database errors
db.on('error', (err) => {
    console.error(`Database error: ${err}`)
})

app.get('/', (req, res) => {
    res.send('Mongoose')
})

app.get('/user', (req, res) => {
    const rome = new User({
        email: 'rome@ga.co',
        name: 'Rome',
        age: 33,
        website: 'www.ga.co'
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})