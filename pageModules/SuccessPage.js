const Selector = require("../Selectors/Selector");
class SuccessPage{
    
    async verifyProductOrdered(){
        await page.waitForXPath(Selector.orderNumber, {visible: true});
        await page.waitForSelector(Selector.orderSuccessMsg, {visible: true});
        let successText = await page.$eval(Selector.orderSuccessMsg, ele => ele.innerText);
        await expect(successText).toBe("Thank you for your purchase!");
    }

    async verifyProductID(){
        await page.waitForXPath(Selector.orderNumber, {visible: true});
        let orderNumber = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.orderNumber))[0]);
        await expect(orderNumber).not.toBeUndefined();
        await expect(orderNumber).not.toBeNull();
        await expect(orderNumber).not.toBeNaN();

        console.log("Order Successfull, Order ID: ", orderNumber);
    }
}
module.exports = SuccessPage;