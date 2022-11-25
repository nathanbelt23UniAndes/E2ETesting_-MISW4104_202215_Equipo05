const { PageObject } = require("../pageObjects/PageObject.js");
let pageObj = new PageObject();
describe("Museum-List", () => {
  before(() => {
    pageObj.loadDataElements();
  });
  it("Museum-List (HU01-HU02)", () => {
    pageObj.generateAction("main", "main page", "load page");
    pageObj.waiting(3500);
    pageObj.generateAction("museum list", "museum_1_Hover", "hover");
    pageObj.waiting(3500);
    pageObj.generateAction("museum list", "museum_1", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("museum list", "homeLink", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("museum list", "museum_2", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("museum list", "homeLink", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("museum list", "museum_3", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("museum list", "homeLink", "click");
  });
});
