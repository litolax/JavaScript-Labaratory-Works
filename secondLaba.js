function first(){
    let arr = ['a', 'b', 'c'];
    alert(arr);
}

function second(){
    let arr = ['a', 'b', 'c'];
    alert(arr[0]);
    alert(arr[1]);
    alert(arr[2]);
}

function third(){
    let arr = ['a', 'b', 'c', 'd'];
    alert(arr[0] + "+" + arr[1] + ", " + arr[2] + "+" + arr[3]);
}

function fourth(){
    let arr = [2,5,3,9];
    let result = arr[0] * arr[1] + arr[2] * arr[3];
    alert(result);
}

function fifth()
{
    let obj = {a: 1, b: 2, c: 3}
    alert(obj.c);
    alert(obj['c']);
}

function sixth(){
    let obj = {Коля: '1000', Вася: '500', Петя: '200'};
    alert(obj.Петя);
    alert(obj.Коля);
}

function seventh(){
    let daysOfWeek = {
        1: "Понедельник",
        2: "Вторник",
        3: "Среда",
        4: "Четверг",
        5: "Пятница",
        6: "Суббота",
        7: "Воскресенье",
    }

    let date = new Date();
    let currentDay = date.getDay();
    //спасибо, что date считает не с 0. klass.
    alert("Текущий день недели = " + daysOfWeek[currentDay])
}

function eighth(){
    seventh();
}

function ninth(){
    let arr = [[1,2,3], [4,5,6], [7,8,9]];
    alert(arr[1][0]);
}

function tenth(){
    let arr = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
    alert(arr.js[0]);
}

function eleventh(){
    let langType = {
        'ru': ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
        'en': ["Monday", "Thuesday", "Wednesday", "Thirdsday", "Friday", "Saturday", "Sunday"],
    }
    alert(langType.ru[0]);
    alert(langType.en[2]);
}

function twelfth(){
    let langType = {
        ru: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
        en: ["Monday", "Thuesday", "Wednesday", "Thirdsday", "Friday", "Saturday", "Sunday"],
    }
    
    let lang = prompt("Введите тип локализации");
    let day = prompt("Введите номер дня");
    alert(langType[lang][+day])
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
1. Массив - нужен для того, чтобы хранить и группировать в нем данные. Чаще всего это данные одного типа.
2. Массивы можно создать как:
let arr = [1,2,3,4,5];
new Array(element0, element1[, ...[, elementN]])
new Array(arrayLength)
3. Ассоциативный массив - массив, в котором любое значение связано с ключом. Я могу привести анологию с Dictionary из c#.
4. К элементам массива можно обращаться по ключу. arr[index].
5. К элементам ассоциативного массива можно обратиться по ключу элемента.
6. Многомерный массив, это массив, в котором элементам массива является еще один массив.
7. Многомерных массивы могут быть: трехмерные, 
*/



