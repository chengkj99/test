const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
const he = require('he')
const xlsx = require('node-xlsx')
const fs = require('fs')
const _ = require('lodash')
const chalk = require('chalk')
// /bangumi/play/ss24588/?from=search&seid=15802154388770833208
const host = 'https://www.bilibili.com'

const TOTAL_PAGE = 2042

// 格式化的进度输出 用来显示当前爬取的进度
function formatProgress(current) {
    let percent = (current / TOTAL_PAGE) * 100
    let done = ~~(current / TOTAL_PAGE * 40)
    let left = 40 - done
    let str = `当前进度：[${''.padStart(done, '=')}${''.padStart(left, '-')}]   ${percent}%`
    return str
}

function sleep(delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				resolve(1)
			} catch (e) {
				reject(0)
			}
		}, delay)
	})
}

async function main() {
    let data = [['Name', 'Content']]

    const browser = await puppeteer.launch({ headless: true })
    console.log(chalk.green('服务正常启动'))

    try {
        // 打开新页面
        const page = await browser.newPage()

        // 监听页面内部的console消息
        page.on('console', msg => {
            if (typeof msg === 'object') {
                console.dir(msg)
            } else {
                console.log(chalk.blue(msg))
            }
        })

        await page.goto(`${host}/bangumi/play/ss24588/?from=search&seid=15802154388770833208`)
        console.log(chalk.yellow('页面初次加载完毕'))
		//注入代码，慢慢把滚动条滑到最底部，保证所有的元素被全部加载
		let scrollEnable = true;
		let scrollStep = 1000; //每次滚动的步长
		while (scrollEnable) {
			scrollEnable = await page.evaluate((scrollStep) => {
				let scrollTop = document.scrollingElement.scrollTop;
				document.scrollingElement.scrollTop = scrollTop + scrollStep;
				return document.body.clientHeight > scrollTop + 1080 ? true : false
            }, scrollStep);

			await sleep(500);
		}
        await page.waitForSelector("#home_footer", {timeout:0});
        console.log(chalk.yellow('页面完全加载完毕'))
        // 使用一个 for await 循环，不能一个时间打开多个网络请求，这样容易因为内存过大而挂掉

        for (let i = 1; i <= TOTAL_PAGE; i++) {
            // 找到分页的输入框以及跳转按钮
            const pageInput = await page.$('.page-jump input')
            // console.log('pageInput...', pageInput)
            // 模拟输入要跳转的页数
            await pageInput.type('' + i)
            // 模拟回车跳转
            await page.keyboard.down('Enter')
            await page.keyboard.up('Enter')
            // 等待页面加载完毕，这里设置的是固定的时间间隔，之前使用过page.waitForNavigation()，但是因为等待的时间过久导致报错（Puppeteer默认的请求超时是30s,可以修改）,因为这个页面总有一些不需要的资源要加载，而我的网络最近日了狗，会导致超时，因此我设定等待2.5s就够了
            await page.waitFor(1000)

            // 清除当前的控制台信息
            console.clear()
            // 打印当前的爬取进度
            console.log(chalk.yellow(formatProgress(i)))
            console.log(chalk.yellow(`第 ${i} 页面数据加载完毕`))

            // 处理数据，这个函数的实现在下面
            const everyPageData  = await handleData(i)
            data = await data.concat(everyPageData)
            if (i >= TOTAL_PAGE) {
                console.log('***********')
                console.log('数据长度...', data.length)
                console.log('***********')
                var buffer = await xlsx.build([{name: `第1集`, data}])
                fs.writeFile('./comment/result.1.xls', buffer, function (err) {
                  if (err) throw err
                  console.log('Write to xls has finished')
                })
            }
            await page.waitFor(200)
            // 一个页面爬取完毕以后稍微歇歇，不然太快淘宝会把你当成机器人弹出验证码（虽然我们本来就是机器人）
        }



        // 这是一个在内部声明的函数，之所以在内部声明而不是外部，是因为在内部可以获取相关的上下文信息，如果在外部声明我还要传入 page 这个对象
        async function handleData(i) {
            // 现在我们进入浏览器内部搞些事情，通过page.evaluate方法，该方法的参数是一个函数，这个函数将会在页面内部运行，这个函数的返回的数据将会以Promise的形式返回到外部
            const list = await page.evaluate(() => {

                // 先声明一个用于存储爬取数据的数组
                const writeDataList = []

                // 获取到所有的商品元素
                let itemList = document.querySelectorAll('.list-item')
                // 遍历每一个元素，整理需要爬取的数据
                for (let item of itemList) {
                    let writeData = []
                    // 找到名称
                    const name = item.querySelector('.user').textContent
                    // 找到评论内容
                    const content = item.querySelector('.text').textContent
                    // const reply = [].slice.call(item.querySelectorAll('.reply-wrap[data-id] .user .text-con')).map(i => i.textContent).join('\n')
                    writeData.push(name)
                    writeData.push(content)
                    // writeData.push(reply)
                    // console.warn('reply...', reply)

                    // 将这个标签页的数据push进刚才声明的结果数组
                    writeDataList.push(writeData)
                }
                // 当前页面所有的返回给外部环境
                return writeDataList

            })

            console.log(chalk.yellow('写入第' + i + '页完毕'))
            return list
        }


    } catch (error) {
        // 出现任何错误，打印错误消息并且关闭浏览器
        console.log(error)
        console.log(chalk.red('服务意外终止'))
        await browser.close()
    } finally {
        // 最后要退出进程
        process.exit(0)
    }
}

main()


// broswer.then(async browser => {
//     page.setViewport({ width: 1367, height: 768 })
//     await page.goto(`${host}/bangumi/play/ss24588/?from=search&seid=15802154388770833208`, { waitUntil: 'networkidle0' })
//     await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.2.1.min.js' })
//     await page.screenshot({ path: '/Users/chengkj/code/zhihu-work/thal/screenshots/kkk.png' });

//     const result = await page.evaluate(name => {
//         return {
//             result: 'hhaa'
//         }
//     }, 'div')

//     console.log('***', result)
//     await browser.close()
// })


// console.table( [].slice.call(document.querySelectorAll('.list-item[data-id]')).map(elem => {

//     return {
//  content: elem.querySelector('.text').textContent ,
//  reply: [].slice.call(elem.querySelectorAll('.reply-wrap[data-id] .user .text-con')).map(i => i.textContent).join('\n')
//  }

//  }))

