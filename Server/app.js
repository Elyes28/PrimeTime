
const mongoose = require('mongoose')
const express = require('express')
//const url = 'mongodb://localhost/ProjectDb'
const url = 'mongodb+srv://root:esprit123@cluster0.zlao8.mongodb.net/ProjetPi?retryWrites=true&w=majority'



mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',() => {
    console.log('connected...')
})


const app=express()
app.use(express.json())
const courseRouter = require('./routes/courses')
const userRouter = require('./routes/users')
app.use('/courses',courseRouter)
app.use('/users',userRouter)

app.listen(2895,() => {
    console.log('Server started')
})