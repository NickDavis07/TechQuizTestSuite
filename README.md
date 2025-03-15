# Tech Quiz Test Suite

This project includes end-to-end (E2E) and component tests for the Tech Quiz application using Cypress.

## E2E Tests

The E2E tests are located in the `cypress/e2e` folder. These tests simulate user interactions with the application and verify that the application behaves as expected.

### `quiz.cy.tsx`

This file contains the E2E tests for the Quiz component. The tests include:

- **Initial Render**: Verifies that the "Start Quiz" button is initially visible.
- **Start Quiz**: Verifies that the first question is displayed after clicking the "Start Quiz" button.
- **Answer Questions**: Verifies that questions are displayed and can be answered.
- **Complete Quiz**: Verifies that the quiz can be completed and the score is shown.

## Component Tests

The component tests are located in the `cypress/component` folder. These tests focus on individual components and verify their functionality in isolation.

### `quiz.cy.tsx`

This file contains the component tests for the Quiz component. The tests include:

- **Initial Render**: Verifies that the "Start Quiz" button is initially visible.
- **Start Quiz**: Verifies that the first question is displayed after clicking the "Start Quiz" button.

## Running the Tests

To run the tests, follow these steps:

1. **Install Dependencies**: Ensure all dependencies are installed by running the following command in the root directory:
    ```sh
    npm install
    ```

2. **Start the Development Server**: Open a terminal and run the following command to start the development server:
    ```sh
    npm run start:dev
    ```

3. **Run Cypress Tests**: In another terminal, run the Cypress tests:
    ```sh
    npx cypress open
    ```

This will open the Cypress Test Runner. You can select the E2E or component tests to run them.

## Folder Structure
