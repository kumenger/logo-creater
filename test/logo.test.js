
const CreateLogo = require("../lib/generateSvg");


describe("Create Logo", () => {

  describe("Create tringle Shape logo", () => {
    test("should return logo  tringle ", () => {
      //create new trinagle class with hardcoded values
     let newLogo = new CreateLogo.Trinagle("kumeTrinagle", "red", "red", "circle");
     //render method renders a string to  test  using toMatch method hardcodes values  matched in returend string 
     expect(newLogo.render()).toMatch(/kumeTrinaglexxx/);
    });
  });
  describe("Create Circle Shape logo", () => {
    test("should return logo  Circle ", () => {
      //create new circle class with hardcoded values
     let newLogo = new CreateLogo.Circle("kumeCircle", "red", "red", "circle");
     //render method renders a string to  test  using toMatch method hardcodes values  matched in returend string 
     expect(newLogo.render()).toMatch(/kumeCirclexxx/);
    });
  });
  describe("Create Ellipise Shape logo", () => {
    test("should return logo  Ellipise ", () => {
      //create new Ellipise class with hardcoded values
     let newLogo = new CreateLogo.Ellipse("kumeEllipise", "red", "red", "circle");
     //render method renders a string to  test  using toMatch method hardcodes values  matched in returend string 
     expect(newLogo.render()).toMatch(/kumeEllipise/);
    });
  });
  describe("Create Rectangle Shape logo", () => {
    test("should return logo  Rectangle ", () => {
      //create new rectangle class with hardcoded values
     let newLogo = new CreateLogo.Reactangle("kumeReactangle", "red", "red", "circle");
     //render method renders a string to  test  using toMatch method hardcodes values  matched in returend string 
     expect(newLogo.render()).toMatch(/kumeReactangle/);
    });
  });
});
