const Selector = require("../Selectors/Selector");
class ProductDetailsPage{
    async addToCartProduct(product){
        await page.waitForSelector(Selector.productClass);

        if ((product.name !== "Fusion Backpack") && product.name !== "Push It Messenger Bag"){
            let size = await page.waitForXPath(Selector.productSize(product.size));
            await size.click();
            let color = await page.waitForXPath(Selector.productColor(product.color));
            await color.click();
        } 

        await page.waitForNetworkIdle({idleTime: 100});
        let addtocartbtn = await page.waitForSelector(Selector.addToCartBtn, {visible: true});
        await addtocartbtn.click();
        await page.waitForSelector(Selector.confirmMsg);

        let homepageNavigationLink = await page.waitForSelector(Selector.homepageLink);
        await homepageNavigationLink.click();
    }
}
module.exports = ProductDetailsPage;