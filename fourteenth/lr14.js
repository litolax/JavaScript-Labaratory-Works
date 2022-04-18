class Elem {
    constructor(selector) { this.elem = document.querySelector(selector) }

    html(text) {
        this.elem.innerHTML = text
    }

    append(text) {
        let temp = this.elem.innerHTML
        this.elem.innerHTML = text + temp
        return this
    }

    prepend(text) {
        let temp = this.elem.innerHTML
        this.elem.innerHTML = temp + text
        return this
    }

    attr(attr, value) {
        this.elem.setAttribute(attr, value)
        return this
    }
}
var elem1 = new Elem('p.test');
console.log(elem1)
elem1.html('hello')
elem1.append('!')
elem1.prepend('!')
elem1.attr('class', 'www').attr('title', 'hello');

class Rectangle {
    constructor(selector) { this.elem = document.querySelector(selector) }
    setWidth(newWidth) {
        this.elem.setAttribute("width", newWidth)
    }
    setHeight(newHeight) {
        this.elem.setAttribute("height", newHeight)
    }
    getWidth() {
        return this.elem.getAttribute("width")
    }
    getHeight() {
        return this.elem.getAttribute("height")
    }
}
var img = new Rectangle("img.hi")
img.setWidth(100)
img.setHeight(200)
alert(img.getHeight())
alert(img.getWidth())