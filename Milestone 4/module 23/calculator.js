function add (a,b){
    let result =a+b;
    return result;
}
function subtract (a,b){
    let result =a-b;
    return result;
}
function multiply (a,b){
    let result = a*b;
    return result;
}
function divide (a,b){
    let result =a/b;
    return result;
}
function calculator (a,b,station){
    if(station==='added'){
        let transfer =add(a,b);
        return transfer;
    }
    else if(station ==='subtracted'){
        let transfer =subtract(a,b);
        return transfer;
    }
    else if(station ==='multiply'){
        let transfer =multiply(a,b);
        return transfer;
    }
    else if(station === 'divide'){
        let transfer =divide(a,b)
        return transfer;
    }
    else{
        return 'please Call "added" "subtracted" "multiply" "divide"'
    }
}

let argumant = calculator(12,3,"divide");
console.log(argumant)