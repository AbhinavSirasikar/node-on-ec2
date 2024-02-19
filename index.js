const express = require("express");
require("dotenv").config()

const app = express()

const PORT = process.env.PORT || 8000

app.get('/api/user_details',(req,res)=>{
    res.send({
        user:{
            name:"rakesh",
            age:22,
            contact:7546376367
        },env:process.env.NAME
    })
})

app.get('/api/get',(req,res)=>{
    res.send({message:"get api is working"})
})

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})