const HomePage = require("./pageModules/HomePage");
const CartPage = require("./pageModules/CartPage");
const PurchasePage = require("./pageModules/PurchasePage");
const SignInPage = require("./pageModules/SignInPage");
const SignUpPage = require("./pageModules/SignUpPage");
const CategoryPage = require("./pageModules/CategoryPage");
const SearchResultPage = require("./pageModules/SearchResultPage");
const PaymentPage = require("./pageModules/PaymentPage");
const categoryPage = new CategoryPage();
const searchResultPage = new SearchResultPage();
const payment = new PaymentPage();
const hompage = new HomePage();
const cartpage = new CartPage();
const purchasepage = new PurchasePage();
const signIn = new SignInPage();
const signUp = new SignUpPage();
page = globalThis.__PAGE_GLOBAL__; 
describe("Luma Site Automation", () => {

    test("Sign-up Process of the site", async () => {
        await hompage.homePageLink(); 
        await hompage.createAccountLink();
        let userInfo = {
            firstname: "WWW",
            lastname: "XXX",
            email: "www@xxx.com",
            password: "WWWxxx@123"
        };

        let isNotNewAccount = await signUp.signUpProcess(userInfo);
        if(isNotNewAccount){
            await hompage.signInLink();
            await signIn.singInProcess(userInfo);
        }

        await searchResultPage.searchProductAndGetlengthOfProduct("bag", "10");

        let category = [
            {text: "Shop New Yoga", record: "32"}, 
            {text: "Shop Pants", record: "25"}, 
            {text: "Shop Erin Recommends", record: "21"}, 
            {text: "Shop Performance", record: "23"}, 
            {text: "Shop Eco-Friendly", record: "18"}
        ];
        await categoryPage.getlengthOfEachCategorysProduct(category);

        let product = {
            name: "Hero Hoodie",
            price: "$54.00",
            size: "XL",
            color:"Green"
        }
        await hompage.productPageLink(product);
        await cartpage.addToCartProduct(product);

        await cartpage.openCart();
        await cartpage.verifyDetailsOfCartProduct(product);

        await cartpage.procedeToPurchaseBtn();
        let address = {
            street: "XYZ",
            city: "UVW",
            region_id: "2",
            postal_code: "12345",
            telephone: "0987654321"
        };
        await purchasepage.fillAddressAndSubmit(address, isNotNewAccount);

        let orderID = await payment.placeOrderAndGetorderID();
        console.log("Order Successfull, Order ID: ", orderID);
    });

});