/// <reference types="cypress" />sponsor

const { PageObject } = require("../pageObjects/PageObject.js");

let pageObj= new PageObject();
describe('Save sponsor (HU12)', () => {
  
  before(()=>
  {
    pageObj.loadDataElements();
  });

  it("Save sponsor", ()=>
  {
    pageObj.generateAction("main", "main page", "load page");
    pageObj.waiting(3500);
    pageObj.generateAction("main","link admin","click");
    pageObj.waiting(3500);
    pageObj.generateAction("admin","link sponsor","click");
    pageObj.waiting(1000);
    pageObj.generateAction("sponsor save","txtName","type");
    pageObj.waiting(1000);
    pageObj.generateAction("sponsor save","txtDescription","type");
    pageObj.waiting(1000);
    pageObj.generateAction("sponsor save","txtWebSite","type");
    pageObj.generateAction("sponsor save","save","click");
    pageObj.waiting(1000);
    pageObj.generateAction("main", "main page", "load page");
  });

 });
