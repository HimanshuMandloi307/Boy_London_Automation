const { expect } = require('@wdio/globals')
import { config as baseConfig }from "../../wdio.conf.js";
import homePage from "../pageobjects/home.page.js";
import hamburgermenu from "../pageobjects/hamburgermenu.js";
import Cart from "../pageobjects/Cart.js";

describe('Add to card And ====',()=>{
    before(async () => {
        await browser.url(baseConfig.baseUrl);
        await browser.maximizeWindow();
        await homePage.waitForPage();
     })

    after(async()=>{
        console.log("Thank you !!!!!!!!!!!!!!!!");
    })


    it("Select Options from Hamburgermenu",async ()=>{
        await homePage.hamburgermenuBtn.click();
        await hamburgermenu.plusIcon.click();
        await hamburgermenu.selectAnyOptionFromHamburgerMenu("STARBOY")
        await browser.pause(5000);
        await Cart.waitForPage();
        // assertion
    })

    it("add to cart item", async() =>{
        await Cart.selectItem.waitForClickable();
        await Cart.selectItem.click();
        await browser.pause(5000);
        await Cart.selectedCartItemName.waitForDisplayed();
        const selectedItem = await Cart.selectedCartItemName.getText();
        console.log(">>>>>>>>>>>>>>>>>>"+selectedItem);
        await Cart.addtoCartBtn.click();
        await Cart.viewCartBtn.click();
        await expect(Cart.selectedCartItemName.toHaveText()).toEqual(selectedItem);
        await browser.pause(5000);
    })
})