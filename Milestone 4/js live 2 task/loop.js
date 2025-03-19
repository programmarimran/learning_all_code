

// friends[0]
// console.log(friends.length)

// console.log(friends[0])
// console.log(friends[1])
// console.log(friends[2])
// console.log(friends[3])
// console.log(friends[4])


const friends = ["rahim", "korim", "hena", "hero alom", "Zayed khan"];


for (let i = 0; i < friends.length; i++){
    const element = friends[i];
    
    if (element==="hena") {
        continue;
    }

    console.log(element)
   
}


