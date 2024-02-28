import StartPage from "../pages/StartPage";
import FrontPage from "../pages/FrontPage";

describe('Accessibility', () => {
    const start_page = new StartPage();
    const front_page = new FrontPage();

    it('should run accessibility audit', () => {
        start_page.visit();
        //@ts-ignore
        start_page.login();
        cy.injectAxe();
        cy.checkA11y();
    })
})