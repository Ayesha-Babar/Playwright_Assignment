const { test, expect } = require('@playwright/test');

test('Verify Islamabad temperature and API response', async ({ request }) => {
    const apiKey = 'API KEY'; // Kindly use your API key from the open weather app, i used mine and it worked perfectly fine!
    const city = 'Islamabad';
    
    
    const response = await request.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    
    // Asserting response status is 200
    expect(response.status()).toBe(200);

    // Converting this response to JSON
    const responseBody = await response.json();
    
    // Extracting temperature from the response
    const temperature = responseBody.main.temp;
    
    console.log(`The temperature in Islamabad is: ${temperature}°C`);
    
    // Asserting temperature exists and is a valid number
    expect(temperature).toBeDefined();
    expect(typeof temperature).toBe('number');
});

