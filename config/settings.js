const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['62895386281870'] // no own
global.packname = '© modsz-xd' // nama pack sticker
global.author = 'modsz-xd'// nama author 
global.domain = 'https://angga-putra.mypannelku.com' // Isi Domain Lu
global.apikey = 'ptla_gl5BPFaXzmli7DtJFdlod5iJhFaImh6uCPhiN0LDBVn' // Isi Apikey Plta Lu
global.capikey = 'ptlc_WSlAqShdk5UyB5iJKNR4T0jMVHzdqS9ujaFFAp6bdWZ' // Isi Apikey Pltc Lu
// api & cpi srv admin kalo mau di satuin isi sama aja kayak di atas👆
global.domainadmin = 'https://angga-putra.mypannelku.com'
global.apiadmin = 'ptla_gl5BPFaXzmli7DtJFdlod5iJhFaImh6uCPhiN0LDBVn'
global.cpiadmin = 'ptlc_WSlAqShdk5UyB5iJKNR4T0jMVHzdqS9ujaFFAp6bdWZ'
global.eggsnya = '15' // id eggs yang dipakai
global.location = '10' // id location

global.qrisdana = { url: 'https://telegra.ph/file/f7439b8d8ef5eb941a94c.jpg'}
global.qrisgopay = { url: 'https://telegra.ph/file/f7439b8d8ef5eb941a94c.jpg'}
global.jasapanel = { url: 'https://telegra.ph/file/f7439b8d8ef5eb941a94c.jpg'}
global.menu = { url: 'https://telegra.ph/file/f7439b8d8ef5eb941a94c.jpg'}
global.anjay = { url: 'https://telegra.ph/file/f7439b8d8ef5eb941a94c.jpg'}
global.qrisallpay = { url: 'https://telegra.ph/file/f7439b8d8ef5eb941a94c.jpg' } //Gak Usah Di Ganti

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})