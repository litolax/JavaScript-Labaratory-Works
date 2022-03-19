class Elem {
    constructor(selector){
        this.element = document.querySelector(selector);
    }
    html(text){
        this.element.innerHTML = text;
        return this;
    }
    attr(attribute, value){
        let attribute2 = this.element.getAttribute(attribute);
        attribute2.value = value;
    }
}

let elem = new Elem('p.test');
// elem.html("Тестовый");
elem.attr('class', 'www'); 
