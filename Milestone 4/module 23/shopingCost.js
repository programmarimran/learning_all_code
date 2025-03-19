const products = [
    {name:'shampoo', price:300, quantity: 0 },
    {name:'chironi', price:100, quantity: 1 },
    {name:'shirt', price:700, quantity: 0 },
    {name:'pant', price:1200, quantity: 0}
]
function shopingCostProduct (products){
    let total =0;
    for(const product of products){
        total = total + product.price*product.quantity;
    }
    return total;
}
const argument =shopingCostProduct(products);
console.log(argument)