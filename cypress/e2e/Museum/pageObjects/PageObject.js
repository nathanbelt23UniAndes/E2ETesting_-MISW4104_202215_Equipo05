/ <reference types="cypress" / > require("cypress-xpath");
const { ElementsInterface } = require("./elementsInterface");
const { faker } = require("@faker-js/faker");

class PageObject {
  constructor() {
    this.elements = [];
    this.movementsText = "Naive art";
    this.artistName = "Brett Whiteley";
    this.artworkTitle = "Self portrait in the studio";
    this.artworkYear = "1976";
    this.artworkType = "Painting";
    this.artworkDescription =
      "Similar to Brett Whiteley's other major paintings of this period, 'Self-portrait in the studio' exudes a sense of sumptuous living and the liquid presence of the harbour through what he called 'the ecstasy-like effect of Ultramarine blue'. Whiteley's tiny mirror self-portrait also reflects the influence of Eastern art in his portrayal of man as merely part of a larger landscape.";
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
    });
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
      case "select":
        this.eventSelect(modulo, elemento);
        break;
      case "containt movement":
        this.eventContaintMovement();
        break;
      case "containt artist":
        this.eventContaintArtist();
        break;
      case "containt artist name":
        this.eventContaintArtistName();
        break;

      case "containt artwork Title":
        this.eventContaintArtworkTitle();
        break;
      case "containt artwork year":
        this.eventContaintArtworkYear();
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
    cy.xpath(elem.dirpath).select("100").should("have.value", "100");
  }

  eventContaintMovement() {
    this.eventContaint(this.movementsText);
  }

  eventContaintArtist() {
    this.eventContaint(this.artistName);
  }
  eventContaintArtistName() {
    this.eventContaint(this.artistName);
  }

  eventContaintArtworkTitle() {
    this.eventContaint(this.artworkTitle);
  }
  eventContaintArtworkYear() {
    this.eventContaint(this.artworkYear);
  }

  eventArtistName() {
    this.eventContaint(this.artistName);
  }

  eventContaint(value) {
    cy.contains(value);
  }

  fakerValue(tipo) {
    switch (tipo) {
      case "name":
        return faker.name.fullName();
      case "description":
        return faker.lorem.paragraph();
      case "country":
        return faker.address.country();
      case "address":
        return faker.address.cardinalDirection();
      case "city":
        return faker.address.city();
      case "year":
        return faker.datatype.number({ min: 1950, max: 2022 });
      case "type":
        return faker.music.genre();
      case "search movement":
        return this.movementsText;
      case "search artist":
        return this.artistName;
    }
  }

  waiting(time) {
    cy.wait(time);
  }
}

module.exports = {
  PageObject,
};
