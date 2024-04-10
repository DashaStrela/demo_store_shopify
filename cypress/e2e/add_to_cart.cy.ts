import StartPage from "../pages/StartPage";
import FrontPage from "../pages/FrontPage";
import PDP from "../pages/PDP";
import Checkout from "../pages/Checkout";

describe('add_to_cart', () => {
    const start_page = new StartPage();
    const front_page = new FrontPage();
    const pdp = new PDP();
    const checkout = new Checkout();

    beforeEach(() => {
        start_page.visit();
        //@ts-ignore
        start_page.login();
        front_page.scroll();
        front_page.go_to_product();
    })

    it('adding product to cart', () => {
        pdp.add_to_cart();
        pdp.your_cart().should('contain', '785,95 DKK');
    })

    it('buys product now',() => {
        pdp.buy_it_now();
        checkout.add_contact();
        checkout.add_delivery();
        checkout.scroll();
        checkout.add_payment_details();
        checkout.confirm_purchase()
        checkout.displayed_confirmation().should('contain', 'Thank you, Daria')
    })

})