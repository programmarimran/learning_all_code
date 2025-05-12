const express=require("express");
const app=express();
const port=3000;

const profile=[{
    name:"imran",
    age:22,
    image:"http",
    father:"Md Kalam"
},
{
    name:"Anisul",
    age:25,
    image:"http",
    father:"Md Kalam"
},]

app.get("/",(req,res)=>{
    const user=profile
    res.send(user)
})

app.listen(port,()=>{
    console.log(`this is error${port}` )
})