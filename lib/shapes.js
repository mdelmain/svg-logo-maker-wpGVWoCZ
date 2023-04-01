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
        return `
        <svg version="1.1"
             width="300" height="200"
             xmlns="http://www.w3.org/2000/svg">
        
          <${this.shapeCode} fill="${this.shapeColor}" />
        
          <text x="${this.textPositionX}" y="${this.textPositionY}" font-size="${this.fontSize}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
        </svg>
        `
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor, 'circle cx="150" cy="100" r="80"', 150, 125, 60);
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}

const circle = new Circle ('SVG', 'white', 'circle cx="150" cy="100" r="80"', 'blue' );


function generateShape(){

    return `
    
    <svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
    
      <circle cx="150" cy="100" r="80" fill="green" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">WWW</text>
    
    </svg>
    
    `
    
    }
