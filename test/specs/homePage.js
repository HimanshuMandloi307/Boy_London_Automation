import { config as baseConfig }from "../../wdio.conf.js";
import homePage from "../pageobjects/home.page.js";
import LoginPage from "../pageobjects/login.page.js";
import RegisterPage from "../pageobjects/register.page.js";
import Account from "../pageobjects/account.page.js";
import accountPage from "../pageobjects/account.page.js";


describe('User registration and login',()=>{
    before(async () => {
        await browser.url(baseConfig.baseUrl);
        await browser.maximizeWindow();
        await homePage.waitForPage();
     })

    after(async () =>{
        console.log("Thank you !!!!!!!!!!!!!!!!");
    })

    it("Verify title on home page",async ()=>{
        await expect(browser).toHaveTitleContaining('BOY LONDON');
    })

    it("Verify user is able to crete new account",async ()=>{

        await homePage.accountBtn.click();
        await LoginPage.loginpageTitle.waitForDisplayed();
        await LoginPage.createAccountBtn.click();
        await RegisterPage.register("ansh","Gupta","abcd@gmail.com","xyz@123");
        await browser.pause(5000);
        //
    })

    it.only("Verify user is able to login",async () =>{
        await homePage.accountBtn.click();
        await LoginPage.waitForPage();
        await LoginPage.loginDetails("pawelet556@aiworldx.com","xyz@123");
        await LoginPage.btnSubmit.click();
        console.log(">>>>>>>>>>>>>>>>>>>>>");
        await accountPage.waitForPage();
        await expect(Account.myAccountTitle).toHaveText("MY ACCOUNT");
    })
})