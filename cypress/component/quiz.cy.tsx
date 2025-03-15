import { mount } from 'cypress/react18';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('should render the start button initially', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').should('be.visible');
  });

  it('should start the quiz and display the first question when the Start Quiz button is clicked', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('.card h2', { timeout: 10000 }).should('be.visible');
  });
});