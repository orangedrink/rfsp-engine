const Panel = require('../models/panelModel')
const getPanels = async (req, res) => {
    const panels = await Panel.find({user:req.user.id})
    res.status(200).json({
        operation: 'read',
        success: true,
        panels: panels
    })
}
const getPanel = async (req, res) => {
    try {
        const panel = await Panel.findById(req.params.id).populate('choices')
        console.log(panel.choices)
        res.status(200).json({
            operation: 'read',
            success: true,
            panel: panel
        })            
    } catch (error) {
        
    }
}

const postPanels = async (req, res) => {
    const panel = await Panel.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json({
        operation: 'create',
        success: true,
        panel: panel
    })
}

const putPanels = async (req, res) => {
    if(!req.body.text || !req.params.id){
        res.status(400)     
        throw new Error('Bad POST')  
    }else{
        const panel = await Panel.findById(req.params.id).where({user:req.user.id}).update({
            text: req.body.text
        })
        res.status(200).json({
        operation: 'update',
        success: true,
        panel: panel
       })
    }
}
const deletePanels = async (req, res) => {
    const goal = await Panel.findById(req.params.id).where({user:req.user.id}).deleteOne()
    res.status(200).json({
        operation: 'delete',
        success: true,
        id: req.params.id
    })
}

module.exports = {
    getPanels,
    getPanel,
    postPanels,
    putPanels,
    deletePanels
}
