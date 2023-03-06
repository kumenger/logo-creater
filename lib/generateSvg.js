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

        <${this.shape} width="60" height="60" stroke="black" fill=${this.ShapeColor} stroke-width="5"/>
      
       
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

        <${this.shape} width="60" height="60" stroke="black" fill=${this.ShapeColor} stroke-width="5"/>
      
       
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

         <${this.shape} width="60" height="60" stroke="black" fill=${this.ShapeColor} stroke-width="5"/>
      
       
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

        <${this.shape} width="60" height="60" stroke="black" fill=${this.ShapeColor} stroke-width="5"/>
      
       
      </svg>
   `;
  }
}

module.exports = { Reactangle, Trinagle, Circle, Ellipse };
