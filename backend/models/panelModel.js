const { text } = require('body-parser')
const mongoose = require('mongoose')

const panelSchema = mongoose.Schema({
    //user: {
    //    type: mongoose.Schema.Types.ObjectId,
    //    required: [true, 'Please add user'],
    //    ref: 'User'
    //},
    choices: [{
        text: {
            type: String,
            required: [true, 'Please add text.']
        },
        panel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Panel'
        },
    }],
    text: {
        type: String,
        required: [true, 'Please add text.']
    },
    character: {
        type: String,
    },
    setting: {
        type: String,
        required: [true, 'Please add a setting.']
    }
},{
    timestamps: true
})
module.exports = mongoose.model('Panel', panelSchema)