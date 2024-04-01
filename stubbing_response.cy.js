
it('Stubbing response', () => {

    cy
        .intercept({
            method: 'POST',
            url: '/api/boards'
        }, {
            forceNetworkError: true
        }).as('createBoard')

    cy
        .visit('/')

    cy
        .get('[data-cy="create-board"]')
        .click()

    cy
        .get('[data-cy="new-board-input"]')
        .type('new board{enter}')

    cy
        .get('#errorMessage')
        .should('be.visible')
})