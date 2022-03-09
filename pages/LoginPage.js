import BasePage from "./BasePage";

import BasePage from "./BasePage"
export default class LoginPage extends BasePage {
    async isbuttondisabeled(){
        await page.goto("http://zero.webappsecurity.com/index.html");
        await page.waitForSelector('#login_form');
    }

}