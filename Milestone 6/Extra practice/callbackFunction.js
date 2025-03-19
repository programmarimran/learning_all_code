// function processArray(arr, callback) {
//    const newArry =arr.map(i=>i/10)
//    callback(newArry)
// }

// function printResult(result) {
//     console.log(result);
// }


// processArray([20, 30, 40, 50], printResult);

//??অ্যারের প্রতিটি সংখ্যাকে ১ সেকেন্ড পর ১০ দিয়ে ভাগ করুন।
//??তারপর ফলাফলটি একটি কলব্যাক ফাংশনে পাঠিয়ে আউটপুট দিন।

// function higerOrder (arry, callback){

//     const newArry =arry.map(i=>{
         
//         setTimeout(i=>{
//             i/10 
            
//         },1000)  
       
//      })
//      return callback(newArry)
    
    
// }

// function callbackFunction (result){
//     console.log(result)
// }

// higerOrder([20,30,40,50],callbackFunction)

// function higherOrder(arry, callback) {
//     let newArry = [];
//     let index = 0;

//     function processItem() {
//         if (index < arry.length) {
//             setTimeout(() => {
//                 newArry.push(arry[index] / 10);  // প্রতিটি উপাদানকে ১০ দিয়ে ভাগ করে নতুন অ্যারে তে যোগ করা
//                 console.log(`Item ${index + 1}: ${arry[index]} divided by 10 is ${arry[index] / 10}`);
//                 index++;
//                 processItem();  // পরবর্তী আইটেম প্রক্রিয়া করা
//             }, 1000);  // ১ সেকেন্ড পর পর
//         } else {
//             callback(newArry);  // সব আইটেম প্রক্রিয়া হয়ে গেলে কলব্যাক ফাংশন কল করা
//         }
//     }

//     processItem();
// }

// function callbackFunction(result) {
//     console.log('Final Result:', result);
// }

// higherOrder([20, 30, 40, 50], callbackFunction);


// console.log("Start");

// setTimeout(function() {
//     console.log("Middle");
// }, 2000);

// console.log("End");
// let names = ["ali", "zahid", "rahim", "tariq"];


// names.forEach(element => {
//     const upperCaseFirstletter =element[0].toUpperCase()+element.slice(1)
//     console.log(upperCaseFirstletter)
// });

let numbers = [10, 20, 30, 40];

function parentFunction (arry,callback){
    let newArry=[]
    let time =0;
    function process(){
        if(time<arry.length){
            newArry.push(arry[time])
            // console.log(arry[time])
            callback(newArry)
        }
        time++
        setTimeout(process,1000)   
    }
   
    process()
   
}

function callback1 (result)
{
    console.log(result)
}
parentFunction(numbers,callback1)

//
