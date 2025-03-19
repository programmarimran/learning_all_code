function findCommonElements(arr1, arr2) {
    const commonElements = [];

    for(const singleArry1 of arr1 ){
       
    for(const singleArry2 of arr2){
        if(singleArry1==singleArry2 && commonElements.includes(singleArry1)===false){
            commonElements.push(singleArry1)
        }
    }
    }



    console.log(arr1,arr2)
    return commonElements;
}

// Test case
const array1 = [1, 2,3,  4, 5,7,7];
const array2 = [3, 4, 5,3,4, 6,7, 7];
console.log(findCommonElements(array1, array2)); // Expected output: [3, 4, 5]