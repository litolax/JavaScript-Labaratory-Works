let elem1 = document.getElementById('area1');
elem1.textContent = localStorage.getItem('area1');

function Petya(json) {
    return JSON.parse(json)[2];
}

function ToJson(obj) {
    return JSON.stringify(obj);
}

elem1.addEventListener('input', updateValue);

function updateValue(e) {
    localStorage.setItem('area1', e.target.value);
}

let elem2 = document.getElementById('area2');
elem2.addEventListener('focusout', setHistory)
function setHistory(e) {
    let arr = [];
    // console.log(localStorage.getItem('history'))
    // arr.push(JSON.parse(localStorage.getItem('history')));
    // console.log(arr);
    localStorage.setItem('history', JSON.stringify(arr.push(e.target.value)));
    console.log(localStorage.getItem('history'));
}

// alert(Petya('["Коля", "Вася", "Петя"]'));
// alert(ToJson({a: 'aaa', b: 'bbb'}));
