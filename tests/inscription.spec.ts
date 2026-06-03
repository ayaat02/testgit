import {test, expect} from "@playwright/test"

test("inscription", async ({page}) => {

    const rand = "Tinatina"+(Math.floor(Math.random()*1901)+100)

    //acceder au site
    await page.goto("https://api.efi-academy.com/e-commerce-test-api/auth/login.php")
    //cliquer sur le button creer un compte 
    await page.getByRole("link",{name: 'Créer un compte'}).nth(1).click()
    //saisir prenom
    await page.locator("#register-prenom").fill("gdg")
    //saisir nom 
    await page.locator("#register-nom").fill("tina")
    //saisir email
    await page.locator("#register-email").fill(rand+"@gmail.com")
    //saisir date de naissance  
    await page.locator("[data-testid='register-date-naissance']").fill("2002-04-24")
    //saisir mdp 
    await page.locator("#register-password").fill(rand)
    //saisir confirmation mdp
    await page.locator("#register-password-confirm").fill(rand)
    //saisir type client 
    await page.locator("#register-role").selectOption("admin")
    //cliquer button creer un compte
    await page.locator("#register-submit").click()
    //verifier la redirection 
    await expect(page).toHaveURL(/login/)
    //verifier le message 
    await expect(page.locator("#alerts")).toBeVisible()
})