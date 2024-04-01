beforeEach(() =>{

    cy.intercept({
        method: 'GET',
        url: '/api/boards'
    }).as('boardList')

    cy
        .visit('/')
});

it('Reset Test', () => {
    cy.request('POST', '/api/reset')

    cy 
        .visit('/')

    })

it('Create first Board',() => {
        cy.intercept({
            method: 'POST',
            url: '/api/boards'
        }).as('createBoard')
    
        cy
            .visit('/')
    
        cy
            .get('[data-cy="create-board"]')
            .click()
    
        cy
            .get('[data-cy=new-board-input]')
            .type('first board{enter}')
    
        cy
            .wait('@createBoard')
            .its('response.statusCode')
            .should('eq', 201)
    
    })


it('Intercept requests', () => {

    cy
        .wait('@boardList')
        .its('response.statusCode')
        .should('eq', 200)

    cy
        .get('[data-cy=board-item]')
        .should('have.length', 1)
})

it('Create new Board',() => {
    cy.intercept({
        method: 'POST',
        url: '/api/boards'
    }).as('createBoard')

    cy
        .visit('/')

    cy
        .get('[data-cy="create-board"]')
        .click()

    cy
        .get('[data-cy=new-board-input]')
        .type('new board{enter}')

    cy
        .wait('@createBoard')
        .its('response.statusCode')
        .should('eq', 201)

})



// cy
//     .get('.Nav_boards')
//     .click()

