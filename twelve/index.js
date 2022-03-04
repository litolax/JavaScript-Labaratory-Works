// 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), 
// rate (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
// Вот так должен работать наш класс:
// var worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31
// С помощью нашего класса создайте двух рабочих и найдите сумму их зарплат.

function Worker(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.getSalary = () => {
        return this.rate * this.days;
    }
    this.showSalary = () => {
        console.log(this.rate * this.days);
    }
}

let worker = new Worker('Иван', 'Иванов', 10, 31);
let worker2 = new Worker('Андрей', 'Питкевич', 15, 40);
let sum = worker.getSalary() + worker2.getSalary();
console.log(`Сумма зарплат рабочих = ${sum}`)

// 2. Модифицируйте класс Worker из предыдущей задачи следующим образом: 
// сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:
function Worker2(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.getName = () => {
        return this.name;
    }
    this.getSurname = () => {
        return this.surname;
    }
    this.getRate = () => {
        return this.rate;
    }
    this.getDays = () => {
        return this.days;
    }
    this.setRate = (rate) => {
        this.rate = rate
    }
    this.setDays = (days) => {
        this.days = days;
    }
    this.getSalary = () => {
        return this.rate * this.days;
    }
    this.showSalary = () => {
        console.log(this.rate * this.days);
    }
}
var worker3 = new Worker2('Иван', 'Иванов', 10, 31);

console.log(worker3.getName()); //выведет 'Иван'
console.log(worker3.getSurname()); //выведет 'Иванов'
console.log(worker3.getRate()); //выведет 10
console.log(worker3.getDays()); //выведет 31
console.log(worker3.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker3.setRate(20); //увеличим ставку
worker3.setDays(10); //уменьшим дни
console.log(worker3.getSalary()); //выведет 200 - то есть 20*10

// 4. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), 
// который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
//  который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, 
//  который принимает строку и делает заглавной первую букву каждого слова этой строки.
// Наш класс должен работать так:

function MyString() {
    this.reverse = (str) => {
        return str.split('').reverse().join('');
    }
    this.ucFirst = (str) => {
        return str[0].toUpperCase() + str.slice(1);
    }
    this.ucWords = (str) => {
        let newStr = "";
        for (let symbols of str.split(' ')) {
            newStr += this.ucFirst(symbols) + " ";
        }
        return newStr;
    }
}
var str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

console.log('a+x ax aax aaax'.replace(/\S\W+/g, '!'))

