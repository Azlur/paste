export const openTwilioEyes = (overrides: Partial<Eyes.Open.Options> = {}) => {
  const env = Cypress.env('ENV') || 'local';
  const params: Eyes.Open.Options = {
    appName: `SIP Connectivity - ${env}`,
    browser: {
      width: 1920,
      height: 1080,
      name: 'chrome',
    },
    ...overrides,
  };

  cy.eyesOpen(params);
};
