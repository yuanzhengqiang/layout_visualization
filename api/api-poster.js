const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone8 = devices['iPhone 8'];
class api_poster {
  constructor() {

  }

  async set(url, name='test.png', {width=375, height=667, html}) {
    const browser = await puppeteer.launch({
      args: [
        '–disable-gpu',
        '–disable-dev-shm-usage',
        '–disable-setuid-sandbox',
        '–no-first-run',
        '–no-zygote',
        '–single-process',
        '--lang=zh-CN',
        '–no-sandbox'
      ]
    });
    const posterPath = 'public/poster/' + name;
    const page = await browser.newPage();
    
    
    await page.emulate(iPhone8);
    
    html && await page.setViewport({width: width+16, height: height+16});
    
    url && await page.goto(url, {waitUntil: 'networkidle0'});
    html && await page.setContent(html, {
      waitUntil: 'networkidle0'
    });
    await page.waitFor(3000);
    
    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1')
    html && await page.screenshot({
      path: posterPath,
      quality: 100,
      fullPage: false,
      type: 'jpeg',
      clip: {
        x: 8,
        y: 8,
        width, 
        height
      }
    });
    !html && await page.screenshot({
      path: posterPath,
      fullPage: true,
    });
    await browser.close();
    return posterPath;
   
  }

  get() {
    // TODO 从redis取
  }

}
module.exports = api_poster;