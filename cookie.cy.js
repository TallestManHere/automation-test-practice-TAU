
/// <reference types="cypress" /> */

beforeEach(() =>{
    cy
        .visit('/')
});

it('test 1',() => {
   
    cy
        .setCookie('trello_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVkdWFyZC50ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzExODczNzI2LCJleHAiOjE3MTE4NzczMjYsInN1YiI6IjIifQ.f7Sjg1YWMI1KpsHmLlWBxAw-rhDsCOgDcUAFUcMlECU')
    cy    
        .reload()
});

it('test 2', () =>{

})