const Selector = require("../Selectors/Selector");
class SearchResultPage{
    async searchProductAndGetlengthOfProduct(product){
        await page.waitForSelector(Selector.searchfield);
        await page.type(Selector.searchfield, product.name);
        await page.keyboard.press('Enter');
        await page.waitForSelector(Selector.searchLength);
        let noOfProducts = await page.$eval(Selector.searchLength, ele => ele.innerText);

        await expect(noOfProducts).toBe(product.record);
        
        let homepageNavigationLink = await page.waitForSelector(Selector.homepageLink);
        await homepageNavigationLink.click();
    }
}
module.exports = SearchResultPage;