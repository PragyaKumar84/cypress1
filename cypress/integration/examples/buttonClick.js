describe('Browser action', () => {
  it('should load books website', () => {
    cy.visit('http://books.toscrape.com/index.html', {timeout: 10000});
    cy.url().should('include', 'index.html');
  })

  it('should click on Travel ', () => {
    cy.get('a').contains('Travel')
    .click();
    cy.get('h1').contains('Travel')
  })
})