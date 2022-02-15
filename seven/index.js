function first(array) {
    var newArray = new Array();
    for (let i = 0; i < array.length; i++) {
        if (isPositive(array[i])) newArray.push(array[i]);
    }

    return newArray;
}

function isPositive(number) {
    return number >= 0;
}

function isNumberInRange(number) {
    return number > 0 && number < 10;
}

function second(array) {
    var newArray = new Array();
    for (let i = 0; i < array.length; i++) {
        if (isNumberInRange(array[i])) newArray.push(array[i]);
    }

    return newArray;
}

function getDigitsSum(number) {
    let sum = 0;
    var str = String(number).split('');
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

    return sum;
}

function third() {
    var years = new Array();
    for (let i = 1; i < 2021; i++) {
        if (getDigitsSum(i) == 13) years.push(i);
    }

    return years;
}

function isEven(number) {
    return number % 2 == 0;
}

function fourth(array) {
    let newArray = new Array();
    for (let i = 0; i < array.length; i++) {
        if (isEven(array[i])) newArray.push(array[i]);
    }

    return newArray;
}

function getDivisors(number) {
    let numbers = new Array();
    for (let i = 0; i < number; i++) {
        if (Number.isInteger(number / i)) numbers.push(i);
    }

    return numbers;
}

console.log(first([5, -2, 1, -9, 0]));
console.log(isNumberInRange(12))
console.log(second([5, -2, 1, -9, 0]))
console.log(getDigitsSum(521));
console.log(third());
console.log(isEven(5));
console.log(fourth([0, 3, 6, 7, 8, 1, 2]));
console.log(getDivisors(100));