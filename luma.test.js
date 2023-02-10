const HomePage = require("./pageModules/HomePage");
const CartPage = require("./pageModules/CartPage");
const PurchasePage = require("./pageModules/PurchasePage");
const SignInPage = require("./pageModules/SignInPage");
const SignUpPage = require("./pageModules/SignUpPage");
const CategoryPage = require("./pageModules/CategoryPage");
const SearchResultPage = require("./pageModules/SearchResultPage");
const PaymentPage = require("./pageModules/PaymentPage");
const SuccessPage = require("./pageModules/SuccessPage");
const ProductDetailsPage = require("./pageModules/ProductDetailsPage");
const productdetailsPage = new ProductDetailsPage();
const successPage = new SuccessPage();
const categoryPage = new CategoryPage();
const searchResultPage = new SearchResultPage();
const payment = new PaymentPage();
const hompage = new HomePage();
const cartpage = new CartPage();
const purchasepage = new PurchasePage();
const signUp = new SignUpPage();
describe("Luma Site Automation", () => {

    test("Sign Up to Buying a product from site", async () => {
        await hompage.homePageLink(); 
        await hompage.createAccountLink();

        let userInfo = {
            firstname: "WWW",
            lastname: "XXX",
            email: "www@xxx.com",
            password: "WWWxxx@123"
        };

        let isNotNewAccount = await signUp.signUpProcess(userInfo);

        let searchProduct = {
            name: "bag",
            record: "10"
        }
        await searchResultPage.searchProductAndGetlengthOfProduct(searchProduct);

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

        await productdetailsPage.addToCartProduct(product);
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

        await payment.placeOrderAndGetorderID();

        await successPage.verifyProductOrdered();
        await successPage.verifyProductID();
    });
});