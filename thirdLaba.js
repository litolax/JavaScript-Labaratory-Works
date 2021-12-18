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

function 

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
// eleventh();
// twelfth();