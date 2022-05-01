const puppeteer = require("puppeteer");
let cPage;
console.log("Before");
const browserOpenPromise = puppeteer.launch({headless: false, slowMo: true, args:["--start-maximized"]});
browserOpenPromise.then(function(browser)
{
    const pagesArrPromise = browser.pages();
    return pagesArrPromise;
}).then(function(browserPages)
    {
        page = browserPages[0];
        let gotoPromise = page.goto("https://www.google.com/");
        return gotoPromise;
    }).then(function(){
        let elementWaitPromise = page.waitForSelector("input[type='text']", {visible: true});
        return elementWaitPromise;
    }).then(function(){
        // console.log("Reached google home Page");
        let keysWillBeSendPromise = page.type("input[type='text']", "pepcoding");
        return keysWillBeSendPromise;
    }).then (function()
    {
        let enterWillBePressed = page.keyboard.press("Enter");
        return enterWillBePressed;
    }).then(function()
    {
        let elementWaitPromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md");
        return elementWaitPromise;
    }).then(function()
    {
        let keysWillBeSendPromise = page.click("h3.LC20lb.MBeuO.DKV0Md",{visible: true});
        return keysWillBeSendPromise;
    }).catch(function(err)
    {
        console.log(err);
    })
    
console.log("After");