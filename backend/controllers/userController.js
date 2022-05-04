const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const genJwt = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}
const addUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await User.create({
        name: name,
        email: email,
        password: hash,
    })
    res.status(200).json({
        operation: 'add user',
        success: true,
        user: user,
        token: genJwt(user._id)
    })
})
const login = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email: email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            operation: 'login user',
            success: true,
            user: user,
            token: genJwt(user._id)

        })
    } else {
        res.status(401).json({
            operation: 'login user',
            success: false
        })
    }
})
const info = asyncHandler(async (req, res) => {
    res.status(200).json({
        operation: 'get user',
        success: true,
        user: req.user
    })
})

module.exports = {addUser, login, info}