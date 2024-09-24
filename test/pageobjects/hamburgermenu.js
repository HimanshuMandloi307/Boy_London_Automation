const { $ } = require('@wdio/globals')

class hamburgermenu{

    get plusIcon(){
        return $(`[class="t4s-mb-nav__icon"]`);
    }

    subMenuOptions(){
        return $$(`[class="t4s-menu-item t4s-item-level-1"]`);
    }

    // Page Mrthods

    async selectAnyOptionFromHamburgerMenu(OptionName){
        const navigationLocator = await this.subMenuOptions();
        for(let temp of navigationLocator){
            const singleOptionText = await temp.getText();
            if (singleOptionText == OptionName){
                await temp.click();
                console.log(">>>>>>>>>>>>>>>>>>"+temp);
                break;
            }
        }
    }

}

module.exports = new hamburgermenu();