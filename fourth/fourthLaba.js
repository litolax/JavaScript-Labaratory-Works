function first(){
    let index = 1;
    while(index <= 100) {
        document.write(index + '<br>');
        index++;
    }
    document.write('<br>');
    for (let i = 1; i <= 100; i++) document.write(i + '<br>');
}

function second() {
    let index = 11;
    while(index <= 33) {
        document.write(index + '<br>');
        index++;
    }
    document.write('<br>');
    for (let i = 11; i <= 33; i++) document.write(i + '<br>');
}

function third() {
    let index = 0;
    while(index < 100) {
        if (index % 2 == 0) document.write(index + '<br>');
        index++;
    }
    document.write('<br>');
    for (let i = 0; i < 100; i++) if (i % 2 == 0) document.write(i + '<br>');
}

function fourth() {
    let firstSum = 0;
    let secondSum = 0;
    let index = 0;

    while(index < 100) {
        firstSum += index;
        index++;
    }
    
    for (let i = 0; i < 100; i++) secondSum += i;

    document.write("Сумма через while = " + firstSum + '<br>' + "Сумма через for = " + secondSum);
}

function fifth() {
    const arr = [1, 2, 3, 4, 5];
    
    for (let i = 0; i < arr.length; i++) document.write(arr[i] + ' ');
}

function sixth() {
    const arr = [1, 2, 3, 4, 5];
    let result = 0;

    for (let i = 0; i < arr.length; i++) result += arr[i];

    alert("Сумма = " + result);
}

function seventh() {
    let obj = { green: 'зеленый', red: 'красный', blue: 'голубой' };
    for (key in obj) {
        document.write(key + ": " + obj[key] + ' ');
    }
}

function eighth() {
    let obj = { Коля: 200, Вася: 300, Петя: 400 };

    for (key in obj) document.write(key + " - зарплата " + obj[key] + " долларов" + '<br>');
}

function ninth() {
    const arr = [2, 5, 9, 15, 0, 4];
    for (let i = 0; i < arr.length; i++) if (arr[i] > 3 && arr[i] < 10) document.write(arr[i] + '<br>');
}

function tenth() {
    const arr = [-1, 8, -5, 3, 9, 0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) if (arr[i] > 0) sum += arr[i];
    document.write("Сумма = " + sum);
}

function eleventh() {
    const arr = [1, 2, 5, 9, 4, 13, 4, 10];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 4) {
            alert("Есть");
            break;
        }
    }
}

function twelfth() {
    const arr = [10, 20, 30, 50, 235, 3000];
    for (let i = 0; i < arr.length; i++) {
        switch (+arr[i].toString()[0]) {
            case 1:
            case 2:
            case 5: document.write(arr[i] + '<br>');
        }
    }
}

function thirteenth() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let str = "-";

    for (let i = 0; i < arr.length; i++) str += arr[i] + "-";
    document.write(str);
}

function fourteenth() {
    const arr = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "Суббота" || arr[i] == "Воскресенье") document.write('<strong>' + arr[i] + '</strong>' + '<br>');
        else document.write(arr[i] + '<br>');
    }
}

function fifteenth() {
    const arr = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let date = new Date();
    let day = date.getDay();

    for (let i = 0; i < arr.length; i++) {
        if (i == day) document.write('<i>' + arr[i] + '</i>' + '<br>');
        else document.write(arr[i] + '<br>');
    }
}

function sixteenth() {
    let n = 1000;
    let num = 0;
    
    while (n > 50) {
            num++;
            n /= 2; 
    }
    document.write(`n = ${n} <br> Количество итераций = ${num}`);
}

first();
second();
third();
fourth();
fifth();
sixth();
seventh();
eighth();
ninth();
tenth();
eleventh();
twelfth();
thirteenth();
fourteenth();
fifteenth();
sixteenth();

/*
Контрольные вопросы
1. for, while, do-while, forIn, break, continue
2. В do-while цикле мы уверены, что блок do точно выполнится минимум 1 раз вне
зависимости от условия в while, и ровно наоборот в цикле while.
3. Оператор break нужен для выхода из цикла и тд.
4. Оператор continue нужен для пропуска итерации цикла. 
*/