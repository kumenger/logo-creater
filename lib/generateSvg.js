//Main class with defualt consturctor for all clases
class Log {
  constructor(text, textColor, ShapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.ShapeColor = ShapeColor;
  }
}
// clas rectangle inherited from calss logo
class Reactangle extends Log {
  constructor(text, textColor, ShapeColor, shape) {
    super(text, textColor, ShapeColor);
    this.shape = shape;
  }
  render() {
    return `
  <svg width="30" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg" >
 

       
        <rect x="10" y="10" width="50" height="50"   fill="${this.ShapeColor}" stroke-width="1"/>
        <text text-anchor="middle"  font-size="5px"  x="20" y="20" fill="${this.textColor}">${this.text}</text>
      </svg>
  
  `;
  }
}
// clas Ellipse inherited from calss logo
class Ellipse extends Log {
  constructor(text, textColor, ShapeColor, shape) {
    super(text, textColor, ShapeColor);
    this.shape = shape;
  }
  render() {
    return `
  <svg width="190" height="290" version="1.1" xmlns="http://www.w3.org/2000/svg" >
<ellipse cx="35" cy="25" rx="25" ry="25" width="100" height="100" stroke="black" fill="${this.ShapeColor}"   stroke-width="1"/>
  <text text-anchor="middle"  font-size="15px"  x="35" y="30" fill="${this.textColor}">${this.text}</text>

</svg>
  `;
  }
}
// clas trinagle inherited from calss logo
class Trinagle extends Log {
  constructor(text, textColor, ShapeColor, shape) {
    super(text, textColor, ShapeColor);
    this.shape = shape;
  }
  render() {
    return `<svg width="00" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="250,60 100,400 400,400" width="60" height="60" stroke="black" fill="${this.ShapeColor}" stroke-width="1"/>
            <text text-anchor="middle"  font-size="15px"  x="250" y="150" fill="${this.textColor}">${this.text}</text>
            </svg>`;
  }
}
// clas circle inherited from calss logo
class Circle extends Log {
  constructor(text, textColor, ShapeColor, shape) {
    super(text, textColor, ShapeColor);
    this.shape = shape;
  }
  render() {
    return `
   <svg width="250" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

       
        <circle cx="40" cy="40" r="30" width="180" height="180" stroke="black" fill="${this.ShapeColor}" stroke-width="1"/>
        <text text-anchor="middle"  font-size="20px"  x="40" y="40"  fill="${this.textColor}">${this.text}</text>
       


      </svg>
   `;
  }
}

module.exports = { Reactangle, Trinagle, Circle, Ellipse };
