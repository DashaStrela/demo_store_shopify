class PDP {
    add_to_cart(){
        cy.get('#ProductSubmitButton-template--16820985397426__main').click();
    }

    buy_it_now(){
        cy.contains('Buy it now').click();
    }

    your_cart(){
        return cy.get('.totals__subtotal-value');
    }

    product_title(){
        return cy.get('.product__title');
    }
}

export default PDP