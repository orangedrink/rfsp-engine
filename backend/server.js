const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')
AdminJS.registerAdapter(AdminJSMongoose)
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000
const colors = require('colors')
const connectDb = require('./config/db')
const cors = require('cors')
const panelModel =require('./models/panelModel')
const userModel =require('./models/userModel')
connectDb()

const app = express()

const adminJs = new AdminJS({
    resources:[{
        resource: panelModel,
        options:{
            properties: {
                text: {isTitle:true}
            }
        }
    },
        userModel],
    databases: [],
    rootPath: '/admin',
  })
  
const router = AdminJSExpress.buildRouter(adminJs)
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false}))
app.use('/api/panels', require('./routes/panelRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port: ${port}`))
app.use(adminJs.options.rootPath, router)
app.listen(8080, () => console.log('AdminJS is under localhost:8080/admin'))