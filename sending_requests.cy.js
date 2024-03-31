

it('Sending requests', () => {

    cy
        .visit('/')

    cy
        .request({
            method: 'POST',
            url: '/api/boards',
            body:{
                name: 'board created by .request() command'
            }
        })

})