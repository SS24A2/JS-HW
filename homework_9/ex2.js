class Rectangle {
    #width
    #height

    constructor(color, width, height) {
        this.color = color
        this.#width = width
        this.#height = height
    }

    get getRectangleWidth() {
        console.log (this.#width)
    }

    get getRectangleHeight() {
        console.log (this.#height)
    }

    set setRectangleWidth(width) {
        if (width > 0) {
            this.#width = width
        } else {
            console.log('Invalid width value')
        }
    }

    set setRectangleHeight(height) {
        if (height > 0) {
            this.#height = height
        } else {
            console.log('Invalid height value')
        }
    }

    static getShapeType() {
        return "Rectangle"
    }

    getArea() {
        return (`The area of this rectangle is ${this.#width * this.#height} cm2`)
    }

    describe() {
        console.log(`This is a ${this.color} rectangle with width ${this.#width} cm and height ${this.#height} cm`)
    }
}

const rectangle1 = new Rectangle('black', 100, 50)
rectangle1.getRectangleHeight
rectangle1.getRectangleWidth
console.log(Rectangle.getShapeType())
console.log(rectangle1.getArea())
rectangle1.describe()
rectangle1.setRectangleWidth = 80
rectangle1.setRectangleHeight = 40
console.log(rectangle1.getArea())


const rectangle2 = new Rectangle('white', 50, 40)
rectangle2.getRectangleHeight
rectangle2.getRectangleWidth
console.log(Rectangle.getShapeType())
console.log(rectangle2.getArea())
rectangle2.describe()
rectangle2.setRectangleWidth = -100
rectangle2.setRectangleWidth = 10
rectangle2.setRectangleHeight = 5
console.log(rectangle2.getArea())


const rectangle3 = new Rectangle('pink', 200, 70)
rectangle3.getRectangleHeight
rectangle3.getRectangleWidth
console.log(Rectangle.getShapeType())
console.log(rectangle3.getArea())
rectangle3.describe()
rectangle3.setRectangleWidth = 120
rectangle3.setRectangleHeight = -30
console.log(rectangle3.getArea())
