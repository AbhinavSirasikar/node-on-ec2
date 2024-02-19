const express = require("express");

const app = express()

const PORT = 8000

app.get('/',(req,res)=>{
    res.send("api is running")
})

app.get('/api/get',(req,res)=>{
    res.send({message:"get api is working"})
})

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})