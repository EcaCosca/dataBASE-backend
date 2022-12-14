const express = require('express')
const Exit = require("../models/Exits")

const router = express.Router()

// GET all EXITs
router.get('/', (req, res) => {
    res.json({mssg: "GET ALL EXITS!"})
})

// GET a single EXIT
router.get('/:id', (req, res) => {
    res.json({mssg: "GET A single EXIT!"})
})

// POST a NEW EXIT
router.post('/', (req, res) => {
    const {title, description, exit} = req.body

})

// DELETE a single EXIT
router.delete('/:id', (req, res) => {
    res.json({mssg: "Delete a EXIT!"})
})

// EDIT a single EXIT
router.patch('/:id', (req, res) => {
    res.json({mssg: "EDIT a EXIT!"})
})

module.exports = router