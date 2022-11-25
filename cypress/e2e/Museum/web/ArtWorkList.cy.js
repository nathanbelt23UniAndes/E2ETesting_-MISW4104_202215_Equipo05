const { PageObject } = require("../pageObjects/PageObject.js");
let pageObj = new PageObject();
describe("ArtWork-List", () => {
  before(() => {
    pageObj.loadDataElements();
  });
  it("ArtWork-List (HU05-HU06)", () => {
    pageObj.generateAction("main", "main page", "load page");
    pageObj.waiting(3500);
    pageObj.generateAction("museum list", "museum_1_Hover", "hover");
    pageObj.waiting(3500);
    pageObj.generateAction("museum list", "museum_1", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("artwork list", "view_artwork", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("exhibition list", "back_museum", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("artwork list", "read_more", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("artwork list", "read_less", "click");
  });
});