export default class TopBar{
    async isTopbarDisplay(){
        await page.waitForSelector('.brand');
        await page.waitForSelector("#signin_button");

    }
    async clickbutton(){
        await page.click("#signin_button");
    }

}