const Goal = require('../models/goalModel')
const getGoals = async (req, res) => {
    const goals = await Goal.find({})
    res.status(200).json({
        operation: 'read',
        success: true,
        goals: goals
    })
}

const postGoals = async (req, res) => {
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json({
        operation: 'create',
        success: true,
        goal: goal
    })
}

const putGoals = async (req, res) => {
    if(!req.body.text || !req.params.id){
        res.status(400)     
        throw new Error('Bad POST')  
    }else{
        const goal = await Goal.findById(req.params.id).update({
            text: req.body.text
        })
        res.status(200).json({
        operation: 'update',
        success: true,
        goal: goal
       })
    }
}
const deleteGoals = async (req, res) => {
    const goal = await Goal.findById(req.params.id).deleteOne()
    res.status(200).json({
        operation: 'delete',
        success: true,
        id: req.params.id
    })
}

module.exports = {
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
}
