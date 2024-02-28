class FrontPage {
    header(){
        return cy.get('.focus-inset');
    }

    shop_products(){
        cy.contains('Shop products').click();
    }

    scroll(){
        cy.scrollTo(0, 500)
    }

    go_to_product(){
        cy.get('#CardLink-template--22014400594215__featured_collection-8981522940199').click();
    }
}

export default FrontPage