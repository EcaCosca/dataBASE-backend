const express = require('express')

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: "GET ALL WORKOUTS!"})
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: "GET A single WORKOUT!"})
})

// POST a NEW workout
router.post('/', (req, res) => {
    res.json({mssg: "POST A NEW WORKOUT!"})
})

// DELETE a single workout
router.delete('/:id', (req, res) => {
    res.json({mssg: "Delete a workout!"})
})

// EDIT a single workout
router.patch('/:id', (req, res) => {
    res.json({mssg: "EDIT a workout!"})
})

module.exports = router