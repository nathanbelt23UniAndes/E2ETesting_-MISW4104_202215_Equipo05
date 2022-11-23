/// <reference types="cypress" />image

const { PageObject } = require("../pageObjects/PageObject.js");

let pageObj= new PageObject();
describe('Save image', () => {
  
  before(()=>
  {
    pageObj.loadDataElements();
  });

  it("Save image", ()=>
  {
    pageObj.generateAction("main", "main page", "load page");
    pageObj.waiting(3500);
    pageObj.generateAction("main","link admin","click");
    pageObj.waiting(3500);
    pageObj.generateAction("admin","link image","click");
    pageObj.waiting(1000);
    pageObj.generateAction("image save","txtAlt","type");
    pageObj.waiting(1000);
    pageObj.generateAction("image save","txtHeight","type");
    pageObj.waiting(1000);
    pageObj.generateAction("image save","txtWidth","type");
    pageObj.waiting(1000);
    pageObj.generateAction("image save","txtSource","type");
    pageObj.waiting(1000);
    pageObj.generateAction("image save","save","click");
    pageObj.waiting(1000);
    pageObj.generateAction("main", "main page", "load page");
  });

 });
