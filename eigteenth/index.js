let firstButtonElem = document.getElementById("firstButton");

function firstButton(e) {
    console.log(`Высота окна браузера: ${document.documentElement.clientHeight}`);
}
firstButtonElem.addEventListener("click", firstButton)
let secondButtonElem = document.getElementById("secondButton");

function secondButton(e) {
    window.scrollTo(0, document.body.scrollHeight);
}
secondButtonElem.addEventListener("click", secondButton)

let thirdButtonElem = document.getElementById("thirdButton");

function thirdButton(e) {
    if (document.body.style.overflow == 'hidden') alert("Прокрутки нет");
    else alert("Прокрутка есть");
}

thirdButtonElem.addEventListener("click", thirdButton)