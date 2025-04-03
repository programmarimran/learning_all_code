const myFunction = () => {
    let x = 5;
    try {
        console.log(x);
        let arr = [1, 2, 3];
        arr.slice(0, 10);
        let evalStatement = '2 + 2 * 2';
        console.log(eval(evalStatement))
        let num = 20;
        let result = num * 2;
        console.log(result)
    } catch (error) {
        console.error(error);
    }
}


