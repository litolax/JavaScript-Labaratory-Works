function first(){
    let num = 3;
    alert(num);
}

function second(){
    let a = 10;
    let b = 2;
    alert("Сумма a + b = " + (a + b) + "\n" + 
    "Разность a - b = " + (a - b) + "\n" +
    "Произвдение a * b = " + (a * b) + "\n" +
    "Частное a / b = " + (a / b))
}

function third(){
    let c = 15;
    let d = 2;
    let result = c + d;
    alert(result);
}

function fourth(){
    let a = 10;
    let b = 2;
    let c = 5;
    let result = a + b + c;
    alert(result);
}

function fifth(){
    let a = 17;
    let b = 10;
    let c = a - b;
    let d = 7;
    let result = c + d;
    alert(result);
}

function sixth(){
    let str = "Привет, Мир!";
    alert(str);
}

function seventh(){
    let str1 = "Привет, ";
    let str2 = "Мир!";
    alert(str1 + str2);
}

function eighth(){
    let name = "Юра";
    alert("Привет, " + name)
}

function ninth(){
    let age = 17;
    alert("Мне " + age + " лет!")
}

function tenth(){
    let name = prompt("Введите ваше имя");
    alert("Ваше имя: " + name)
}

function eleventh(){
    let inputNumber = prompt("Введите любое число");
    alert("Квадрат вашего числа = " + (inputNumber*inputNumber))
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