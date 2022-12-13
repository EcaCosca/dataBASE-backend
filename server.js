require('dotenv').config()

const express = require('express')

// SET UP
const port = process.env.PORT || 8000

// express app
const app = express()

// ROUTES
app.get('/', (req, res) => {
    res.json({mssg: "Welcome to the app"})
})

// LISTEN FOR REQUESTS
app.listen(port, () => {console.log(`http://localhost:${port}/`)})