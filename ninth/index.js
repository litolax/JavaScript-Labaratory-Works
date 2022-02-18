'use strict'
var firstArr = [1, 2, 3, 4, 5];

function first() {
    console.log(firstArr.pop()); //выводим последний элемент массива
    
	if(firstArr.length != 0) {
		first(firstArr); //это рекурсия
	}
}

first(firstArr);

let number = 187923;
let sum = 0;

function second(number) {
    
    let str = number.toString();
    number = 0;
    for(let i = 0; i < str.length; i++) {
        number += +str[i];
    }

    if (number > 9) {
        second(number);
    }
    else return sum = number
}

second(number);
console.log(sum);

function mul(n,m) {
    return n * m;
}

console.log(mul(5,10));

function repeat(str, n) {
    str = str || "";
    n = n || 2;
    return str.repeat(n);
}

console.log(repeat("Размножаем строку", 10))

function rgb(r, g, b) {
    r = r || 0;
    g = g || 0;
    b = b || 0;
    return `<rgb(${r},${g},${b})>`
}

console.log(rgb(50,100));

function operation(m,n,o) {
    switch (o) {
        case '+': return m + n; break;
        case '-': return m - n; break;
        case '/': return m / n; break;
        case '*': return m * n; break;
        default: return m + n; break;
    }
}

console.log(operation(10,10, '-'))

function m(a, b) {
    return mul(a, b);
}

function log(data) { console.log(data) }