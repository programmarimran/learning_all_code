

//************************************ */

function calculateTheMultipulItem (shirt,pant,shoe){
    const oneShirt =500;
    const onePant = 300;
    const oneShoe =900;

    const multipulShirt =shirt*oneShirt;
    const multipulPant =pant*onePant;
    const multipulShoe =shoe*oneShoe;

    const totalPrice = multipulPant+multipulShirt+multipulShoe;
    return totalPrice;
}

let shirt =0;
let pant =1;
let shoe =1;

const argument =calculateTheMultipulItem(shirt,pant,shoe);
console.log(argument)