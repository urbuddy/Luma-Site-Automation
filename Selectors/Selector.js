module.exports = {
    homePageURL: "https://magento.softwaretestingboard.com",
    createAccount: "//a[contains(text(), 'Create an Account')]",
    loginLink: "//header//a[contains(text(),'Sign In')]",
    logedInText: ".logged-in",
    searchfield: "#search",
    searchLength: "#toolbar-amount .toolbar-number",
    openLink: function(value) {
        return "//span[normalize-space()='"+value+"']";
    },
    productLength: "//div//div[2]//p[1]//span[3]",
    shopTees: "//span[normalize-space()='Shop Tees']",
    productName: function(name) {
        return "a[title='"+name+"']";
    },
    productSize:  function(value) {
       return "//div[text()='"+value+"']";
    },
    productColor: function(value){
        return "//div[@option-label='"+value+"']";
    },
    productClass: "span[data-ui-id='page-title-wrapper']",
    addToCartBtn: "button[id='product-addtocart-button']",
    confirmMsg: "div[data-bind='html: $parent.prepareMessageForHtml(message.text)']",
    firstname: "#firstname",
    lastname: "#lastname",
    email: "#email_address",
    password: "#password",
    confirmPassword: "#password-confirmation",
    createAccountSubmitBtn: "button[title='Create an Account'] span",
    signInEmail: "#email",
    pass: "#pass",
    signInSubmit: "#send2",
    cartPageURL: "https://magento.softwaretestingboard.com/checkout/cart/",
    cartProduct: "td[data-th='Item'] div strong a",
    cartProductPrice: "span[data-label='Excl. Tax'] span span",
    cartProductSize: "//dt[text()='Size']/following::dd[1]/span",
    cartProductColor: "//dt[text()='Color']/following::dd[1]/span",
    purchaseBtn: "li button[title='Proceed to Checkout']",
    newAddressBtn: "//span[normalize-space()='New Address']",
    streetPath: "input[name='street[0]']",
    city: "input[name='city']",
    region_id: "select[name='region_id']",
    postcode: "input[name='postcode']",
    phone: "input[name='telephone']",
    saveAddressRadioBtn: "#shipping-save-in-address-book",
    confirmAddressBtn: "//footer[@class='modal-footer']//span[contains(text(), 'Ship here')]",
    shippingCharge: "input[name='ko_unique_3']",
    nextBtn: "//span[normalize-space()='Next']",
    paymentClass: "div[id='checkout-payment-method-load'] div div div[data-role='title']",
    placeOrderBtn: "button[title='Place Order']",
    orderNumber: "//a[@class='order-number']//strong",
    homepageLink:"img[src='https://magento.softwaretestingboard.com/pub/static/version1666447838/frontend/Magento/luma/en_US/images/logo.svg']",
    shippingAdress: "//div[normalize-space()='Shipping Address']",
    orderSuccessMsg: ".base"
}