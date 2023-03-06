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
  render(){
     `<${this.shape} width="60" height="60" stroke="black" fill=${this.ShapeColor} stroke-width="5"/>`
  }
}
class Ellipse extends Log {
    constructor(text, textColor, ShapeColor, shape) {
      super(text, textColor, ShapeColor);
      this.shape = shape;
    }
    render(){
      
    }
  }
  class Trinagle extends Log {
    constructor(text, textColor, ShapeColor, shape) {
      super(text, textColor, ShapeColor);
      this.shape = shape;
    }
    render(){
      
    }
  }
  class Circle extends Log {
    constructor(text, textColor, ShapeColor, shape) {
      super(text, textColor, ShapeColor);
      this.shape = shape;
    }
    render(){
      
    }
  }
  
  
