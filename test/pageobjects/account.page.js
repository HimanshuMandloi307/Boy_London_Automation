import { $ } from '@wdio/globals';

class account{
    get myAccountTitle(){
        return $(`//h3[contains(text(),'MY ACCOUNT')]`);
    }

    get accountDetailsTitle(){
        return $(`//strong[contains(text(),'Account details :')]`);
    }

    async waitForPage(){
        await this.myAccountTitle.waitForDisplayed();
        await this.accountDetailsTitle.waitForDisplayed();
    }

}

export default new account();