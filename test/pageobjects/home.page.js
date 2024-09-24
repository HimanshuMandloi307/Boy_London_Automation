import { $ } from '@wdio/globals';

class homePage{

    get homepageTittle(){
        return $(`[class="header__normal-logo t4s-d-none t4s-d-lg-block"]`);
    }

    get accountBtn(){
        return $(`[class="t4s-icon t4s-icon--account"]`);
    }

    get cartBtn(){
        return $(`[class="t4s-icon t4s-icon--cart"]`);
    }

    get footerCopyRightText(){
        return $(`[class="t4s-coppy-right t4s-rte--list"]`);
    }

    get hamburgermenuBtn(){
        return $(`.t4s-push-menu-btn.t4s-lh-1`);
    }


    // page method
     async waitForPage () {
        await this.homepageTittle.waitForDisplayed();
        await this.accountBtn.waitForDisplayed();
        await this.footerCopyRightText.waitForDisplayed();
     }

}

export default new homePage();