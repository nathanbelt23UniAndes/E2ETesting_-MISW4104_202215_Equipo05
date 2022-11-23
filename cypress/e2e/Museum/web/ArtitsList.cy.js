const { PageObject } = require("../pageObjects/PageObject.js");
let pageObj = new PageObject();
describe("Artist-List", () => {
  before(() => {
    pageObj.loadDataElements();
  });
  it("Artist-List (HU07)", () => {
    pageObj.generateAction("main", "main page", "load page");
    pageObj.waiting(3500);
    pageObj.generateAction("main", "link artist list", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("artist-list", "txtSearch", "type");
    pageObj.waiting(1000);
    pageObj.generateAction("artist-list", "link artist", "click");
    pageObj.waiting(1000);
    pageObj.generateAction("artist-detail", "containt page", "containt artist");
    pageObj.waiting(1000);
    pageObj.generateAction("artist-detail", "link artists", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("artist-list", "link movement", "click");
  });
});
