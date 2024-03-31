



beforeEach(() => {

    cy
      .visit('/board/76957803157')
})

it('Chaining commands', () => {
  
    cy
        .contains('milk')

    cy
        .get('[data-cy=list')
        .eq(1)
        .contains('milk')
  
  });