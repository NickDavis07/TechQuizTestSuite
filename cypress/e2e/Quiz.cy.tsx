describe('Quiz E2E Test', () => {
    // Before each test, visit the home page
    beforeEach(() => {
      cy.visit('/');
    });
  
    // Test to check if the start button is initially visible
    it('should render the start button initially', () => {
      cy.get('button').contains('Start Quiz').should('be.visible');
    });
  
    // Test to check if the first question is displayed after clicking the start button
    it('should start the quiz and display the first question when the Start Quiz button is clicked', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.get('.card h2', { timeout: 10000 }).should('be.visible');
    });
  
    // Test to check if questions are displayed and can be answered
    it('should display questions and allow answering', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.get('.card').should('be.visible');
      cy.get('.card h2').should('exist');
      cy.get('.card button').should('have.length', 4);
  
      cy.get('.card button').first().click();
      cy.get('.card h2').should('exist');
    });
  
    // Test to check if the quiz can be completed and the score is shown
    it('should complete the quiz and show the score', () => {
      cy.get('button').contains('Start Quiz').click();
  
      for (let i = 0; i < 10; i++) {
        cy.get('.card button').first().click();
      }
  
      cy.get('.card h2').contains('Quiz Completed').should('be.visible');
      cy.get('.alert-success').should('be.visible');
    });
  });