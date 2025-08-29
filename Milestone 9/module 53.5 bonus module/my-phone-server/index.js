const express=require('express');
const cors=require("cors")
const phones = require('./phones.json');
const app=express();
const port=3000;
app.use(cors())

app.get("/phones",(req ,res)=>{
     res.send(phones)
})


app.get("/phones/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const phone=phones.find(phone=>phone.id===id)
    res.send(phone)
    console.log("this is my params id",id)
})
app.get('/',(req,res)=>{
    res.send("this is my phones fff  api oooooooooooo")

})

app.listen(port,()=>{
    console.log('it is my first phones api ddddddddd')
})