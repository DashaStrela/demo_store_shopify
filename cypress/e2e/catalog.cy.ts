import StartPage from "../pages/StartPage";
import FrontPage from "../pages/FrontPage";
import PLP from "../pages/PLP";

describe('catalog', () => {
    const start_page = new StartPage();
    const front_page = new FrontPage();
    const plp = new PLP();

    it('opens_catalog', () => {
        start_page.visit();
        //@ts-ignore
        start_page.login();
        front_page.shop_products();
        plp.header().should('contain', 'Products');
    })
})