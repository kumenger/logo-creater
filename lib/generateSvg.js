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
    return `
  <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg" >
 

       
        <${this.shape} x="10" y="10" width="300" height="300"   fill="${this.ShapeColor}" stroke-width="1"/>
        <text text-anchor="middle"  font-size="15px"  x="100" y="80" fill="${this.textColor}">${this.text}</text>
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
    return `
  <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg" >

      
        <${this.shape} cx="25" cy="25" rx="25" ry="25" width="100" height="100" stroke="black" fill="${this.ShapeColor}"  stroke-width="1"/>
        <text text-anchor="middle"  font-size="15px"  x="25" y="20" fill="${this.textColor}">${this.text}</text>

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
    return `
  <svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg" >

       
         <${this.shape}   points="250,60 100,400 400,400" width="60" height="60" stroke="black" fill="${this.ShapeColor}" stroke-width="1"/>
         <text text-anchor="middle"  font-size="15px"  x="250" y="200" fill="${this.textColor}">${this.text}</text>
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
    return `
   <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg" >

       
        <${this.shape} cx="40" cy="40" r="30" width="180" height="180" stroke="black" fill="${this.ShapeColor}" stroke-width="5"/>
        <text text-anchor="middle"  font-size="20px"  x="40" y="40"  fill="${this.textColor}">${this.text}</text>
       


      </svg>
   `;
  }
}

module.exports = { Reactangle, Trinagle, Circle, Ellipse };
