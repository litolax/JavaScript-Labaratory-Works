function square(number) {
    return number * number;
}

function sumOfTwo(first, second) {
    return first + second;
}

function minusDivide(first, second, third) {
    return (first - second) / third;
}

function fromOneToSeven(dayIndex) {
    const dayNames = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

    return dayNames[dayIndex];
}

function hasFive(arr) {
    let flag = false;

    for (let i = 0; i < arr.length; i++) if (arr[i] == 5) flag = true;
    if (flag) alert(`Да`);
    else alert(`Нет`);
}

function isPrimeNumber(number) {
    let flag = false;

    for (let i = 2; i < number; i++) if (Number.isInteger(number / i)) flag = true;
    
    if (!flag) alert(`Да`);
    else alert(`Нет`);
}

alert(square(4)); // 16
alert(sumOfTwo(5, 10)); // 15
alert(minusDivide(20, 8, 4)) // 3
alert(fromOneToSeven(2)) // Среда
hasFive([0, 1, 3, 5, 9, -5]) // Да
isPrimeNumber(1123) // Да

/*
Контрольные вопросы
1. Функция это метод, который можно вызвать внутри основого блока, он может принимать параметры и чаще всего он решает одну поставленную ему задачу.
2. Spread оператор – это три точки перед именем переменной (или константы), внутри определения объекта. Он раскладывает соответствующий объект внутри нового объекта.
3. Пример создания анонимной функции:
function(){  
 // код
}
4. Флаги это буллевые переменные, которые нужны для того, чтобы если нам нужно что-то отследить, то мы это трекали в переменной и потом на это 1 раз давали реакцию.
*/