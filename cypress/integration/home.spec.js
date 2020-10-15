describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should show App working!', () => {
    cy.contains('App working!');
  });
});
