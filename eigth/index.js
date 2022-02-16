function first(str) {
    var strArray = str.split(' ');
    var array = new Array();
    for(let i = 0; i < strArray.length; i++) {
        let tempArray = strArray[i].split('');
        let temp = tempArray.shift().toUpperCase();
        tempArray.unshift(temp);
        array += tempArray.join('') + " ";
    }
    
    return array;
}

function second(str) {
    var tempArray = str.split('_');
    let array = tempArray[0];
    for (let i = 1; i < str.split('_').length; i++) {
        let tempArray2 = tempArray[i].split('');
        let temp = tempArray2.shift().toUpperCase();
       tempArray2.unshift(temp);
       array += tempArray2.join('');
    }
    return array;
}

function inArray(str, array) {
    return array.includes(str);
}

function fourth(str) {
    let tempArray = new Array();
    for (let i = 0; i < str.length; i+=2) {
        tempArray.push(str[i]);
        tempArray.splice(i, 0, str[i+1]);
    }
    return tempArray;
}

console.log(first('тест строка для проверки'))
console.log(second('var_text_hello'));
console.log(inArray('есть', ['у', 'меня', 'есть', 'такой', 'элемент']))
console.log(fourth("123456"))
