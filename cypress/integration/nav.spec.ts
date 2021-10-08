describe('Home', () => {
  it('should load logo', () => {
    cy.visit('/');
    cy.get('[data-test=logo]');
  });

  it('should load nav links', () => {
    cy.visit('/');

    cy.get('[data-test=becomeHost]').click();
    cy.get('[data-test=help]').click();
    cy.get('[data-test=signUp]').click();
    cy.get('[data-test=login]').click();

  });

  it('should load input search', () => {
    cy.visit('/');

    cy.get('[data-test=search]').should('be.visible');
  });

  it('should type in search field', () => {
    cy.visit('/');
    cy.get('[data-test=search]').type('my search');
  });

});
