import { $ } from '@wdio/globals';

class addtoCart{

    get selectItem(){
        return $(`(//div/a[@class="t4s-full-width-link is--href-replaced"])[1]`);
    }

    get selectedCartItemName(){
        return $(`[class="t4s-product__title"]`);
    }

    get addtoCartBtn(){
        return $(`(//span[contains(text(),'Add to cart')])[1]`);
    }

    get viewCartBtn(){
        return $(`//a[contains(text(),'View cart')]`);
    }

    get selectCartItem(){
        return $(`[class="t4s-page_cart__title t4s-d-block"]`);
    }

    get filterOption(){
        return $(`//button/img[contains(text(),"")]`)
    }

    get featuredOption(){
        return $(`[class="t4s-d-none t4s-d-md-block"]`);
    }

    // page methods

    async waitForPage(){
        await this.featuredOption.waitForDisplayed();
        await this.filterOption.waitForDisplayed();
    }
}

export default new addtoCart(); 