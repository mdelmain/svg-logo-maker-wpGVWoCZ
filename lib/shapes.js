class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    generateShape(){
        return `
        <svg version="1.1"
             width="300" height="200"
             xmlns="http://www.w3.org/2000/svg">
        
          <circle cx="150" cy="100" r="80" fill="green" />
        
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">WWW</text>
        
        </svg>
        `
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    
    generateShape(){
        return `
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="blue" />

  <text x="150" y="138" font-size="50" text-anchor="middle" fill="white">WWW</text>

</svg>
        `
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    generateShape(){
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     <rect x="50" y="20" width="150" height="150" fill="green" />
   
     <text x="125" y="120" font-size="60" text-anchor="middle" fill="white">WWW</text>
   
   </svg>
        `
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
