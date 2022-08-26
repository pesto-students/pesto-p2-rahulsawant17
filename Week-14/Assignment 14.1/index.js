const { application } = require('express')
const express=require('express')
const mongoose=require('mongoose')
const routes=require('./helper/route')
const app=express()
require("dotenv").config();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL)
const database=mongoose.connection
database.on('error',(error)=>{
    console.log(error)
})

database.once('connected',()=>{
    console.log('database connected')
})
app.use(express.json())
app.listen(PORT,()=>{
    console.log(`Server started a 127.0.0.1:${PORT}`)
})
app.use('/api',routes)
module.exports = database;