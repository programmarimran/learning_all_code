const mobile =[
    {name:'Samsung',price:'12500', camera: '12mp', color:'black'},
    {name:'Howei',price:'30000', camera: '12mp', color:'black'},
    {name:'Iphone',price:100000, camera: '12mp', color:'black'},
    {name:'Oppo',price:'25000', camera: '12mp', color:'black'},
    {name:'Redmi',price:'17500', camera: '12mp', color:'black'}
]

function forwordPriceMobile (mobile){
   let bigPrice =mobile[0]
   for(const nam of mobile){
    if(parseInt(nam.price) > parseInt(bigPrice.price)){
        bigPrice=nam
    }

   }
  return bigPrice;
}

let argument=forwordPriceMobile(mobile)
console.log(argument)