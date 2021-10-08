describe('home', () => {
  it('should load homes', () => {
    cy.visit('/');
    cy.get('[data-test="home"]');
  });

  it('should load dialog', () => {
    openDialog();
  });

  it('should type dialog fields', () => {
    openDialog();

    let testDays = '5';
    cy.get('input[data-test="days"]').type(testDays);
    cy.get('input[data-test="days"]');
  });

  it('should calculate the total', () => {
    openDialog();
    let testDays = '8';
    cy.get('input[data-test="days"]').type(testDays);
    cy.get('p[data-test="totalValue"]').contains('$ 1000');
  });

  it('should close dialog', () => {
    openDialog();
    cy.get('.cdk-overlay-backdrop').click(-50, -50, { force: true });
  });

  it('should book home', () => {
    openDialog();
    
    cy.get('[data-test="bookBtn"]').should('not.exist');

    let testDays = '8';
    cy.get('input[data-test="days"]').type(testDays);

    cy.get('[data-test="bookBtn"]').should('be.visible');
    cy.get('[data-test="bookBtn"]').click();


    cy.get('[data-test="dialog"]').should('not.exist');
    cy.get('simple-snack-bar').should('be.visible');

  });

  function openDialog() {
    cy.visit('/');
    cy.get('button[data-test="btnDialog"]').first().click();

    cy.get('[data-test="dialog"]').should('be.visible');
  }
});
