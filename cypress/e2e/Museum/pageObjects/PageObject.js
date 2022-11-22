/ <reference types="cypress" / > require("cypress-xpath");
const { ElementsInterface } = require("./elementsInterface");
const { faker } = require("@faker-js/faker");

class PageObject {
  constructor() {
    this.elements = [];
  }
  getElement(elemento, modulo) {
    return this.elements.find(
      (x) => x.elemento == elemento && x.modulo == modulo
    );
  }
  loadDataElements() {
    cy.fixture("PageObject.json").then((root) => {
      root.elements.forEach((element) => {
        let elemInter = new ElementsInterface();
        elemInter.modulo = element.modulo;
        elemInter.elemento = element.elemento;
        elemInter.dirpath = element.dirpath;
        elemInter.tipo = element.tipo;
        elemInter.evento = element.evento;
        this.elements.push(elemInter);
      });
      return this.elements;
    });
  }

  generateAction(modulo, elemento, evento) {
Cypress.on("uncaught:exception", (err, runnable) => {
return false;
})                   
    switch (evento) {
      case "click":
        this.eventoClick(modulo, elemento);
        break;
      case "load page":
        this.eventLoadPage(modulo, elemento);
        break;
      case "type":
        this.eventType(modulo, elemento);
        break;
    }
  }

  eventoClick(modulo, elemento) {
    let elem = this.getElement(elemento, modulo);
    cy.xpath(elem.dirpath).click({ force: true });
  }
  eventLoadPage(modulo, elemento) {
    let elem = this.getElement(elemento, modulo);
    cy.visit(elem.dirpath);
  }

  eventType(modulo, elemento) {
    let elem = this.getElement(elemento, modulo);
    let valorFake = this.fakerValue(elem.tipo);
    console.log("valor", valorFake);
    cy.xpath(elem.dirpath).clear();
    cy.xpath(elem.dirpath).type(valorFake);
  }
  eventSelect(modulo, elemento) {
    let elem = this.getElement(elemento, modulo);
     cy.xpath(elem.dirpath).select('100').should('have.value', '100');                    
  }

  fakerValue(tipo) {
    switch (tipo) {
      case "name":
        return faker.name.fullName();
      case "description":
        return faker.lorem.paragraph();
      case "country":
        return faker.address.country();
    }
  }

  waiting(time) {
    cy.wait(time);
  }
}

module.exports = {
  PageObject,
};
