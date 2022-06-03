describe('Browser Actions', () => {
  it('should load correct url', () => {
    cy.visit('http://gspannsrv01.cloudapp.net/helpdesk/open.php', { timeout: 10000})
  })

  it('should check correct url', () => {
    cy.url().should('include', 'helpdesk')
  })

  it('should be wait for 3 seconds', () => {
    cy.wait(3000);
  })

  it('should be pause', () => {
    cy.pause();
  })


  it('should check for correct element on the page', () => {
    cy.get('h3').should('be.visible')
  })

})