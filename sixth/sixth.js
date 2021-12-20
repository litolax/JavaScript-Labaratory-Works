function isEquals(first, second) {
    return first === second;
}

function SumMoreThanTen(first, second) {
    if ((first + second) > 10) return true;
    return false;
}

function isNegative(first) {
    if (first < 0) return true;
    return false;
}

function first() {
    let str;

    for (let i = 1; i < 10; i++) {
        str += i;
    }

    alert(str);

    for (let i = 9; i > 0; i--) {
        str += i;
    }

    alert(str);

    str = "-";
    for (let i = 1; i > 10; i--) {
        str += `${i}-`;
    }

    alert(str);
}

function pyramid() {
    let count = 20;
    const symbol = `x`;

    for (let i = 0; i <= 20; i++) {
        for (let j = 0; j < i; j++) {
            document.write(symbol);
        }
        document.write(`<br>`);
    }
}

function pyramidOfNumbers(){ 
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < i; j++) {
            document.write(i);
        }
        document.write(`<br>`);
    }
}

function pyramidSecond() {
    let count = 6;
    const symbol = `x`;

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < i*2; j++) {
            document.write(symbol);
        }
        document.write(`<br>`);
    }
}

function fillArr() {
    let arr = [];
    let length = prompt(`Введите длину массива`);
    let str = ``;

    for (let i = 1; i <= +length; i++) {
        for (let j = 0; j < i; j++) {
            str += `x`;
        }
        arr.push(str);
        str = ``;
    }

    console.log(arr);
}

fillArr();



