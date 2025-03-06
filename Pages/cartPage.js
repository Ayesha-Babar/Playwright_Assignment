const { expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.productInCart = page.locator('.cart_item'); // Check if item is in cart
    }

    async verifyProductInCart() {
        await expect(this.productInCart).toBeVisible();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}
module.exports = {CartPage };