// ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো 

let temp=[]
for (let i = 1; i < 51; i++) {
    if (i % 3 == 0 && i%5==0) {
        temp.push(i)
    }
}
// console.log(temp)

var friends = ["rahim", "karim", "abdul", "sads7d", "heroAlom"];
// উপরে এর  এরে  থেকে  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা 

let bigFriend = friends[0];

for (let i = 0; i < friends.length; i++) {
    const element = friends[i];

    if (element.length > bigFriend.length) {
        bigFriend = element;
    }
    
}
console.log(bigFriend)