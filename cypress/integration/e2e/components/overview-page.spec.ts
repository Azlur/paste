export const standardViewport = {
  width: 1600,
  height: 1800,
};

describe('Overview page', () => {
  beforeEach(() => {
    cy.visit('/components');
  });

  it('should render the components overview page correctly', () => {
    cy.pageHeaderShouldBeVisible('Components');

    cy.overviewTableRendersCorrectly();
  });

  it('test eyes', () => {
    cy.openTwilioEyes({
      batchName: 'Testing testing',
      testName: 'Test eyes',
      browser: standardViewport,
    });

    cy.visit('/components');

    cy.checkTwilioEyes({
      tag: 'testing testing testing',
    });

    cy.wait(500);

    cy.closeTwilioEyes();
  });
});

/*
		cy.openTwilioEyes({
			batchName: 'Calls Dashboard - Category Bar charts',
			testName: 'Category Bar charts - should render Connection Rate Bar Charts on page load',
			browser: { width: 1400, height: 1800 },
		});

		cy.wait('@stats');
		categoryBarCharts.barChart.should('exist');
		cy.wait(2500);

		categoryBarCharts.captureScreenshot('should render connection rate chart on page load');

		categoryBarCharts.barChart
			.find('.highcharts-series-0.highcharts-column-series.highcharts-tracker > rect')
			.eq(1)
			.trigger('mouseover', { force: true })
			.wait(1000);

		categoryBarCharts.barChart.find('.highcharts-tooltip').should('be.visible');

		cy.eyesClose();
*/
