import StartPage from "../pages/StartPage";
import FrontPage from "../pages/FrontPage";
import PDP from "../pages/PDP";

describe('search', () => {
    const start_page = new StartPage();
    const front_page = new FrontPage();
    const pdp = new PDP();

    it('search for product', () => {
        start_page.visit();
        //@ts-ignore
        start_page.login();
        front_page.search_for_product();
        pdp.product_title().should('contain', 'Blizzard Shredder X');
    })

})