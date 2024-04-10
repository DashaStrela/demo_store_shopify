import StartPage from "../pages/StartPage";
import FrontPage from "../pages/FrontPage";

describe('Login', () => {
  const start_page = new StartPage();
  const front_page = new FrontPage();

  it('logs in to the shopify store', () => {
    start_page.visit();
    //@ts-ignore
    start_page.login();
    front_page.header().should('contain', 'drias-personal-store')
  })

})

