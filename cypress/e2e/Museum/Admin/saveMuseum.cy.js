/// <reference types="cypress" />

const { PageObject } = require("../pageObjects/PageObject.js");

let pageObj= new PageObject();
describe('Save museum (HU11)', () => {
  
  before(()=>
  {
    pageObj.loadDataElements();
  });

  it("Save museum", ()=>
  {
    pageObj.generateAction("main", "main page", "load page");
    pageObj.waiting(3500);
    pageObj.generateAction("main","link admin","click");
    pageObj.waiting(3500);
    pageObj.generateAction("admin","link museum","click");
    pageObj.waiting(1000);
    pageObj.generateAction("museum save","txtName","type");
    pageObj.waiting(1000);
    pageObj.generateAction("museum save","txtDescription","type");
    pageObj.waiting(1000);
    pageObj.generateAction("museum save","txtAddress","type");
    pageObj.waiting(1000);
    pageObj.generateAction("museum save","txtCity","type");
    pageObj.waiting(1000);
    pageObj.generateAction("museum save","selectImage","click");
    pageObj.waiting(1000);
    pageObj.generateAction("museum save","addImage","click");
    pageObj.waiting(1000);
    pageObj.generateAction("museum save","save","click");
    pageObj.waiting(1000);
    pageObj.generateAction("main", "main page", "load page");
  });

 });
