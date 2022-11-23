/// <reference types="cypress" />

const { PageObject } = require("../pageObjects/PageObject.js");

let pageObj= new PageObject();
describe('Save museum', () => {
  
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

  });

 });
