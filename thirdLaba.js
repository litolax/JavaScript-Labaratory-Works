function first(){
    for(let i = 0; i < 3; i++){ // === 0
        const a = prompt("Введите \'a\'  (=== 0)");
        if (+a === 0) alert("Верно");
        else alert("Неверно");
    }

    for(let i = 0; i < 3; i++){ // > 0
        const a = prompt("Введите \'a\' (> 0)");
        if (a > 0) alert("Верно");
        else alert("Неверно");
    }

    for(let i = 0; i < 3; i++){ // < 0
        const a = prompt("Введите \'a\' (< 0)");
        if (a < 0) alert("Верно");
        else alert("Неверно");
    }

    for(let i = 0; i < 3; i++){ // >= 0
        const a = prompt("Введите \'a\' (>= 0)");
        if (a >= 0) alert("Верно");
        else alert("Неверно");
    }

    for(let i = 0; i < 3; i++){ // <= 0
        const a = prompt("Введите \'a\'  (<= 0)");
        if (a <= 0) alert("Верно");
        else alert("Неверно");
    }

    for(let i = 0; i < 3; i++){ // != 0
        const a = prompt("Введите \'a\' (!== 0)");
        if (a != 0) alert("Верно");
        else alert("Неверно");
    }

    for(let i = 0; i < 3; i++){ // === 'test'
        const a = prompt("Введите \'a\' (=== \'test\')");
        if (a === 'test') alert("Верно");
        else alert("Неверно");
    }

    for(let i = 0; i < 3; i++){ // === '1'
        const a = prompt("Введите \'a\' (=== \'1\')");
        if (a === '1') alert("Верно");
        else alert("Неверно");
    }
}

function second(){
    let test = true;

    if (test) alert("Верно");
    else alert("Неверно");

    test = false;
    if (test){
        alert("Верно");
    }
    else {
        alert("Неверно");
    }
}

function third(){
    let test = true;
    
    if (!test) alert("Верно");
    else alert("Неверно");

    test = false;
    if (!test){
        alert("Верно");
    }
    else {
        alert("Неверно");
    }
}

function fourth(){
    let a = prompt("Введите a");
    if (a > 0 && a < 5) alert("Верно");
    else alert("Неверно");

    if (+a === 0 || +a === 2) alert("a = " + (a + 7));
    else alert("a = " +(a / 10));

}

function fifth(){
    let a = prompt("Введите a");
    let b = prompt("Введите b");
    if (a <= 1 && b >= 3) alert(+a + +b);
    else alert(a - b);
}

function sixth(){
    let num = prompt("Введите num");
    let result = undefined;
    switch(+num){
        case 1: {
            result = 'зима';
            break;
        }
        case 2: {
            result = 'весна';
            break;
        }
        case 3: {
            result = 'лето';
            break;
        }
        case 4: {
            result = 'осень';
            break;
        }
    }
    alert(result);
}

function seventh(){
    let day = Math.floor(Math.random() * 31);
    if (day <= 10) alert("Первая декада");
    else if (day >= 11 && day <= 20) alert("Вторая декада");
    else alert("Третья декада");
}

function eighth(){
    let month = Math.floor(Math.random() * 12) + 1;
    console.log(month);
    if ((month >= 1 && month <= 2) || month === 12) alert('Зима');
    else if (month >= 3 && month <= 5) alert('Весна');
    else if (month >= 6 && month <= 8) alert('Лето');
    else if (month >= 9 && month <= 111) alert('Осень');
}

function ninth(){
    let str = 'abcde';
    if (str[0] === 'a') alert("Да");
    else alert("Нет");
}

function tenth(){
    let str = '12345';
    switch(str[0]) {
        case '1':
        case '2':
        case '3': {
            alert("Да");
            break;
        }
        default: {
            alert("Нет");
            break;
        }
    }  
}

function eleventh(){
    let str = '427';
    let sum = 0;
    for(let i = 0; i < str.length; i++) {
        sum += +str[i];
    }
    alert("Сумма = " + sum);
}

function twelfth() {
    let str = '436534';
    let firstSum = 0;
    let secondSum = 0;

    for(let i = 0; i < 3; i++) {
        firstSum += +str[i];
        secondSum += +str[i + 3];
    }

    if (firstSum === secondSum) alert("Да");
    else alert("Нет");
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

/*
Контрольные вопросы
1. Операторы ветвления нужны для выполнения определённого блока действий при определённом условии.
2. == - это не строгое сравнение, а === - строгое типовое сравнение. Для примера:
let a = '1';
let b = 1;
if (a == b) alert(...) // код выполнится
if (a === b) alert(...) // код не выполнится, так как они разные по типу.
3. Принцип действия похож на вопрос 2. Строгое и не строгое 'не равно'.
!= выполнится если переменные не равны.
!== выполнится если переменные не равны или у них разные типы.
4. if-else это оператор ветвления, который лучше использовать когда нам требуется проверить несколько условий.
Если нам нужно проверить одинаковую прееменную на одно разное условие, то мы используем switch-case.
*/