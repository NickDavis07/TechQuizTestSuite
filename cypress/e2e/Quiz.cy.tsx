describe('Quiz E2E Test', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should render the start button initially', () => {
      cy.get('button').contains('Start Quiz').should('be.visible');
    });
  
    it('should start the quiz when the Start Quiz button is clicked', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.get('.spinner-border').should('be.visible');
    });
  
    it('should display questions and allow answering', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.get('.spinner-border').should('not.exist');
  
      cy.get('.card').should('be.visible');
      cy.get('.card h2').should('exist');
      cy.get('.card button').should('have.length', 4);
  
      cy.get('.card button').first().click();
      cy.get('.card h2').should('exist');
    });
  
    it('should complete the quiz and show the score', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.get('.spinner-border').should('not.exist');
  
      for (let i = 0; i < 10; i++) {
        cy.get('.card button').first().click();
      }
  
      cy.get('.card h2').contains('Quiz Completed').should('be.visible');
      cy.get('.alert-success').should('be.visible');
    });
  });