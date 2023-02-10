const Selector = require("../Selectors/Selector");
class PaymentPage{
    async placeOrderAndGetorderID(){
        await page.waitForSelector(Selector.paymentClass);
        await page.waitForNetworkIdle({idleTime: 100});
        await page.waitForSelector(Selector.placeOrderBtn);
        await page.click(Selector.placeOrderBtn);
    }
}
module.exports = PaymentPage;