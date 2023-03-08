
const CreateLogo = require("../lib/generateSvg");


describe("Create Logo", () => {

  describe("Create tringle Shape logo", () => {
    test("should return logo  tringle ", () => {
     let newLogo = new CreateLogo.Trinagle("kumeTrinagle", "red", "red", "circle");
     expect(newLogo.render()).toMatch(/kumeTrinagle/);
    });
  });
  describe("Create Circle Shape logo", () => {
    test("should return logo  Circle ", () => {
     let newLogo = new CreateLogo.Trinagle("kumeCircle", "red", "red", "circle");
     expect(newLogo.render()).toMatch(/kumeCircle/);
    });
  });
  describe("Create Ellipise Shape logo", () => {
    test("should return logo  Ellipise ", () => {
     let newLogo = new CreateLogo.Trinagle("kumeEllipise", "red", "red", "circle");
     expect(newLogo.render()).toMatch(/kumeEllipise/);
    });
  });
  describe("Create Rectangle Shape logo", () => {
    test("should return logo  Rectangle ", () => {
     let newLogo = new CreateLogo.Trinagle("kumeReactangle", "red", "red", "circle");
     expect(newLogo.render()).toMatch(/kumeReactangle/);
    });
  });
});
