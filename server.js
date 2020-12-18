require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.on('open', ()=> console.log("Connected to database"))

app.listen(8888, () => {
    console.log("server running on port 8888")
}) 

app.use(express.json())

const subscribersRouter = require('./routes/subscriber')
app.use('/subscribers',subscribersRouter) 