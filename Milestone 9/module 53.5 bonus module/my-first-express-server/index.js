const express=require('express');
const app=express();
const port =5000;
app.get('/',(req,res)=>{
    res.send('My first express server.....')

})
app.get("/data",(req,res)=>{
    res.send('more data comming soon')
})

app.get("/home",(req,res)=>{
    res.send("it is my home page is running...........")
})

app.listen(port,()=>{
    console.log(`my first firebase error ${port}`)
})

