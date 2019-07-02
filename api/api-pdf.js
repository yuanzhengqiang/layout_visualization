const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone8 = devices['iPhone 8'];
class api_poster {
  constructor() {

  }

  async set(url, name = 'test.pdf', {
    width = 375,
    height = 667,
    html
  }) {
    const browser = await puppeteer.launch({
      args: [
        '–disable-gpu',
        '–disable-dev-shm-usage',
        '–disable-setuid-sandbox',
        '–no-first-run',
        '–no-zygote',
        '–single-process',
        '–no-sandbox'
      ]
    });
    const posterPath = 'public/pdf/' + name;
    const page = await browser.newPage();

    await page.emulate(iPhone8);

    await page.setViewport({
      width: width + 16,
      height: height + 16
    })
    url && await page.goto(url, {
      waitUntil: 'networkidle2', // 等待网络状态为空闲的时候才继续执行
    });
    html && await page.setContent(html);

    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1')
    await page.pdf({
      path: posterPath,
      format: 'A4'
    });
    await browser.close();
    return posterPath;

  }


  get() {
    // TODO 从redis取
  }

}
module.exports = api_poster;