import StartPage from "../pages/StartPage";
import FrontPage from "../pages/FrontPage";
import PDP from "../pages/PDP";

describe('add_to_cart', () => {
    const start_page = new StartPage();
    const front_page = new FrontPage();
    const pdp = new PDP();

    it('adding product to cart', () => {
        start_page.visit();
        //@ts-ignore
        start_page.login();
        front_page.scroll();
        front_page.go_to_product();
        pdp.add_to_cart();
        pdp.your_cart().should('contain', '600,00 DKK');
    })

})