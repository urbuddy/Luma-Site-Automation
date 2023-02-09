const Selector = require("../Selectors/Selector");
class SearchResultPage{
    async searchProductAndGetlengthOfProduct(value, records){
        await page.waitForSelector(Selector.searchfield);
        await page.type(Selector.searchfield, value);
        await page.keyboard.press('Enter');
        await page.waitForSelector(Selector.searchLength);
        let noOfProducts = await page.$eval(Selector.searchLength, ele => ele.innerText);

        await expect(noOfProducts).toBe(records);
        
        let homepageNavigationLink = await page.waitForSelector(Selector.homepageLink);
        await homepageNavigationLink.click();
    }
}
module.exports = SearchResultPage;