// **
// multi level condition j
// *

 const  price = 4999;

if( price >=5000){
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}                                                       //ekhane chaile else if joto khosi toto bar use kora jaite pare but protome if and sese else sodho ekbarei likha jai arki 
else if(price >= 2500 ){
    // 5% discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else{
    console.log(price)
}