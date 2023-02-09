const Selector = require("../Selectors/Selector");
class PurchasePage{
    async fillAddressAndSubmit(address, isNotNewAccount){
        await page.waitForXPath(Selector.shippingAdress, {visible: true});
        await page.waitForNetworkIdle({idleTime: 50});

        if(isNotNewAccount){
            let newAddress = await page.waitForXPath(Selector.newAddressBtn, {visible: true});
            await newAddress.click();
        }

        await page.waitForSelector(Selector.streetPath);
        await page.type(Selector.streetPath, address.street);
        await page.type(Selector.city, address.city);  
        await page.select(Selector.region_id, address.region_id);
        await page.type(Selector.postcode, address.postal_code);
        await page.type(Selector.phone, address.telephone);

        if(isNotNewAccount){
            let radioBtn = await page.waitForSelector(Selector.saveAddressRadioBtn, {visible: true});
            await radioBtn.click();
            await page.waitForNetworkIdle({idleTime: 50});
            let confirmAddress = await page.waitForXPath(Selector.confirmAddressBtn);
            await confirmAddress.click();
        }
        
        await page.waitForSelector(Selector.shippingCharge);
        await page.click(Selector.shippingCharge);
        let continuebtn = await page.waitForXPath(Selector.nextBtn);
        await continuebtn.click();
    }
}
module.exports = PurchasePage;