const express=require("express");
var cors = require('cors')
const app=express();
const port=process.env.PORT|| 3000;
app.use(express.json())
app.use(cors())
const profile=[
    {id:1,name:"Imran",email:"imran@gmail.com"},
    {id:2,name:"Anisul",email:"anisul@gmail.com"},
    {id:3,name:"Taiyeb",email:"taiteb@gmail.com"}
]

app.get("/",(req,res)=>{
    
    res.send("This is a first server site in my life")
})

app.get("/users",(req,res)=>{
    const user=profile;
    res.send(user)
})

app.post("/users",(req,res)=>{
    const newUser=req.body;
    console.log(newUser)
    newUser.id=profile.length+1;
    profile.push(newUser)

    res.send(newUser)
})

app.listen(port,()=>{
    console.log(`this is error${port}` )
})