// let time =0;

// const setTime =()=>{
//     console.log(time);
//     time++;


//     if(time>5){
//         clearInterval(setintervalClock);
//     }
    


// }
// const setintervalClock =setInterval(setTime,1000);



// setTime();



// try {
//     console.log("Start");
//     throw new Error("Error occurred");
//    } catch (err) {
//     console.log(err.message);
//    } finally {
//     console.log("End");
//    }


// let x = 1;
// let intervalId = setInterval(() => {
//  console.log(x++);
//  if (x > 3) clearInterval(intervalId);
// }, 1000);

let message = 'Hello!'; 
setTimeout(() => {
 message = 'Goodbye!'; 
 console.log(message);
}, 0); 
console.log(message);
