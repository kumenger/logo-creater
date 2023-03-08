const CreateLogo = require('../lib/generateSvg');

// A testing suite for Arithmetic is created.
describe('Create Logo', () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  // This test checks to see if 2 % 2 has a remainder of 0 and returns 0.
  describe('Create tringle Shape logo', () => {
    it('return logo shaped tringle', () => {
      const total = 0;
      const arithmetic = new Arithmetic();
      expect(arithmetic.modulus(2, 2)).toEqual(total);
    });
  });
});