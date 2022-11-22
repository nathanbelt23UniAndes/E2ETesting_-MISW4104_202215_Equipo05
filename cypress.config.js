const { defineConfig } = require("cypress");

/// <reference types="cypress" />
const { ElementsInterface } = require("./cypress/e2e/Museum/pageObjects/elementsInterface");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
          getElementsJson(oki){
            let elements=[];
            /*
            cy.fixture("PageObject.json").should((root) => {
              console.log("my root", root);
              root.elements.forEach((element) => {
                console.log(element.modulo);
                let elemt = new ElementsInterface();
                elemt.modulo = element.modulo;
                elemt.elemento = element.elemento;
                elemt.dirpath = element.dirpath;
                elemt.tipo = element.tipo;
                elements.push(elemt);
                console.log(elements);
              });
            });*/
            return elements;
          }

      });
    },  
  },
});
