const { PageObject } = require("../pageObjects/PageObject.js");
let pageObj = new PageObject();
describe("Detail-Movement", () => {
  before(() => {
    pageObj.loadDataElements();
  });
  it("Detail-Movement (HU10)", () => {
    pageObj.generateAction("main", "main page", "load page");
    pageObj.waiting(3500);
    pageObj.generateAction("main", "link movement list", "click");
    pageObj.waiting(3500);
    pageObj.generateAction("movement-list", "txtSearch", "type");
    pageObj.waiting(1000);
    pageObj.generateAction("movement-list", "link movement", "click");
    pageObj.waiting(1000);
    pageObj.generateAction(
      "movement-detail",
      "containt page",
      "containt movement"
    );
    pageObj.waiting(1000);
    pageObj.generateAction("movement-detail", "link artist", "click");
  });
});
