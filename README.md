# Playwright_Assignment
This assignment contains automated test scripts using Playwright with Javascript following the Page Object Model.

The 'Pages' folder has POM classes for different sections of the website:
loginPage.js → Contains locators and methods for login functionality.
productPage.js → Handles product selection and adding to cart.
cartPage.js → Manages cart-related actions.
checkoutPage.js → Manages the checkout process and order completion.

The 'tests' folder contains test scripts for different test scenarios.
login.spec.js → Tests the login functionality with valid credentials.
order.spec.js → Tests product selection, checkout, and order completion.
apiTest.spec.js → Sends a request to the OpenWeather API and verifies the response for Islamabad.

Use your own Open weather API key to run apiTest.spec.js
