//Uma base aprimorada por mim @sandro nao sou o criador da base, apenas adicionei comandos nela,esqueci onde peguei a base mais ta bom kkkkk e isso divirta-se com a base♨️👨‍💻\\

require("./config.js")

const { 
default:
makeWASocket, 
downloadContentFromMessage,
generateWAMessageContent,
generateWAMessageFromContent,
StylePrivWaFromMessage,
delay,
useMultiFileAuthState,
BufferJSON,
proto,
prepareWAMessageMedia, 
MediaType,
ChatModification,
DisconnectReason,
relayWAMessage,
fetchLatestBaileysVersion,
WASocket,
Browsers,
EyeWaSocket,
makeInMemoryStore,
} = require('@WhiskeySockets/baileys');

// ──────┤MODULOS├──────//

const { exec } = require("child_process")

const chalk = require('chalk');

const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };

let pino = require('pino')

const fs = require('fs')

const axios = require('axios');

const util = require("util")

const path = require("path")

const fetch = require('node-fetch');

const moment = require('moment-timezone');

const ffmpeg = require('fluent-ffmpeg');

const mimetype = require("mime-types")

const BodyForm = require("form-data")

const { Boom }  = require('@hapi/boom');

const yts = require('yt-search');

const crypto = require('crypto');

const encodeUrl = require('encodeurl');

const cheerio = require('cheerio');

const { Configuration, OpenAIApi } = require("openai");

const { menu } = require('./menus/menu.js')

const { menudono } = require('./menus/menudono.js')

const premium = JSON.parse(fs.readFileSync('./Sandro-premius/usuarios/premium.json'));

const antilink = JSON.parse(fs.readFileSync('./loli/seguranca/antilink.json'))

const { menu18 } = require("./menus/menu18.js")

const { menuadm } = require("./menus/menuadm.js")

const { menupremium } = require("./menus/menupremium.js")
//COLOCA OS JSON AKI


//ARQUIVOS JS
const { getGroupAdmins, banner } = require('./loli/browser/browser.js');
const { 
getExtension, Random, 
getFileBuffer, getBuffer,
} = require("./loli/browser/get.js")
const { fetchJson } = require('./arquivos/funções.js');
const { addFlod , isFlod } = require('./spam.js')
const { isFiltered, addFilter } = require('./spam.js')
const { palavras } = require('./arquivos/lib/conselhos.js');

//ARQUIVOS PARA SUAS CARACTERES TRAVAZAP CASO VOCÊ NÃO FOR TRAVAZAP IGNORE😆
const { carrinho } = require('./loli/travas/carrinho')
const { ctt } = require('./loli/travas/ctt')
const { txt } = require('./loli/travas/txt')
const { ios } = require('./loli/travas/ios')
const { ui } = require('./loli/travas/ui')
//ARQUIVOS DA CONFIG PREFIX DONO E NOME BOT CASO NÃO SAIBA MEXE NÃO MEXA NISSO DEIXA ASSIM OU VAI CAUSAR ERRO
donoName = global.donoName
botName = global.botName
donoNumher = global.donoNumher
prefix = global.prefix

// IGNORE //
function kyun(seconds){
function pad(s){ return (s < 10 ? '0' : '') + s;}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

//// DATA E HORA PIKEMON

data = moment.tz("America/Sao_Paulo").format("DD/MM/YY");

hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');


async function startActivity() {

// CONEXÃO DO BOT UAI
const store = makeInMemoryStore({ logger: pino().child({ level: 'debug', stream: 'store' }) })

const { state, saveCreds } = await useMultiFileAuthState('./qrcode')

const { version, isLatest } = await fetchLatestBaileysVersion()




console.log(banner.string)
console.log((`              ✅BOT CONECTADO COM SUCESSO✅\n
Creiador: 𝐕𝐘𝐏𝐄𝐑𝐗
Data: ${data}
Hora: ${hora}
PreFixo: ${prefix}`))
const loli = makeWASocket({
logger: pino({ level: 'silent'}),
printQRInTerminal: true,
qrTimeout: 180000,
browser: ['loliBase', 'browser', '1.0.0'],
auth: state
})
store.bind(loli.ev)


loli.ev.on('chats.set', () => {
console.log('setando conversas...')
})


loli.ev.on('contacts.set', () => {
console.log('setando contatos...')
})

loli.ev.on('creds.update', saveCreds)

loli.ev.on('messages.upsert', async ({ messages }) => {
try {
//=============funções
const info = m = messages[0]
if (!info.message) return 

const key = {
    remoteJid: info.key.remoteJid,
    id: info.key.id, 
    participant: info.key.participant 
}
await loli.readMessages([key])

if (info.key && info.key.remoteJid == 'status@broadcast') return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]

type_message = JSON.stringify(info.message)

const isQuotedImage = type === "extendedTextMessage" && type_message.includes("imageMessage")
const from = m.chat = info.key.remoteJid

/// ==============budy
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

///============body
var body = (type === 'conversation') ?
info.message.conversation : (type == 'imageMessage') ?
info.message.imageMessage.caption : (type == 'videoMessage') ?
info.message.videoMessage.caption : (type == 'extendedTextMessage') ?
info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ?
info.message.buttonsResponseMessage.selectedButtonId : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectenviar.selectedRowId.startsWith(prefix) && info.message.listResponseMessage.singleSelectenviar.selectedRowId) ? info.message.listResponseMessage.singleSelectenviar.selectedRowId : (type == 'templateButtonenviarMessage') ?
info.message.templateButtonenviarMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectenviar.selectedRowId || info.text) : ''
////========
const content = JSON.stringify(info.message);
const isCmd = body.startsWith(prefix)

const isGroup = from.endsWith("@g.us")


/////==================
const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
const sender = isGroup ? info.key.participant: from
const command = comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const nome = pushName = info.pushName ? info.pushName: botName 
const pushname = info.pushName ? info.pushName : ""
const groupMetadata = isGroup ? await loli.groupMetadata(from): ""
const participants = isGroup ? await groupMetadata.participants : ''
const groupName = isGroup  ? groupMetadata.subject: ""
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const args = body.trim().split(/ +/).splice(1)
const q = text = args.join(' ')
const criador = `${donoNumher}@s.whatsapp.net`
const numeroBot = loli.user.id.split(":")[0]+"@s.whatsapp.net"
const isCreator = criador.includes(sender)
const isGroupAdmins = groupAdmins.includes(sender) || false  
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const isPremium = premium.includes(sender)

//********************************************//

var texto_exato = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

const texto = texto_exato.slice(0).trim().split(/ +/).shift().toLowerCase()

async function escrever (texto) {
await loli.sendPresenceUpdate('composing', from) 
await esperar(1000)   
loli.sendMessage(from, { text: texto }, {quoted: info})
}

const reply = (texto) => {
loli.sendMessage(from, { text: texto }, {quoted: info})
}

const esperar = sleep = async (tempo) => {
    return new Promise(funcao => setTimeout(funcao, tempo));
}

//================//isquoted/const
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
 
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

const exportion = JSON.parse(fs.readFileSync('./exportion.json'))

const isAntiLink = isGroup ? antilink.includes(from) : false





// FUNCAO DE ANTILINK \\
if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {
loli.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("wa.me")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
loli.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
loli.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }

// ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙽𝙾 𝙿𝚅❗
if (!isGroup && isCmd) console.log(
color(' ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙽𝙾 𝙿𝚅❗','white'),'\n',
color('‣ ΝᏆᏟᏦ :','red'),color(pushname,'cyan'),'\n',
color('‣ ΝႮ́ᎷᎬᎡϴ :','red'),color(sender.split("@")[0],'blue'),'\n',
color('‣ ᏟᎷᎠ :','red'),color(command,'cyan'),'\n',
color('‣ ᎻϴᎡᎪ :','red'),color(hora,'cyan'),'\n')

// ❗𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙽𝙾 𝙿𝚅❗
if (!isCmd && !isGroup && !info.key.fromMe) console.log(
color('❗𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙽𝙾 𝙿𝚅❗','white'),'\n',
color('‣ ΝႮ́ᎷᎬᎡϴ :','red'),color(sender.split("@")[0],'blue'),'\n',
color('‣ ΝᏆᏟᏦ :','red'),color(pushname,'cyan'),'\n',
color('‣ ᎻϴᎡᎪ :','red'),color(hora,'cyan'),'\n')

// ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾❗
if (isCmd && isGroup) console.log(
color('❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾❗','white'),'\n',
color('‣ ᏀᎡႮᏢϴ :','blue'),color(groupName,'yellow'),'\n',
color('‣ ΝႮ́ᎷᎬᎡϴ :','blue'),color(sender.split("@")[0],'red'),'\n',
color('‣ ΝᏆᏟᏦ :','blue'),color(pushname,'yellow'),'\n',
color('‣ ᏟᎷᎠ :','blue'),color(command,'yellow'),'\n',
color('‣ ᎻϴᎡᎪ :','blue'),color(hora,'yellow'),'\n')

// ❗𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾❗
if (!isCmd && isGroup && !info.key.fromMe) console.log(
color('❗𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾❗','white'),'\n',
color('‣ ᏀᎡႮᏢϴ :','blue'),color(groupName,'cyan'),'\n',
color('‣ ΝႮ́ᎷᎬᎡϴ :','blue'),color(sender.split("@")[0],'red'),'\n',
color('‣ ΝᏆᏟᏦ :','blue'),color(pushname,'cyan'),'\n',
color('‣ ᎻϴᎡᎪ :','blue'),color(hora,'cyan'),'\n')

if(type === "imageMessage") {
var stream = await downloadContentFromMessage(info.message.imageMessage || info.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk])}
let ran = `figurinha${Random}.webp`
fs.writeFileSync(`./${ran}`, buffer)
ffmpeg(`./${ran}`)
.on("error", console.error)
 .on("end", () => {
exec(`webpmux -set exif ./dados/${ran} -o ./${ran}`, async (error) => {
  
loli.sendMessage(from,{ 
sticker: fs.readFileSync(`./${ran}`) 
}, {quoted: info })

fs.unlinkSync(`./${ran}`)
})
})
.addOutputOptions([
"-vcodec", 
"libwebp", 
"-vf", 
"scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
	  ])
.toFormat('webp')
.save(`${ran}`)
}

//
msg = {
aguarde: "aguarde uns minutinho estou processado👨‍🦯",
dono: "este comando so podera ser usado pelo meu dono💣",
group: "este comando so pode ser usado em grupo🫂",
private: "este comando so pode ser usado no privado👀",
premium: "[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS",
administrador: "este comando so pode ser usado por um adm🤣",
error: "ocorreu uma falha no comando por favor aguarde ate meu dono ajeitar", 
dono: "Esse comando so pode ser usado pelo meu dono!!!",
}

//selos

const loc = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"locationMessage": {
"name": ' •𝐕𝐘𝐏𝐄𝐑𝐗-𝑩𝑶𝑻⃟🥂• ',
}}}

const foto = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"imageMessage": {
"caption": ' •𝐕𝐘𝐏𝐄𝐑𝐗-𝑩𝑶𝑻⃟🥂• ',
"jpegThumbnail": fs.readFileSync('./loli/image/menu.jpg')
}}}

const order = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"orderMessage": {
"thumbnail": fs.readFileSync('./loli/image/menu.jpg'),
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `👁 •𝐕𝐘𝐏𝐄𝐑𝐗-𝑩𝑶𝑻⃟🥂• 👁`,
}}}

switch(comando) {

case 'foto':
if (!info.key.fromMe && !isCreator) return loli.sendMessage(from, {text: 'somente dono ou adm'})
loli.sendMessage(from, {image: fs.readFileSync('./loli/image/menu.jpg'), caption: '𝐕𝐘𝐏𝐄𝐑𝐗-𝑩𝑶𝑻⃟🥂'},{quoted: info})
break

case 'video':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
loli.sendMessage(from, {video: fs.readFileSync('./loli/video/cantada brabakkkkk.mp4'), caption: '𝐕𝐘𝐏𝐄𝐑𝐗-𝑩𝑶𝑻⃟🥂'},{quoted: info})
break

case 'audio':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
loli.sendMessage(from, {audio: fs.readFileSync('./loli/audio/sim.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'limpeza':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
loli.sendMessage(m.chat, {text: `krl lixo pra kct\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Limpo com sucesso ✅`},{quoted: m})
break

case 'ping':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
r = (Date.now() / 1000) - info.messageTimestamp
pokemon = `
┌───< ✨𝙋𝙞𝙣𝙜✨>
┊*𝗮𝐊𝐢 𝐒𝐞𝐔 𝐏𝐢𝐍𝐠*: ${String(r.toFixed(3))}
└───<
`
await loli.sendMessage(from, {text: pokemon}, {quoted: info})
break

case 's': case 'f': case 'stk': case 'fig':
if (!isQuotedImage) return reply(`Marque uma foto ou video com ${p + comando}`)
var stream = await downloadContentFromMessage(info.message.imageMessage || info.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
reply("aguarde...")
var buffer = Buffer.from([])
for await(const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk])}
let ran = `figurinha${Random}.webp`
fs.writeFileSync(`./${ran}`, buffer)
ffmpeg(`./${ran}`)
.on("error", console.error)
 .on("end", () => {
exec(`webpmux -set exif ./dados/${ran} -o ./${ran}`, async (error) => {
  
loli.sendMessage(from,{ 
sticker: fs.readFileSync(`./${ran}`) 
}, {quoted: info })

fs.unlinkSync(`./${ran}`)
})
})
.addOutputOptions([
"-vcodec", 
"libwebp", 
"-vf", 
"scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
	  ])
.toFormat('webp')
.save(`${ran}`)
 break
 
case 'menu': case 'comandos':
await loli.sendMessage(from, { react: { text: `💫`, key: info.key }})
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/menu.jpg'),
caption: menu(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case 'menudono':
if(!isCreator) return reply(msg.dono)
await loli.sendMessage(from, { react: { text: `🍃`, key: info.key }})
loli.sendMessage(from,
{image: fs.readFileSync('./loli/image/menu.jpg'),
caption: menudono(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case "menu18":
await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
templateMassage = {
image: {url:"./loli/image/menu.jpg",
quoted: info},
caption: menu18(prefix, hora, data, pushname),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
loli.sendMessage(from, templateMassage)
break

case "menuadm":
await loli.sendMessage(from, { react: { text: `♨️`, key: info.key }})
templateMassage = {
image: {url:"./loli/image/menu.jpg",
quoted: info},
caption: menuadm(prefix, hora, data, pushname),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
loli.sendMessage(from, templateMassage)
break

case 'menuvip':
await loli.sendMessage(from, { react: { text: `👑`, key: info.key }})
audiocriador = await fs.readFileSync("./loli/audio/vip.mp3")
await delay(5000)
loli.sendMessage(from, {audio: audiocriador, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
            menu8 = `
𝐌𝐄𝐍𝐔 𝐏𝐑𝐄𝐌𝐈𝐔𝐌

O menu vip esta em desenvolvimento🥱

            `            
           await loli.sendMessage(from, {image: fs.readFileSync('./loli/image/menu.jpg'), caption: menu8, contextInfo: {
            externalAdReply: {
            title:"👑𝐌𝐄𝐍𝐔 𝐏𝐑𝐄𝐌𝐈𝐔𝐌👑",
            body: "",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/116ecb2e3c50b997f0401.jpg`,
            sourceUrl: `https://instagram.com/xleandro.alves`, 
            mediaType: 2
            }}})
             
            
            break

case 'criador':
await loli.sendMessage(from, { react: { text: `🎭`, key: info.key }})
audiocriador = await fs.readFileSync("./loli/audio/criador.mp3")
await delay(5000)
loli.sendMessage(from, {audio: audiocriador, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
            menu8 = `
┏━━━━━━━━━━━━━━━━
┃CRIADOR: VyperX
┣━━━━━━━━━━━━━━━━
┃ZAP: Wa.me/5588981325114
┣━━━━━━━━━━━━━━━━
┃insta: @xleandro.alves
┣━━━━━━━━━━━━━━━━
┗━━━〔🎭〕━━━━

            `            
           await loli.sendMessage(from, {image: fs.readFileSync('./loli/image/menu.jpg'), caption: menu8, contextInfo: {
            externalAdReply: {
            title:"🙇🏻INFO DO MEU MESTRE🙇🏻",
            body: "",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/116ecb2e3c50b997f0401.jpg`,
            sourceUrl: `https://instagram.com/xleandro.alves`, 
            mediaType: 2
            }}})
             
            
            break
            
case 'taon?':
reply(`Sim!!`)
break

case 'menutravazap':
await loli.sendMessage(from, { react: { text: `👀`, key: info.key }})
uptime = process.uptime()
data = moment.tz("America/Sao_Paulo").format("DD/MM/YY");
hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
loli.sendMessage(
    from, 
    { 
        image: fs.readFileSync("./loli/image/travazap.jpg"), 
        caption: `\n
╭──┤𝐓𝐑𝐀𝐕𝐀 𝐙𝐀𝐏├───
⚠️Comandos de trava zap em desenvolvimento⚠️
╰──────────────┤\n`,
gifPlayback: true,
})
break

case 'enquete':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var enquete = generateWAMessageFromContent(from, proto.Message.fromObject({
"messageContextInfo": {
"messageloli": "QEwFogrlUlBtJgIiRuBYBjXD7VZwmpu/8rGXYb2MuaA="},
"pollCreationMessage": {
"name": "pokemon?",
"options": [
{ "optionName": 'Sim' },
{ "optionName": 'Não'}],
"selectableOptionsCount": 2
}}), { userJid: from, quoted: info})
loli.relayMessage(from, enquete.message, { messageId: enquete.key.id })
break

case 'marcar': {
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
if (!isGroup) return reply(mess.group)
 let metadata = await loli.groupMetadata(from)
let teks = `Hora de acordar rapaziada...🎭\n•\n`
for (let mem of participants) {
teks += `💫 @${mem.id.split('@')[0]}\n`
}
loli.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: loc })
}
break



case 'ban': //essa case não e minha me mandaram
case 'kick':
{
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
if (!isGroup) return reply(enviar.msg.grupo)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Responda a mensagem ou marque as pessoas que você quer remover do grupo')
if(info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if(sender.includes(mentioned)) return reply("😑")
if(botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(donoNumher.includes(mentioned)) return reply('Não posso remover meu dono!😑')
let responseb = await loli.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") loli.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "406") loli.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "404") loli.sendMessage(from, {text: `@${mentioned.split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else loli.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.includes(sender)) return reply("😑")
if(mentioned.includes(donoNumher)) return reply("Não pode remover meu dono 😠")
if(mentioned.includes(botNumber)) return reply("😑")
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return reply(`Vai banir todo mundo mesmo?`)
sexocomrato = 0
for (let banned of mentioned) {
await sleep(100)
let responseb2 = await loli.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
loli.sendMessage(from, {text: `${sexocomrato} participantes removido do grupo`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else {
let responseb3 = await loli.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") loli.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "406") loli.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "404") loli.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else loli.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
}
}
}
break

case 'webpage':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var extendedTextMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"extendedTextMessage": {
"text": ` •𝐕𝐘𝐏𝐄𝐑𝐗-𝑩𝑶𝑻⃟🥂• \nhttps://Wa.me/stickerpack/whatsappcuppy`,
"matchedText": "https://Wa.me/stickerpack/whatsappcuppy",
"description": "Convite para grupo do WhatsApp",
"title": "𝐕𝐘𝐏𝐄𝐑𝐗-𝑩𝑶𝑻⃟🥂",
"previewType": "NONE",
"jpegThumbnail": fs.readFileSync('./loli/image/menu.jpg'),
}
}), { userJid: from, quoted: info})
loli.relayMessage(from, extendedTextMessage.message, { messageId: extendedTextMessage.key.id })
break

case 'carrinho':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var orderMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "235714359395213",
"thumbnail": fs.readFileSync('./loli/image/menu.jpg'),
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `𝐕𝐘𝐏𝐄𝐑𝐗-𝑩𝑶𝑻⃟🥂`,
"orderTitle": "𝐕𝐘𝐏𝐄𝐑𝐗",
"sellerJid": "558388741307@s.whatsapp.net",
"token": "AR5Wfq0kwTRxgMuziAWteLeROO/rP/3z9fRPpLSb+o8tfA=="
}
}), { userJid: from, quoted: info})
loli.relayMessage(from, orderMessage.message, { messageId: orderMessage.key.id })
break

case 'catalogo':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"thumbnail": fs.readFileSync('./loli/image/menu.jpg'),
"productId": " ",
"title": `𝐕𝐘𝐏𝐄𝐑𝐗-𝑩𝑶𝑻⃟🥂`,
"fileLength": "161349999999999",
"description": `👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯`,
"footerText": ` •𝐕𝐘𝐏𝐄𝐑𝐗-𝑩𝑶𝑻⃟🥂• `,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `© Hirox`,
"url": "wa.me/558388741307"
},
"businessOwnerJid": "558388741307@s.whatsapp.net",
}
}), { userJid: from, quoted: info})
loli.relayMessage(from, catalog.message, { messageId: catalog.key.id })
break

case 'loc':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var locationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": 99,
"degreesLongitude": 99,
"name": " •𝐕𝐘𝐏𝐄𝐑𝐗-𝑩𝑶𝑻⃟🥂• ",
"jpegThumbnail": messa.imageMessage
}
}), { userJid: from, quoted: info})
loli.relayMessage(from, locationMessage.message, { messageId: locationMessage.key.id })
break

case 'doc':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var documentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7119-24/29949057_1673439003134136_8717143220188456473_n.enc?ccb=11-4&oh=01_AdQKvXFOKFVqb0bq6t6cD1AT8YA1lUmzCh6BmjRufONBTg&oe=64D30429&mms3=true",
"mimetype": " ",
"title": "👀 𔕱𝐓𝐑𝐀𝐕𝐀𝐙𝐀𝐏𝐈𔕱 💨.exct",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 999999999,
"index": 0,
"mediaKey": "fcxyCLIN2AubiCHSqdykEzQdvmIYdzZJHGeTz1UoFlY=",
"fileName": "👀 𔕱𝐓𝐑𝐀𝐕𝐀𝐙𝐀𝐏𝐈𔕱 💨",
"fileEncSha256": "vaEk8nmpa8fera+p5GTdtjaHNw34HrcF+rXLe3tG9/M=",
"directPath": "/v/t62.7119-24/29949057_1673439003134136_8717143220188456473_n.enc?ccb=11-4&oh=01_AdQKvXFOKFVqb0bq6t6cD1AT8YA1lUmzCh6BmjRufONBTg&oe=64D30429",
"mediaKeyTimestamp": "1688964255"
}
}), { userJid: from, quoted: info})
loli.relayMessage(from, documentMessage.message, { messageId: documentMessage.key.id })
break

case 'vcard':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var contactMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"contactMessage": {
"displayName": " •𝐕𝐘𝐏𝐄𝐑𝐗-𝑩𝑶𝑻⃟🥂• ",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;; •𝐕𝐘𝐏𝐄𝐑𝐗-𝑩𝑶𝑻⃟🥂• ;\nFN: •𝐕𝐘𝐏𝐄𝐑𝐗-𝑩𝑶𝑻⃟🥂• \nitem1.TEL:5588981325114\nitem1.X-ABLabel:Celular\nEND:VCARD"
}}), { userJid: from, quoted: info})
loli.relayMessage(from, contactMessage.message, { messageId: contactMessage.key.id })
break

case 'payment2':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./loli/image/menu.jpg') }, { upload: loli.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `•𝐕𝐘𝐏𝐄𝐑𝐗-𝑩𝑶𝑻⃟🥂•`,
}
}}), { userJid: from, quoted: info})
loli.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
break



case 'nomegp':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
if (!isGroup) return reply(`Este comando so pode ser usado em grupo`);
if (!q) return reply(` `);
loli.groupUpdateSubject(from, `${q}`)
loli.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'})
break

case 'descgp':
case 'descriçãogp':  
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
if (!isGroup) return reply(`Este comando so pode ser usado em grupo`);
if (!q) return reply(` `);
loli.groupUpdateDescription(from, `${q}`)
loli.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: loc})
break

case 'sairgp':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return loli.sendMessage(from, {text: 'somente dono ou adm'})
try {
loli.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

//=========Dono========\\
case 'menudono':
await loli.sendMessage(from, { react: { text: `👀`, key: info.key }})
if (!isCreator) return loli.sendMessage(from, {text: 'somente o criador pode usar esse comando🔰'})
return (`ola sou a lolita bot criador (VyperX)`)
break
//==============JOGOS===========\\

case 'gay':
await loli.sendMessage(from, { react: { text: `🏳️‍🌈`, key: info.key }})
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
if (tamanho < 13 ) {pp = 'GAY DE MAIS'} else if (tamanho == 13 ) {pp = 'gay suspeito'} else if (tamanho == 14 ) {pp = 'esse ai ja comeu o amigo e virou gay'} else if (tamanho == 15 ) {pp = 'eita, muito gayyyy😅😅😅😅'} else if (tamanho == 16 ) {pp = 'e muito gay ta doido'} else if (tamanho == 17 ) {pp = 'sente atração por pau ne 😅😅😅'} else if (tamanho == 18 ) {pp = 'gayyyyyyyyyy de mais'} else if (tamanho == 19 ) {pp = 'virou gay pq nenhuma mulher quer um filho da puta como vc seu gayy'} else if (tamanho == 20 ) {pp = 'muito gay🏳️‍🌈🏳️‍🌈🏳️‍🌈'} else if (tamanho == 21 ) {pp = 'voce dau o cu e gostou ne muito gay'} else if (tamanho == 22 ) {pp = 'voce sente tesao enfiando o dedo no cu, muito gayyy🏳️‍🌈🏳️‍🌈'} else if (tamanho == 23 ) {pp = 'voce e gay de mais, nao conversa mais cmg'} else if (tamanho == 24 ) {pp = 'gay confirmado'} else if (tamanho > 25 ) {pp = 'vc e muito gay porra 🏳️‍🌈🏳️‍🌈'
}
hasil = `
____________🏳️‍🌈
「${pp} 
____________🏳️‍🌈

_________________________________________🏳️‍🌈
sua porcentagem de gay e ${random}%
_________________________________________🏳️‍🌈 `
reply(hasil)
break

case 'chifre':
await loli.sendMessage(from, { react: { text: `🐂`, key: info.key }})
random2 = `${Math.floor(Math.random() * 35)}`
const tamanho2 = random2
if (tamanho2 < 13 ) {pp = 'muito corno🤟'} else if (tamanho2 == 13 ) {pp = 'meio corno😬'} else if (tamanho2 == 14 ) {pp = 'muito corno😳'} else if (tamanho2 == 15 ) {pp = 'cuidado com o poste'} else if (tamanho2 == 16 ) {pp = 'vai pegar manga com esse chifre?'} else if (tamanho2 == 17 ) {pp = 'eita poha, levou muita galha em😳'} else if (tamanho2 == 18 ) {pp = 'cuidado com os fios de energia😳'} else if (tamanho2 == 19 ) {pp = 'como você aguenta esse peso todo😳'} else if (tamanho2 == 20 ) {pp = 'recorde de maior chifre, parabéns'} else if (tamanho2 == 21 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 22 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 23 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 24 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 > 25 ) {pp = 'vai construir uma torre com isso?'
}
hasil = `╭═════════════════ ⪩
╰╮ू ፝͜❥⃟💡𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐃𝐎 𝐂𝐇𝐈𝐅𝐑𝐄👁⃟ू ፝͜❥
╭┤➢☃️ 「𝘖𝘓𝘈: ${pushName}」
╭┤➢🤟 「𝘚𝘌𝘜 𝘊𝘏𝘐𝘍𝘙𝘌 𝘛𝘌𝘔: ${random2}𝘊𝘔
╭┤➢✉️ 「${pp}」
┃╰══ ⪨
╰═════════════════ ⪨`
reply(hasil)
break

case 'cassino':
if (!isGroup) return reply('Você só pode jogar em grupos')
 const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const mining = Math.ceil(Math.random() * 200) +1
const somtoy2 = exportion[Math.floor(Math.random() * exportion.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : ?? : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►  Você ganhou🔮  ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`

} else {
var Vitória = `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►    Você perdeu...    ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`
}
	const cassino = `
   ۣۜۜ͜͡☆ ☲ ► 𝐂𝐀𝐒𝐒𝐈𝐍𝐎 ◄☲  ☆ۣۜۜ͜͡
┏━━━━━━━━━━━━━━━━━┓
 ۣۜۜ͜͡☆ ☲ ► ${somtoy2} ◄☲ ☆ۣۜۜ͜͡   
┗━━━━━━━━━━━━━━━━━┛

*${Vitória}*`
reply(cassino)
if (Vitória == `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►   Você ganhou..🎊   ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`) {

reply('Parabéns')
}
await (sender)
break

case 'metadinha':{
                await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
                let anu = await axios.get(`https://marcos025.onrender.com/api/ferramenta/metadinha?apikey=XANAX-VNCS$`)
                loli.sendMessage(sender, {image: {url: anu.data.masculina}, caption: `𝑴𝑨𝑺𝑪𝑼𝑳𝑰𝑵𝑶`})
                loli.sendMessage(sender, {image: {url: anu.data.feminina}, caption: `𝑭𝑬𝑴𝑰𝑵𝑰𝑵𝑶`})
                reply(`a metadinha esta sendo enviado no seu privado...`)
                }
                break
 //=============//MENU+18\\===================\\              
case 'hentai':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/nsfw/hentai?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'hentai2':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/nsfw/hentai?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'ero':{
reply(`enviando no seu pv...`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/nsfw/ero?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'fotopraperfil':{
await loli.sendMessage(from, { react: { text: `✅`, key: info.key }})
reply(`Enviando a foto no seu perfil...`)
bla = await fetchJson("https://appp--trevodev.repl.co/18/travazap?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'memepv':{
reply(`o meme esta sendo enviado no seu privado..`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/memes?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {video: {url: bla.url}})
}break

case 'meme':{
reply(`enviando meme aguarde...`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/memes?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(from, {video: {url: bla.url}})
}break

case 'foto18':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/18/foto_18?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'pussy':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/nsfw/pussy?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'neko2':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/nsfw/neko2?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'manga':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/nsfw/manga?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'foot':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/nsfw/foot?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'vídeo18':
case 'video18':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/18/video?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {video: {url: bla.url}})
}break

case 'gif':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/nsfw/gifs?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {gif: {url: bla.url}})
}break

case 'lbc':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/nsfw/ass?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'hentai4':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/nsfw/cum?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image: {url: bla.url}})
}break

case 'hentai3':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/nsfw/hentai?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image: {url: bla.url}})
}break


case 'zettai':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/nsfw/zettai?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image:  {url: bla.url}}) 
}break

case 'bdsm':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/nsfw/bdsm?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image:  {url: bla.url}}) 
}break

case 'glasses':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/nsfw/glasses?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image:  {url: bla.url}}) 
}break

case 'orgy':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/nsfw/orgy?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image:  {url: bla.url}}) 
}break

case 'jahy':{
reply(`enviando no pv... se a foto ou vídeo não for por favor digite,  /report (reclamação do comando que não está funcionando)`)
bla = await fetchJson("https://dark-lime-snapper-hat.cyclic.app/nsfw/jahy?username=Sandro&key=SANDRO_XXX")

loli.sendMessage(sender, {image:  {url: bla.url}}) 
}break

case 'waifu':{
reply("Enviando no seu privado...")
    waifuddd = await axios.get('https://api.waifu.pics/sfw/neko')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'waifu!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await loli.sendMessage(sender, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break
 
case 'reiniciar':
loli.sendMessage(from,{text: `Reiniciando...`}, {quoted: info})
setTimeout(() => {process.exit(0)}, 3000)
break

case 'gay2':
if(!isGroup) return reply('só pode ser usado em grupo, tu e burro zee')
rate = body.slice(7)
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

zxzz = 
random = `${Math.floor(Math.random() * 110)}`
random2 = `${Math.floor(Math.random() * 110)}`
loli.sendMessage(from, {text: `➮ Pesquisando a ficha de ${comando} :  @${blamention_id.split("@")[0]}, aguarde...\n\n _Você é: ❰ ${random},${random2}% ❱  ${comando}_ `, mentions: [blamention_id]})
break

case "ppt":
if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Você ganhou -_-"
}
if (vit == "derrota") {
var tes = "Eu ganhei pobre kkkkkk"
}
if (vit == "empate") {
var tes = "Deu empate 😐"
}
reply(`${botName} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case 'sn':
const sn = ['sim', 'não']
gosto = body.slice(3)
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break

case 'chance':
rate = body.slice(7)
zxzz = 
random = `${Math.floor(Math.random() * 200)}`
reply(' ➥ A chance disso que você falou vai acontecer e de:❰ '+random+'% ❱ ✧ ')
break

case 'corno': case 'corna':
if(!isGroup) return enviar('só pode ser usado em grupo, tu e burro zee')
rate = body.slice(7)
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

zxzz = 
random = `${Math.floor(Math.random() * 200)}`
random2 = `${Math.floor(Math.random() * 200)}`
loli.sendMessage(from, {text: ` Pesquisando o quanto você e ${comando} :  @${pushname}},\n\n _Você é: ❰ ${random},${random2}% ❱  ${comando}_ muito corno kkkkkkkk🐂`, mentions: [blamention_id]})
break

case 'figurinhas':
                if(!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 7`)
                if(q >= 100) return reply("Coloque abaixo de 100...")
                if (isGroup) reply(`As figurinhas estão sendo enviadas em seu pv olha la😁.`)
                async function figuss() {
                var rnd = Math.floor(Math.random() * 8051)
                loli.sendMessage(sender, { sticker: { url: `https://raw.githubusercontent.com/badDevelopper/Testfigu/main/fig (${rnd}).webp` } })}
                for (i = 0; i < q; i++) {
                await sleep(680)
                figuss()
                }
                break
                
case 'play_audio':
if (!q) return enviar(`Ex: ${prefix+command} nome da m煤sica `)
reply('audio encontrada enviando...')
bla = await fetchJson(`https://api.brizaloka-api.tk/sociais/v2/ytplaymp3?apikey=brizaloka&query=${q}`) 
img = bla.thumb
titulo = bla.titulo
dura = bla.duration
templateButtons = [
{index: 1, quickReplyButton: {displayText: 'Mp3', id: `${prefix}audio ${titulo}`}}
]
audbla = bla.link_src
loli.sendMessage(from, { audio: { url: audbla }, mimetype: 'audio/mp4'}, {quoted: info})
break

case 'plaq':{
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq2':{
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/BUNDA1.jpg?text.0.text=${teks}&text.0.position.x=-20%25&text.0.position.y=-20%25&text.0.size=18&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.background.opacity=65`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq3':{
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/bunda3.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=-25%25&text.0.position.y=-17%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.font.style=italic`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq4':{
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-48%25&text.0.position.y=-68%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq5':{
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/9152e7a9-7d49-48ef-b8ac-2e6149fda0b2.jpg?text.0.text=${teks}&text.0.position.x=-70%25&text.0.position.y=-23%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=300`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq6':{
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq7':{
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`)
    loli.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await loli.sendMessage(from, { react: { text: `🔞`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'loli' :{
reply("aguarde um momento, eu vou enviar no seu pv se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'vc e um(a) lolicon?🤔!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await loli.sendMessage(sender, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'beijo':{
reply("aguarde enviando no seu pv, se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/kiss')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: '🥱🥱!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await loli.sendMessage(sender, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break


case "perfil":
if (!isGroup) return reply(resposta.grupo)
const migi = `${Math.floor(Math.random() * 105)}`
const russo = `${Math.floor(Math.random() * 105)}`
const valor = `${Math.floor(Math.random() * 5000)}`
{loli.sendMessage(
from, {audio: fs.readFileSync('./loli/audio/perfil.mp3'), mimetype: 'audio/mp4', ptt: true 
},
{quoted: info}
)
}
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
try {
ppimg = await loli.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
} catch(e) {
ppimg = logo
}
perfil = await getBuffer(ppimg)
await delay(4000)
try {
loli.sendMessage(from, {
image: perfil,
caption: `
*Nome: ${pushname}

*Número: ${sender.split("@")[0]}*

*Grupo: ${groupName}*

*🐂Nivel de gado: ${migi}%*

*😈nível de puta: ${russo}%*

*💵valor do programa: ${valor}$*

*concelho* ${conselho}
`
}, {quoted: info})
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case 'gostoso': case 'gostosa':
if (!isGroup) return reply(resposta.grupo)
const aletd = `${Math.floor(Math.random() * 105)}`
reply('Aguarde avaliando seu perfil...')
await delay(5000)
reply(`${pushname} Sua Porcentagem De Gostoso(a) é De : ${aletd}%`)
break

case 'report':
case 'bug':
if (!q) return reply('Exemplo: /report bug no menu 18... por favor fale o nome so comando que esta com bugs, obrigado.')
reply(`${pushname} Obrigado pela colaboração, o bug foi reportado ao meu criador...

<♨️>bugs falsos nao serão respondidos`)
let templateMesssage = {
image: {url: './loli/image/menu.jpg',
quoted: info},
caption: `♨️𝗨𝗺 𝗕𝘂𝗴♨️\nDo Número: @${sender.split('@')[0]},\nReportou:\n${q}`,
footer: 'Noelle_md'
}
loli.sendMessage("553172595934@s.whatsapp.net",templateMesssage)
break

case 'novocmd':
if (!q) return reply('Exemplo: /novocmd coloca antilink ou a case do novo cmd que quer que adicione no bot.')
reply(`${pushname} Obrigado pela colaboração, a sua idea foi reportada ao meu criador.😊`)
const qp = args.join(" ")
let templateMessage = {
image: {url: './loli/image/menu.jpg',
quoted: info},
caption: `♨️IDEIA DE CMD♨️\nDo Número: @${sender.split('@')[0]},\nA Ideia É:\n ${q}`,
footer: 'Noelle_md'
}
loli.sendMessage("553172595934@s.whatsapp.net",templateMessage)
break

case 'gado': case 'gada':
if (!isGroup) return reply(resposta.group)
const alete = `${Math.floor(Math.random() * 105)}`
reply('Aguarde, confiscando sua porcentagem de gado...🐂😅😅😅')
await delay(5000)
reply(`${pushname} Sua Porcentagem De Gado(a) é De : ${alete}%`)
break

case 'nazista':
if (!isGroup) return reply(resposta.grupo)
const aletg = `${Math.floor(Math.random() * 105)}`
reply('Aguarde...💂')
await delay(5000)
reply(`${pushname} Sua Porcentagem De nazista é De💂: ${aletg}%`)
break

case 'rebaixar': case 'rebaixa':
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply('nao e adm...')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque ou responda a mensagem de quem você quer tirar de admin')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsepm = await loli.groupParticipantsUpdate(from, [mentioned], 'demote')
if (responsepm[0].status === "406") return reply('Como vc quer que eu remova o adm supremacy????')
else if (responsepm[0].status === "200") return reply('Voce nao e mais administrador(a) do grupo, voce acaba de perder o adm...')
else if (responsepm[0].status === "404") return reply('Esse cara nem ta no grupo')
else return reply('tente dnv')
break

case 'promover': case 'promote':
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply('vc nao e adm😅')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Vai colocar o vento como adm???')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsedm = await loli.groupParticipantsUpdate(from, [mentioned], 'promote')
if (responsedm[0].status === "200") return reply('Temos um novo admir')
else if (responsedm[0].status === "404") return reply('Esse maluco nem ta no grupo 🤔')
else return reply('Tenta dnv '-'')
break

case 'antilink':
if (!info.key.fromMe && !isCreator) return reply(resposta.adm)
if (!info.key.fromMe && !isCreator) return reply(resposta.botadm)
					if (args.length < 1) return reply('digite 1 para ativar ou 0 para desativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./loli/seguranca/antilink.json', JSON.stringify(antilink))
						reply('O anti-link foi ativo no grupo ✔️')
					} else if (Number(args[0]) === 0) {			
						antilink.splice(from, 1)
						fs.writeFileSync('./loli/seguranca/antilink.json', JSON.stringify(antilink))
						reply('O anti-link foi desativado com sucesso neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break

case 'teste':
if(!isCreator) return reply(msg.dono)
reply(`Seila bla bla bla`)
break

case 'teste2':
if(!isPremium) return reply(msg.premium)
reply(`Teste bla bla bla`)
break


case 'sermembro':
if (!isCreator) return reply(msg.dono)
reply(`Agora vc não é mais adm do grupo.`)
kicee = sender
await loli.groupParticipantsUpdate(from, [kicee], 'demote')
break

case "grupo":
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
try {
if (q == "a") {
await loli.groupSettingUpdate(from, "not_announcement")
reply("Grupo aberto com sucesso")
}
if (q == "f") {
await loli.groupSettingUpdate(from, "announcement")
reply("Grupo fechado com sucesso ")
}
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case 'addvip':
if (!isGroup) return reply(enviar.msg.grupo)
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return reply(msg.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
if (!budy.includes("@55")) {
mentioned = info.message.extendedTextMessage.contextInfo.participant 
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./Sandro-premius/usuarios/premium.json', JSON.stringify(premium))
loli.sendMessage(from, {text: `??@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑`}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./Sandro-premius/usuarios/premium.json', JSON.stringify(premium))
tedtp = args.join(" ").replace("@", "")
loli.sendMessage(from, {text: `??@${tedtp} foi adicionado à lista de usuários premium com sucesso👑`, mentions: [mentioned]}, {quoted: info})
}
break

case 'servip':  
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return reply(mess.donosmt)
premium.push(`${numeroBot}@s.whatsapp.net`)
fs.writeFileSync('./Sandro-premius/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto você foi adicionado na lista premium.`)
break

case 'removervip': case 'delvip': case 'tirarvip':
if (!isGroup) return reply(enviar.msg.grupo)
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return  reply(enviar.msg.donosmt)
if (!budy.includes("@55")) {
num = info.message.extendedTextMessage.contextInfo.participant
bla = premium.includes(num)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./Sandro-premius/usuarios/premium.json', JSON.stringify(premium))
loli.sendMessage(from, {text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./Sandro-premius/usuarios/premium.json', JSON.stringify(premium))
loli.sendMessage(from, {text: ` @${mentioned.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
}
break

default:
if(budy =="prefix" || budy == "prefixo" || budy == "Prefixo" || budy == "Prefix" || budy == "PREFIXO"|| budy == "PREFIX") {
reply(`Meu prefixo e [ ${prefix} ]`); 
await loli.sendMessage }

//===========CMD DE ÁUDIO SEM PREFIXO========\\

// Responder, Caso O Número Seja Marcado no Grupo 
 if (body.includes(`@558881325114`)) {
 if (mek.key.fromMe) return 
loli.sendMessage(m.chat, {sticker: fs.readFileSync(`./Sandro-Figurinhas/halerquin.webp`)}, {quoted: info});
 }
//━━━━━━━❰･❉･❱━━━━━━━\\

if (budy.includes("Qual o prefix?") || (budy.includes("Qual o Prefixo?") || (budy.includes("qual o prefix?") || (budy.includes("Prefixo do bot") || (budy.includes("prefixo?")))))) {
                await loli.sendMessage(from, { text: `${prefix}` }, { quoted: info })
            }

}} catch (erro) {
console.log(erro)
}})



loli.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if(lastDisconnect === undefined) {

}

if(connection === 'close') {
var shouldReconnect = (lastDisconnect.error.Boom)?.output?.statusCode !== DisconnectReason.loggedOut  
startActivity()
}})}
startActivity()


fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./config.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A config foi editada, irei reiniciar...');
process.exit()
}
})
