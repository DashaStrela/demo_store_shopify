class StartPage {

    visit() {
        cy.visit('https://drias-personal-store.myshopify.com/');
    }

    login() {
        cy.get('#password').type('rtewso');
        cy.get('[type="submit"]').click();
    }
}
export default StartPage