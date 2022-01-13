describe('Token list filter', function () {
  // ℹ️ If we use anon functions instead of arrow functions, we can leverage Mocha's context and pull the test name directly from this
  beforeEach(() => {
    cy.visit('/tokens');
  });

  it('searches for a background color', () => {
    cy.get('input[name="tokens-filter"]').type('background').should('have.value', 'background');
    cy.get('#background-colors').should('exist');
    cy.get('#border-colors').should('not.exist');
  });

  describe('Visual regression tests', () => {
    /* TODO:
      - full page check or multiple section/region checks
      - need to add check for branch name/batch id for CI runs
    */
    it('Basic VRT', () => {
      // ℹ️ We are able to reference `this.title` because we have bound this describe block to the Cypress context.
      const testSuiteName = this.title;
      cy.openTwilioEyes({
        testName: testSuiteName,
        batchName: '[Spike] add vrt with applitools',
      });
      cy.checkTwilioEyes();

      cy.closeTwilioEyes();
    });
  });
});
