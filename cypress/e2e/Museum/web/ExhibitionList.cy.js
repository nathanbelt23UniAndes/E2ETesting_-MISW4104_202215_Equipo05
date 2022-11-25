const { PageObject } = require("../pageObjects/PageObject.js");
let pageObj = new PageObject();
describe("Exhibition-List", () => {
  before(() => {
    pageObj.loadDataElements();
  });
  it("Exhibition-List (HU03-HU04)", () => {
    pageObj.generateAction("main", "main page", "load page");
    pageObj.waiting(3500);
    pageObj.generateAction("museum list", "museum_1_Hover", "hover");
    pageObj.waiting(3500);
    pageObj.generateAction("museum list", "museum_1", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("exhibition list", "exhibition_1", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("exhibition list", "back_museum", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("exhibition list", "exhibition_2", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("exhibition list", "back_museum", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("exhibition list", "read_more", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("exhibition list", "read_less", "click");
  });
});