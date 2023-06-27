function add(num1, num2 = 4) {
    // if (num2 === undefined) {
    //     num2 = 2
    // }
    // num2 = num2 || 3
    total = num1 + num2;
    return total;
}

const result = add(10);
console.log(result);