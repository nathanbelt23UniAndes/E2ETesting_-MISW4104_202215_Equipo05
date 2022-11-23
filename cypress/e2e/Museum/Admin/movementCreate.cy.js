/// <reference types="cypress" />

const { PageObject } = require("../pageObjects/PageObject.js");

let pageObj= new PageObject();
describe('Save Movement', () => {
  
  before(()=>
  {
    pageObj.loadDataElements();
  });

  it("create movement", ()=>
  {
    pageObj.generateAction("main", "main page", "load page");
    pageObj.waiting(3500);
    pageObj.generateAction("main","link admin","click");
    pageObj.waiting(3500);
    pageObj.generateAction("admin","link movement","click");
    pageObj.waiting(1000);
    pageObj.generateAction("movement save","txtName","type");
    pageObj.waiting(1000);
    pageObj.generateAction("movement save","txtDescription","type");
    pageObj.waiting(1000);
    pageObj.generateAction("movement save","txtCountry","type");
    pageObj.waiting(1000);
    pageObj.generateAction("movement save","btnSave","click");

  });

 });
