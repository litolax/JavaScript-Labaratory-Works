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

function fillArrByX() {
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

function fillArrByNumbers() {
    let arr = [];
    let length = prompt(`Введите длину массива`);
    let str = ``;

    for (let i = 1; i <= +length; i++) {
        for (let j = 0; j < i; j++) {
            str += i;
        }
        arr.push(str);
        str = ``;
    }

    console.log(arr);
}

function arrayFill(consumer, count) {
    let arr = [];

    for (let i = 1; i <= +count; i++) arr.push(consumer);

    console.log(arr);
}

function sumBeforeTen() {
    let arr = [4,3,1,0,0,2,0,5,3,5,8,4];
    let sum = 0, indexCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (sum < 10)
        {
            sum += arr[i];
            indexCount++;
        }
        else 
        {
            alert(`Требуется сложить ${indexCount} элемента/тов`);
            break;
        }
    }
}

function reverseArr(){
    let arr = [4,5,3];
    let buffer = new Array();

    console.log(`Исходный массив: ${arr}`);

    for(let i = arr.length-1; i >= 0; i--) buffer.push(arr[i]);
    
    console.log(`Новый массив: ${buffer}`);
}

reverseArr();