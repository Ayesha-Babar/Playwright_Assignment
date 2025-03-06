const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/loginPage');
const { ProductPage } = require('../Pages/productPage');
const { CartPage } = require('../Pages/cartPage');
const { CheckoutPage } = require('../Pages/checkoutPage');

test('User Places an Order and Checks Out Successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
    await productPage.verifyOnProductPage();
    await productPage.addProductToCart();
    await productPage.goToCart();

    await cartPage.verifyProductInCart();
    await cartPage.proceedToCheckout();

    await checkoutPage.fillCheckoutForm('John', 'Doe', '12345');
    await checkoutPage.finishOrder();
    await checkoutPage.verifyOrderSuccess();
});
