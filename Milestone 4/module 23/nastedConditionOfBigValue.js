

function createBigValue (a,b,c){
    if(a>b &&a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{return c;}
}

let a =55;
let b =455;
let c =955;
const argument =createBigValue(a,b,c);
console.log('Biggest value:',argument)
// ____________________________________________
let argument2_0 =Math.max(a,b,c);
console.log('Biggest value 2_0:  ',argument2_0)