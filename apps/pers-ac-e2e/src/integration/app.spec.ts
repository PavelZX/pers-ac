import { getGreeting } from '../support/app.po';

describe('pers-ac', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to pers-ac!');
  });
});
