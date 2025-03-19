function name (a,b,c){
let newArry =[...arguments]  //chaile sob golo argument show kora jai arry hisabe ;
console.log(newArry)
console.log(a,b,c)
}

name(1,2,3,6,5,89,7,4,5)




// const sum =(p, q)=> {
//     p + q;
//    }


//    const result = sum(2, 3);
//    console.log(result);
// function work(x, y = 4) {
//     return x + y;
//    }
//    console.log(work(32));


// const name ="Imran"    //ekane name privitive value;
// function sum(text){
//     text +=" korim"
//     console.log(text)
// }

// sum(name)

// console.log(name)



// const person ={name:"imran",age:20}   //ekane person non-privitive value;
// function sum(text){
//    text.name="Parves"
// }


// console.log(person)

// sum(person)

// console.log(person)


// const friends =["Rohim","korim","sakim"]   //ekane person non-privitive value;
// function sum(text){
//    text[1]="yamaha"
// }


// console.log("enitial ovostai",friends)

// sum(friends)

// console.log("functon korar pore", friends)