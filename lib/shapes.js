class Shape {
    constructor(text, textColor, shapeColor, shapeCode, textPositionX, textPositionY, fontSize) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shapeCode = shapeCode;
        this.textPositionX = textPositionX;
        this.textPositionY = textPositionY;
        this.fontSize = fontSize;
    }
    generateShape(){
        return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <${this.shapeCode} fill="${this.shapeColor}" />

    <text x="${this.textPositionX}" y="${this.textPositionY}" font-size="${this.fontSize}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor, 'circle cx="150" cy="100" r="80"', 150, 125, 50);
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor, 'polygon points="150, 18 244, 182 56, 182"', 150, 138, 40);
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor, 'rect x="50" y="20" width="150" height="150"', 125, 120, 50);
    }
}

module.exports = {
    Circle,
    Triangle,
    Square,
};