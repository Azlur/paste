enum EnvironmentVariables {
  Environment = 'ENV',
  UseCypressEyes = 'USE_CYPRESS_EYES',
  BranchName = 'GITHUB_BRANCH_NAME',
}

export const eyesAreEnabled = (): boolean => {
  const eyesEnabled = Cypress.env(EnvironmentVariables.UseCypressEyes);
  cy.log(`[Applitools]: eyes are ${eyesEnabled ? '' : 'not '}enabled`);
  return Cypress.env(EnvironmentVariables.UseCypressEyes);
};

export const getEnvironmentName = (): string => Cypress.env(EnvironmentVariables.Environment) || 'local';
export const getBranchName = (): string | undefined => {
  if (Cypress.env(EnvironmentVariables.BranchName) != null) {
    const branchName = `${Cypress.env(EnvironmentVariables.BranchName)}-${getEnvironmentName()}`;
    cy.log(`[Applitools]: setting vrt branch name to "${branchName}"`);
    return branchName;
  }

  cy.log('[Applitools]: using default branch name "default');
};
