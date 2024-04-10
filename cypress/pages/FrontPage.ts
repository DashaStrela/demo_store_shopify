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
        cy.get('#CardLink-template--16820985364658__featured_collection-7968564215986').click();
    }

    search_for_product(){
        cy.get('.icon-search').click({ multiple: true });
        cy.get('#Search-In-Modal').type('Blizzard Shredder X');
        cy.get('#predictive-search-option-product-1').click();
    }
}

export default FrontPage