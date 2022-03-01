// 1. Дан массив. Запишите первый элемент этого массива в переменную elem1, второй - в переменную elem2, 
// третий - в переменную elem3, а все остальные элементы массива - в переменную arr.

let first = array => {
    let [elem1, elem2, elem3, ...arr] = array;
    return [elem1, elem2, elem3, arr]
} 

console.log(first([5,2,1,7,4,3]))

// 2. Дан массив. Запишите последний элемент этого массива в переменную elem1, а предпоследний - в переменную elem2.

let second = array => {
    let [elem1, elem2] = [array[array.length-1], array[array.length-2]]
    return [elem1, elem2];
}

console.log(second([5,2,8,6,1]));

// 3. Дан массив. Запишите второй элемент этого массива в переменную elem2. Первый элемент никуда записывать не надо.

let third = array => {
    let [,elem2] = array;
    return elem2;
}

console.log(third([5,8]))

// 4. Дан массив. Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3. 
// Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee',
//  а если нет второго - в переменную elem2 запишите значение 'bbb'. Первый элемент никуда записывать не надо. 

let fourth = array => {
    let = [, elem2 = 'bbb', elem3 = 'eee'] = array;
    return [elem2, elem3];
}

console.log(fourth(['Привет', 'Дарова', '1234']))

// 5. Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}. Запишите соответствующие значения в переменные name, surname и age.

let user = {
    name: 'Петр',
    surname: 'Петров',
    age: '20 лет'
}
let fifth = user => {
    let {name, surname, age} = user;
    return [name, surname, age];
}

console.log(fifth(user))

// 6. Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }. Запишите соответствующие значения в переменные name, surname и age. 
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию: 
// {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.

let user2 = {
    name: 'Петр'
}

let sixth = user => {
    let {name = 'Аноним', surname = 'Анонимович', age = '? лет'} = user;
    return [name, surname, age];
}

console.log(sixth(user2));

// На итераторы
// 7. Дан массив, выведите его элементы последовательно на экран.

let seventh = array => {
    array.forEach(e => console.log(e));
}

seventh([5,2,9,5,1]);

// 8. Дан массив, выведите его элементы последовательно на экран в обратном порядке (подсказка: сначала перевернем массив через reverse).

let eigth = array => {
    array.reverse().forEach(e => console.log(e));
}

eigth([1,4,6,8,10])

// 9. Дан массив с числами, найдите сумму элементов этого массива.

let ninth = array => {
    let sum = 0;
    array.forEach(e => sum += e)
    console.log(sum);
}

ninth([1,4,6,8,2,7]);

// 10. Дана строка. С помощью for-of подсчитайте количество букв 'о' в ней.

let tenth = str => {
    let sum = 0;
    for (const symbol of str) {
        if (symbol == 'о') sum++;
    }
    console.log(sum)
}

tenth('Анодроеой');

// На функции
// 11. Сделайте функцию, которая получает имя пользователя и выводит на экран 'Привет, Имя' (вместо Имя - полученное параметром имя). 
// По умолчанию (то есть если не передать параметр) функция должна выводить 'Привет, Аноним'.

let eleventh = (name = "Аноним") => {
    console.log(`Привет ${name}`);
}

eleventh("Юра");

// 12. Дан объект с настройками, например, {id: 'elem', color: 'blue', border: '1px solid red', font: '15px Arial'}. 
// Сделайте функцию, которая получает этот объект, извлекает из него все настройки в соответствующие переменные 
// и для элемента с указанным id (в нашем случае это 'elem') ставит заданные CSS свойства. В объекте могут быть только эти ключи,
//  однако, какой-либо ключ (кроме id) может быть не задан - в этом случае пусть возьмутся следующие значения по умолчанию:
//   color: 'blue', border: '1px solid red', font: '15px Arial'.

let element = {
    id: 'elem',
    color: 'blue',
    border: '1px solid red',
    font: '15px Arial'
}

let twelveth = object => {
    let e = document.getElementById("elem")
    let str = 'color:' + object.color + '; border:' + object.border + '; font:' + object.font;
     e.style.cssText = str;
}

twelveth(element);

// 13. Даны абзацы с числами. Сделайте так, чтобы по нажатию на абзац начинал тикать таймер, который каждую секунду будет увеличивать 
// на единицу число в этом абзаце. По нажатию на другой абзац должно происходить то же самое - он тоже начнет тикать.

let elements = [];
for (let i = 1; i <= 4; i++) {
    elements[i-1] = document.getElementById(i.toString())
}

for (const elem of elements) {
    elem.addEventListener("click", () => {
        setInterval(() => {
            elem.innerText = +elem.innerText + 1;
        }, 1000);
    });
}