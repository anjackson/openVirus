const puppeteer = require('puppeteer');

(async() => {

const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ]
  });

const page = await browser.newPage();
await page.goto('https://royalsocietypublishing.org/action/doSearch?text1=respirator&openAccess=18');

//console.log(await page.content());

var repeat = true;
while (repeat) {
    await page.waitFor('nav[class="pagination"]');
    const pdfs = await page.$$eval('a[title="PDF"]', as => as.map(a => a.href));
    for (i in pdfs) {
      console.log(pdfs[i]);
    }
    np = await page.$('a[title="Next Page"]');
    if (np === null ) {
      repeat = false;
    } else {
      await page.click('a[title="Next Page"]');
    }
}

//await page.screenshot({path: 'screenshot.png'});

await browser.close();

})();

