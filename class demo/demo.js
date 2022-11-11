class Rectangle {
    constructor(heigh, width, a) {
        this.heigh = heigh;
        this.width = width;
        this.a = a

    }

    a = 150;

    get area() {
        return this.heigh * this.width
    }

}

const squeare = new Rectangle(10, 10, 123)
const squeare2 = new Rectangle(10, 10)


console.log(squeare);
console.log(squeare.a);
console.log(squeare2);
