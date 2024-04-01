/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable{

            /**
             * Create a new board via UI
             * 
             * @example
             * cy
             *  .addBoard('board name')
             */
        addBoard()
    }
}