const { expect } = require('@playwright/test');
class ProductPage{
    constructor(page){
        this.page=page;
        this.productTitle=page.locator('#header_container > div.header_secondary_container > span');
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartButton = page.locator('.shopping_cart_link');
    }
    
    //check if the user has navigated to the product page
    async verifyOnProductPage() {
        await expect(this.productTitle).toHaveText('Products');
    }

    async addProductToCart() {
        await this.addToCartButton.click();
    }

    async goToCart() {
        await this.cartButton.click();
    }
}
module.exports = { ProductPage };
