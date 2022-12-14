require('dotenv').config()

// SET UP
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/exitRoutes')
const port = process.env.PORT || 8000

// express app
const app = express()

// MIDDLEWARE
// any request that comes in checks if it has a body and attaches into a request
app.use(express.json())

app.use((req, res, next)=>{
    console.log("PATH:",req.path," METHOD:", req.method)
    next()
})

// ROUTES
app.use('/api/workouts', workoutRoutes)

// CONNECT TO DB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // LISTEN FOR REQUESTS
    app.listen(port, () => {console.log(`http://localhost:${port}/`)})
 })
 .catch((err) => { console.log(err) })
