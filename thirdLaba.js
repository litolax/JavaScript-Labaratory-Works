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