

function multi_layerDiscountProduct (quantity){
    const firstPrice =100;
    const secondPrice =90;
    const  aboveThere =70;
    if(quantity<=100){
        let total = quantity*firstPrice;
        return total;
    }
    else if(quantity<=200){
        let firstIn200Price = 100*100;
        let secondQuantity =quantity-100;
        let secondIN200Price =secondQuantity*secondPrice;
        let total = firstIn200Price+secondIN200Price;
        return total;
    }
    else{
        let firstAbove200Price =100*100;
        let secondQuantity =200-100;
        let secondAbove200Price = secondQuantity*secondPrice;
        let remaining200Quantity = quantity-200;
        let remaining200Price = remaining200Quantity*aboveThere;
        let result =firstAbove200Price+secondAbove200Price+remaining200Price;
        return result; 
    }
    
}
let quantity = 201;
const argument = multi_layerDiscountProduct(quantity);
console.log(argument);