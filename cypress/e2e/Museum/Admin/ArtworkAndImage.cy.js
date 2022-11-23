/// <reference types="cypress" />

const { PageObject } = require("../pageObjects/PageObject.js");

let pageObj = new PageObject();
describe("Artwork", () => {
  before(() => {
    pageObj.loadDataElements();
  });


  it(
"Create artwork(HU15) with image associate (HU20)", ()=>{
pageObj.generateAction("main", "main page", "load page");
pageObj.waiting(3500);
pageObj.generateAction("main","link admin","click");
pageObj.waiting(3500);
pageObj.generateAction("admin","link artwork","click");
pageObj.waiting(3500);
pageObj.generateAction("artwork save","txtName","type");
pageObj.waiting(1000);
pageObj.generateAction("artwork save","txtDescription","type");
pageObj.waiting(1000);
pageObj.generateAction("artwork save","txtYear","type");
pageObj.waiting(1000);
pageObj.generateAction("artwork save","txtType","type");
pageObj.waiting(1000);
pageObj.generateAction("artwork save","cboArtist","select");
pageObj.waiting(1000);
pageObj.generateAction("artwork save","checkImage","click");
pageObj.waiting(1000);
pageObj.generateAction("artwork save","checkImage2","click");
pageObj.waiting(1000);
pageObj.generateAction("artwork save","btnAdd","click");
pageObj.waiting(1000);
pageObj.generateAction("artwork save","btnSave","click");

}

  );


});
