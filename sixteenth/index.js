var elem = document.getElementById('elem');

function func() {
	alert(this.value);
}

func.call(elem)

function func2(surname, name) {
	alert(this.value + ', ' + surname + ' ' + name);
}

func2.call(elem, 'Иван', 'Иванов')
func2.apply(elem, ['Иван', 'Иванов'])

function func3(surname, name) {
	alert(this.value + ', ' + surname + ' ' + name);
}

func3 = func3.bind(elem);

func3('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
func3('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

