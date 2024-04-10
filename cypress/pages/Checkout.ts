class Checkout {

    // <reference types= ‘cypress’>

    add_contact(){
        cy.get('#email').type('dasha.strela51195@gmail.com');
    }

    add_delivery(){
       cy.get('#TextField0').type('Daria');
       cy.get('#TextField1').type('Strelnikova');
       cy.get('#shipping-address1').type('Åboulevarden 18');
       cy.get('#TextField2').type('8000');
       cy.get('#TextField3').type('Aarhus');
    }

    add_payment_details(){

        const iframe = cy.get ('#card-fields-number-7uvysnu8vw700000-scope-drias-personal-store.myshopify.com')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)

        iframe.clear().type('1')



        /*cy.get('#number').type('1');
        cy.get('#expiry').type('1125');
        cy.get('#verification_value').type('123');
        cy.get('#name').type('DARIA STRELNIKOVA');*/

    }

    confirm_purchase(){
        cy.get('#pay-button-container').click();
    }

    displayed_confirmation(){
        return cy.get('._1fragemir');
    }

    scroll(){
            cy.scrollTo(0, 500)
    }
}

export default Checkout