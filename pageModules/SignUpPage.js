const Selector = require("../Selectors/Selector");
const HomePage = require("./HomePage");
const SignInPage = require("./SignInPage");
const hompage = new HomePage();
const signIn = new SignInPage();
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
        let isNotNewAccount = response.includes("There is already an account with this email address.");
    
        if(isNotNewAccount){
            await hompage.signInLink();
            await signIn.singInProcess(userInfo);
        }

        await page.waitForSelector(Selector.logedInText, {visible: true});
        let logedInStatus = await page.$eval(Selector.logedInText, ele => ele.innerText);
        await expect(logedInStatus).toBe("Welcome, "+userInfo.firstname+" "+ userInfo.lastname+"!");
        return isNotNewAccount;
    }
}
module.exports = SignUpPage;