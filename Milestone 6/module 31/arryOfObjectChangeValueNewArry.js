const mobiles =[
    {id:1,brand:"samsung",color:"blue",price:1900},
    {id:1,brand:"apple",color:"blue",price:1900},
    {id:1,brand:"xiomi",color:"blue",price:1900},
    {id:1,brand:"apple",color:"blue",price:1900},
    {id:1,brand:"xiomi",color:"blue",price:1900},
    {id:1,brand:"apple",color:"blue",price:1900}
]

// console.log(mobiles);


const newMobiles =mobiles.map(mobile =>{
    // console.log(...mobile)  //ekhane seperate operator e error dekhai but 17 line e dekhai na know.

   if(mobile.brand==="apple"){
    return {...mobile, price: mobile.price+200}
   }
   else{return mobile}
   
})

console.log(newMobiles)
