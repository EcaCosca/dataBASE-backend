const express = require('express')
const Exit = require("../models/Exits")
const {createExit, getExits, getExit, deleteExit, updateExit} = require('../controllers/exitController')

const router = express.Router()

// GET all EXITs
router.get('/', getExits)

// GET a single EXIT
router.get('/:id', getExit)

// POST a NEW EXIT
router.post('/', createExit)

// DELETE a single EXIT
router.delete('/:id', deleteExit)

// EDIT a single EXIT
router.patch('/:id', updateExit)

module.exports = router