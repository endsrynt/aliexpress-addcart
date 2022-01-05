const puppeteer = require('puppeteer');
const chalk = require('chalk');
const moment = require('moment');
const delay = require('delay');
const readline = require("readline-sync");
const fs = require('fs-extra');
var random = require('random-name')
var randomize = require('randomatic');
var Fakerator = require("fakerator");
const randomstring = require("randomstring");

(async () => {


    //input token
    var linklogin = readline.question(chalk.yellow('[?] List account (ex: link): '))

        console.log('\n');
        const read = fs.readFileSync(linklogin, 'UTF-8');
        const list = read.split(/\r?\n/);
        for (var i = 0; i < list.length; i++) {
            var token = list[i];

    console.log(chalk.yellow(`[${(moment().format('HH:mm:ss'))}] Account => ${i}`))       
    console.log(chalk.yellow(`[${(moment().format('HH:mm:ss'))}] Token => ${token}`))

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        ignoreHTTPSErrors: true
    });

    const optionlink = {
        waitUntil : 'networkidle2',
        setTimeout : 60000,
    };
    const optionbtn = {
        visible:true,
        timeout:60000
    };
    const page = await browser.newPage();

    await page.setUserAgent(`Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36`);
    console.log(chalk.yellow(`[${(moment().format('HH:mm:ss'))}] Wait for login`))
    
    var whereCountry = randomize('0', 1);

    //login token
    await page.goto(`${token}`,{ waitUntil: 'networkidle2', timeout: 60000 });
    console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Login success`))

    var fakerator = Fakerator("en-CA");
    var address = fakerator.address.street()
    var address2 = fakerator.address.street()    


    
         
    //delete cart
    await delay(1000)

    await page.goto('https://m.id.aliexpress.com/shopcart/list.html#/',{ waitUntil: 'networkidle0', timeout: 60000 });
    await delay(800)
    if (await page.$('#voyager-gdpr > div > div._9ZciS > button._3SZ4H')){
        await page.click("#voyager-gdpr > div > div._9ZciS > button._3SZ4H")
    }
    if (await page.$("#shopcart-app > div > div > div:nth-child(2) > div > div > span > div > div:nth-child(3) > div"))
    {
        await page.click("#shopcart-app > div > div > div._1Q1iM > div > div > span > div > div.flex.justify-end > div")
        await delay(1000)
        await page.click("#shopcart-app > div > div > div > header > div.flex.justify-space-between.align-center._24yND > div.flex.justify-space-between.align-center._1YPZE > div.flex.justify-end.LJDeC > svg > use",{visible:true,timeout:60000});
        await delay(600)
        await page.click("#shopcart-app > div > div > div > header > div > div.flex.justify-end._1lgjw > svg > use",{visible:true,timeout:60000})
        await delay(600)
        await page.click("body > div.flex.justify-center.align-center._3zxBO > div > span > div > div.flex.justify-end > div:nth-child(2)",{visible:true,timeout:60000})
        console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success delete all item in cart `))
    }
    
    //ADD CART1
    await page.goto("https://m.id.aliexpress.com/item/1005003230523068.html",optionlink)
    
    await delay(800)
    const product1= randomstring.generate({length: 1,charset: '132'}); 
    const productname1 = await page.$eval('#root > div:nth-child(4) > div:nth-child(3) > span',(el) => el.innerText);

    await delay(800)
    await page.waitForSelector("#action-bar > div > a",optionbtn)
    await page.click("#action-bar > div > a")
    await delay(800)
    await page.waitForSelector(`body > div.modal-container.modal-drawer.sku--modal--DAuuPBD > div.drawer-container.drawer-bottom.bottom-drawer-container.sku--drawer--3wJ0Mw5 > div.scroll-panel-content.bottom-drawer-content > div > div.sku-panel--property--3YeEpFD > div.sku-panel--skus--3PMc-6q > div:nth-child(${product1}) > img`,optionbtn)
    await page.click(`body > div.modal-container.modal-drawer.sku--modal--DAuuPBD > div.drawer-container.drawer-bottom.bottom-drawer-container.sku--drawer--3wJ0Mw5 > div.scroll-panel-content.bottom-drawer-content > div > div.sku-panel--property--3YeEpFD > div.sku-panel--skus--3PMc-6q > div:nth-child(${product1}) > img`)
    await delay(800)
    await page.waitForSelector("#action-bar > div > a",optionbtn)
    await page.click("#action-bar > div > a")
    console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success add product to cart : ${productname1}`))
    await delay(500)


    //ADD CART2
    await page.goto("https://m.id.aliexpress.com/item/1005003301460406.html",optionlink)
    await delay(800)

    const product2= randomstring.generate({length: 1,charset: '1'}); 
    try{
        var productname2 = await page.$eval('#root > div:nth-child(4) > div:nth-child(3) > span',(el) => el.innerText);
    }catch(e){
        var productname2 = await page.$eval('#root > div:nth-child(5) > div:nth-child(3) > span',(el) => el.innerText);
    }
    await delay(800)
    await page.waitForSelector("#action-bar > div > a",optionbtn)
    await page.click("#action-bar > div > a")
    await delay(1000)
    await page.waitForSelector(`body > div.modal-container.modal-drawer.sku--modal--DAuuPBD > div.drawer-container.drawer-bottom.bottom-drawer-container.sku--drawer--3wJ0Mw5 > div.scroll-panel-content.bottom-drawer-content > div > div.sku-panel--property--3YeEpFD > div.sku-panel--skus--3PMc-6q > div > img`,optionbtn)
    await page.click(`body > div.modal-container.modal-drawer.sku--modal--DAuuPBD > div.drawer-container.drawer-bottom.bottom-drawer-container.sku--drawer--3wJ0Mw5 > div.scroll-panel-content.bottom-drawer-content > div > div.sku-panel--property--3YeEpFD > div.sku-panel--skus--3PMc-6q > div > img`)
    await delay(1000)
    await page.waitForSelector("#action-bar > div > a",optionbtn)
    await page.click("#action-bar > div > a")
    console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success add product to cart : ${productname2}`))
    await delay(500)



    await page.goto('https://m.id.aliexpress.com/shopcart/list.html',{ waitUntil: 'networkidle2', timeout: 60000 });  
    await delay(800)
    try {
        await page.click("#shopcart-app > div > div > div._1Q1iM > div > div > span > div > div.flex.justify-end > div",)
      } catch (err) {
        
      }
    await delay(600);    
    await page.click("#shopcart-app > div > div > div > header > div.flex.justify-space-between.align-center._24yND > div.flex.justify-space-between.align-center._1YPZE > div.flex.justify-end.LJDeC > svg > use",{visible:true,timeout:60000});
    await delay(1800);


    try {
      await delay(1000)  
      await page.click("#shopcart-app > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2)",)
    } catch (err) {
        await delay(1000)  
        await page.click("#shopcart-app > div > div > div > div > div:nth-child(4) > div > div > div > div:nth-child(2)")
      
    }
    await delay(1000)

    //set address
    if (await page.$("#address-confirm-step > div > div > div > div.confirm-step-list"))
    {
        console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Try to add shipping address`))

        if(whereCountry == 1){
            await page.waitForSelector("#tpl-address-form > div:nth-child(9) > input")
            await page.click("#tpl-address-form > div:nth-child(9) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(9) > input",`${randomize('0', 5)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(2) > input")
            await page.click("#tpl-address-form > div:nth-child(2) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(2) > input",`${random.first()} ${random.last()}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(3) > input:nth-child(2)")
            await page.click("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",`812${randomize('0', 8)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(4) > input",)
            await page.click("#tpl-address-form > div:nth-child(4) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(4) > input",`${address} ${address2}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(6) > span")
            await page.click("#tpl-address-form > div:nth-child(6) > span",{visible:true,timeout:60000})
    
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
     
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(23) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(23) > span")
          
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(7) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(7) > span")
    
            await delay(800)
            await page.waitForSelector("#tpl-address-form >  div:nth-child(11) > span")
            await page.click("#tpl-address-form >  div:nth-child(11) > span",)
            console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success add shipping address`))
    
        }else if(whereCountry == 2){
            await page.waitForSelector("#tpl-address-form > div:nth-child(9) > input")
            await page.click("#tpl-address-form > div:nth-child(9) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(9) > input",`${randomize('0', 5)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(2) > input")
            await page.click("#tpl-address-form > div:nth-child(2) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(2) > input",`${random.first()} ${random.last()}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(3) > input:nth-child(2)")
            await page.click("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",`812${randomize('0', 8)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(4) > input",)
            await page.click("#tpl-address-form > div:nth-child(4) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(4) > input",`${address} ${address2}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(6) > span")
            await page.click("#tpl-address-form > div:nth-child(6) > span",{visible:true,timeout:60000})
    
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
     
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(23) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(23) > span")
          
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(9) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(9) > span")
    
            await delay(800)
            await page.waitForSelector("#tpl-address-form >  div:nth-child(11) > span")
            await page.click("#tpl-address-form >  div:nth-child(11) > span",)
            console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success add shipping address`))
        }else if(whereCountry == 3){
            await page.waitForSelector("#tpl-address-form > div:nth-child(9) > input")
            await page.click("#tpl-address-form > div:nth-child(9) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(9) > input",`${randomize('0', 5)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(2) > input")
            await page.click("#tpl-address-form > div:nth-child(2) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(2) > input",`${random.first()} ${random.last()}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(3) > input:nth-child(2)")
            await page.click("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",`812${randomize('0', 8)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(4) > input",)
            await page.click("#tpl-address-form > div:nth-child(4) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(4) > input",`${address} ${address2}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(6) > span")
            await page.click("#tpl-address-form > div:nth-child(6) > span",{visible:true,timeout:60000})
    
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
     
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(23) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(23) > span")
          
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(12) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(12) > span")
    
            await delay(800)
            await page.waitForSelector("#tpl-address-form >  div:nth-child(11) > span")
            await page.click("#tpl-address-form >  div:nth-child(11) > span",)
            console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success add shipping address`))
        }else if(whereCountry == 4){
            await page.waitForSelector("#tpl-address-form > div:nth-child(9) > input")
            await page.click("#tpl-address-form > div:nth-child(9) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(9) > input",`${randomize('0', 5)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(2) > input")
            await page.click("#tpl-address-form > div:nth-child(2) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(2) > input",`${random.first()} ${random.last()}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(3) > input:nth-child(2)")
            await page.click("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",`812${randomize('0', 8)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(4) > input",)
            await page.click("#tpl-address-form > div:nth-child(4) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(4) > input",`${address} ${address2}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(6) > span")
            await page.click("#tpl-address-form > div:nth-child(6) > span",{visible:true,timeout:60000})
    
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
     
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(38) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(38) > span")
          
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(4) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(4) > span")
    
            await delay(800)
            await page.waitForSelector("#tpl-address-form >  div:nth-child(11) > span")
            await page.click("#tpl-address-form >  div:nth-child(11) > span",)
            console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success add shipping address`))
        }else if(whereCountry == 5){
            await page.waitForSelector("#tpl-address-form > div:nth-child(9) > input")
            await page.click("#tpl-address-form > div:nth-child(9) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(9) > input",`${randomize('0', 5)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(2) > input")
            await page.click("#tpl-address-form > div:nth-child(2) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(2) > input",`${random.first()} ${random.last()}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(3) > input:nth-child(2)")
            await page.click("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",`812${randomize('0', 8)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(4) > input",)
            await page.click("#tpl-address-form > div:nth-child(4) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(4) > input",`${address} ${address2}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(6) > span")
            await page.click("#tpl-address-form > div:nth-child(6) > span",{visible:true,timeout:60000})
    
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
     
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(38) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(38) > span")
          
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(10) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(10) > span")
    
            await delay(800)
            await page.waitForSelector("#tpl-address-form >  div:nth-child(11) > span")
            await page.click("#tpl-address-form >  div:nth-child(11) > span",)
            console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success add shipping address`))
        }else if(whereCountry == 6){
            await page.waitForSelector("#tpl-address-form > div:nth-child(9) > input")
            await page.click("#tpl-address-form > div:nth-child(9) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(9) > input",`${randomize('0', 5)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(2) > input")
            await page.click("#tpl-address-form > div:nth-child(2) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(2) > input",`${random.first()} ${random.last()}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(3) > input:nth-child(2)")
            await page.click("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",`812${randomize('0', 8)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(4) > input",)
            await page.click("#tpl-address-form > div:nth-child(4) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(4) > input",`${address} ${address2}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(6) > span")
            await page.click("#tpl-address-form > div:nth-child(6) > span",{visible:true,timeout:60000})
    
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
     
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(38) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(38) > span")
          
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(14) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(14) > span")
    
            await delay(800)
            await page.waitForSelector("#tpl-address-form >  div:nth-child(11) > span")
            await page.click("#tpl-address-form >  div:nth-child(11) > span",)
            console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success add shipping address`))
        }else if(whereCountry == 7){
            await page.waitForSelector("#tpl-address-form > div:nth-child(9) > input")
            await page.click("#tpl-address-form > div:nth-child(9) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(9) > input",`${randomize('0', 5)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(2) > input")
            await page.click("#tpl-address-form > div:nth-child(2) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(2) > input",`${random.first()} ${random.last()}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(3) > input:nth-child(2)")
            await page.click("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",`812${randomize('0', 8)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(4) > input",)
            await page.click("#tpl-address-form > div:nth-child(4) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(4) > input",`${address} ${address2}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(6) > span")
            await page.click("#tpl-address-form > div:nth-child(6) > span",{visible:true,timeout:60000})
    
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
     
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(2) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(2) > span")
          
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(2) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(2) > span")
    
            await delay(800)
            await page.waitForSelector("#tpl-address-form >  div:nth-child(11) > span")
            await page.click("#tpl-address-form >  div:nth-child(11) > span",)
            console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success add shipping address`))
        }else if(whereCountry == 8){
            await page.waitForSelector("#tpl-address-form > div:nth-child(9) > input")
            await page.click("#tpl-address-form > div:nth-child(9) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(9) > input",`${randomize('0', 5)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(2) > input")
            await page.click("#tpl-address-form > div:nth-child(2) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(2) > input",`${random.first()} ${random.last()}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(3) > input:nth-child(2)")
            await page.click("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",`812${randomize('0', 8)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(4) > input",)
            await page.click("#tpl-address-form > div:nth-child(4) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(4) > input",`${address} ${address2}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(6) > span")
            await page.click("#tpl-address-form > div:nth-child(6) > span",{visible:true,timeout:60000})
    
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
     
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(2) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(2) > span")
          
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(9) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(9) > span")
    
            await delay(800)
            await page.waitForSelector("#tpl-address-form >  div:nth-child(11) > span")
            await page.click("#tpl-address-form >  div:nth-child(11) > span",)
            console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success add shipping address`))
        }else if(whereCountry == 9){
            await page.waitForSelector("#tpl-address-form > div:nth-child(9) > input")
            await page.click("#tpl-address-form > div:nth-child(9) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(9) > input",`${randomize('0', 5)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(2) > input")
            await page.click("#tpl-address-form > div:nth-child(2) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(2) > input",`${random.first()} ${random.last()}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(3) > input:nth-child(2)")
            await page.click("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",`812${randomize('0', 8)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(4) > input",)
            await page.click("#tpl-address-form > div:nth-child(4) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(4) > input",`${address} ${address2}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(6) > span")
            await page.click("#tpl-address-form > div:nth-child(6) > span",{visible:true,timeout:60000})
    
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
     
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(2) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(2) > span")
          
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(13) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(13) > span")
    
            await delay(800)
            await page.waitForSelector("#tpl-address-form >  div:nth-child(11) > span")
            await page.click("#tpl-address-form >  div:nth-child(11) > span",)
            console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success add shipping address`))
        }else if(whereCountry == 0){
            await page.waitForSelector("#tpl-address-form > div:nth-child(9) > input")
            await page.click("#tpl-address-form > div:nth-child(9) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(9) > input",`${randomize('0', 5)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(2) > input")
            await page.click("#tpl-address-form > div:nth-child(2) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(2) > input",`${random.first()} ${random.last()}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(3) > input:nth-child(2)")
            await page.click("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(3) > input:nth-child(2)",`812${randomize('0', 8)}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(4) > input",)
            await page.click("#tpl-address-form > div:nth-child(4) > input",{visible:true,timeout:60000})
            await page.type("#tpl-address-form > div:nth-child(4) > input",`${address} ${address2}`)
    
            await page.waitForTimeout(500)
            await page.waitForSelector("#tpl-address-form > div:nth-child(6) > span")
            await page.click("#tpl-address-form > div:nth-child(6) > span",{visible:true,timeout:60000})
    
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views > div > div > ul > div:nth-child(124) > span > span:nth-child(2)")
     
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(2) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(2) > span")
          
            await page.waitForSelector("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(18) > span")
            await page.click("#root > div.address-ldialog-container.container-show > div > div.address-ldialog-content > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(18) > span")
    
            await delay(800)
            await page.waitForSelector("#tpl-address-form >  div:nth-child(11) > span")
            await page.click("#tpl-address-form >  div:nth-child(11) > span",)
            console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success add shipping address`))
        }
    

    }else{
        console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Shipping address already exist`))
    }
    //set free shiping
    await delay(1000);
    try {
        await delay(1000);

    await page.waitForSelector("body > div > div > div:nth-child(2) > div > ul > li > div:nth-child(2) > div",{visible:true,timeout:60000});
    await page.click("body > div > div > div:nth-child(2) > div > ul > li > div:nth-child(2) > div")
    } catch (err) {
        await delay(1000);

        await page.waitForSelector("#product-list > div > ul > li > div.product-ship.bb-solid-EBEBEB > div > span:nth-child(2)",{visible:true,timeout:60000})
        await page.click("#product-list > div > ul > li > div.product-ship.bb-solid-EBEBEB > div > span:nth-child(2)")
    }
      await delay(1000);

    try {
        await delay(1000);
        await page.waitForSelector("div.dialog-wrap > div.dialog-container > div.dialog-content > ul > li.ship-item",{timeout: 3000});
        await page.click("div.dialog-wrap > div.dialog-container > div.dialog-content > ul > li.ship-item");
    } catch (err) {
        await delay(1000); 
        await page.waitForSelector("div.dialog-wrap > div.dialog-container > div.dialog-content > ul > li.ship-item.checked",{timeout: 3000});
        await page.click("div.dialog-wrap > div.dialog-container > div.dialog-content > ul > li.ship-item.checked",{timeout: 3000});
    }
    await delay(1800);
    console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Set Free Shipping`))

    await page.waitForSelector("#product-list > div:nth-child(2) > ul > li > div.product-ship.bb-solid-EBEBEB > i",{visible:true,timeout:60000});
    await page.click("#product-list > div:nth-child(2) > ul > li > div.product-ship.bb-solid-EBEBEB > i",{visible:true,timeout:60000});
    await delay(1000);
        await delay(1000); 
        await page.waitForSelector("div.dialog-wrap > div.dialog-container > div.dialog-content > ul > li.ship-item",{timeout: 3000});
        await page.click("div.dialog-wrap > div.dialog-container > div.dialog-content > ul > li.ship-item",{timeout: 3000});

    console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Set Free Shipping`))
    //get payment token
    console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Payment Token : ${page.url()}`))

    // seve file
    await fs.appendFile('pay.txt', `${token};${page.url()}`+'\r\n', err => {
        if (err) throw err;
    })
    await browser.close()
    
    var files = fs.readFileSync(linklogin, 'utf-8');
    var lines = files.split('\n')
    lines.splice(0,1)
    await fs.writeFileSync(linklogin, lines.join('\n'))

        }   
})();