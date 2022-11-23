const { PageObject } = require("../pageObjects/PageObject.js");
let pageObj = new PageObject();
describe("Artwork-Detail", () => {
  before(() => {
    pageObj.loadDataElements();
  });
  it("Artwork (HU06)", () => {
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
    pageObj.generateAction("artist-detail", "linkArtWork2", "click");
    pageObj.waiting(1000);
    pageObj.generateAction("artwork-detail", "containt page", "containt artist name");
    pageObj.waiting(1000);
    pageObj.generateAction("artwork-detail", "containt page", "containt artwork Title");
    pageObj.waiting(1000);
    pageObj.generateAction("artwork-detail", "containt page", "containt artwork year");

  });
});
