const Exit = require('../models/Exits')
const mongoose = require('mongoose')

// GET ALL EXITS
const getExits = async (req, res) => {
    try {
        const payload = await Exit.find({}).sort({createdAt: -1})
        res.status(200).json(payload)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

// GET A SINGLE EXIT
const getExit = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Not a valid id corresponding to any workout in the database'})
    }

    try {
        const payload = await Exit.findById(id)
        res.status(200).json(payload)
    } catch (error) {
        res.status(404).json({error: "Exit not found"})
    }
}

// CREATE A NEW EXIT
const createExit = async (req, res) => {
    const {title, description, exit} = req.body

    try {
        const payload = await Exit.create({title, description, exit})
        res.status(200).json(payload)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE A SINGLE EXIT
const deleteExit = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Not a valid id corresponding to any workout in the database'})
    }

    try {
        const payload = await Exit.findOneAndDelete({_id: id})
        res.status(200).json(payload)
    } catch (error) {
        res.status(400).json({error: "Exit not found"})
    }
}

// UPDATE A SINGLE EXIT
const updateExit = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Not a valid id corresponding to any workout in the database'})
    }
    try {
        const payload = await Exit.findOneAndUpdate({_id: id},{
            ...req.body
        })
        res.status(200).json(payload)
    } catch (error) {
        res.status(400).json({error: "Exit not found"})
    }
}

module.exports = {
    createExit,
    getExits,
    getExit,
    deleteExit,
    updateExit
}
