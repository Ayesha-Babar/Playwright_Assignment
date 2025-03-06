const{test, expect}=require('@playwright/test');
const {LoginPage}=require('../Pages/loginPage');
const{ProductPage}=require('../Pages/productPage');

test('Verify User logins to the website with Valid Credentials',async({page})=>{
    const loginPage= new LoginPage(page);
    const productPage= new ProductPage(page);

    await page.goto('https://www.saucedemo.com/inventory.html');
    await loginPage.login('standard_user', 'secret_sauce');

    //await productPage.verifyOnProductPage();
})