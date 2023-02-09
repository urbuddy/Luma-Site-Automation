const Selector = require("../Selectors/Selector");

class CartPage{
    async openCart(){
        await page.goto("https://magento.softwaretestingboard.com/checkout/cart/",  { waitUntil: 'domcontentloaded' });
    }

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

    async verifyDetailsOfCartProduct(product){
        await page.waitForNetworkIdle({idleTime: 50});
        await page.waitForSelector(Selector.cartProduct, {visible: true});
        let productName = await page.$eval(Selector.cartProduct, ele => ele.innerText);

        await expect(productName).toBe(product.name);

        await page.waitForSelector(Selector.cartProductPrice);
        let productPrice = await page.$eval(Selector.cartProductPrice, ele => ele.innerText);

        await expect(productPrice).toBe(product.price);

        if ((product.name !== "Fusion Backpack") && product.name !== "Push It Messenger Bag"){
            await page.waitForXPath(Selector.cartProductSize);
            let productSize = await page.evaluate(element => {
                return element.textContent;
            }, (await page.$x(Selector.cartProductSize))[0]);

            await expect(productSize).toBe(product.size);

            await page.waitForXPath(Selector.cartProductColor);
            let productColor = await page.evaluate(element => {
                return element.textContent;
            }, (await page.$x(Selector.cartProductColor))[0]);
            await expect(productColor).toBe(product.color);
        }
    }

    async procedeToPurchaseBtn(){
        await page.waitForNetworkIdle({idleTime: 100});
        await page.waitForSelector(Selector.purchaseBtn);
        await page.click(Selector.purchaseBtn);
    }
}
module.exports = CartPage;