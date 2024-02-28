class PDP {
    add_to_cart(){
        cy.get('#ProductSubmitButton-template--22014400626983__main').click();
    }

    your_cart(){
        return cy.get('.totals__subtotal-value')
    }
}

export default PDP