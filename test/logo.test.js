const CreateLogo = require('../lib/generateSvg');

// A testing suite for Arithmetic is created.
describe('Create Logo', () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  // This test checks to see if 2 % 2 has a remainder of 0 and returns 0.
  describe('Create tringle Shape logo', () => {
    it('return logo shaped tringle', () => {
      const renderLogo = `<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg" >

       
      <polygon   points="250,60 100,400 400,400" width="60" height="60" stroke="black" fill="red" stroke-width="1"/>
      <text text-anchor="middle"  font-size="15px"  x="250" y="200" fill="red">kume</text>
   </svg>`;
      const newLogo = new CreateLogo.Trinagle({ text: 'kume', ShapeColor: 'red', textColor: 'red', shape: 'Circle' });
      expect(newLogo.render()).toBe(renderLogo);
    });
  });
});