import { $ } from '@wdio/globals';


class RegisterPage {
   
    get inputUsername () {
        return $('#RegisterForm-FirstName');
    }

    get inputLastname (){
        return $(`#RegisterForm-LastName`);
    }

    get inputEmail (){
        return $(`#RegisterForm-email`);
    }

    get inputPassword () {
        return $('#RegisterForm-password');
    }

    get registerbtn () {
        return $(`//button[contains(text(),'Register')]`);
    }

    get registerPageTitle(){
        return $(`//h3[contains(text(),'Register')]`);
    }


    async register (username,lastname,email,password) {
        await this.registerPageTitle.waitForDisplayed();
        await this.inputUsername.addValue(username);
        await this.inputLastname.addValue(lastname);
        await this.inputEmail.addValue(email);
        await this.inputPassword.addValue(password);
        await this.registerbtn.click();
    }

}

export default new RegisterPage();
