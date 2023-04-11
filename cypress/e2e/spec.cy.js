require('@cypress/xpath');

describe('Flipkart', () => {
  it('Visit Flipkart', async() => {
    cy.visit('https://flipkart.com');
    await cy.xpath("//input[text()='Search for products, brands and more']").type("iphone");
  })
  it('Search and type', async() => {    
    await cy.xpath("//input[text()='Search for products, brands and more']").type("iphone");
  })
})
