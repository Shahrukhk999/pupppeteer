import HomePage from "../pages/HomePage";
import jestConfig from "../jest.config";
import TopBar from "../pages/components/TopBar"

describe('EX', ()=>{
    
        let homepage;
        let topbar;
        beforeAll(()=>{
            jest.setTimeout(15000);
            homepage = new HomePage();
            topbar = new TopBar ();
        
        });
       
        it("home page should work", async() => {
            await homepage.visit();

        });
        it("navbar should be displayed", async() => {
            await homepage.isNavbarDisplayed();
            await topbar.isTopbarDisplay();

        });

    
});



