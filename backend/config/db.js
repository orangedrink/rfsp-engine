const mongoose = require('mongoose')
const connectDb = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo Connected to: ${con.connection.host}`.bgCyan.black.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb