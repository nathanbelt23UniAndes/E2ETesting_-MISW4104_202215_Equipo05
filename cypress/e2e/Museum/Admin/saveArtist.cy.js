/// <reference types="cypress" />artist

const { PageObject } = require("../pageObjects/PageObject.js");

let pageObj= new PageObject();
describe('Save artist', () => {
  
  before(()=>
  {
    pageObj.loadDataElements();
  });

  it("Save artist", ()=>
  {
    pageObj.generateAction("main", "main page", "load page");
    pageObj.waiting(3500);
    pageObj.generateAction("main","link admin","click");
    pageObj.waiting(3500);
    pageObj.generateAction("admin","link artist","click");
    pageObj.waiting(1000);
    pageObj.generateAction("artist save","txtName","type");
    pageObj.waiting(1000);
    pageObj.generateAction("artist save","txtBirthPlace","type");
    pageObj.waiting(1000);
    pageObj.generateAction("artist save","txtBirthDate","type");
    pageObj.waiting(1000);
    pageObj.generateAction("artist save","selectImage","click");
    pageObj.waiting(1000);
    pageObj.generateAction("artist save","addImage","click");
    pageObj.waiting(1000);
    pageObj.generateAction("artist save","selectMovement","click");
    pageObj.generateAction("artist save","save","click");
    pageObj.waiting(1000);
    pageObj.generateAction("main", "main page", "load page");
  });

 });
