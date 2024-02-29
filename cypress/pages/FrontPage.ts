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

    search_for_product(){
        cy.get('.icon-search').click({ multiple: true });
        cy.get('#Search-In-Modal').type('Blizzard Shredder X');
        cy.get('#predictive-search-option-product-1').click();
    }
}

export default FrontPage