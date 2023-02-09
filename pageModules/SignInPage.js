const Selector = require("../Selectors/Selector");
class SignInPage{
    
    async singInProcess(userInfo){
        await page.waitForSelector(Selector.signInEmail);
        await page.type(Selector.signInEmail, userInfo.email);
        await page.waitForSelector(Selector.pass);
        await page.type(Selector.pass, userInfo.password);
        await page.click(Selector.signInSubmit);
        let homepageNavigationLink = await page.waitForSelector(Selector.homepageLink);
        await homepageNavigationLink.click();
    }
}
module.exports = SignInPage;