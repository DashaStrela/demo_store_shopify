class StartPage {

    visit() {
        cy.visit('https://merkle-qa-demo-store.myshopify.com/');
    }

    login() {
        cy.get('#password').type('naifla');
        cy.get('[type="submit"]').click();
    }
}
export default StartPage