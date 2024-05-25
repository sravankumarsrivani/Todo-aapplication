const express=require('express')
const mongoose=require('mongoose')
const routes=require('./routes/ToDoRouters')
const cors=require('cors')
require('dotenv').config()


const app=express()
const PORT=process.env.port|| 3001
app.use(express.json())
app.use(cors())
mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log(`connected to mongodb...`))
.catch((error)=>console.log(error))
app.use(routes)
app.listen(PORT,()=>console.log(`Listening on:   ${PORT}`))