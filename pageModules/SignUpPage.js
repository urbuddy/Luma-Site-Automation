const Selector = require("../Selectors/Selector");
class SignUpPage{
    
    async signUpProcess(userInfo){
        await page.waitForSelector(Selector.firstname);
        await page.type(Selector.firstname, userInfo.firstname);
        await page.type(Selector.lastname, userInfo.lastname);
        await page.waitForSelector(Selector.email);
        await page.type(Selector.email, userInfo.email);
        await page.type(Selector.password, userInfo.password);
        await page.type(Selector.confirmPassword, userInfo.password);
        await page.click(Selector.createAccountSubmitBtn);
        await page.waitForSelector(Selector.confirmMsg, {visible: true});
        let response = await page.$eval(Selector.confirmMsg, ele => ele.innerText);
        return response.includes("There is already an account with this email address.");
    }
}
module.exports = SignUpPage;