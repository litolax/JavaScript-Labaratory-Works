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
    alert("Квадрат вашего числа = " + Math.pow(inputNumber, 2))
}

function twelfth(){
    let str = "abcde";
    alert(str[0])
    alert(str[2])
    alert(str[4])
}

function thirteenth(){
    let num = '12345';
    let result = num[0];
    for(let i = 1; i < num.length; i++) result *= num[i];
    
    alert("Произведение цифр числа 12345 = " + result);
}

function fourteenth(){
    let secondsInHour = 1 * 60 * 60;
    let secondsInDay = secondsInHour * 24;
    let secondsInMonth = secondsInHour * 31;
    alert("Количество секунд в часе = " + secondsInHour + "\n" +
    "Количество секунд в сутках = " + secondsInDay + "\n" + 
    "Количество секунд в месяце = " + secondsInMonth)
}

function fifteenth(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    alert(hours + ":" + minutes + ":" + seconds);
}

function sixteenth(){
    let num = 4;
    let result = Math.pow(4, 2);
    alert(result);
}

function seventeenth(){
    let num = 47;
    num += 7;
    num -= 18;
    num *= 10;
    num /= 15;
    alert(num);
}

function eighteenth(){
    let num = 10;
    num++;
    num++;
    num--;
    alert(num);
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
seventeenth();
eighteenth();

/*
Контрольные вопросы
1. Чтобы запустить JavaScript файл нужно в HTML файле прописать:
<script scr = "%Путь к вашему файлу%"></script>
2.Переменная это ячейка, которая ссылается на какую-то область памями и хранит в себе значения.
3. var или let.
4. Если наша строка находится в переменной str, а индекс(нужный нам) в i, то str[i];
5. Я запомнил разницу между этими 2-мя вещами хорошей поговоркой. undefined - ничего не присвоено, а null присвоено "ничего".
6. NaN - Not a Number, это возникает, при условии, что мы проводим операции не над числом.
*/