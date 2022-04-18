function zadanie_1() {
    let str_json = '["Коля", "Вася", "Петя"]',
        str = JSON.parse(str_json)
    alert(str[str.length - 1])
}

function zadanie_2() {
    let str = { a: 'aaa', b: 'bbb' },
        str_json = JSON.stringify(str)
    console.log(str_json)
}

function setInLS(selector, key) {
    this.elem = document.querySelector(selector)
    localStorage.setItem(key, JSON.stringify(this.elem.value))
}

function setVFLS(selector, key) {
    this.elem = document.querySelector(selector)
    this.elem.value = JSON.parse(localStorage.getItem(key))
}
let now = "now"
document.addEventListener("DOMContentLoaded", () => {
    setVFLS("textarea.zadanie3", "now")
})
//     //setInterval(zadanie_3_set, 15000, "textarea.zadanie3", now)
document.querySelector("textarea.zadanie3").addEventListener("focus" || "blur", () => {
    setTimeout(setInLS, 1000, "textarea.zadanie3", now)
})


let i = 1, lst
if (lst > i) i = JSON.parse(localStorage.getItem('' + JSON.parse(localStorage.getItem("lst"))))
document.addEventListener("DOMContentLoaded", () => {
    setVFLS("textarea.zadanie4", "" + JSON.parse(localStorage.getItem("lst")))
})
document.querySelector("textarea.zadanie4").addEventListener("focus" || "blur", () => {
    if (JSON.parse(localStorage.getItem("lst")) == undefined) lst = i
    setTimeout(setInLS, 1000, "textarea.zadanie4", i);
    setTimeout(lst++, 1000)
    localStorage.setItem("lst", JSON.stringify(lst - 1))
    setTimeout(i++, 1000)
})
let hI = i
document.querySelector("div.left").addEventListener("click", () => {
    if (hI != 1)
        hI--
    setVFLS("input.history", "" + hI)
})
document.querySelector("div.right").addEventListener("click", () => {
    if (hI < JSON.parse(localStorage.getItem("lst"))) {
        hI++
        setVFLS("input.history", "" + hI)
    }
    else setVFLS("input.history", "" + JSON.parse(localStorage.getItem("lst")))
})

