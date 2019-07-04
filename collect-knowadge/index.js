const puppeteer = require("puppeteer");

function sleep(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(1);
      } catch (e) {
        reject(0);
      }
    }, delay);
  });
}

(async () => {
  const result = []
  const browser = await puppeteer.launch({ headless: false, slowMo: 20 }); //打开浏览器
  const page = await browser.newPage(); //打开一个空白页

  await page.goto("https://account.geekbang.org/signin"); //在地址栏输入网址并等待加载
  await page.click(".forget a");

  await sleep(500);
  await page.type(".nw-input", "18519395286");
  await page.type(".input-wrap .input", "kangjian51211");
  await page.click(".mybtn");

  await sleep(500);
  await page.goto("https://time.geekbang.org/column/article/89668");

  await sleep(500);
  await page.screenshot({ path: "exam2.png" });
  const pageData = await page.evaluate(() => {
    const title = document.getElementsByClassName('cZCVMzBP_0')[0].innerHTML
    const content = document.getElementsByClassName('_1kh1ihh6_0')[0].innerHTML
    return {
      title,
      content
    }
  });
  result.push(pageData)

  console.log('result:', result);

  // await browser.close(); //关掉浏览器
})();











// await page.waitForNavigation({
//   waitUntil: "load"
// }); //等待页面加载出来，等同于 window.onload
