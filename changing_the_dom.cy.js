
beforeEach(() => {

    cy.
        visit('/')
});

it('Changing the Dom', () => {

    cy
        .get('[data-cy="board-item"]')
        .trigger('mouseover')
        
})