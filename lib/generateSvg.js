//create svg here
class Log {
  constructor(text, textColor, ShapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.ShapeColor = ShapeColor;
  }
}

class Reactangle extends Log {
  constructor(text, textColor, ShapeColor, shape) {
    super(text, textColor, ShapeColor);
    this.shape = shape;
  }
  render() {
  return  `
  <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg" >

        <${this.shape} x="10" y="10" width="30" height="30"  fill="${this.ShapeColor}" stroke-width="5"/>
      
       
      </svg>
  
  `;
  }
}
class Ellipse extends Log {
  constructor(text, textColor, ShapeColor, shape) {
    super(text, textColor, ShapeColor);
    this.shape = shape;
  }
  render() {
  return  `
  <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg" >

        <${this.shape} cx="75" cy="75" rx="20" ry="5" width="60" height="60" stroke="black" fill="${this.ShapeColor}" stroke-width="5"/>
      
       
      </svg>
  `;
  }
}
class Trinagle extends Log {
  constructor(text, textColor, ShapeColor, shape) {
    super(text, textColor, ShapeColor);
    this.shape = shape;
  }
  render() {
  return  `
  <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg" >

         <${this.shape}  points="200,10 250,190 160,210" width="60" height="60" stroke="black" fill="${this.ShapeColor}" stroke-width="5"/>
      
       
      </svg>
 `;
  }
}
class Circle extends Log {
  constructor(text, textColor, ShapeColor, shape) {
    super(text, textColor, ShapeColor);
    this.shape = shape;
  }
  render() {
   return  `
   <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg" >

        <${this.shape} cx="25" cy="75" r="20" width="60" height="60" stroke="black" fill="${this.ShapeColor}" stroke-width="5"/>
      
       
      </svg>
   `;
  }
}

module.exports = { Reactangle, Trinagle, Circle, Ellipse };
