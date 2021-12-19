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

    for(let i = 0; i < 3; i++){ // !== 0
        const a = prompt("Введите \'a\' (!== 0)");
        if (a !== 0) alert("Верно");
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
    if (a <= 1 && b >= 3) alert(a + b);
    else alert(a - b);
}

function sixth(){
    let num = prompt("Введите num");
    let result = undefined;
    switch(num){
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
    if (str[0] === '1' || str[0] === '2' || str[0] === '3') alert("Да");
    else alert("Нет");   
}

function eleventh(){
    var str = 'abcde';
    alert(str[0] + ' ' + str[2] + ' ' + str[4])
}


// first();
// second();
// third();
// fourth();
// fifth();
// sixth();
// seventh();
// eighth();
// ninth();
// tenth();
eleventh();
// twelfth();