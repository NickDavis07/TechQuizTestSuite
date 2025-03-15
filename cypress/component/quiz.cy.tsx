import { mount } from 'cypress/react18';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  // Test to check if the start button is initially visible
  it('should render the start button initially', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').should('be.visible');
  });

  // Test to check if the first question is displayed after clicking the start button
  it('should start the quiz and display the first question when the Start Quiz button is clicked', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('.card h2').should('be.visible');
  });
});