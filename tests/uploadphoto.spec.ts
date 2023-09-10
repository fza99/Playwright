import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
   
 
    // Visit the website
    await page.goto('https://www.welcometothejungle.com/fr/me/settings/account');
    
    // Click on "Se connecter" button
    await page.click('#login-button-submit');
    
    // Fill out email and password fields
    await page.fill('#email_login', 'inqom.qaautomationapplicant@gmail.com');
    await page.fill('#password', 'o5N,d5ZR@R7^');
    
    // Click on "Se connecter" button again
    await page.click('#login-button-submit');
    
    // Upload profile photo
    await page.getByText("Importer une image").click();
    
    // Click on "Enregistrer" button
    await page.getByText('Enregistrer').click();

});