const Selector = require("../Selectors/Selector");
class CategoryPage{
    async getlengthOfEachCategorysProduct(category){
        for(let i=0; i< category.length; i++){
            let ProductCollection = await page.waitForXPath(Selector.openLink(category[i].text));
            await ProductCollection.click();
            await page.waitForXPath(Selector.productLength);
            let noOfProducts = await page.evaluate(element => {
                return element.textContent;
            }, (await page.$x(Selector.productLength))[0]);
            
            await expect(noOfProducts).toBe(category[i].record);

            let homepageNavigationLink = await page.waitForSelector(Selector.homepageLink);
            await homepageNavigationLink.click();
        }
    }
}
module.exports = CategoryPage;