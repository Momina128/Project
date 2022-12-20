describe('Amazon website', ()=>{
    beforeEach(() => {
    cy.visit('https://www.amazon.in/')
    })
    it('Place order for smart TV', () => {
     cy.get('.hm-icon-label').contains('All').click()
     cy.get('.hmenu-item').contains('TV, Appliances, Electronics').click()
     cy.get('[href="/gp/browse.html?node=1389396031&ref_=nav_em_sbc_tvelec_television_0_2_9_2"]').click()
     cy.get('.a-spacing-micro').contains('Samsung')
     cy.get('[type="checkbox"]').eq(87).check({force: true})
     cy.get('.a-dropdown-label').click()
     cy.get('.a-popover')
     cy.get('#s-result-sort-select_2').click()
     cy.get('.a-link-normal').eq(2).click()

    })
});