

beforeEach(() => {

    cy
      .visit('/board/76957803157')
})

it('Multiple Assertions', () => {

    cy
        .get('[data-cy=task')
        .should(item =>{
            if(item.length !== 3){
                throw new Error('Not enough elements!')
            }
            expect(item[0]).to.contain.text('bread')
            expect(item[1]).to.contain.text('milk')

        })


  });