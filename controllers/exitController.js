const Exit = require('../models/Exits')

// GET ALL EXITS
// GET A SINGLE EXIT
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
// EDIT A SINGLE EXIT

module.exports = {
    createExit
}
