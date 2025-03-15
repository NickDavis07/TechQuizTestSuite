import { mount } from 'cypress/react18';
import '../../client/src/main.tsx';
Cypress.Commands.add('mount', mount);