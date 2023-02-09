const Selector = require("../Selectors/Selector");
class PaymentPage{
    async placeOrderAndGetorderID(){
        await page.waitForSelector(Selector.paymentClass);
        await page.waitForNetworkIdle({idleTime: 100});
        await page.waitForSelector(Selector.placeOrderBtn);
        await page.click(Selector.placeOrderBtn);
        await page.waitForXPath(Selector.orderNumber, {visible: true});
        let orderNumber = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.orderNumber))[0]);
        return orderNumber;
    }
}
module.exports = PaymentPage;