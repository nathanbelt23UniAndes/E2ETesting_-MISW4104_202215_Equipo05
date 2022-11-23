const { PageObject } = require("../pageObjects/PageObject.js");
let pageObj = new PageObject();
describe("Artist-Detail", () => {
  before(() => {
    pageObj.loadDataElements();
  });
  it("Artist-Detail (HU08)", () => {
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
    pageObj.generateAction("artist-detail", "bntReadMoreMovement", "click");
    pageObj.waiting(1000);
    pageObj.generateAction("artist-detail", "linkMovement", "click");
    pageObj.waiting(1000);
    pageObj.generateAction("movement-detail", "linkArtist", "click");
    pageObj.waiting(2500);
    pageObj.generateAction("artist-detail", "linkArtWork", "click");
  });
});
