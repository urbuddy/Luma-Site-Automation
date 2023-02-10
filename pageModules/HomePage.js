const Selector = require("../Selectors/Selector");
class HomePage{
    async homePageLink(){
        await page.goto(Selector.homePageURL, { waitUntil: "domcontentloaded" });
    }

    async createAccountLink(){
        let createAccountBtn = await page.waitForXPath(Selector.createAccount);
        await createAccountBtn.click();
    }

    async signInLink(){
        let loginBtn = await page.waitForXPath(Selector.loginLink);
        await loginBtn.click();
    }

    async productPageLink(product){
        let productNameLink = await page.waitForSelector(Selector.productName(product.name));
        await productNameLink.click();
    }
}

module.exports = HomePage;