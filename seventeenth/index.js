// finally отлично подходит для завершения измерений несмотря ни на что.
// Во втором фрагменте кода очиста происходит не в том месте, так как
// если нет finally она может просто не выполниться по причине выпадения ошибки в try catch.
// Мы не завершим работу до конца.
let input = prompt("Введите математическое выражение", '2 + 2')

function evalMath(input) {
    try {
        let result = eval(input);
        if (Number.isNaN(result) || !Number.isInteger(result) || result == null || result == undefined) throw new Error("Неправильно введено выражение")
        else return result
    } catch (error) {
        alert(`${error.message}, пожалуйста повторите попытку.`)
        input = prompt("Введите математическое выражение", '2 + 2')
        return evalMath(input);
    }
}

console.log(evalMath(input))