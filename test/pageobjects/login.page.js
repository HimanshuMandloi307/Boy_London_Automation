import { $ } from '@wdio/globals';


class LoginPage {
   
    get inputEmail () {
        return $('#CustomerEmail');
    }

    get inputPassword () {
        return $('#CustomerPassword');
    }

    get btnSubmit () {
        return $(`//button[contains(text(),'Sign In')]`);
    }

    get loginpageTitle(){
        return $(`//h3[contains(text(),'LOGIN')]`);
    }

    get createAccountBtn(){
        return $(`//a[contains(text(),'Create your account')]`);
    }

    async waitForPage(){
        await this.loginpageTitle.waitForDisplayed();
        await this.inputEmail.waitForDisplayed();
        await this.btnSubmit.waitForDisplayed();
    }

    async loginDetails (email, password) {
        await this.inputEmail.addValue(email);
        await this.inputPassword.addValue(password);
        // await this.btnSubmit.click();
    }

}

export default new LoginPage();
