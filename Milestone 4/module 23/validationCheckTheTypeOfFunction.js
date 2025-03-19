function FullName (first,second){
    if(typeof first!=='string' || typeof second!=='string'){
        return 'provide first name  string'
    }
    // else if(typeof second!=='string'){
    //     return 'provide second name string'
    // }
    const FullName =first+ ' '+second;
    return FullName;
}
let name = FullName('md','imran' )
// console.log(name)


function objectPrice (object){
    if(typeof object!=='object' || Array.isArray(object)===true){
        return 'provide a object'
    }
    const result =object.price;
    return result;
}
let mobile ={
    name :'iphone',
    price:1000,
    camera:false

}
let phone =['price:',1000, true]
const argumant =objectPrice(mobile)
console.log(argumant)