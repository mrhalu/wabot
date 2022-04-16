/*
* Jangan Asal  Ubah Mazeeeh
* 𝙹𝚊𝚗𝚐𝚊𝚗  𝚑𝚊𝚙𝚞𝚜 𝚌𝚛𝚎𝚊𝚝𝚘𝚛 𝚊𝚗𝚓𝚐
* 𝚞𝚍𝚊𝚑 𝚍𝚒𝚔𝚊𝚜𝚒 𝚐𝚛𝚊𝚝𝚒𝚜 𝚗𝚐𝚎𝚗𝚝𝚘𝚍
* 𝙱𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢 𝙱𝚘𝚝  2𝚔22
* 𝚂𝚌𝚒𝚗𝚏𝚘 𝚓𝚊𝚗 𝚍𝚒 𝚑𝚊𝚙𝚞𝚜 𝚊𝚓𝚐
* 𝙲𝚛𝚎𝚊𝚝𝚎𝚍 𝙱𝚢 𝙼𝚊𝚣 𝚃𝚊𝚖𝚟𝚊𝚗
*/
let {   
	Presence,
	Mimetype, 
	waChatkey,
	ProxyAgent,	
	processTime,
	mentionedJid,
	MessageType, 
	WAbtfection,
	RebtfectMode,   
	MessageOptions, 
	GroupSettingChange, 	
	WALocationMessage, 
	WA_DEFAULT_EPHEMERAL, 
	WA_MESSAGE_STUB_TYPES, 
	} = require('@adiwajshing/baileys')
let fs = require('fs')
let util  = require('util')
const chalk = require('chalk')
let toMs = require('ms')
let hx = require('hxz-api')
let axios = require("axios")
let ms = require('parse-ms')
let os = require('os')
let crypto = require('crypto') 
let yts = require( 'yt-search')
let request = require('request')
let hxz = require("hxz-api");
let fetch = require('node-fetch')
let googleImage = require('g-i-s')
let ffmpeg = require('fluent-ffmpeg')
let brainly = require('brainly-scraper')
let moment = require('moment-timezone')
let { EmojiAPI } = require("emoji-api");
let emoji = new EmojiAPI();
let speed = require('performance-now')
let { exec, spawn, execSync } = require('child_process')
let zee = require('api-alphabot')
//++𝙻𝙸𝙱𝚁𝙰𝚁𝚈
const reminder = require("../lib/reminder");
let { lirikLagu } = require('../lib/lirik.js')
let { y2mate } = require('../lib/y2mate');
let afk = require("../lib/afk");
let { color, bgcolor } = require('../lib/color')
let { jagoKata } = require('../lib/jagokata.js')
let { mediafireDl } = require('../lib/mediafire.js')
let imageToBase64 = require('image-to-base64')
let { fetchJson, fetchText,createExif } = require('../lib/fetcher')
let { y2mateA, y2mateV } = require('../lib/y2mate.js')

let { sleep, isAfk, cekafk, addafk } = require('../lib/offline')
let { yta, ytv, igdl, upload, formatDate } = require('../lib/ytdl')
let { jadibot, stopjadibot, listjadibot } = require("../lib/jadibot");
let { uptotele, uploadFile, uploadImages } = require('../lib/uploadimage');
let { ownerName, botName, btfNumber, fake, ownerNumber, limitCount, gamecount } = require('../setup/setting.json')

let { antiSpam } = require('../lib/antispam')
let { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, NumberRandom} = require('../lib/functions')
//+𝙼𝙴𝙽𝚄 𝚁𝙴𝚀+
let { ownermenu, toolsmenu,  rpgmenu, limitmenu, wibumenu,  searchmenu, dlmenu, mediamenu, katamenu, upswmenu, gamemenu, funmenu,  ceritamenu, gcmenu, savemenu, convertmenu,  makermenu, edumenu, imagemenu, islammenu, infomenu} = require('./index.js')

const { webp2mp4File } = require("../lib/webp2mp4");



//»»»𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦

const _reminder = JSON.parse(fs.readFileSync("./database/bot/reminder.json"));
let _afk = JSON.parse(fs.readFileSync('./database/group/afk.json'));
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let balance = JSON.parse(fs.readFileSync('./database/user/balance.json'));
let pendaftar = JSON.parse(fs.readFileSync('./database/user/user.json'))
let event = JSON.parse(fs.readFileSync('./database/group/event.json'))
let _truth = JSON.parse(fs.readFileSync('./database/game/truth.json'));
let _scommand = JSON.parse(fs.readFileSync("./database/group/scommand.json"));
let _dare = JSON.parse(fs.readFileSync('./database/game/dare.json'));
let bad = JSON.parse(fs.readFileSync('./database/bot/bad.json'))
let badword = JSON.parse(fs.readFileSync('./database/bot/badword.json'))
let simin = JSON.parse(fs.readFileSync('./database/group/simi.json'))
let _antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
let hit = JSON.parse(fs.readFileSync('./database/bot/totalcmd.json'))
let videonye = JSON.parse(fs.readFileSync('./database/dbmedia/video.json'))
let fiturnye = JSON.parse(fs.readFileSync('./database/bot/video.json'))
let imagenye = JSON.parse(fs.readFileSync('./database/dbmedia/image.json'))
let setiker = JSON.parse(fs.readFileSync('./database/dbmedia/stik.json'))
let audionye = JSON.parse(fs.readFileSync('./database/dbmedia/audio.json'))
let prem = JSON.parse(fs.readFileSync('./database/user/premium.json'))
let limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
let ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
//media
let tamnel = fs.readFileSync('./database/media/btfbot.jpg')
let tde = fs.readFileSync('./database/media/TD.jpg')
let fgf =  fs.readFileSync('./database/media/fgif.jpg')
let bcs = fs.readFileSync('./database/media/bcs.jpg')
let lvlup = fs.readFileSync('./database/rpg/up.jpg')
//Function RPG & LEVEL By Butterfly Ori
let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("../lib/rpgfunction");
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("../lib/lvlfunction");

//Database Game teba"  an
const tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))
const caklontong = JSON.parse(fs.readFileSync('./database/game/caklontong.json'))
const family = JSON.parse(fs.readFileSync('./database/game/family100.json'))
const tebakanime = JSON.parse(fs.readFileSync('./database/game/tebakanime.json'))
const cakbtf = JSON.parse(fs.readFileSync('./database/game/cakbtf.json'))
const asahotak = JSON.parse(fs.readFileSync('./database/game/asahotak.json'))
const siapaaku = JSON.parse(fs.readFileSync('./database/game/siapaaku.json'))
const susun = JSON.parse(fs.readFileSync('./database/game/susun.json'))
const tekateki = JSON.parse(fs.readFileSync('./database/game/tekateki.json'))

//Database RPG Mode By Butterfly!! Ori No
let _RPG = JSON.parse(fs.readFileSync('./database/rpg/inventori.json'))
let _level = JSON.parse(fs.readFileSync('./database/rpg/leveluser.json'))
let _petualang = JSON.parse(fs.readFileSync('./database/rpg/inventori.json'))
let _healt = JSON.parse(fs.readFileSync('./database/rpg/healt.json'))
//let _potion = JSON.parse(fs.readFileSync('../lib/rpg/potion.json'))

//Apikey
let { dhakey, lolkey, btfkey, zekaapi} = require('../setup/api.json')

//»»»𝘖𝘱𝘵𝘪𝘰𝘯
let p = '```'
publik =  true
readGc = true
readPc  = true
hit_today = [];
healtawal = 100
potionawal = 1
let gaya = `♯`
ky_ttt = []
//━━━━━━━━━━━━━━━[ AU LUPA ]━━━━━━━━━━━━━━━\\



   const getHeal = (sender) => {
   	let position = false
    Object.keys(_healt).forEach ((i) => {
    	if (_healt[position].id === sender) {
    	   position = i
   }
    })
   if (position !== false) {
      return _healt[position].healt
       }
   }


       const healtAdd = (sender) => {
   let position = false
       Object.keys(_healt).forEach((i) => {
      if (_healt[i].id == sender) {
     position = i
      }
       })
       if (position !== false) {
      _healt[position].healt += 10
      fs.writeFileSync('./database/rpg/healt.json', JSON.stringify(_healt))
       }
   }
   
       



// Sticker Cmd
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/group/scommand.json", JSON.stringify(_scommand));
};




const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};

function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
   myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum\'at','Sabtu'];
   var tgl = new Date();
   var day = tgl.getDate()
   bulan = tgl.getMonth()
   var thisDay = tgl.getDay(),
   thisDay = myDays[thisDay];
   let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
      let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
   var yy = tgl.getYear()
   var year = (yy < 1000) ? yy + 1900 : yy;
   return `${day} ${myMonths[bulan]} ${year}`
}   
      var d = new Date
      var locale = 'id'
      var gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
      var weton = ['𝙿𝚊𝚑𝚒𝚗𝚐', '𝙿𝚘𝚗','𝚆𝚊𝚐𝚎','𝙺𝚕𝚒𝚠𝚘𝚗','𝙻𝚎𝚐𝚒'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
      var week = d.toLocaleDateString(locale, { weekday: 'long' })
      var kalender = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
})
     let tanggalislam = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    
    
    
   myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
   myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum\'at','Sabtu'];
   var tgl = new Date();
   var day = tgl.getDate()
   bulan = tgl.getMonth()
   var thisDay = tgl.getDay(),
   thisDay = myDays[thisDay];
    
    

   var runtime = function(seconds) {
   seconds = Number(seconds);
   var d = Math.floor(seconds / (3600 * 24));
   var h = Math.floor(seconds % (3600 * 24) / 3600);
   var m = Math.floor(seconds % 3600 / 60);
   var s = Math.floor(seconds % 60);
   var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
   var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
   var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
   var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
   return dDisplay + hDisplay + mDisplay + sDisplay;
   } 
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━\\
   module.exports = btf = async (btf, mek, _welkom) => {
   try {
   if (!mek.hasNewMessage) return 
   mek = mek.messages.all()[0]
   const { mentioned } = mek
     if (!mek.message) return
   if (mek.key && mek.key.remoteJid == 'status@broadcast') return
   global.prefix
   global.blocked   
   mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
   const content = JSON.stringify(mek.message)
   const from = mek.key.remoteJid
   const type = Object.keys(mek.message)[0]
   const { text, extendedText, contact, contactsArray, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
   const wib = moment.tz('Asia/Jakarta').format('HH:mm')
   const wita = moment.tz('Asia/Makassar').format("HH:mm")
   const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
   const hour_now = moment().format('HH:mm:ss')
   const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
   const prefix = /^[z?Ａ繩?繞?°?Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+@,;]/.test(cmd) ? cmd.match(/^[z?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '.'   
   body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''      
   budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
   bodi = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
   const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()   
   const messagesC = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
   const timestamp = speed();
	  	const latensi = speed() - timestamp
   hit_today.push(command);
	  	const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1)
    	const isCmd = body.startsWith(prefix)
     const v = args.join(' ')
   const botNumber = btf.user.jid
   const botNumberss = btf.user.jid + '@c.us'
   const isGroup = from.endsWith('@g.us')
   const sender = mek.key.fromMe // Fix Bug by Butterfly
   ? btf.user.jid
   : isGroup
   ? mek.participant
   : mek.key.remoteJid;
   let senderr = mek.key.fromMe
   ? btf.user.jid
   : mek.key.remoteJid.endsWith("@g.us")
   ? mek.participant
   : mek.key.remoteJid;
   const OwnerNumber = [`${ownerNumber}@s.whatsapp.net`]
   const isOwner = OwnerNumber.includes(sender)
   const isPremium = prem.includes(sender) || isOwner
   const isPetualang = checkPetualangUser(sender)
    const totalchat = await btf.chats.all()
   const groupMetadata = isGroup ? await btf.groupMetadata(from) : ''
   const groupName = isGroup ? groupMetadata.subject : ''
   const groupId = isGroup ? groupMetadata.jid : ''    
   const groupMembers = isGroup ? groupMetadata.participants : ''
   const groupDesc = isGroup ? groupMetadata.desc : ''
   const groupOwner = isGroup ? groupMetadata.owner : ''
   const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
   const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
   const isGroupAdmins = groupAdmins.includes(sender) || false   
   const isBadWord = isGroup ? badword.includes(from) : false
   const isWelkom = isGroup ? _welkom.includes(from) : false
   const isEventon = isGroup ? event.includes(from) : false
   const isAnti = isGroup ? _antilink.includes(from) : false
   const isUser = pendaftar.includes(sender)
   const isBanned = ban.includes(sender)
   const conts = mek.key.fromMe ? btf.user.jid : btf.contacts[sender] || { notify: jid.replace(/@.+/, '') }
   const pushname = mek.key.fromMe ? btf.user.name : conts.notify ||   conts.vname || conts.name || 'Undefinied'   
   const gcounti = gamecount
   const gcount = isPremium ? gcounti.premi : gcounti.freeuser
   const createSerial = (size) => {
   return crypto.randomBytes(size).toString('hex').slice(0, size)
   }
   const isAfkOn = afk.checkAfkUser(sender, _afk)
   
             
//==================[ UCAPAN DAM GAMBAR WAKTU ]============//
 var time = moment().tz('Asia/Jakarta').format('HH:mm:ss z')	   
 
if(time < "23:59:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
var ucapanTime = `𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝙼𝚊𝚕𝚊𝚖 ➽  ${pushname}`
          }
if(time < "19:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
var ucapanTime = `𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝙿𝚎𝚝𝚊𝚗𝚐 ➽  ${pushname}`
      }
if(time < "18:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
var ucapanTime = `𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚂𝚘𝚛𝚎 ➽  ${pushname}`
      }
if(time < "15:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
var ucapanTime = `𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚂𝚒𝚊𝚗𝚐  ➽  ${pushname}`
      }
if(time < "11:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
var ucapanTime = `𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝙿𝚊𝚐𝚒 ➽  ${pushname}`
      }
if(time < "06:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
var ucapanTime = `𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝙿𝚊𝚐𝚒 ➽  ${pushname}`
}         

//BOT STATUS
runi = process.uptime() 
btf.setStatus(`𝙱𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢 𝙱𝚘𝚝 ︎︎🕛 𝚁𝚞𝚗𝚝𝚒𝚖𝚎 :  ${runtime(runi)} `).catch((_)=>_);
settingstatus = new Date() * 1;          
btf.updatePresence(from, Presence.composing)         

//AEFKA

//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━\\   

/*   //function check healt
     const checkHealt = (sender) => {
   let found = false
     for (let lmt of _healt) {
    if (lmt.id === sender) {
        const healthCounts = healtawal - lmt.healt
        if (healthCounts <= 0) return btf.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
      //  btf.sendMessage(from, `${healthCounts}`, text, { quoted : mek})
       if (!isPetualang) return reply(mess.only.player)
 reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 ♯ Nama : ${pushname}
 ♯ Rank : ${role}
 ♯ Status : ${elit}
 ♯ Uang : $${(getBalance(sender, balance))}
 ♯ Xp : ${getLevelingXp(sender)}/${reqXp}
 ♯ Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 ♯ Uang : $${(getBalance(sender, balance))}💰
 ♯ Emas : ${getEmas(sender)}🪙
 ♯ Besi : ${getBesi(sender)}⛓️
 ♯ Berlian : ${getDm(sender)}💎
 ♯ Ikan : ${getFish(sender)}🎣
`)
     but = [{ buttonId: `!menu`, buttonText: { displayText: '䷈𝙼𝙴𝙽𝚄' }, type: 1 }]
     sendButton(from, pp, '𝚁𝚙𝚐 𝚐𝚊𝚖𝚎 𝙱𝚢 𝙵𝚎𝚋𝚛𝚒𝚊𝚗𝚜𝚢𝚊𝚑', but)
        found = true
    }
     }
     if (found === false) {
    let obj = { id: sender, healt: 1 }
    _healt.push(obj)
    fs.writeFileSync('../lib/rpg/healt.json', JSON.stringify(_healt))
    btf.sendMessage(from, `${healthCounts}`, text, { quoted : mek})
     }
      }
      
   	//funtion limited
      const isHealt = (sender) =>{ 
         let position = false
    for (let i of _healt) {
    if (i.id === sender) {
    	let healts = i.healt
    if (healts >= healtawal ) {
    	  position = true
     btf.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
     return true
    } else {
    	_healt
   position = true
   return false
     }
   }
      }
      if (position === false) {
    const obj = { id: sender, healt: 1 }
      _healt.push(obj)
      fs.writeFileSync('../lib/rpg/healt.json',JSON.stringify(_healt))
      return false
       }
     }
   
   
   const bayarHealt = (sender, amount) => {
   	let position = false
       Object.keys(_healt).forEach((i) => {
      if (_healt[i].id === sender) {
     position = i
      }
       })
       if (position !== false) {
      _healt[position].healt -= amount
      if (_healt[position].healt >= 0) return reply('healt kmu dh penuh')
      fs.writeFileSync('../lib/rpg/healt.json', JSON.stringify(_healt))
       }
   }
    */
   mess = {
         glimit:`𝙼𝚊𝚏𝚏 ${pushname} 𝙻𝚒𝚖𝚒𝚝 𝙶𝚊𝚖𝚎 𝚊𝚗𝚍𝚊 𝚃𝚎𝚕𝚊𝚑 𝙷𝚊𝚋𝚒𝚜`,
         banned:`𝙼𝚊𝚏𝚏 ${pushname} 𝙰𝚗𝚍𝚊 𝚝𝚎𝚕𝚊𝚑 𝚍𝚒 𝚋𝚊𝚗  𝚘𝚕𝚎𝚑  𝚋𝚘𝚝, 𝚜𝚒𝚕𝚊𝚔𝚊𝚗 𝚑𝚞𝚋𝚞𝚗𝚐𝚒 𝚘𝚠𝚗𝚎𝚛`,
         uselimit: `𝙰𝚗𝚍𝚊 𝚖𝚎𝚗𝚐𝚐𝚞𝚗𝚊𝚔𝚊𝚗 1 𝚕𝚒𝚖𝚒𝚝\n𝙻𝚒𝚖𝚒𝚝 𝚝𝚎𝚛𝚜𝚒𝚜𝚊 ⎔ ${isOwner ? '𝚄𝚗𝚕𝚒𝚖𝚒𝚝𝚎𝚍' : isPremium ? '𝚄𝚗𝚕𝚒𝚖𝚒𝚝𝚎𝚍' : getLimit(sender, limitCount, limit)} ⎔`,
       limit: `*𝚄𝚙𝚜 𝙼𝚊𝚊𝚏 𝙺𝚊𝚔 ${pushname} 𝙻𝚒𝚖𝚒𝚝  𝚔𝚊𝚖𝚞  𝚞𝚍𝚊 𝚑𝚊𝚋𝚒𝚜*`,
    wait: '𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚖𝚎𝚗𝚞𝚗𝚐𝚐𝚞 𝚋𝚎𝚋𝚎𝚛𝚊𝚙𝚊 𝚜𝚊𝚊𝚝!',
   	success: `*𝙳𝚘𝚗𝚎 𝚔𝚊𝚔 ${pushname}*`,
   	toxic: '𝙹𝚊𝚗𝚐𝚊𝚗 𝚃𝚘𝚡𝚒𝚌 𝙰𝚗𝚓𝚠𝚎𝚗𝚐',
    verify: `*Mohon maff anda belum register, ketik .verify*`,
        capt: `*𝙳𝚘𝚗𝚎 𝙺𝚊𝚔*\n\n*「 𝙱𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢 𝙱𝚘𝚝 」*`,
   	error: {
      stick: `*𝚃𝚒𝚍𝚊𝚔 𝚍𝚊𝚙𝚊𝚝 𝚖𝚎𝚗𝚐𝚊𝚔𝚜𝚎𝚜 𝚟𝚒𝚍𝚒𝚘*`,
      Iv: `*𝙻𝚒𝚗𝚔 𝙸𝚗𝚟𝚊𝚕𝚒𝚍 𝙰𝚝𝚊𝚞 𝙻𝚒𝚗𝚔 𝚝𝚒𝚍𝚊𝚔 𝚊𝚍𝚊*`,
    api: `*𝙴𝚛𝚛𝚘𝚛*`
   	},
   	only: {
      group: `*𝙷𝚊𝚗𝚢𝚊 𝙶𝚛𝚞𝚙*`,
      prem: `*𝙰𝚗𝚍𝚊 𝚃𝚒𝚍𝚊𝚔 𝙳𝚊𝚙𝚊𝚝 𝚖𝚎𝚗𝚐𝚊𝚔𝚜𝚎𝚜 Fitur 𝙿𝚛𝚎𝚖𝚒𝚞𝚖, 10𝚔 𝙵𝚞𝚕𝚕  𝙿𝚛𝚎𝚖𝚒𝚞𝚖,𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚌𝚑𝚊𝚝 .𝚘𝚠𝚗𝚎𝚛 𝚄𝚗𝚝𝚞𝚔 𝚊𝚍𝚍 𝙿𝚛𝚎𝚖𝚒𝚞𝚖*`,
      owner: `*𝙴𝚖𝚊𝚗𝚐 𝚜𝚒𝚝𝚞 𝙾𝚠𝚗𝚎𝚛 ? , 𝙿𝚊𝚔𝚎 𝚗𝚢𝚞𝚛𝚞𝚑 𝚗𝚢𝚞𝚛𝚞𝚑 𝚊𝚗𝚎*`,
      admin: `*𝙴𝚖𝚊𝚗𝚐 𝚜𝚒𝚝𝚞 𝙰𝚍𝚖𝚒𝚗 ?*`,
      bot: `*𝙹𝚊𝚍𝚒𝚒𝚗 𝙰𝚔𝚞 𝙰𝚍𝚖𝚒𝚗 𝙱𝚠𝚊𝚗𝚐𝚐*`,
      event:`*𝙴𝚟𝚎𝚗𝚝 𝚋𝚎𝚕𝚞𝚖  𝚊𝚔𝚝𝚒𝚏*`,
      player: `*𝙼𝚊𝚊𝚏 𝚔𝚊𝚔 ${pushname} 𝚂𝚎𝚙𝚎𝚛𝚝𝚒𝚗𝚢𝚊 𝚊𝚗𝚝𝚞𝚖 𝚋𝚎𝚕𝚞𝚖 𝚓𝚊𝚍𝚒 𝚙𝚎𝚝𝚞𝚕𝚊𝚗𝚐* \n*𝙶𝚞𝚗𝚊𝚔𝚊𝚗 ${prefix}joinrpg 𝚞𝚗𝚝𝚞𝚔 𝚖𝚎𝚗𝚓𝚊𝚍𝚒 𝚙𝚎𝚝𝚞𝚊𝚕𝚊𝚗𝚐*`      
     }
    }
   
   const isUrl = (url) => {
   return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
   }

   const reply = (teks) => {
       btf.sendMessage(from, teks, text, {quoted:fgif})
   }

   const sendMess = (hehe, teks) => {
       btf.sendMessage(hehe, teks, text)
   }

   const mentions = (teks, memberr, id) => {
       (id == null || id == undefined || id == false) ? btf.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : btf.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
   }
   const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
   
   
   
   //+++ || FAKE TROLI    
   const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2022, status: 200, thumbnail: fgf, surface: 200, message: `${ucapanTime}`, orderTitle: `${botName}`, sellerJid: '0@s.whatsapp.net'} } }    
   

   let mfgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281233959206-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`© ${ownerName}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${botName} 🏟️\n🕖 ${time}`, 'jpegThumbnail': imageTime}}}
   
   let fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281233959206-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`© ${ownerName}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${botName} \n🕖 ${time}`, 'jpegThumbnail': fgf}}}
   
   const mtroli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: `2022`,  status: 200, thumbnail: imageTime, surface: 200, message: `${botName}`, orderTitle: `${botName}`, sellerJid: '0@s.whatsapp.net'} } } 
 
 
   const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6281233959206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": tamnel}}}
    

   const katalog = (teks) => {
   res = btf.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 999999999, "message": teks, "footerText": "©btfbot", "jpegThumbnail": fs.readFileSync('./database/media/btfbot.jpg'), "surface": 'CATALOG' }}, {quoted:troli})
   btf.relayWAMessage(res)
   }
   function randomNomor(min, max = null) {
     if (max !== null) {
   	min = Math.ceil(min);
   	max = Math.floor(max);
   	return Math.floor(Math.random() * (max - min + 1)) + min;
     } else {
   	return Math.floor(Math.random() * min) + 1
     }
   }
   
   function monospace(string) {
       return '```' + string + '```'
   }
   var premi = '𝙵𝚛𝚎𝚎 𝚄𝚜𝚎𝚛'
   	if (isPremium) {
      premi = '𝙿𝚛𝚎𝚖𝚒𝚞𝚖 𝚄𝚜𝚎𝚛'
   	} 
   	if (isOwner) {
      premi = '𝚃𝚑𝚒𝚜 𝙸𝚜 𝙾𝚠𝚗𝚎𝚛'
   	}
   var elit = '𝙿𝚎𝚝𝚞𝚊𝚕𝚊𝚗𝚐 𝙱𝚒𝚊𝚜𝚊'
   	if (isPremium) {
      elit = '𝙿𝚎𝚝𝚞𝚊𝚕𝚊𝚗𝚐 𝙿𝚛𝚘'
   	} 
   	if (isOwner) {
      elit = '𝙶𝚛𝚊𝚗𝚍 𝙼𝚊𝚜𝚝𝚎𝚛'
   	}
   	
   const sendButton = async (from, context, fortext, but, mek) => {
   buttonMessages = {
   contentText: context,
   footerText: fortext,
   buttons: but,
   headerType: 1
   }
   btf.sendMessage(from, buttonMessages, buttonsMessage, {
   quoted: mek
   })
   }
   const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
   const buttonMessage = {
   contentText: text1,
   footerText: desc1,
   buttons: but,
   headerType: 1,
   };
   btf.sendMessage(
   id,
   buttonMessage,
   MessageType.buttonsMessage,
   options
   );
   };
   const sendButImage = async (from, context, fortext, img, but, mek) => {
   jadinya = await btf.prepareMessage(from, img, image)
   buttonMessagesI = {
   imageMessage: jadinya.message.imageMessage,
   contentText: context,
   footerText: fortext,
   buttons: but,
   headerType: 4
   }
   btf.sendMessage(from, buttonMessagesI, buttonsMessage, {
   quoted: mek,
   })
   }
   async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
   const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
   return btf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
   } 
   var sendButloc = (from, title, text, desc, button, sen, men, file) => {
   return btf.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})
   }            
   const sendMedia = async(from, url, text="", mids=[]) =>{
   if(mids.length > 0){
   text = normalizeMention(from, text, mids)
   } 
   const fn = Date.now() / 120000;
   const filename = fn.toString()
   let mime = ""
   var download = function (uri, filename, callback) {
   request.head(uri, function (err, res, body) {
   mime = res.headers['content-type']
   request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
   });
   };
   download(url, filename, async function () {
   console.log('done');
   let media = fs.readFileSync(filename)
   let type = mime.split("/")[0]+"Message"
   if(mime === "image/gif"){
   type = MessageType.video
   mime = Mimetype.gif
   }
   if(mime.split("/")[0] === "audio"){
   mime = Mimetype.mp4Audio
   }
   btf.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})     
   fs.unlinkSync(filename)
   });
   } 
   const sendMediaURL = async(to, url, text="", mids=[]) =>{
   if(mids.length > 0){
   text = normalizeMention(to, text, mids)
   }
   const fn = Date.now() / 120000;
   const filename = fn.toString()
   let mime = ""
   var download = function (uri, filename, callback) {
   request.head(uri, function (err, res, body) {
   mime = res.headers['content-type']
   request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
   });
   };
   download(url, filename, async function () {
   console.log('done');
   let media = fs.readFileSync(filename)
   let type = mime.split("/")[0]+"Message"
   if(mime === "image/gif"){
   type = MessageType.video
   mime = Mimetype.gif
   }
   if(mime.split("/")[0] === "audio"){
   mime = Mimetype.mp4Audio
   }
   btf.sendMessage(to, media, type, { quoted: troli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})  
   fs.unlinkSync(filename)
   });
   }        
   const sendFileFromStorage = (path, type, options) => {
   btf.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
   reply(`𝙴𝚛𝚛𝚘𝚛 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚊𝚗𝚍 𝚂𝚎𝚗𝚍 𝙼𝚎𝚍𝚒𝚊 `)
   console.log(e)
   })
   }   
   const sendFileFromUrl = async(link, type, options) => {
   hasil = await getBuffer(link)
   btf.sendMessage(from, hasil, type, options).catch(e => {
   fetch(link).then((hasil) => {
   btf.sendMessage(from, hasil, type, options).catch(e => {
   btf.sendMessage(from, { url : link }, type, options).catch(e => {
   reply(`𝙴𝚛𝚛𝚘𝚛 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚊𝚗𝚍 𝚂𝚎𝚗𝚍 𝙼𝚎𝚍𝚒𝚊 `)
   console.log(e)
   })
   })
   })
   })
   }       
   const sendFileFromUrl2 = async (from, url, caption, mek, men) => {
       let mime = '';
       let res = await axios.head(url)
       mime = res.headers['content-type']
       if (mime.split("/")[1] === "gif") {
      return btf.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
      }
       let type = mime.split("/")[0]+"Message"
       if(mime === "application/pdf"){
      return btf.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: mek })
       }
       if(mime.split("/")[0] === "image"){
      return btf.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
       }
       if(mime.split("/")[0] === "video"){
      return btf.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
       }
       if(mime.split("/")[0] === "audio"){
      return btf.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio'}, {quoted: m })
       }
   }
   
   
   
   
   
   
   
   const sendStickerFromUrl = async(to, url) => {
   var names = Date.now() / 120000;
   var download = function (uri, filename, callback) {
   request.head(uri, function (err, res, body) {
   request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
   });
   };
   download(url, './stik' + names + '.png', async function () {
   let filess = './stik' + names + '.png'
   let asw = './stik' + names + '.webp'
   exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
   let media = fs.readFileSync(asw)
   btf.sendMessage(to, media, MessageType.sticker,{quoted:mek})
   fs.unlinkSync(filess)
   fs.unlinkSync(asw)
   });
   });
   }

   	
   	//function rank 
   	const levelRole = getLevelingLevel(sender)
       var role = '𝙱𝚛𝚘𝚗𝚣𝚎'
       if (levelRole <= 3) {
      role = '𝙲𝚘𝚙𝚙𝚎𝚛'
       } else if (levelRole <= 5) {
      role = '𝙸𝚛𝚘𝚗'
       } else if (levelRole <= 7) {
      role = '𝚂𝚒𝚕𝚟𝚎𝚛'
       } else if (levelRole <= 10) {
      role = '𝙶𝚘𝚕𝚍'
       } else if (levelRole <= 12) {
      role = '𝙿𝚕𝚊𝚝𝚒𝚗𝚞𝚖'
       } else if (levelRole <= 15) {
      role = '𝙼𝚒𝚝𝚑𝚛𝚒'
       } else if (levelRole <= 18) {
      role = '𝙾𝚛𝚒𝚌𝚑𝚊𝚕𝚌𝚞𝚖'
       } else if (levelRole <= 25) {
      role = '𝙰𝚍𝚊𝚖𝚊𝚗𝚝𝚒𝚝𝚎'
       }


//+𝙻𝙴𝚅𝙴𝙻𝚄𝙽𝙶 𝚁𝙿𝙶+

 if (isGroup && isPetualang) {
 const currentLevel = getLevelingLevel(sender)     
 const checkId = getLevelingId(sender)
 pps = await btf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
 ppa = await getBuffer(pps)
 try { 
 if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
 const amountXp = Math.floor(Math.random() * 10) + 100
 const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
 var getLevel = getLevelingLevel(sender)
 addLevelingXp(sender, amountXp)
 if (requiredXp <= getLevelingXp(sender)) {
 addLevelingLevel(sender, 1)   
var lvlup = monospace(`╭───「 Level Up 」\n│\n├ • Nama : ${pushname}\n├ • Rank : ${role}\n├ • Status : ${elit}\n├ • Xp : ${getLevelingXp(sender)}\n├ • Level : ${getLevelingLevel(sender)}\n│\n╰───「 ${botName} 」`)
 but = [
  { buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 }
  ]
  sendButLocation(from, lvlup, `\n${p}${wib} || ${tanggal()}${p}`, lvlup, but, {quoted: mek})
 }
 } catch (err) {
 console.error(err)
 }
 }  

//pporang
try {
ppmu = await btf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppmu = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const pporang = await getBuffer(ppmu)




if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 𝙼𝙾𝙳𝙴 𝙰𝙴𝙵𝙺𝙰 𝚃𝙾𝙳 」*\n
*𝚂𝙷𝚄𝚃 𝙳𝙸𝙰𝙼!  𝙺𝚊𝚝𝚊𝚗𝚢𝚊 𝙳𝚒𝚊𝚗𝚢𝚊 𝙰𝚎𝚏𝚔𝚊*
➸ *𝙰𝚕𝚊𝚜𝚊𝚗𝚗𝚢𝚊*  : ${getReason}
➸ *𝚂𝚎𝚓𝚊𝚔* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* 𝙳𝚊𝚑 𝙾𝚗𝚕𝚎𝚗 𝚠𝚘𝚢𝚢,  𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚋𝚎𝚔`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
           



   
   
//--- Total command
   const cmdadd = () => {
   hit[0].totalcmd += 1
    	fs.writeFileSync('./database/bot/totalcmd.json', JSON.stringify(hit))
   }
   if (isCmd) cmdadd()
   const totalhit = JSON.parse(fs.readFileSync('./database/bot/totalcmd.json'))[0].totalcmd
   
// ---- Antilink 
   const linkwa = 'https://chat.whatsapp.com/'
   if (budy.includes(`${linkwa}`)){
   if (!isGroup) return
   if (!isAnti) return
   if (!isBotGroupAdmins) return reply('Untung Gue bukan admin, kalo iya gua kick lu')
   linkgc = await btf.groupInviteCode (from)
   if (budy.includes(`${linkwa}${linkgc}`)) return reply('Untung Link group ini')
   if (isGroupAdmins) return reply(`Hmm mantap min`)
   btf.updatePresence(from, Presence.composing)
   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
   setTimeout( () => {
   reply('byee')
   }, 1100)
   setTimeout( () => {
   btf.groupRemove(from, [Kick]).catch((e) => {console.log(`*ERROR:* ${e}`)}) 
    }, 1000)
   setTimeout( () => {
   reply(`Antilink menyala & link Group Terdeteksi maaf *${pushname}* anda akan di kick`)
   }, 0)
   }

   if (!publik) {
   if (!isOwner && !mek.key.fromMe) return 
   }       
   

   
   
   
   if (isGroup && isBadWord) {
   if (bad.includes(messagesC)) {
   if (!isGroupAdmins) {
   return reply (`𝙹𝚊𝚐𝚊 𝚄𝚌𝚊𝚙𝚊𝚗 𝙳𝚘𝚗𝚐, 𝙳𝚊𝚜𝚊𝚛 ${pushname} 𝙶𝚊  𝚊𝚍𝚊 𝙾𝚝𝚊𝚔`)
   .then(() => btf.groupRemove(from, sender))
   .then(() => {
   btf.sendMessage(from, `*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`, text ,{quoted: mek})
   }).catch(() => btf.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
   } else {
   return reply( "𝚃𝚘𝚕𝚘𝚗𝚐 𝙹𝚊𝚐𝚊 𝚄𝚌𝚊𝚙𝚊𝚗 𝙼𝚒𝚗 😇")
   }
   }
   }
// Kalo Make Kasi WM Made By Febriansyah Ajg!!     

   var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
   var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎','🐺']
   var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
   //Health
       // var healt =
   
       
   const sotoy = [
   '🍊 : 🍒 : 🍐',
   '🍒 : 🔔 : 🍊',
   '🍇 : 🍇 : 🍐',
   '🍋 : 🍋 : 🍋 Win👑', 
   '🔔 : 🍋 : 🔔', 
   '🔔 : 🍒 : 🍐',
   '🔔 : 🍒 : 🍊',
   '🍊 : 🍋 : 🔔',   
   '🍐 : 🍒 : 🍋',
   '🍐 : 🍒 : 🍐',
   '🍊 : 🍒 : 🍒',
   '🍒 : 🍒 : 🍒 Win👑',
   '🔔 : 🔔 : 🍇',
   '🍌 : 🍌 : 🔔',
   '🔔 : 🔔 : 🔔 Win👑',
   '🍐 : 🔔 : 🔔',
   '🍊 : 🍋 : 🍒',
   '🔔 : 🔔 : 🍇',    //Mau Ambil? Add Wm Lah Tod
   '🔔 : 🍇 : 🍇', 
   '🔔 : 🍐 : 🔔', 
   '🍊 : 🍒 : 🍐', 
   '🍒 : 🔔 : 🍊', 
   '🍇 : 🍇 : 🍇 Win👑', 
   '🍊 : 🍋 : 🔔', 
   '🔔 : 🍒 : 🍐', 
   '🔔 : 🍒 : 🍊', 
   '🍊 : 🍋 : 🔔',	
   '🍐 : 🍒 : 🍋', 
   '🍐 : 🍐 : 🍐 Win👑', 
   '🍊 : 🍒 : 🍒', 
   '🔔 : 🔔 : 🍇', 
   '🍌 : 🍒 : 🔔', 
   '🍐 : 🔔 : 🔔', 
   '🍊 : 🍋 : 🍒', 
   '🍋 : 🍋 : 🍌', 
   '🔔 : 🔔 : 🍇', 
   '🔔 : 🍐 : 🍇', 
   '🍌 : 🍌 : 🍌 Win👑']
   
   
 //+𝙱𝚄𝚁𝚄+
    const buru1 = ['🐳', '🦈', '🐬', '🐋', '🐟', '🐠', '🦐', '🦑', '🦀', '🐚']
    const buru2 = ['🐔', '🦃', '🐿', '🐐', '🐏', '🐖', '🐑', '🐎', '🐺', '🦩']
    const buru3 = ['🦋', '🕷', '🐝', '🐉', '🦆', '🦅', '🕊', '🐧', '🐦', '🦇']
    const buru4 = ['🪁', '🛵', '🖥️', '📱', '💰']
    const buru5 = ['💎', '📚', '📻', '📠', '🚛', '💸']
    const buru1a = buru1[Math.floor(Math.random() * (buru1.length))]
    const buru2b = buru2[Math.floor(Math.random() * (buru2.length))]
    const buru3c = buru3[Math.floor(Math.random() * (buru3.length))]
    const buru4d = buru4[Math.floor(Math.random() * (buru4.length))]
    const buru5e = buru5[Math.floor(Math.random() * (buru5.length))] 
   
   
   
//━━━━━━━━━━━━━━━[ GAK USAH DI UBAH ]━━━━━━━━━━━━━━━\\

   if (isCmd && !isUser) {
     pendaftar.push(sender)
     fs.writeFileSync('./database/bot/user.json', JSON.stringify(pendaftar, null, 2))
   }

   colors = ['white', 'white', 'black', 'blue', 'yellow', 'green']
   const isSimi = simin.includes(from)
   const isMedia = (type === 'imageMessage' || type === 'videoMessage')
   const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
   const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
   const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
   const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
   const isTagedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
   
//+𝙲𝙾𝙽𝚂𝙾𝙻𝙴 𝙻𝙾𝙶+
    
   if(isCmd  && isGroup){
	console.log(('|\x1b[1;33m CMD \x1b[1;33m|'), chalk.white(time), chalk.yellow(command), 'from', chalk.green(pushname), 'args :', chalk.green(args.length), 'in', chalk.green(groupName? groupName : 'Private chat'))
		}
  if(isCmd && !isGroup){
   console.log(('|\x1b[1;32m CMD \x1b[1;37m|'), time, chalk.green(command), 'from', chalk.green(pushname), 'args :', chalk.green(args.length), 'in', chalk.green(groupName? groupName : 'Private chat'))
		}
                
    if (isCmd && antiSpam.isFiltered(from) && !isGroup) { console.log(color('[ SPM ]', 'white'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
   return reply('𝚃𝚘𝚕𝚘𝚗𝚐 𝚖𝚎𝚗𝚞𝚗𝚐𝚐𝚞 5  𝚍𝚎𝚝𝚒𝚔')}  

    if (isCmd && antiSpam.isFiltered(from) && isGroup) { console.log(color('[ SPM ]', 'white'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
  return reply('𝙹𝚊𝚗𝚐𝚊𝚗 𝚜𝚙𝚊𝚖 𝚊𝚗𝚎 𝚋𝚠𝚊𝚗𝚐 𝚞𝚗𝚝𝚞𝚗𝚐 𝚖𝚊𝚔𝚎 𝚟𝚙𝚜 😑 :(')}
   if (isCmd && !isOwner) antiSpam.addFilter(from)
   if (!publik) {
   if (!isOwner && !mek.key.fromMe) return
   }   
   
   
   
   
////FUNCTION  GAME TEBAK   
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = tebakgambar[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
    slh = "*𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚓𝚊𝚠𝚊𝚋𝚊𝚗 𝙰𝚗𝚍𝚊 𝙱𝚎𝚗𝚊𝚛 😍😍😍*"
    but = [
      { buttonId: `${prefix}tebakgambar`, buttonText: { displayText: '◈𝙰𝙶𝙰𝙸𝙽' }, type: 1 }]
     sendButton(from, slh, '```𝙶𝚊𝚜 𝚕𝚊𝚐𝚒 𝚢𝚞𝚞```', but, troli)
     delete tebakgambar[sender.split('@')[0]]
     fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
      } else {
     slh = "*𝙹𝚊𝚠𝚊𝚋𝚊𝚗 𝚊𝚗𝚍𝚊 𝚜𝚊𝚕𝚊𝚑 𝚝𝚘𝚝𝚊𝚕*"
    but = [
      { buttonId: `${prefix}gambarnyerah`, buttonText: { displayText: '😵 𝙽𝚈𝙴𝚁𝙰𝙷' }, type: 1 }]
     sendButton(from, slh, '```𝙺𝚎𝚜𝚒𝚊𝚗  𝚔𝚎𝚜𝚒𝚊𝚗```', but, troli)
      
      }
       }
// CAK LONTONG
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = caklontong[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
    slh = "*𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚓𝚊𝚠𝚊𝚋𝚊𝚗 𝙰𝚗𝚍𝚊 𝙱𝚎𝚗𝚊𝚛 😍😍😍*"
    but = [
      { buttonId: `${prefix}caklontong`, buttonText: { displayText: '◈𝙰𝙶𝙰𝙸𝙽' }, type: 1 }]
     sendButton(from, slh, '```𝙶𝚊𝚜 𝚕𝚊𝚐𝚒 𝚢𝚞𝚞```', but, troli)
     delete caklontong[sender.split('@')[0]]
     fs.writeFileSync("./database/game/caklontong.json", JSON.stringify(caklontong))
      } else {
     slh = "*𝙹𝚊𝚠𝚊𝚋𝚊𝚗 𝚊𝚗𝚍𝚊 𝚜𝚊𝚕𝚊𝚑 𝚝𝚘𝚝𝚊𝚕*"
    but = [
      { buttonId: `${prefix}lontongnyerah`, buttonText: { displayText: '😵 𝙽𝚈𝙴𝚁𝙰𝙷' }, type: 1 }]
     sendButton(from, slh, '```𝙺𝚎𝚜𝚒𝚊𝚗  𝚔𝚎𝚜𝚒𝚊𝚗```', but, troli)
      
      }
       }
// FAMILY 100
if (family.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = family[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
    slh = "*𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚓𝚊𝚠𝚊𝚋𝚊𝚗 𝙰𝚗𝚍𝚊 𝙱𝚎𝚗𝚊𝚛 😍😍😍*"
    but = [
      { buttonId: `${prefix}family100`, buttonText: { displayText: '◈𝙰𝙶𝙰𝙸𝙽' }, type: 1 }]
     sendButton(from, slh, '```𝙶𝚊𝚜 𝚕𝚊𝚐𝚒 𝚢𝚞𝚞```', but, troli)
     delete family[sender.split('@')[0]]
     fs.writeFileSync("./database/game/family100.json", JSON.stringify(family))
      } else {
     slh = "*𝙹𝚊𝚠𝚊𝚋𝚊𝚗 𝚊𝚗𝚍𝚊 𝚜𝚊𝚕𝚊𝚑 𝚝𝚘𝚝𝚊𝚕*"
    but = [
      { buttonId: `${prefix}familynyerah`, buttonText: { displayText: '😵 𝙽𝚈𝙴𝚁𝙰𝙷' }, type: 1 }]
     sendButton(from, slh, '```𝙺𝚎𝚜𝚒𝚊𝚗  𝚔𝚎𝚜𝚒𝚊𝚗```', but, troli)
      
      }
       }
// TEBAK ANIME
if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = tebakanime[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
     slh = "*𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚓𝚊𝚠𝚊𝚋𝚊𝚗 𝙰𝚗𝚍𝚊 𝙱𝚎𝚗𝚊𝚛 😍😍😍*"
    but = [
      { buttonId: `${prefix}tebakanime`, buttonText: { displayText: '◈𝙰𝙶𝙰𝙸𝙽' }, type: 1 }]
     sendButton(from, slh, '```𝙶𝚊𝚜 𝚕𝚊𝚐𝚒 𝚢𝚞𝚞```', but, troli)
     delete tebakanime[sender.split('@')[0]]
     fs.writeFileSync("./database/game/tebakanime.json", JSON.stringify(tebakanime))
      } else {
     slh = "*𝙹𝚊𝚠𝚊𝚋𝚊𝚗 𝚊𝚗𝚍𝚊 𝚜𝚊𝚕𝚊𝚑 𝚝𝚘𝚝𝚊𝚕*"
    but = [
      { buttonId: `${prefix}animenyerah`, buttonText: { displayText: '😵 𝙽𝚈𝙴𝚁𝙰𝙷' }, type: 1 }]
     sendButton(from, slh, '```𝙺𝚎𝚜𝚒𝚊𝚗  𝚔𝚎𝚜𝚒𝚊𝚗```', but, troli)
      
      }
       }   
//CAK  BTF
if (cakbtf.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = cakbtf[sender.split('@')[0]]
      sial = `{prefix}nyerah`
      if (budy.toLowerCase() == jawaban) {
    slh = "*𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚓𝚊𝚠𝚊𝚋𝚊𝚗 𝙰𝚗𝚍𝚊 𝙱𝚎𝚗𝚊𝚛 😍😍😍*"
    but = [
      { buttonId: `${prefix}cakbtf`, buttonText: { displayText: '◈𝙰𝙶𝙰𝙸𝙽' }, type: 1 }]
     sendButton(from, slh, '```𝙶𝚊𝚜 𝚕𝚊𝚐𝚒 𝚢𝚞𝚞```', but, troli)
     delete caklontong[sender.split('@')[0]]
     fs.writeFileSync("./database/game/cakbtf.json", JSON.stringify(caklontong))
     }else {
   slh = "*𝙹𝚊𝚠𝚊𝚋𝚊𝚗 𝚊𝚗𝚍𝚊 𝚜𝚊𝚕𝚊𝚑 𝚝𝚘𝚝𝚊𝚕*"
    but = [
      { buttonId: `${prefix}cakbtfnyerah`, buttonText: { displayText: '😵 𝙽𝚈𝙴𝚁𝙰𝙷' }, type: 1 }]
     sendButton(from, slh, '```𝙺𝚎𝚜𝚒𝚊𝚗  𝚔𝚎𝚜𝚒𝚊𝚗```', but, troli)
     
      }
       }
       
//ASAAH OTAKMU   
if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = asahotak[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
    slh = "*𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚓𝚊𝚠𝚊𝚋𝚊𝚗 𝙰𝚗𝚍𝚊 𝙱𝚎𝚗𝚊𝚛 😍😍😍*"
    but = [
      { buttonId: `${prefix}asahotak`, buttonText: { displayText: '◈𝙰𝙶𝙰𝙸𝙽' }, type: 1 }]
     sendButton(from, slh, '```𝙶𝚊𝚜 𝚕𝚊𝚐𝚒 𝚢𝚞𝚞```', but, troli)
     delete asahotak[sender.split('@')[0]]
     fs.writeFileSync("./database/game/asahotak.json", JSON.stringify(asahotak))
      } else{
     slh = "*𝙹𝚊𝚠𝚊𝚋𝚊𝚗 𝚊𝚗𝚍𝚊 𝚜𝚊𝚕𝚊𝚑 𝚝𝚘𝚝𝚊𝚕*"
    but = [
      { buttonId: `${prefix}asahnyerah`, buttonText: { displayText: '😵 𝙽𝚈𝙴𝚁𝙰𝙷' }, type: 1 }]
     sendButton(from, slh, '```𝙺𝚎𝚜𝚒𝚊𝚗  𝚔𝚎𝚜𝚒𝚊𝚗```', but, troli)
      
      }
       }
       
       
//SIAPA  AKU     
if (siapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = siapaaku[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
     slh = "*𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚓𝚊𝚠𝚊𝚋𝚊𝚗 𝙰𝚗𝚍𝚊 𝙱𝚎𝚗𝚊𝚛 😍😍😍*"
    but = [
      { buttonId: `${prefix}siapaaku`, buttonText: { displayText: '◈𝙰𝙶𝙰𝙸𝙽' }, type: 1 }]
     sendButton(from, slh, '```𝙶𝚊𝚜 𝚕𝚊𝚐𝚒 𝚢𝚞𝚞```', but, troli)
      delete siapaak[sender.split('@')[0]]
      fs.writeFileSync("./database/game/siapaaku.json", JSON.stringify(siapaku))
   } else {
      slh = "*𝙹𝚊𝚠𝚊𝚋𝚊𝚗 𝚊𝚗𝚍𝚊 𝚜𝚊𝚕𝚊𝚑 𝚝𝚘𝚝𝚊𝚕*"
    but = [
      { buttonId: `${prefix}siapaakunyerah`, buttonText: { displayText: '😵 𝙽𝚈𝙴𝚁𝙰𝙷' }, type: 1 }]
     sendButton(from, slh, '```𝙺𝚎𝚜𝚒𝚊𝚗  𝚔𝚎𝚜𝚒𝚊𝚗```', but, troli)
      
       }
   }
      
//SUSUN KATA
 if (susun.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = susun[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
    slh = "*𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚓𝚊𝚠𝚊𝚋𝚊𝚗 𝙰𝚗𝚍𝚊 𝙱𝚎𝚗𝚊𝚛 😍😍😍*"
    but = [
      { buttonId: `${prefix}susunkata`, buttonText: { displayText: '◈𝙰𝙶𝙰𝙸𝙽' }, type: 1 }]
     sendButton(from, slh, '```𝙶𝚊𝚜 𝚕𝚊𝚐𝚒 𝚢𝚞𝚞```', but, troli)
     delete susun[sender.split('@')[0]]
     fs.writeFileSync("./database/game/susun.json", JSON.stringify(susun))
      } else {
     slh = "*𝙹𝚊𝚠𝚊𝚋𝚊𝚗 𝚊𝚗𝚍𝚊 𝚜𝚊𝚕𝚊𝚑 𝚝𝚘𝚝𝚊𝚕*"
    but = [
      { buttonId: `${prefix}susunnyerah`, buttonText: { displayText: '😵 𝙽𝚈𝙴𝚁𝙰𝙷' }, type: 1 }]
     sendButton(from, slh, '```𝙺𝚎𝚜𝚒𝚊𝚗  𝚔𝚎𝚜𝚒𝚊𝚗```', but, troli)
      
      }
       }
 
       
///TEKATEKI

             
      if (tekateki.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = tekateki[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
    slh = "*𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚓𝚊𝚠𝚊𝚋𝚊𝚗 𝙰𝚗𝚍𝚊 𝙱𝚎𝚗𝚊𝚛 😍😍😍*"
    but = [
      { buttonId: `${prefix}tekateki`, buttonText: { displayText: '◈𝙰𝙶𝙰𝙸𝙽' }, type: 1 }]
     sendButton(from, slh, '```𝙶𝚊𝚜 𝚕𝚊𝚐𝚒 𝚢𝚞𝚞```', but, troli)
     delete tekateki[sender.split('@')[0]]
     fs.writeFileSync("./database/game/tekateki.json", JSON.stringify(tekateki))
      } else {
     slh = "*𝙹𝚊𝚠𝚊𝚋𝚊𝚗 𝚊𝚗𝚍𝚊 𝚜𝚊𝚕𝚊𝚑 𝚝𝚘𝚝𝚊𝚕*"
    but = [
      { buttonId: `${prefix}tekatekinyerah`, buttonText: { displayText: '😵 𝙽𝚈𝙴𝚁𝙰𝙷' }, type: 1 }]
     sendButton(from, slh, '```𝙺𝚎𝚜𝚒𝚊𝚗  𝚔𝚎𝚜𝚒𝚊𝚗```', but, troli)
      
      }
       }
       
       
    
var ampun = await btf.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await btf.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙋𝙘
var chatss = await btf.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await btf.chatRead(jid)
})      
      
      
      
      
      
      
      
      
      

//━━━━━━━━━━━━━━━[ WELCOME TO MENU ]━━━━━━━━━━━━━━━\\     
//Bales oto
switch(is) {
case 'assalamualaikum':
reply('𝚆𝚊𝚊𝚕𝚊𝚒𝚔𝚞𝚖𝚜𝚊𝚕𝚊𝚖')
}
switch(is) {
case 'p':
case 'bg':
case 'bang':
reply('𝙰𝚙𝚎𝚎𝚎.')
}
switch(is) {
case 'tutor':
reply('𝙰𝚙𝚊 𝚜𝚒𝚒.... 𝙺𝚎𝚝𝚒𝚔 *.𝚖𝚎𝚗𝚞* 𝙶𝚒𝚝𝚞 𝚊𝚓𝚊 𝚐𝚊 𝚋𝚒𝚜𝚊')
}
switch(is) {
case 'kontol': case 'bacot':
case 'anjing': case 'anj':
case 'babi': case 'cot':
case 'ngentod': case 'bct':
case 'ajg':
case 'asw':
case 'taek':
case 'asu':
case 'anjir':
case 'memek':
reply(`𝙹𝚊𝚗𝚐𝚊𝚗 𝚃𝚘𝚡𝚒𝚌 𝙻𝚊𝚑 𝙱𝚊𝚗𝚐𝚔𝚎 𝚔𝚊𝚞  😠😠😠😠`)
}         
switch(is) {
case '😄':
case '🙂':
case '😊':
case '😉':
case '😁':
reply('𝙰𝚍𝚊 𝚊𝚙𝚊 𝚗𝚒𝚒  𝚔𝚘 𝚜𝚎𝚗𝚢𝚞𝚖 𝚜𝚎𝚗𝚢𝚞𝚖')
}


//COMMAND       
switch (command) {

case "dadah":
reply(`${pushname}𝙱𝚎𝚛𝚜𝚢𝚞𝚔𝚞𝚛 𝚕𝚞  𝙱𝚎𝚋𝚊𝚗 𝙶𝙲 𝙸𝚕𝚊𝚗𝚐 𝚜𝚊𝚝𝚞`)
break
case "hello":
reply(`${pushname} 𝙶𝚊𝚛𝚊  𝙶𝚊𝚛𝚊 𝚕𝚞  𝙱𝚎𝚋𝚊𝚗 𝙶𝙲 𝙽𝚊𝚖𝚋𝚊𝚑 𝚜𝚊𝚝𝚞`)
break





/*case 'desti':
if(!isOwner) return reply (`𝙴𝚖𝚊𝚗𝚐 𝚜𝚒𝚝𝚞 𝚌𝚘𝚠𝚘𝚗𝚢𝚊 ?`)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotesdilan?apikey=NisaaCantik`)
desti = (anu.result)
arni = `𝚂𝚊𝚢𝚊 𝚍𝚒 𝚜𝚞𝚛𝚞𝚑 𝚖𝚊𝚓𝚒𝚔𝚊𝚗 𝚞𝚗𝚝𝚞𝚔 𝚖𝚎𝚗𝚐𝚐𝚘𝚖𝚋𝚊𝚕 😁\n\n${desti}\n`
btf.sendMessage(`6283842697651@s.whatsapp.net`,`${arni}`, text,{ quoted: mek})
reply(`𝚂𝚞𝚌𝚌𝚎𝚜 𝚐𝚘𝚖𝚋𝚊𝚕 𝚖𝚊𝚣𝚜𝚎𝚎𝚎𝚑`)
break
*/
//+𝙱𝙰𝚂𝙸𝙲 𝙲𝙼𝙳+

case 'sewa':
  tes =`𝙼𝚘𝚗  𝚖𝚊𝚊𝚙 𝚗𝚒 𝚢𝚎 𝚋𝚘𝚝 𝚙𝚛𝚒𝚟𝚊𝚝𝚎 𝚐𝚊 𝚊𝚍𝚊 𝚜𝚎𝚠𝚊  𝚜𝚎𝚠𝚊𝚊𝚗`
  btf.sendMessage(from, tes, text, {quoted: troli})
break  
case 'donasi':
  tes =`𝙿𝚖 𝚘𝚠𝚗𝚎𝚛 𝚏𝚘𝚛 𝚍𝚘𝚗𝚊𝚝𝚒𝚘𝚗`
  btf.sendMessage(from, tes, text, {quoted: troli})
break  
case 'help':
anu = `${ucapanTime}  𝚃𝚎𝚛𝚒𝚖𝚊𝚔𝚊𝚜𝚒𝚑  𝚝𝚎𝚕𝚊𝚑 𝚖𝚎𝚗𝚐𝚐𝚞𝚗𝚊𝚔𝚊𝚗 ${botName} \n\n 𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚎𝚝𝚒𝚔 *.𝚖𝚎𝚗𝚞* 𝚞𝚗𝚝𝚞𝚔 𝚖𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝚏𝚎𝚊𝚝𝚞𝚛𝚎 𝚋𝚘𝚝 𝚒𝚗𝚒.\n𝙹𝚒𝚔𝚊 𝚖𝚎𝚗𝚎𝚖𝚞𝚔𝚊𝚗 𝚋𝚞𝚐 𝚑𝚊𝚛𝚊𝚙 𝚕𝚊𝚙𝚘𝚛 𝚘𝚠𝚗𝚎𝚛 𝚊𝚝𝚊𝚞 𝚐𝚞𝚗𝚊𝚔𝚊𝚗 𝚌𝚖𝚍 *.𝚕𝚊𝚙𝚘𝚛*.\n𝙶𝚞𝚗𝚊𝚔𝚊𝚗 ${botName} 𝙳𝚎𝚗𝚐𝚊𝚗 𝚋𝚒𝚓𝚊𝚔 🤗`
reply(anu)
break
 
 case  'about':  
  
 abt = `*── 「 RULES AND FAQ 」 ──*

𝟷. 𝙹𝚊𝚗𝚐𝚊𝚗 𝚜𝚙𝚊𝚖 𝚋𝚘𝚝. 🙅
𝚜𝚊𝚗𝚔𝚜𝚒: *⚠️ 𝚠𝚊𝚛𝚗/𝚜𝚘𝚏𝚝 𝚋𝚕𝚘𝚌𝚔*

𝟸. 𝙹𝚊𝚗𝚐𝚊𝚗 𝚝𝚎𝚕𝚎𝚙𝚘𝚗 𝚋𝚘𝚝. ☎️
𝚜𝚊𝚗𝚔𝚜𝚒: *❎ 𝚜𝚘𝚏𝚝 𝚋𝚕𝚘𝚌𝚔*

𝟹. 𝙹𝚊𝚗𝚐𝚊𝚗 𝚖𝚎𝚗𝚐𝚎𝚔𝚜𝚙𝚕𝚘𝚒𝚝𝚊𝚜𝚒 𝚋𝚘𝚝.😖
𝚜𝚊𝚗𝚔𝚜𝚒: *‼️ 𝚙𝚎𝚛𝚖𝚊𝚗𝚎𝚗𝚝 𝚋𝚕𝚘𝚌𝚔 ‼️*

🗯️ 𝚋𝚘𝚝 𝚝𝚒𝚍𝚊𝚔 𝚊𝚝𝚊𝚞 𝚕𝚊𝚖𝚋𝚊𝚝 𝚖𝚎𝚛𝚎𝚜𝚙𝚘𝚗 ?
➡️ 𝚖𝚞𝚗𝚐𝚔𝚒𝚗 𝚍𝚒𝚙𝚎𝚗𝚐𝚊𝚛𝚞𝚑𝚒 𝚘𝚕𝚎𝚑 𝚓𝚊𝚛𝚒𝚗𝚐𝚊𝚗, 𝚜𝚒𝚐𝚗𝚊𝚕, 𝚋𝚊𝚗𝚗𝚎𝚍 𝚘𝚕𝚎𝚑 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝚍𝚊𝚗 𝚋𝚎𝚋𝚎𝚛𝚊𝚙𝚊 𝚊𝚜𝚊𝚕𝚊𝚗. 𝚝𝚎𝚝𝚊𝚙 𝚙𝚊𝚝𝚞𝚑𝚒 𝚛𝚞𝚕𝚎𝚜‼️

🗯️ 𝚍𝚒𝚖𝚊𝚗𝚊 𝚜𝚊𝚢𝚊 𝚋𝚒𝚜𝚊 𝚖𝚎𝚗𝚍𝚊𝚙𝚊𝚝𝚔𝚊𝚗 𝚜𝚌𝚛𝚒𝚙𝚝 𝚍𝚊𝚛𝚒 𝚋𝚘𝚝 𝚒𝚗𝚒 ?
➡️ 𝚜𝚌𝚛𝚒𝚙𝚝 𝚒𝚗𝚒 𝚖𝚊𝚜𝚒𝚑 𝚙𝚛𝚒𝚟𝚊𝚝𝚎 𝚍𝚊𝚗 𝚝𝚒𝚍𝚊𝚔 𝚙𝚎𝚛𝚗𝚊𝚑 𝚍𝚒𝚙𝚎𝚛𝚓𝚞𝚊𝚕 𝚋𝚎𝚕𝚒𝚔𝚊𝚗 ,𝚋𝚒𝚓𝚊𝚔𝚕𝚊𝚑 𝚍𝚊𝚕𝚊𝚖 𝚖𝚎𝚗𝚐𝚎𝚝𝚊𝚑𝚞𝚒 𝚙𝚎𝚗𝚒𝚙𝚞.

🗯️ 𝚋𝚘𝚕𝚎𝚑 𝚜𝚊𝚢𝚊 𝚖𝚎𝚗𝚊𝚖𝚋𝚊𝚑 𝚔𝚎 𝚐𝚛𝚞𝚙?
➡️ 𝚞𝚗𝚝𝚞𝚔 𝚜𝚎𝚖𝚎𝚗𝚝𝚊𝚛𝚊 𝚋𝚘𝚝 𝚍𝚊𝚕𝚊𝚖 𝚜𝚝𝚊𝚝𝚞𝚜 𝚏𝚛𝚎𝚎 𝚝𝚘 𝚊𝚍𝚍.

🗯️ 𝚙𝚛𝚎𝚏𝚒𝚡𝚗𝚢𝚊 𝚊𝚙𝚊 𝚢𝚊?
➡️ 𝚋𝚘𝚝 𝚒𝚗𝚒 𝚖𝚎𝚗𝚐𝚐𝚞𝚗𝚊𝚔𝚊𝚗 𝚖𝚞𝚕𝚝𝚒 𝚙𝚛𝚎𝚏𝚒𝚡. 𝚋𝚎𝚛𝚊𝚛𝚝𝚒 𝚊𝚗𝚍𝚊 𝚋𝚒𝚜𝚊 𝚖𝚎𝚗𝚐𝚐𝚞𝚗𝚊𝚔𝚊𝚗 𝚙𝚛𝚎𝚏𝚒𝚡 #, . , 𝚍𝚊𝚗 𝚙𝚛𝚎𝚏𝚒𝚡 𝚠𝚊𝚓𝚊𝚛 𝚕𝚊𝚒𝚗𝚗𝚢𝚊.

🗯️ 𝚔𝚊𝚔, 𝚔𝚘𝚔 𝚜𝚢𝚊𝚊 𝚌𝚑𝚊𝚝 𝚘𝚠𝚗𝚎𝚛 𝚝𝚒𝚍𝚊𝚔 𝚍𝚒𝚛𝚎𝚜𝚙𝚘𝚗?
➡️ 𝚘𝚠𝚗𝚎𝚛 𝚑𝚊𝚗𝚢𝚊 𝚖𝚎𝚛𝚎𝚜𝚙𝚘𝚗 𝚙𝚎𝚛𝚝𝚊𝚗𝚢𝚊𝚊𝚗 𝚜𝚎𝚙𝚞𝚝𝚊𝚛 𝚋𝚘𝚝 𝚍𝚊𝚗 𝚔𝚎𝚗𝚍𝚊𝚕𝚊 𝚎𝚛𝚘𝚛, 𝚝𝚒𝚍𝚊𝚔 𝚞𝚗𝚝𝚞𝚔 𝚔𝚎𝚗𝚊𝚕𝚊𝚗 𝚊𝚝𝚊𝚞𝚙𝚞𝚗 𝚖𝚎𝚗𝚐𝚎𝚖𝚒𝚜 𝚜𝚌𝚛𝚒𝚙𝚝.


𝚓𝚒𝚔𝚊 𝚜𝚞𝚍𝚊𝚑 𝚍𝚒𝚙𝚊𝚑𝚊𝚖𝚒 𝚛𝚞𝚕𝚎𝚜-𝚗𝚢𝚊, 𝚜𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚎𝚝𝚒𝚔 *.𝚖𝚎𝚗𝚞* 𝚞𝚗𝚝𝚞𝚔 𝚖𝚎𝚖𝚞𝚕𝚊𝚒!

⚠️ 𝚜𝚎𝚐𝚊𝚕𝚊 𝚔𝚎𝚋𝚒𝚓𝚊𝚔𝚊𝚗 𝚍𝚊𝚗 𝚔𝚎𝚝𝚎𝚗𝚝𝚞𝚊𝚗 ${botName} 𝚍𝚒 𝚙𝚎𝚐𝚊𝚗𝚐 𝚘𝚕𝚎𝚑 𝚘𝚠𝚗𝚎𝚛 𝚍𝚊𝚗 𝚜𝚎𝚐𝚊𝚕𝚊 𝚙𝚎𝚛𝚞𝚋𝚊𝚑𝚊𝚗 𝚔𝚎𝚋𝚒𝚓𝚊𝚔𝚊𝚗, 𝚜𝚎𝚠𝚊𝚔𝚝𝚞 𝚠𝚊𝚔𝚝𝚞 𝚘𝚠𝚗𝚎𝚛 𝚋𝚎𝚛𝚑𝚊𝚔 𝚖𝚎𝚗𝚌𝚊𝚋𝚞𝚝, 𝚖𝚎𝚖𝚋𝚕𝚘𝚔𝚒𝚛 𝚞𝚜𝚎𝚛(*﹏*) 

♥️ 𝚝𝚎𝚛𝚒𝚖𝚊𝚔𝚊𝚜𝚒𝚑 𝚞𝚗𝚝𝚞𝚔 𝚔𝚊𝚕𝚒𝚊𝚗 𝚞𝚜𝚎𝚛 𝚛𝚊𝚖𝚊𝚑 𝚍𝚊𝚗 𝚋𝚎𝚋𝚎𝚛𝚊𝚙𝚊 𝚘𝚛𝚊𝚗𝚐 𝚢𝚐 𝚒𝚔𝚞𝚝 𝚖𝚎𝚖𝚋𝚊𝚗𝚝𝚞 𝚓𝚞𝚐𝚊 𝚍𝚊𝚕𝚊𝚖 𝚙𝚛𝚘𝚓𝚎𝚌𝚝 𝚙𝚎𝚖𝚋𝚞𝚊𝚝𝚊𝚗 𝚋𝚞𝚝𝚝𝚎𝚛𝚙𝚕𝚢 𝚋𝚘𝚝`  
    
   but = [
  { buttonId: `!owner`, buttonText: { displayText: '♨ 𝙰𝚄𝚃𝙷𝙾𝚁' }, type: 1 },
  { buttonId: `!infosc`, buttonText: { displayText: '⏍ 𝙸𝙽𝙵𝙾 𝚂𝙲' }, type: 1 }
  ]
  sendButLocation(from, abt, `\n${p}${wib} || ${tanggal()}${p}`, tamnel, but, {quoted: mek})
  break  
  
case  'infosc':
case 'sc':
case 'script':
case 'source':
case 'sourcecode':
tet =`
${botName} 𝙼𝚎𝚗𝚐𝚐𝚞𝚗𝚊𝚔𝚊𝚗  𝚋𝚎𝚋𝚎𝚛𝚊𝚙𝚊 𝚏𝚎𝚊𝚝𝚞𝚛𝚎 𝚍𝚊𝚛𝚒  𝚋𝚘𝚝 𝚠𝚊 𝚜𝚌  𝚍𝚎𝚟.

𝚂𝚙𝚎𝚌𝚒𝚊𝚕 𝚃𝚑𝚊𝚗𝚔𝚜 𝚃𝚘 :\n

✍︎ 𝙵𝚎𝚋𝚛𝚒𝚊𝚗𝚜𝚢𝚊𝚑
✍︎ 𝙺𝚒𝚗𝚐  𝙾𝚏  𝚋𝚎𝚊𝚛
✍︎ 𝙷𝚎𝚕𝚐𝚊 𝚉𝚎𝚡
✍︎ 𝙺𝚞𝚛𝚛𝚇𝚍
✍︎ 𝙻𝚎𝚡𝚡𝚢 𝙾𝚏𝚌
✍︎ 𝙳𝚑𝚊𝚗𝚒𝙱𝚘𝚝
✍︎ 𝚇𝚝𝚎𝚊𝚖
✍︎ 𝚁𝚒𝚖𝚞𝚛𝚞
✍︎ 𝙰𝚛𝚒𝚏𝚒𝚁𝚊𝚣𝚊𝚚

_𝙳𝚊𝚗 𝚙𝚎𝚗𝚢𝚎𝚍𝚒𝚊 𝚏𝚒𝚝𝚞𝚛  𝚛𝚎𝚜𝚝 𝚊𝚙𝚒_\n
𝙵𝚛𝚎𝚎 𝚛𝚎𝚜𝚝 𝚊𝚙𝚒 :
https://apibtf.herokulapp.com/

`
but = [
  { buttonId: `!menu`, buttonText: { displayText: ' ⎙ 𝙼𝙴𝙽𝚄' }, type: 1 }]
  sendButLocation(from, `${tet}`, `\n${p}${wib} || ${tanggal()}${p}`, tamnel, but, {quoted: mek})
  break   

  	 

case 'ping':
  cmping = `${botName} 𝚖𝚎𝚛𝚎𝚜𝚙𝚘𝚗 𝚍𝚊𝚕𝚊𝚖  ${latensi.toFixed(4)} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜`  
  but = [{ buttonId: `!hosting`, buttonText: { displayText: '𝙷𝙾𝚂𝚃𝙸𝙽𝙶 𝙱𝙾𝚃' }, type: 1 },
  { buttonId: `!runt`, buttonText: { displayText: '𝚁𝚄𝙽𝚃𝙸𝙼𝙴 𝙱𝙾𝚃' }, type: 1 }]
  sendButton(from, cmping, '𝙸𝚗𝚏𝚘 𝙿𝚒𝚗𝚐', but)
  break  

case 'hosting':
exec(`neofetch --stdout`, (error, stdout, stderr) => {
const child = stdout.toString('utf-8')
const teks = child.replace(/Memory:/, "Ram:")
  cmhst =`${teks}`
  but = [  { buttonId: `!runt`, buttonText: { displayText: '𝚁𝚄𝙽𝚃𝙸𝙼𝙴 𝙱𝙾𝚃' }, type: 1 },{ buttonId: `!menu`, buttonText: { displayText: '𝙼𝙴𝙽𝚄' }, type: 1 }]
  sendButton(from, cmhst, '𝙸𝚗𝚏𝚘 𝙷𝚘𝚜𝚝𝚒𝚗𝚐', but)
}
)
  break  

case 'runt':
const timestamp = speed();
run = process.uptime();
 cmrunt=`${botName} 𝙰𝚔𝚝𝚒𝚏 𝚂𝚎𝚕𝚊𝚖𝚊 ${runtime(run)}`
  but = [{ buttonId: `!menu`, buttonText: { displayText: '𝙼𝙴𝙽𝚄' }, type: 1 }]
  sendButton(from, cmrunt, '𝙸𝚗𝚏𝚘 𝚁𝚞𝚗𝚝𝚒𝚖𝚎', but)
  break  







//+𝙼𝙴𝙽𝚄+
case 'menu': case 'command':
  if (isBanned) return reply(mess.banned)
  let getip = await fetchJson(`http://api.ipify.org/?format=json`)   

run = process.uptime();
listMsg = {
buttonText: '𝙻𝙸𝚂𝚃 𝙼𝙴𝙽𝚄',
description: `
${ucapanTime}\n
۞ 𝚂𝚊𝚊𝚝 𝙸𝚗𝚒 𝙿𝚞𝚔𝚞𝚕 *${wib}* 𝚆𝙸𝙱.
۞ 𝙷𝚊𝚛𝚒 *${thisDay}* / *${tanggal()}*.
۞ 𝙼𝚎𝚖𝚊𝚜𝚞𝚔𝚒 *${tanggalislam}*.
━━━━━━━━━━━━━━━━━━━━━━
𝚂𝚝𝚊𝚝𝚞𝚜 𝙰𝚗𝚍𝚊 𝚜𝚊𝚊𝚝 𝚒𝚗𝚒 *${premi}*
𝚂𝚊𝚊𝚝 𝙸𝚗𝚒 𝙰𝚗𝚍𝚊 𝙼𝚎𝚖𝚙𝚞𝚗𝚢𝚊𝚒 :
*ᑀ* ${isOwner ? '𝚄𝚗𝚕𝚒𝚖𝚒𝚝𝚎𝚍' : isPremium ? '𝚄𝚗𝚕𝚒𝚖𝚒𝚝𝚎𝚍' : getLimit(sender, limitCount, limit)}  𝙱𝚘𝚝 𝙻𝚒𝚖𝚒𝚝
*ᑀ* ${isOwner ? '𝚄𝚗𝚕𝚒𝚖𝚒𝚝𝚎𝚍' : cekGLimit(sender, gcount, glimit)}  𝙶𝚊𝚖𝚎 𝙻𝚒𝚖𝚒𝚝
━━━━━━━━━━━━━━━━━━━━━━
${botName} 𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚜𝚒 :
*᚛* 𝙱𝚘𝚝 𝚍𝚒 𝙷𝚘𝚜𝚝𝚒𝚗𝚐 𝚘𝚕𝚎𝚑 *${os.hostname()}*
*᚛* 𝙱𝚘𝚝 𝚍𝚒𝚖𝚒𝚕𝚒𝚔𝚒 𝚘𝚕𝚎𝚑 *𝙼𝚊𝚣𝚃𝚊𝚖𝚟𝚊𝚗*
*᚛* 𝙱𝚘𝚝 𝙾𝚗𝚕𝚒𝚗𝚎 𝚂𝚎𝚕𝚊𝚖𝚊 *${runtime(run)}* [ *${latensi.toFixed(2)}/𝚖𝚜*]
━━━━━━━━━━━━━━━━━━━━━━
_𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝙿𝚒𝚕𝚒𝚑 𝚖𝚎𝚗𝚞 𝚢𝚊𝚗𝚐 𝚝𝚎𝚛𝚜𝚎𝚍𝚒𝚊_️`,
footerText: `© ${botName}`,
sections: [
{
"title": `𝙱𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢 𝙱𝚘𝚝 𝙵𝚎𝚊𝚝𝚞𝚛𝚎𝚜`,
rows: [
{
"title": "「❣️ 𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄」",
"description": ` Fitur Khusus  owner`,
"rowId": `${prefix}ownermenu`
},
{
"title": "「💫 𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄」",
"description": ` Fitur GC`,
"rowId": `${prefix}gcmenu`
},
{
"title": "「⤵️ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄」",
"description": ` Fitur Download`,
"rowId": `${prefix}dlmenu`
},
{
"title": "「🖨️ 𝙼𝙰𝙺𝙴𝚁 𝙼𝙴𝙽𝚄」",
"description": ` Fitur Create Logo`,
"rowId": `${prefix}maker`
},
{
"title": "「⚙️ 𝚃𝙾𝙾𝙻𝚂 𝙼𝙴𝙽𝚄」",
"description": ` Fitur Tools Bot`,
"rowId": `${prefix}toolmenu`
},
{
"title": "「🎢 𝚁𝙿𝙶 𝙼𝙴𝙽𝚄」",
"description": ` Fitur Rpg Game`,
"rowId": `${prefix}rpgmenu`
},
{
"title": "「🔫 𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄」",
"description": ` Fitur Game`,
"rowId": `${prefix}gamemenu`
},
{
"title": "「💩 𝙵𝚄𝙽 𝙼𝙴𝙽𝚄」",
"description": ` Fitur Fun For  Happy`,
"rowId": `${prefix}funmenu`
},
{
"title": "「🔎🔍 𝚂𝙴𝙰𝚁𝙲𝙷 𝙼𝙴𝙽𝚄」",
"description": ` Fitur Pencarian`,
"rowId": `${prefix}carimenu`
},
{
"title": "「💻 𝙼𝙴𝙳𝙸𝙰 𝙼𝙴𝙽𝚄」",
"description": ` Fitur Media`,
"rowId": `${prefix}mediamenu`
},
{
"title": "「📸 𝙸𝙼𝙰𝙶𝙴 𝙼𝙴𝙽𝚄」",
"description": ` Fitur Random Image`,
"rowId": `${prefix}imagemenu`
},
{
"title": "「📚 ️𝙴𝙳𝚄 𝙼𝙴𝙽𝚄」",
"description": ` Fitur Edukasi`,
"rowId": `${prefix}edukasimenu`
},
{
"title": "「🕋 𝙸𝚂𝙻𝙰𝙼 𝙼𝙴𝙽𝚄」",
"description": ` Fitur Islamic`,
"rowId": `${prefix}islammenu`
},
{
"title": "「🛏️ 𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄」",
"description": ` Fitur Anime`,
"rowId": `${prefix}wibumenu`
},
{
"title": "「💾 𝚂𝙰𝚅𝙴 𝙼𝙴𝙽𝚄」",
"description": ` Fitur  Save Di DB`,
"rowId": `${prefix}simpanmenu`
},
{
"title": "「💽 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝙼𝙴𝙽𝚄」",
"description": ` Fitur Convert`,
"rowId": `${prefix}convmenu`
},
{
"title": "「🗝️ 𝙻𝙸𝙼𝙸𝚃 𝙼𝙴𝙽𝚄」",
"description": ` Fitur Limit Bot`,
"rowId": `${prefix}limitmenu`
},
{
"title": "「📑️ 𝙸𝙽𝙵𝙾 𝙼𝙴𝙽𝚄」",
"description": ` Fitur Information`,
"rowId": `${prefix}infomenu`
},
{
"title": "️「⚠️ 𝙰𝙱𝙾𝚄𝚃」",
"description": `𝚃𝙾𝚂 ${botName}`,
"rowId": `${prefix}about`
}


]
}],
listType: 1
}
 btf.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mfgif})   
  
 break

  

case 'ownermenu':
pp = await  getBuffer(`https://l.top4top.io/p_22500sao81.jpg`)
btf.sendMessage(from, { contentText: `${ownermenu(prefix, botName)}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'toolmenu':
pp = await getBuffer(`https://b.top4top.io/p_225035oxy1.jpg`)
btf.sendMessage(from, { contentText: `${toolsmenu(prefix, botName)}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'rpgmenu':
pp = await getBuffer(`https://c.top4top.io/p_2250nuamo1.jpg`)
btf.sendMessage(from, { contentText: `${rpgmenu(prefix, botName)}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break


case 'limitmenu':
pp = await getBuffer(`https://h.top4top.io/p_2250ltmws1.jpg`)
btf.sendMessage(from, { contentText: `${limitmenu(prefix, botName)}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'wibumenu':
pp = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXCvbtF-Il4K0KaIZAVHtgkWM88-zGg_QGw&usqp=CAU`)
btf.sendMessage(from, { contentText: `${wibumenu(prefix, botName)}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'carimenu':
pp = await getBuffer(`https://a.top4top.io/p_2250ubuk91.jpg`)
btf.sendMessage(from, { contentText: `${searchmenu(prefix, botName)}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'dlmenu':
pp  = await getBuffer(`https://j.top4top.io/p_2250ani3i1.jpg`)
btf.sendMessage(from, { contentText: `${dlmenu(prefix, botName)}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break


case 'mediamenu':
pp = await  getBuffer(`https://i.top4top.io/p_2250y7r0u1.jpg`)
btf.sendMessage(from, { contentText: `${mediamenu(prefix, botName)}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'katamenu':
pp =  await getBuffer(`https://g.top4top.io/p_2250n636p1.jpg`)
btf.sendMessage(from, { contentText: `${katamenu(prefix, botName)}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'gamemenu':
lgo = await getBuffer(`https://e.top4top.io/p_2250joemq1.jpg`)
btf.sendMessage(from, { contentText: `${gamemenu(prefix, botName)}`, footerText: `*${tanggal()}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: lgo, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'funmenu':
lgo = await getBuffer(`https://k.top4top.io/p_2250nt9hq1.jpg`)
btf.sendMessage(from, { contentText: `${funmenu(prefix, botName)}`, footerText: `${tanggal()}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: lgo, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'ceritamenu':
lgo = await getBuffer(`https://f.top4top.io/p_2250kir3u1.jpg`)
btf.sendMessage(from, { contentText: `${ceritamenu(prefix, botName)}`, footerText: `*${tanggal()}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: lgo, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break


case 'gcmenu':
pp = await getBuffer(`https://k.top4top.io/p_2250hpqrs1.jpg`)
btf.sendMessage(from, { contentText: `${gcmenu(prefix, botName)}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'simpanmenu':
pp = await getBuffer(`https://i.top4top.io/p_225081i7o1.jpg`)
btf.sendMessage(from, { contentText: `${savemenu(prefix, botName)}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break


case 'convmenu':
pp  = await getBuffer(`https://g.top4top.io/p_2250k3nrd1.jpg`)
btf.sendMessage(from, { contentText: `${convertmenu(prefix, botName)}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'maker':
lgo = await getBuffer(`https://a.top4top.io/p_2250j4e2u1.jpg`)
btf.sendMessage(from, { contentText: `${makermenu(prefix, botName)}`, footerText: `*${tanggal()}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: lgo, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  
break  
  
case 'edukasimenu':
pp = await getBuffer(`https://telegra.ph/file/f5a00fe0bc153c00b50d6.jpg`)
btf.sendMessage(from, { contentText: `${edumenu(prefix, botName)}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break  

case 'imagemenu':
pp = await getBuffer(`https://g.top4top.io/p_2250efi5l1.jpg`)
btf.sendMessage(from, { contentText: `${imagemenu(prefix, botName)}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break   
  
case 'islammenu':
pp = await getBuffer(`https://i.top4top.io/p_2250s3urx1.jpg`)
btf.sendMessage(from, { contentText: `${islammenu(prefix, botName)}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'infomenu':
pp = await getBuffer(`https://i.top4top.io/p_2250gburc1.jpg`)
btf.sendMessage(from, { contentText: `${infomenu(prefix, botName)}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

//+𝙰𝙺𝙷𝙸𝚁 𝙼𝙴𝙽𝚄+

case 'karomahwali':
listMsg = {
buttonText: '𝙺𝙰𝚁𝙾𝙼𝙰𝙷 𝚆𝙰𝙻𝙸',
description: `
𝙱𝚎𝚛𝚒𝚔𝚞𝚝 𝙻𝚒𝚜𝚝 𝙺𝚊𝚛𝚘𝚖𝚊𝚑 𝚙𝚊𝚛𝚊 𝚆𝚊𝚕𝚒 𝙰𝚕𝚕𝚊𝚑`,
footerText: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚙𝚒𝚕𝚒𝚑  𝚆𝚊𝚕𝚒*`,
sections: [
{
"title": `𝙱𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢 𝙱𝚘𝚝 𝙵𝚎𝚊𝚝𝚞𝚛𝚎𝚜`,
rows: [
{
"title": "「♡ 𝚂𝚈𝙴𝙺𝙷 𝙰𝙱𝙳𝚄𝙻 𝚀𝙰𝙳𝙸𝚁」",
"description": `𝙺𝚊𝚛𝚘𝚖𝚊𝚑 𝙰𝚋𝚍𝚞𝚕 𝚀𝚊𝚍𝚒𝚛`,
"rowId": `${prefix}qadir`
},
{
"title": "「♡ 𝚂𝚄𝙽𝙰𝙽  𝙺𝙰𝙻𝙸𝙹𝙰𝙶𝙰」",
"description": `𝙺𝚊𝚛𝚘𝚖𝚊𝚑 𝚂𝚞𝚗𝚊𝚗 𝙺𝚊𝚕𝚒𝚓𝚊𝚐𝚊`,
"rowId": `${prefix}kalijaga`
},
{
"title": "「♡ 𝚂𝚄𝙽𝙰𝙽 𝙰𝙼𝙿𝙴𝙻」",
"description": `𝙺𝚊𝚛𝚘𝚖𝚊𝚑 𝚂𝚞𝚗𝚊𝚗 𝙰𝚖𝚙𝚎𝚕 `,
"rowId": `${prefix}ampel`
},
{
"title": "「♡ 𝚂𝚄𝙽𝙰𝙽 𝙱𝙾𝙽𝙰𝙽𝙶」",
"description": `𝙺𝚊𝚛𝚘𝚖𝚊𝚑 𝚂𝚞𝚗𝚊𝚗 𝙱𝚘𝚗𝚊𝚗𝚐`,
"rowId": `${prefix}bonang`
}
]
}],
listType: 1
}
 btf.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:troli})     
    break

//+𝙾𝚆𝙽𝙴𝚁 𝙲𝙼𝙳+
case 'stopqr':
if (isGroup) return reply(`𝙳𝚒 𝙲𝚑𝚊𝚝 𝙿𝚛𝚒𝚋𝚊𝚍𝚒 𝙿𝚊𝚘𝚔`)
exec(`node index.js`)
reply(`𝚂𝚞𝚌𝚌𝚎𝚜 𝚜𝚝𝚘𝚙 𝚀𝚛 𝙶𝚎𝚗𝚎𝚛𝚊𝚝𝚎𝚍`)
break
case 'restart':
  if (!isOwner) return reply(mess.only.owner)
  reply(mess.wait)
  exec(`node index`)
  reply('_𝚂𝚞𝚌𝚌𝚎𝚜 𝚁𝙴𝚂𝚃𝙰𝚁𝚃 𝙱𝚘𝚝_')
  break   			  
case 'bc2': 
  if (!isOwner) return reply(mess.only.owner) 
  if (args.length < 1) return reply('.......')
  anu = await btf.chats.all()
  if (isMedia && !mek.message.videoMessage || isQuotedImage) {
  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  buff = await btf.downloadMediaMessage(encmedia)
  for (let _ of anu) {
  btf.sendMessage(_.jid, buff, image, {caption: `❮ PESAN ❯\n\n${body.slice(4)}`})
  }
  reply(`*_𝚂𝚞𝚌𝚌𝚎𝚜  𝙱𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝_*`)
  } else {
  for (let _ of anu) {
  sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
  }
  reply(`*_𝚂𝚞𝚌𝚌𝚎𝚜  𝙱𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝_*`)
  }
  break	   

case 'addprem':  case 'addpremium':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)    
  adprem = `${args[0].replace('@','')}@s.whatsapp.net`
  prem.push(adprem)
  fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
  reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
 break				
case 'dellprem':  case 'delpremium':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)    
  delp = body.slice(10)
  prem.splice(`${delp}@s.whatsapp.net`, 1)
  fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
  reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
 break
case 'listprem': case 'listpremium': case 'premlist':
 // if (!isPremium && !isOwner) return reply(mess.only.owner)
  teks = `*List Premium:*\n\n`
  for (let manikgans of prem) {
  teks += `- ${manikgans}\n`
  }
  teks += `\n*Total : ${prem.length}*`
  btf.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": prem } })
 break

case 'addtruth':
  if (!isOwner) return reply(mess.only.owner)
  if (args.length < 1) return reply('Textnya mana?')
  _truth.push(v)
  fs.writeFileSync('./database/game/truth.json', JSON.stringify(_truth))
  reply(`Done add ${v} di fitur truth`)
 break
case 'adddare':
  if (!isOwner) return reply(mess.only.owner)
  if (args.length < 1) return reply('Textnya mana?')
  _dare.push(v)
  fs.writeFileSync('./database/game/dare.json', JSON.stringify(_dare))
  reply(`Done add ${v} di fitur dare`)
 break     	  	

case 'addbadword': case 'addbd':    
  if (!isOwner) return reply(mess.only.owner)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
  bad.push(v)
  fs.writeFileSync('./database/bot/bad.json', JSON.stringify(bad))
  reply('Success Menambahkan Bad Word!')
  break
case 'delbadword': case 'deldb':
  if (!isOwner) return reply(mess.only.owner)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)  
  bad.splice(v)
  fs.writeFileSync('./database/bot/bad.json', JSON.stringify(bad))
  reply('Success Menghapus BAD WORD!')
  break 
case 'listbadword': case 'lb':
  if (!isOwner) return reply(mess.only.owner)
  let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
  for (let i of bad) {
  lbw += `> ${i.replace(bad)}\n`
  }
  await reply(lbw)
  break 
case 'nobad':
  if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
  if (args.length < 1) return reply('lel🗿')
  if (args[0] === 'enable') {
  if (isBadWord) return reply(`*fitur BadWord sudah aktif tadi!!*`)
  badword.push(from)
  fs.writeFileSync('./database/bot/badword.json', JSON.stringify(badword))
  reply(`badword is enable`)
  } else if (args[0] === 'disable') {
  badword.splice(from, 1)
  fs.writeFileSync('./database/bot/badword.json', JSON.stringify(badword))
  reply(`badword is disable`)
  } else {
  reply('dah')
  }
 break
case "addcmd":
case "setcmd":
  if (isQuotedSticker) {
  if (!v) return reply(`Penggunaan : ${command} cmdnya dan Reply Stickernya`);
  if (!isOwner) return reply(mess.only.owner)
  var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
  addCmd(kodenya, v);
  reply("Done!");
  } else {
  reply("tag stickenya");
  }
  break;
 case "delcmd":
  if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`);
  if (!isOwner) return reply(mess.only.owner)
  var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
  _scommand.splice(getCommandPosition(kodenya), 1);
  fs.writeFileSync("./database/group/scommand.json", JSON.stringify(_scommand));
  reply("Done!");
  break;
 case "listcmd":
  if (!isOwner) return reply(mess.only.owner) 
  teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
  cemde = [];
  for (let i of _scommand) {
  cemde.push(i.id);
  teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
  }
  mentions(teksnyee, cemde, true);
  break;
  
case 'out': case  'leave':
if (!isOwner) return reply(mess.only.owner)
if (!isGroup) return reply(mess.only.group)
setTimeout(() => {
btf.groupLeave(from)
}, 2000)
setTimeout(() => {
reply('𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚃𝚒𝚗𝚐𝚐𝚊𝚕 𝚂𝚎𝚖𝚞𝚊𝚊.......')
}, 0)
break     

case 'leaveall':
if (!isOwner) return reply(mess.only.owner)
let totalgroup = btf.chats.array.filter(u =>u.jid.endsWith('@g.us')).map(u => u.jid)
for (let id of totalgroup) {
sendMess(id, '𝙳𝚊𝚍𝚊𝚑 𝚂𝚎𝚖𝚞𝚊𝚊𝚗𝚢𝚊𝚊  .........', null)
await sleep(3000)
btf.groupLeave(id)
}
break
         
 
case 'hacked':
  if (!isOwner) return reply(mess.only.owner)
  if (!isGroup) return reply(mess.only.group)
  if (args.length < 1) return reply('Teksnya?')
  reply('Otw Hack')
  tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
  btf.updateProfilePicture (from, tessgc)
  btf.groupUpdateSubject(from, `HACKED BY ${v}`)
  btf.groupUpdateDescription(from, monospace(`_${pushname} telah meretas grup ini_\n_Diretas Pada ${wib} ${tanggal()}_\n*Tiada Lord Selain Butterfly!!*`))     
  btf.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
  break  
case "term":
  if (!isOwner) return reply(mess.only.owner)
  if (!v) return reply('_-');
  exec(v, (err, stdout) => {
  if (err) return reply(`~ ${err}`);
  if (stdout) {
  reply(stdout);
  }
  });
  break;
case 'ban':
  if (!isOwner) return reply(mess.only.owner)
  if (!v) return reply(`𝚃𝚊𝚐 𝚊𝚝𝚊𝚞 𝚝𝚞𝚕𝚒𝚜 𝙽𝚘𝚖𝚘𝚛 𝚢𝚊𝚗𝚐 𝚊𝚔𝚊𝚗 𝚍𝚒 𝚋𝚊𝚗𝚗𝚎𝚍`)
  bnnd = body.slice(5)
  ban.push(`${bnnd}@s.whatsapp.net`)
  fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
  reply(`*${bnnd}*\n_Telah Berhasil Dibanned ✓_`)
  break
case 'unban':
  if (!isOwner) return reply(mess.only.ownerB)
  if (!v) return reply(`𝚃𝚊𝚐 𝚊𝚝𝚊𝚞 𝚝𝚞𝚕𝚒𝚜 𝙽𝚘𝚖𝚘𝚛 𝚢𝚊𝚗𝚐 𝚊𝚔𝚊𝚗 𝚍𝚒 𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍`)
  bnnd = body.slice(7)
  ban.splice(`${bnnd}@s.whatsapp.ne5t`)
  fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
  reply(`*@${bnnd}*\n_Telah Sukses Diunbanned ✓_`)
  break
  
case 'group': case 'gc': case 'grup':     	 
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)  
  menu = `𝙳𝚒𝚋𝚞𝚔𝚊 𝚊𝚙𝚊 𝚝𝚞𝚝𝚞𝚙 𝚗𝚒𝚌𝚑`
  but = [
   { buttonId: `!opengc`, buttonText: { displayText: '𝙾𝙿𝙴𝙽️' }, type: 1 },
   { buttonId: `!closegc`, buttonText: { displayText: '𝙲𝙻𝙾𝚂𝙴' }, type: 1 }]
  sendButton(from, menu, '𝙲𝚛𝚎𝚊𝚝𝚎𝚍 𝙱𝚢 𝙱𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢', but, troli)
break   

case 'public':
   if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  publik = true
  reply('√ 𝚂𝚄𝙲𝙲𝙴𝚂 𝙼𝚎𝚗𝚐𝚞𝚋𝚊𝚑 𝚂𝚎𝚕𝚏 𝚝𝚘 𝙿𝚞𝚋𝚕𝚒𝚌')
  break
	case 'self':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  publik = false
  reply('√ 𝚂𝚄𝙲𝙲𝙴𝚂 𝙼𝚎𝚗𝚐𝚞𝚋𝚊𝚑 𝙿𝚞𝚋𝚕𝚒𝚌 𝚝𝚘 𝚜𝚎𝚕𝚏')
  break
case 'setthumb':
  if (!isOwner) return reply(mess.only.owner)
  if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
  boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  delb = await btf.downloadMediaMessage(boij)
  fs.writeFileSync(`./database/media/btfbot.jpg`, delb)
  reply('√ 𝚂𝚄𝙲𝙲𝙴𝚂 ')
  } else {
  reply(`Kirim gambar dengan caption ${prefix}sethumb`)
  }
  break
case 'settroli':
   if  (!isOwner) return  reply(mess.only.owner)
  if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
  boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  delb = await btf.downloadMediaMessage(boij)
  fs.writeFileSync(`./database/media/troli.jpg`, delb)
  reply('√ 𝚂𝚄𝙲𝙲𝙴𝚂 ')
  } else {
  reply(`Kirim gambar dengan caption ${prefix}settroli`)
  }
  break

case 'bc': case 'broadcast':
  if (!isOwner) return  reply(mess.only.owner)
  if (args.length < 1) return reply('teks?')
  anu = await btf.chats.all()
  if (isMedia && !mek.message.videoMessage || isQuotedImage) {
  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  bc = await btf.downloadMediaMessage(encmedia)
  for (let _ of anu) {
  tes = `${body.slice(4)}`
  brc = `𝙿𝙴𝚂𝙰𝙽  𝚂𝙸𝙰𝚁𝙰𝙽 𝙱𝙾𝚃 ☃\n\n${v}`
  btf.sendMessage(_.jid, { contentText: `${brc}`, footerText: `${botName}`, buttons: [{buttonId: `!menu`,buttonText:{displayText: '⎙ 𝙼𝙴𝙽𝚄'},type:1},{buttonId: `!donasi`,buttonText:{displayText:'❀ 𝙳𝙾𝙽𝙰𝚂𝙸'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: bcs, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  }
  reply('𝚂𝚞𝚌𝚌𝚎𝚜  𝙱𝚛𝚘𝚍𝚌𝚊𝚜𝚝')
  } else {
  for (let _ of anu) {
   	   tes = `${body.slice(4)}`
  brc = `𝙿𝙴𝚂𝙰𝙽  𝚂𝙸𝙰𝚁𝙰𝙽 𝙱𝙾𝚃 ☃\n\n${v}`
  btf.sendMessage(_.jid, { contentText: `${brc}`, footerText: `${botName}`, buttons: [{buttonId: `!menu`,buttonText:{displayText: '⎙ 𝙼𝙴𝙽𝚄'},type:1},{buttonId: `!donasi`,buttonText:{displayText:'❀ 𝙳𝙾𝙽𝙰𝚂𝙸'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: bcs, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  }
  reply('√ 𝚂𝚄𝙲𝙲𝙴𝚂 𝙱𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝')
  }
  break   
   
case 'bcquotes':
  pp =  await getBuffer(`https://i.pinimg.com/736x/04/1b/91/041b917c299d4f3c9b618665d7676855.jpg`)
  if (!isOwner) return  reply(mess.only.owner)
  if (args.length < 1) return reply('teks?')
  anu = await btf.chats.all()
  if (isMedia && !mek.message.videoMessage || isQuotedImage) {
  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  bc = await btf.downloadMediaMessage(encmedia)
  for (let _ of anu) {
  brc = `𝚀𝚄𝙾𝚃𝙴𝚂 𝚃𝙾𝙳𝙰𝚈 𝙱𝙾𝚃 ☃\n\n${v}`
  btf.sendMessage(_.jid, { contentText: `${brc}`, footerText: `${botName}`, buttons: [{buttonId: `!menu`,buttonText:{displayText: '⎙ 𝙼𝙴𝙽𝚄'},type:1},{buttonId: `!donasi`,buttonText:{displayText:'❀ 𝙳𝙾𝙽𝙰𝚂𝙸'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  }
  reply('𝚂𝚞𝚌𝚌𝚎𝚜  𝙱𝚛𝚘𝚍𝚌𝚊𝚜𝚝')
  } else {
  for (let _ of anu) {
  brc = `𝚀𝚄𝙾𝚃𝙴𝚂 𝚃𝙾𝙳𝙰𝚈 𝙱𝙾𝚃 ☃\n\n${v}`
  btf.sendMessage(_.jid, { contentText: `${brc}`, footerText: `${botName}`, buttons: [{buttonId: `!menu`,buttonText:{displayText: '⎙ 𝙼𝙴𝙽𝚄'},type:1},{buttonId: `!donasi`,buttonText:{displayText:'❀ 𝙳𝙾𝙽𝙰𝚂𝙸'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  }
  reply('√ 𝚂𝚄𝙲𝙲𝙴𝚂 𝙱𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝')
  }
break    
  
  
  
case 'clearall':
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
anu = await btf.chats.all()
btf.setMaxListeners(25)
for (let chat of anu) {
btf.modifyChat(chat.jid,'delete')
}
reply('𝚂𝚞𝚌𝚌𝚎𝚜 𝚍𝚎𝚕𝚎𝚝𝚎 𝚊𝚕𝚕  𝚌𝚑𝚊𝚝')
break  

case 'upswteks':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (args.length < 1) return reply('Teksnya?')
  reply(mess.wait)
  teks = body.slice(10)
  btf.sendMessage('status@broadcast', teks, MessageType.text)
  reply(`√ 𝚂𝚄𝙲𝙲𝙴𝚂  upload status:\n${teks}`)
  break	
case 'upswlokasi':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
  if (args.length < 1) return reply('Teksnya?')
  reply(mess.wait)
  teks = body.slice(12)
  btf.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${fakeyoi}`}, MessageType.location)
  reply(`√ 𝚂𝚄𝙲𝙲𝙴𝚂  upload lokasi:\n${teks}`)
  break	
case 'upswsticker':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (!isQuotedSticker) return reply('Reply stikernya!')
  reply(mess.wait)
  if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
  const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  buff = await btf.downloadMediaMessage(encmedia)
	 	  btf.sendMessage('status@broadcast', buff, sticker)
  }
  reply(`√ 𝚂𝚄𝙲𝙲𝙴𝚂  upload sticker`)
  break
case 'upswaudio':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (!isQuotedAudio) return reply('Reply audionya!')
  reply(mess.wait)
  if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
  const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  buff = await btf.downloadMediaMessage(encmedia)
  btf.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
  }
  reply(`√ 𝚂𝚄𝙲𝙲𝙴𝚂  upload audio`)
  break
case 'upswvoice':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerBl)
  if (!isQuotedAudio) return reply('Reply audionya!')
  reply(mess.wait)
  if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
  const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  buff = await btf.downloadMediaMessage(encmedia)
  btf.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
	 	  }
  reply(`√ 𝚂𝚄𝙲𝙲𝙴𝚂  upload voice`)
  break
case 'upswvideo':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  var konti = body.slice(11)
  reply(mess.wait)
  var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  var mediap = await btf.downloadAndSaveMediaMessage(enmediap)
  const buffer3 = fs.readFileSync(mediap)
  btf.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
  reply(`√ 𝚂𝚄𝙲𝙲𝙴𝚂  upload video:\n${konti}`)
  break
case 'upswgif':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  var konti = body.slice(7)
  reply(mess.wait)
  enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await btf.downloadAndSaveMediaMessage(enmedia)
  const buffer6 = fs.readFileSync(media)
  btf.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
  reply(`√ 𝚂𝚄𝙲𝙲𝙴𝚂  upload gif:\n${konti}`)
  break
case 'upswimage':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if  (!isQuotedImage) return reply(`Reply Gambarnya`)
  var teksyy = body.slice(11)
  reply(mess.wait)
  if (isMedia && !mek.message.videoMessage || isQuotedImage) {
  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  buff = await btf.downloadMediaMessage(encmedia)
  btf.sendMessage('status@broadcast', buff, MessageType.image, {quoted: mek, caption: `${teksyy}`})
  }
  reply(`√ 𝚂𝚄𝙲𝙲𝙴𝚂  upload image:\n${teksyy}`)
  break   
  

case 'setppbot':
 if (!isOwner) return reply(mess.only.owner)
 if (!isQuotedImage) return reply(`𝚁𝚎𝚙𝚙𝚕𝚢 𝚐𝚊𝚖𝚋𝚊𝚛𝚗𝚢𝚊 𝚍𝚎𝚗𝚐𝚊𝚗 .𝚜𝚎𝚝𝚙𝚙𝚋𝚘𝚝`)
 reply(mess.wait)
 enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 media = await btf.downloadAndSaveMediaMessage(enmedia)
  await btf.updateProfilePicture(`${btfNumber}@s.whatsapp.net`, media)
 reply(`𝚂𝚞𝚌𝚌𝚎𝚜  𝚌𝚑𝚊𝚗𝚐𝚎 𝚖𝚢 𝚙𝚛𝚘𝚏𝚒𝚕𝚎 𝚙𝚒𝚌𝚝𝚞𝚛𝚎`)
 console.log(color('|CMD|'), color(`𝙲𝚑𝚊𝚗𝚐𝚎 𝙱𝚘𝚝 𝚙𝚛𝚘𝚏𝚒𝚕𝚎 𝚙𝚒𝚌𝚝𝚞𝚛𝚎`,  'cyan'))
break 

case 'join':  
   if (!v) return reply('Linknya?')
   if (!isOwner) return reply(mess.only.owner)
   if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
   link = args[0].replace('https://chat.whatsapp.com/','')
   fak = btf.query({ json: ['action', 'invite', link],
   expect200: true })
   reply('Berhasil Masuk Grup')
             break
case 'join2':
  if (isBanned) return reply(mess.banned)
    if (!isOwner) return reply(mess.only.owner)
    try {
    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
    hen = args[0]
    if (!v) return reply('Masukan link group')
    var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
    if (!codeInvite) return reply('pastikan link sudah benar!')
    var response = await btf.acceptInvite(codeInvite)
    reply('𝚂𝚄𝙲𝙲𝙴𝚂 𝙹𝙾𝙸 𝙶𝚁𝚄𝙿')
    } catch {
    reply('𝙴𝚁𝚁𝙾𝚁')
    }
  break

case 'demoteall':
  if (!isOwner && !mem.key.fromMe) return reply(mess.only.owner)
  if (!isGroup) return reply(mess.only.group)
  if (!isBotGroupAdmins) return reply(mess.only.bot)
  members_id = []
  for (let mem of groupMembers) {
	   	  members_id.push(mem.jid)
	  	  }
  btf.groupDemoteAdmin(from, members_id)
  break
case 'promoteall':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (!isGroup) return reply(mess.only.group)
  if (!isBotGroupAdmins) return reply(mess.only.bot)
  members_id = []
  for (let mem of groupMembers) {
	  	  members_id.push(mem.jid)
	  	  }
  btf.groupMakeAdmin(from, members_id)
  break  	   








//+𝙰𝙳𝙼𝙸𝙽 𝙶𝙲 𝙵𝙴𝙰𝚃𝚄𝚁𝙴+
case 'setppgc': 
   if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.bot)
   media = await btf.downloadAndSaveMediaMessage(mek)
   await btf.updateProfilePicture (from, media)
   reply('[√ 𝚂𝚄𝙲𝙲𝙴𝚂 ] 𝙼𝚎𝚗𝚐𝚐𝚊𝚗𝚝𝚒 𝙸𝚌𝚘𝚗 𝙶𝚛𝚘𝚞𝚙')
  break
case 'setname':
   if (!isGroup) return reply(mess.only.group)
    	   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.bot)
   btf.groupUpdateSubject(from, `${body.slice(9)}`)
   reply('Succes, Ganti Nama Grup')	  	   
 	  case 'add':
   	if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  if (args.length < 1) return reply('Yang mau di add jin ya?')
  if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
  try {
  	num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
  	btf.groupAdd(from, [num])
  } catch (e) {
  	console.log('Error :', e)
  	reply('Gagal menambahkan target, mungkin karena di private')
  }
  break
case 'setdesc':
   if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`Bot Harus Admin dong`)
   if (args.length < 1) return reply(`Ketik *${prefix}setdesc Isi* Buat Edit Desc Grup`)
   teks = body.slice(9)
   btf.groupUpdateDescription(from, teks)
   break       

case 'tagall':
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
  members_id = []
  teks = `🎌 Group : *${groupName}*\n💫 Jumlah member : *${groupMetadata.participants.length}*\n\n┌───⊷ *TAG ALL* ⊶\n`
  for (let mem of groupMembers) {
  teks += `├> @${mem.jid.split('@')[0]}\n`
	   	  members_id.push(mem.jid)
  }
  teks += `└──────────────`
	 	  mentions(teks, members_id, true)
  break	

case 'epen':
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
  if (args.length < 1) return reply('Boo :𝘃')
  if (Number(args[0]) === 1) {
  if (isEventon) return reply(`*SUDAH AKTIF* !!!`)
  event.push(from)
  fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
  reply(`*❬ √ 𝚂𝚄𝙲𝙲𝙴𝚂  ❭ MENGAKTIFKAN EVENT DI GRUB INI*`)
  } else if (Number(args[0]) === 0) {
  event.splice(from, 1)
  fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
  reply(`*❬ √ 𝚂𝚄𝙲𝙲𝙴𝚂  ❭ MENONAKTIFKAN EVENT DI GRUB INI*`)
  } else {
  reply('eeee')
  }    
  break    
case 'wel':   
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
  if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
  if ((args[0]) === 'on') {
  if (isWelkom) return reply('welcome sudah aktif')
  _welkom.push(from)
  fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom))
  reply(`\`\`\`✓√ 𝚂𝚄𝙲𝙲𝙴𝚂  mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
  } else if ((args[0]) === 'off') {
  if (!isWelkom) return reply('welcome sudah off sebelumnya')
  _welkom.splice(from, 1)
  fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom))
  reply(`\`\`\`√ 𝚂𝚄𝙲𝙲𝙴𝚂  menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
  } else {
  reply('on untuk mengaktifkan, off untuk menonaktifkan')
  }
  break   	  	 
 
case 'opengc':
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(`mess.only.bot`)
  reply(`√ 𝚂𝚄𝙲𝙲𝙴𝚂  Membuka Grup ${groupName}`)
  btf.groupSettingChange(from, GroupSettingChange.messageSend, false)
   break
 
case 'closegc':
   if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`mess.only.bot`)
   reply(`√ 𝚂𝚄𝙲𝙲𝙴𝚂  Menutup Grup ${groupName}`)
   btf.groupSettingChange(from, GroupSettingChange.messageSend, true)
   break   	 	       
   
case 'kick':
	if (!isGroup) return reply(mess.only.group)
     if (!isGroupAdmins) return reply(mess.only.admin)
     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
     if(!v)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
     yau = v.split('@')[1] + '@s.whatsapp.net'
     btf.groupRemove(from, [yau])
     teks = `𝙼𝚊𝚖𝚙𝚞𝚜 𝚕𝚞𝚞 @${v.split('@')[1]}  𝙶𝚞𝚊 𝙺𝚒𝚌𝚔 𝚓𝚞𝚐𝚊 𝚔𝚊𝚗 𝚕𝚞𝚞`
  btf.sendMessage(from, teks, text, {quoted:troli, contextInfo:{mentionedJid:[yau]}})
     reply(`𝚂𝚞𝚌𝚌𝚎𝚜 𝚔𝚒𝚌𝚔 𝙱𝚎𝚋𝚊𝚗`)
     break
    break	 
case 'demote':
   if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.bot)
  yau = v.split('@')[1] + '@s.whatsapp.net'
  btf.groupDemoteAdmin(from, [yau])
  teks = `𝙼𝚊𝚖𝚙𝚞𝚜 𝚕𝚞𝚞 @${v.split('@')[1]} 𓃟 𝙶𝚞𝚊 𝚍𝚎𝚖𝚘𝚝𝚎 𝚓𝚞𝚐𝚊 𝚔𝚊𝚗 𝚕𝚞𝚞`
  btf.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[yau]}})
     reply(`𝚂𝚞𝚌𝚌𝚎𝚜 𝙳𝚎𝚖𝚘𝚝𝚎 ${yau}`)
   
   break
case 'promote':
   if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.bot)
   yau = v.split('@')[1] + '@s.whatsapp.net'
   btf.groupMakeAdmin(from, [yau])
   teks = `𝚂𝚎𝚕𝚊𝚖𝚊𝚝  𝚔𝚎𝚙𝚊𝚍𝚊 @${v.split('@')[1]},𝙰𝚗𝚍𝚊 𝚃𝚎𝚕𝚊𝚑 𝙳𝚒 𝙿𝚛𝚘𝚖𝚘𝚜𝚒𝚔𝚊𝚗 𝚖𝚎𝚗𝚓𝚊𝚍𝚒 𝙰𝚍𝚖𝚒𝚗`
   btf.sendMessage(from, teks, text, {quoted:troli, contextInfo:{mentionedJid:[yau]}})
  reply(`𝚂𝚞𝚌𝚌𝚎𝚜 𝚙𝚛𝚘𝚖𝚘𝚝𝚎 ${yau}`)
  break
case 'revoke': case 'risetgc': case 'resetlink': case 'revokegroup': case 'revokelink': {
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins)return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.bot)
   var linkgc = await btf.revokeInvite(from)
   mentions(`Link Group Berhasil direset oleh admin @${sender.split('@')[0]}`, [sender], true)
   }
   break   
case 'hidetag':
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
  var value = args.join(' ')
  var group = await btf.groupMetadata(from)
  var member = group['participants']
  var mem = []
  member.map(async adm => {
  mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
  })
  var optionshidetag = {
  text: value,
  contextInfo: { mentionedJid: mem },
  quoted: mek
  }
  btf.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption":'#IZIN NGETAG',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": tamnel} }  } })
  break

case 'modesimi':
  if (args.length < 1) return reply('hmm')
  if (Number(args[0]) === 1) {
  simin.push(from)
  fs.writeFileSync('./database/group/simi.json', JSON.stringify(simin))
  reply('√ 𝚂𝚄𝙲𝙲𝙴𝚂  mengaktifkan mode simi')
  } else if (Number(args[0]) === 0) {
  simin.splice(from, 1)
  fs.writeFileSync('./database/group/simi.json', JSON.stringify(simin))
  reply('Sukes menonaktifkan mode simi')
  } else {
  reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
  }
  break
    



//»»»𝘉𝘶𝘵𝘵𝘰𝘯 𝘉𝘢𝘮𝘩 
case 'welcome':
if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`mess.only.bot`)
  pp = '𝙾𝙽  𝙾𝚁 𝙾𝙵𝙵 ?'
  but = [
   { buttonId: `!wel on`, buttonText: { displayText: '⊙ 𝙾𝙽' }, type: 1 },
   { buttonId: `!wel off`, buttonText: { displayText: '⊗ 𝙾𝙵𝙵' }, type: 1 }]
  sendButton(from, pp, '𝚆𝚎𝚕𝚌𝚘𝚖𝚎', but, troli)
  break  
case 'nobadword': case 'nobd':
if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`mess.only.bot`)
  pp = '𝙾𝙽  𝙾𝚁 𝙾𝙵𝙵 ?'
  but = [
   { buttonId: `!nobad enable`, buttonText: { displayText: '⊙ 𝙾𝙽' }, type: 1 },
   { buttonId: `!nobad disable`, buttonText: { displayText: '⊗ 𝙾𝙵𝙵' }, type: 1 }]
  sendButton(from, pp, '𝙽𝚘 𝚋𝚊𝚍𝚠𝚘𝚛𝚍', but, troli)
  break    
case 'eventgc':
if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`mess.only.bot`)
  pp = '𝙾𝙽  𝙾𝚁 𝙾𝙵𝙵 ?'
  but = [
   { buttonId: `!epen 1`, buttonText: { displayText: '⊙ 𝙾𝙽' }, type: 1 },
   { buttonId: `!epen 0`, buttonText: { displayText: '⊗ 𝙾𝙵𝙵' }, type: 1 }]
  sendButton(from, pp, '𝙴𝚟𝚎𝚗𝚝 𝙶𝚌', but, troli)
  break  
case 'antilink':
if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`*𝙹𝚊𝚍𝚒𝚒𝚗 𝚊𝚔𝚞 𝙰𝚍𝚖𝚒𝚗 𝙱𝚠𝚊𝚗𝚐*`)
  pp = '𝙾𝙽  𝙾𝚁 𝙾𝙵𝙵 ?'
  but = [
   { buttonId: `!anti on`, buttonText: { displayText: '⊙ 𝙾𝙽' }, type: 1 },
   { buttonId: `!anti off`, buttonText: { displayText: '⊗ 𝙾𝙵𝙵' }, type: 1 }]
  sendButton(from, pp, '𝙰𝚗𝚝𝚒𝚕𝚒𝚗𝚔', but, troli)
  break
    
case 'mode':
   if (!isOwner) return reply(mess.only.owner)
   pp = '𝙿𝚄𝙱𝙻𝙸𝙲 𝙾𝚁 𝙿𝚁𝙸𝚅𝙰𝚃𝙴 ?'
  but = [
   { buttonId: `!public`, buttonText: { displayText: '⊙ 𝙿𝚄𝙱𝙻𝙸𝙲' }, type: 1 },
   { buttonId: `!self`, buttonText: { displayText: '⊗ 𝚂𝙴𝙻𝙵' }, type: 1 }]
  sendButton(from, pp, '𝙼𝚘𝚍𝚎 𝙱𝚘𝚝', but, troli)
  break  

//+𝙶𝚁𝙾𝚄𝙿 𝙲𝙼𝙳+
case 'misi': case 'quest':
 if (!isGroup) return reply(mess.only.group)
 if (!isPetualang) return reply(mess.only.player)
 listMsg = {
 buttonText: '𝙻𝙸𝚂𝚃 𝙼𝙸𝚂𝙸 𝚁𝙿𝙶',
 footerText: fake,
 description: `𝙷𝚊𝚒i @${sender.split('@')[0]},\n\n 𝚂𝚊𝚢𝚊 𝙰𝚍𝚖𝚒𝚗 𝚍𝚒 𝚁𝚙𝚐 𝙳𝚒 𝙶𝚛𝚞𝚙 𝙸𝚗𝚒 \n𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝙿𝚒𝚕𝚒𝚑 𝙼𝚒𝚜𝚒 𝚜𝚎𝚜𝚞𝚊𝚒 𝚍𝚎𝚗𝚐𝚊𝚗 𝙻𝚎𝚟𝚎𝚕𝚖𝚞!`,
 sections: [
     {
  "title": `𝙿𝚒𝚕𝚒𝚑 𝙼𝚒𝚜𝚒 𝚂𝚎𝚜𝚞𝚊𝚒 𝙻𝚎𝚟𝚎𝚕`,
  rows: [
   {
  "title": "🔪 𝙺𝙸𝙻𝙻 𝚂𝙻𝙸𝙼𝙴",
  "description": ` 𝙼𝚒𝚜𝚒  𝚋𝚞𝚊𝚝 𝚕𝚎𝚟𝚎𝚕 1`,
  "rowId": "!slime"
    },
    {
  "title": "🔪 𝙺𝙸𝙻𝙻 𝙶𝙾𝙱𝙻𝙸𝙽",
  "description": ` 𝙼𝚒𝚜𝚒  𝚋𝚞𝚊𝚝 𝚕𝚎𝚟𝚎𝚕 5`,
  "rowId": "!goblin"
    },
    {
  "title": "🔪 𝙺𝙸𝙻𝙻  𝙴𝚅𝙸𝙻 𝙴𝚈𝙴",
  "description": ` 𝙼𝚒𝚜𝚒  𝚋𝚞𝚊𝚝 𝚕𝚎𝚟𝚎𝚕 10`,
  "rowId": "!evil"
    },
    {
  "title": "🔪 𝙺𝙸𝙻𝙻 𝙱𝙰𝙷𝙴𝙼𝙾𝚃𝙷",
  "description": ` 𝙼𝚒𝚜𝚒  𝚋𝚞𝚊𝚝 𝚕𝚎𝚟𝚎𝚕 15`,
  "rowId": "!bahemoth"
    },     
    {
  "title": "🔪 𝙺𝙸𝙻𝙻 𝙲𝙾𝙲𝙺𝙰𝚃𝚁𝙸𝙲𝙴",
  "description": ` 𝙼𝚒𝚜𝚒  𝚋𝚞𝚊𝚝 𝚕𝚎𝚟𝚎𝚕 20 `,
  "rowId": "!cockatrice"
    }, 
    {
  "title": "🔪 𝙺𝙸𝙻𝙻 𝙳𝙴𝙼𝙾𝙽  𝙺𝙸𝙽𝙶𝚂",
  "description": ` 𝙼𝚒𝚜𝚒  𝚋𝚞𝚊𝚝 𝚕𝚎𝚟𝚎𝚕 25`,
  "rowId": "!demondking"
    }
  ]
     }],
 listType: 1
}
btf.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:troli})
break       

case 'leaderboard': case 'lb':
if (!isGroup) return reply(ind.groupo())
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
//uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
  let leaderboardlvl = ' > 𝗧𝗢𝗣 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗 <\n\n'
   // let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
  let nom = 0
  try {
    for (let i = 0; i < 10; i++) {
  nom++
  leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n ♯ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
  //leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
    }
    await reply(leaderboardlvl)
    //await reply(leaderboarduang)
  } catch (err) {
    console.error(err)
    await reply(`minimal 10 user untuk bisa mengakses database`)
  }
  break

case 'sellikan':
  if (!isGroup) return reply(mess.only.group)
  if (!isPetualang) return reply(mess.only.player)
  if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)  
  jmlh = body.slice(10)
  rp = 5 * jmlh
  if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
  sellFish(sender, jmlh, balance)
  addBalance(sender, rp, balance) 
  capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n ♯ Penjual : ${pushname}\n ♯ Pembeli : Admin\n ♯ Harga/Ikan : 5\n ♯ Status : √ 𝚂𝚄𝙲𝙲𝙴𝚂 \n ♯ Sisa Ikan : ${getFish(sender)}\n ♯ Hasil Penjualan : $${rp}`)
  but = [{ buttonId: '!myinventori', buttonText: { displayText: '🎒𝙲𝙴𝙺  𝚃𝙰𝚂' }, type: 1 }]
  sendButton(from, capti, 'sellikan', but)  
  break
case 'sellbesi':
  if (!isGroup) return reply(mess.only.group)
  if (!isPetualang) return reply(mess.only.player)
  if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)  
  jmlh = body.slice(10)
  rp = 10 * jmlh
  if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
  sellBesi(sender, jmlh, balance)
  addBalance(sender, rp, balance) 
  capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n ♯ Penjual : ${pushname}\n ♯ Pembeli : Admin\n ♯ Harga/Besi : 10\n ♯ Status : √ 𝚂𝚄𝙲𝙲𝙴𝚂 \n ♯ Sisa Besi : ${getBesi(sender)}\n ♯ Hasil Penjualan : $${rp}`)
  but = [{ buttonId: '!myinventori', buttonText: { displayText: '🎒 𝙲𝙴𝙺 𝚃𝙰𝚂' }, type: 1 }]
  sendButton(from, capti, 'sellikan', but)    
  break  
case 'sellemas':
  if (!isGroup) return reply(mess.only.group)
  if (!isPetualang) return reply(mess.only.player)
  if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)  
  jmlh = body.slice(10)
  rp = 25 * jmlh
  if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
  sellEmas(sender, jmlh, balance)
  addBalance(sender, rp, balance) 
  capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n ♯ Penjual : ${pushname}\n ♯ Pembeli : Admin\n ♯ Harga/Emas : 25\n ♯ Status : √ 𝚂𝚄𝙲𝙲𝙴𝚂 \n ♯ Sisa Emas : ${getEmas(sender)}\n ♯ Hasil Penjualan : $${rp}`)
  but = [{ buttonId: '!myinventori', buttonText: { displayText: '🎒 𝙲𝙴𝙺 𝚃𝙰𝚂' }, type: 1 }]
  sendButton(from, capti, 'sellikan', but)    
  break 
case 'selldiamond':
  if (!isGroup) return reply(mess.only.group)
  if (!isPetualang) return reply(mess.only.player)
  if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)  
  ttl = body.slice(13)
  var etoo = 75 * ttl
  if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
  sellDm(sender, ttl)
  addBalance(sender, etoo, balance) 
  capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n ♯ Penjual : ${pushname}\n ♯ Pembeli : Admin\n ♯ Harga/Dm : 75\n ♯ Status : √ 𝚂𝚄𝙲𝙲𝙴𝚂 \n ♯ Sisa Diamond : ${getDm(sender)}\n ♯ Hasil Penjualan : $${etoo}`)
  but = [{ buttonId: '!myinventori', buttonText: { displayText: '🎒𝙲𝙴𝙺  𝚃𝙰𝚂' }, type: 1 }]
  sendButton(from, capti, 'sellikan', but)    
  break  

case 'mining':   
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  if (!isGroup) return reply(mess.only.group)  
  if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)  
  if (!isPetualang) return reply(mess.only.player)
  pp = randomNomor(75)
  emas = randomNomor(15)
  dm = randomNomor(3)
  besi = randomNomor(50)
  done = monospace(`Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`)
  addBalance(sender, pp, balance)  
  addBesi(sender, besi)
  addEmas(sender, emas)
  addDm(sender, dm)
  mining = ('Waitt sedang menguli . . .')
  setTimeout( () => {		//case by Butterfly
  but = [{ buttonId: `!mining`, buttonText: { displayText: '⛏️ 𝙼𝙸𝙽𝙸𝙽𝙶 𝙰𝙶𝙰𝙸𝙽' }, type: 1 }, { buttonId: `!mybag`, buttonText: { displayText: '🎒 𝙼𝚈 𝙱𝙰𝙶' }, type: 1 }]
  sendButton(from, done, '𝙼𝚒𝚗𝚒𝚗𝚐', but)
  }, 9000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🚧 selesai menguli. . .🪙👷', text) 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🚧 menemukan emas. . .⚒️🏔️️️', text) 
  }, 4000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🚧 mulai menambang. . .⚒️🏔️️', text) 
  }, 1500) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, mining, text, {quoted: mek}) 
  }, 0) // 1000 = 1s,
  gameAdd(sender,glimit)
  break	  
  case 'joinrpg':
  var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
  if (!isGroup) return reply(mess.only.group)  
  if (isPetualang) return reply('Kamu sudah menjadi petualang')
	   	 _petualang.push(sender)
 fs.writeFileSync('./database/user/inventori.json', JSON.stringify(_petualang))
  pp =  await getBuffer(`https://telegra.ph/file/106d3df4ef10148728a13.jpg`)
  jnr =` *∥ 𝚂𝚄𝙲𝙲𝙴𝚂  𝙹𝙾𝙸𝙽  𝚁𝙿𝙶 ∥*
  
 ⊝ 𝙽𝚊𝚖𝚎     : ${pushname}
 ⊙ 𝚂𝚎𝚛𝚒𝚊𝚕 : ${createSerial(8)}
 ⊙ 𝚁𝚊𝚗𝚔     : ${role} 
 ⊙ 𝙻𝚎𝚟𝚎𝚕   : ${getLevelingLevel(sender)}  
 ⊙ 𝚂𝚝𝚊𝚝𝚞𝚜 : ${elit}
 ⊙ 𝚇𝚙         : ${getLevelingXp(sender)}/${reqXp}
`
  addInventori(sender)
  addLevelingId(sender)
    but = [
          { buttonId: `!profile`, buttonText: { displayText: '👒𝙿𝚁𝙾𝙵𝙸𝙻𝙴' }, type: 1 }]
          sendButLocation(from, jnr, `${botName}`, pp,but, {quoted: mek})
          break     
   
   
  break
 
case 'mancing':
  if (!isGroup) return reply(mess.only.group)  
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  if (!isPetualang) return reply(mess.only.player)	
  ikannya = ikan[Math.floor(Math.random() * ikan.length)]
  xp = Math.ceil(Math.random() * 350)  
  coin = randomNomor(50)	    
  ditangkap = Math.ceil(Math.random() * 50)
  cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
  setTimeout( () => {
  caption = monospace(`「 Memancing 」\n\n ♯ Tangkapan : ${ikannya}\n ♯ Total Dapat : ${ditangkap} Ikan\n ♯ MONEY : $${coin}\n ♯ EXP : ${xp}Xp`)
  but = [
  { buttonId: '!mancing', buttonText: { displayText: '🎣 𝙵𝙸𝚂𝙷𝙸𝙽𝙶 𝙰𝙶𝙰𝙸𝙽' }, type: 1 },
  { buttonId: '!myinventori', buttonText: { displayText: '🎒𝙲𝙴𝙺  𝚃𝙰𝚂' }, type: 1 }
   ]
  sendButLocation(from, caption, 'Memancing', cing, but, {quoted: mek})  
  }, 6000)
  setTimeout( () => {
  btf.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
  }, 5000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🎣Menarik kail. . .', text) 
  }, 3000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🎣Mulai memancing. . .', text) 
  }, 1500) // 1000 = 1s,
  addFish(sender, ditangkap)
  addLevelingXp(sender, xp)
  addBalance(sender, coin, balance) 
  gameAdd(sender,glimit)
  reply(mess.uselimit)  
  break  

case "jadian":
  if (!isGroup) return reply(mess.only.group)  
  jds = []
  const jdii = groupMembers
  const koss = groupMembers
  const akuu = jdii[Math.floor(Math.random() * jdii.length)]
  const diaa = koss[Math.floor(Math.random() * koss.length)]
  teks = `Ciee..yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
  jds.push(akuu.jid)
  jds.push(diaa.jid)
  mentions(teks, jds, true)
  break	
case "ngewe":
  if (!isGroup) return reply(mess.only.group)  
  jds = []
  const jdiid = groupMembers
  const kosst = groupMembers
  const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
  const diaat = kosst[Math.floor(Math.random() * kosst.length)]
  teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
  jds.push(akuut.jid)
  jds.push(diaat.jid)    
  mentions(teks, jds, true)
 break  
 
 
case "terganteng": case "terjelek": case "tercantik": case "tergay":   case "tersange":  case "terpandai":  case "tergoblog": case "terpedo":  case "terwibu":
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)  
  if (!isGroup) return reply(mess.only.group)
  limitAdd(sender, limit)
  reply(mess.uselimit)  
  jds = []
  const jdiidc = groupMembers
  const kosstc = groupMembers
  const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
  teks = `𝚈𝚊𝚗𝚐 𝙿𝚊𝚕𝚒𝚗𝚐 ${command} 𝚍𝚒 𝙶𝚛𝚞𝚙 𝚒𝚗𝚒 𝚊𝚍𝚊𝚕𝚊𝚑 @${akuutc.jid.split('@')[0]}`
  jds.push(akuutc.jid)
  mentions(teks, jds, true)
  break		 
  
case 'darkjokes':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)  
  if (!isGroup) return reply(mess.only.group)   
  reply(mess.wait)
  limitAdd(sender, limit)
  reply(mess.uselimit)
  let data = fs.readFileSync('../lib/darkjokes.js');
  jsonData = JSON.parse(data);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  hasl = await getBuffer(randKey.result)  
  but = [
  { buttonId: `!darkjokes`, buttonText: { displayText: '𝙽𝙴𝚇𝚃 ⋟' }, type: 1 }]
  sendButImage(from, `𝙶𝚎𝚕𝚊𝚙 𝚐𝚎𝚕𝚊𝚙 𝚜𝚊𝚗𝚐𝚊𝚍 𝙼𝚊𝚣𝚜𝚎𝚎𝚎𝚑`, `Klik Next Ngab`, hasl, but)   
 
  break  
  
case 'slot': case 'slots':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)   
  if (!isGroup) return reply(mess.only.group)  
  if (!isEventon) return reply(mess.only.event)
  limitAdd(sender, limit)
  reply(mess.uselimit)
  const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
  slom = `[  🎰 | SLOTS GAME ]\n━━━━━━━━━━━━━\n🍋 : 🍌 : 🍍\n${somtoy} <== ||\n🍋 : 🍌 : 🍍\n━━━━━━━━━━━━━\n[  🎰 | SLOTS GAME ]\n\nInfo : Dapatkan 3 buah untuk win\n\nContoh : 🍌 : 🍌 : 🍌<== 👑`
  but = [{ buttonId: `!slot`, buttonText: { displayText: 'Play Again' }, type: 1 },
  { buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
  sendButton(from, slom, 'Slot Game', but).
 
  break  
  
case 'anti':
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins && !isOwner) return reply('Lu bkn admin')
  if (!isBotGroupAdmins) return reply('Bot Harus Admin')
  if (args.length < 1) return reply(`On untuk mengaktifkan & off untuk menonaktifkan`)
  if ((args[0]) === 'on') {
  if (isAnti) return reply('Antilink aktif')
  _antilink.push(from)
	  	  fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
  reply(`Mengaktifkan fitur anti link di group *${groupMetadata.subject}*`)
  } else if ((args[0]) === 'off') {
  if (!isAnti) return reply('Antilink off')
  _antilink.splice(from, 1)
  fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
  reply(`Menonaktifkan fitur anti link di group *${groupMetadata.subject}*`)
  } else {
  reply('On untuk mengaktifkan & off untuk menonaktifkan')
  }
	 	  break
      
  
case "groupinfo":  case 'gcinfo':   case 'infogc':  case 'infogroup':  case 'infogrup':  case 'infogrp':   	  
  if (!isGroup) return reply(mess.only.group)
  try {
  var pic = await btf.getProfilePicture(from)
  } catch {
  var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
  let ingfo = `*✚ 𝙶 𝚁 𝙾 𝚄 𝙿  𝙸 𝙽 𝙵 𝙾 ✚*\n\n*𝙽𝚊𝚖𝚎 :* ${groupName}\n*𝙸𝙳 𝙶𝚛𝚘𝚞𝚙 :* ${from}\n*𝙳𝚒𝚋𝚞𝚊𝚝 :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*𝙾𝚠𝚗𝚎𝚛 𝙶𝚛𝚘𝚞𝚙 :* @${groupMetadata.owner.split('@')[0]}\n*𝙹𝚞𝚖𝚕𝚊𝚑 𝙰𝚍𝚖𝚒𝚗 :* ${groupAdmins.length}\n*𝙹𝚞𝚖𝚕𝚊𝚑 𝙼𝚎𝚖𝚋𝚎𝚛 :* ${groupMembers.length}\n*Fitur 𝚆𝚎𝚕𝚌𝚘𝚖𝚎 :* ${isWelkom ? '𝙾𝙽' : '𝙾𝙵𝙵'}\n*Fitur 𝙰𝚗𝚝𝚒𝚕𝚒𝚗𝚔 :* ${isAnti? '𝙾𝙽' : '𝙾𝙵𝙵'}\n*Fitur 𝙱𝚊𝚍𝚠𝚘𝚛𝚍 :* ${isBadWord? '𝙾𝙽' : '𝙾𝙵𝙵'}\n*𝙳𝚎𝚜𝚌 :* \n${groupMetadata.desc}`
  btf.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
  break  
  
  
case 'linkgc': case 'link': case 'linkgroup':
   linkgc = await btf.groupInviteCode(from)
   if (!isGroup)return reply(mess.only.group)
   reply('https://chat.whatsapp.com/'+linkgc)  
   break  	   
     
   
case 'delete': case 'del': case 'D':
   if (!isGroup)return reply(mess.only.group)
   try {
   btf.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
   reply(`𝙳𝚎𝚕𝚎𝚝𝚎 𝚙𝚎𝚜𝚊𝚗 𝚂𝚞𝚌𝚎𝚜`)
   } catch (e) {
   reply('Hanya bisa menghapus pesan dariku')
	  	   }
   break  
    
//+𝙻𝙸𝙼𝙸𝚃 𝙲𝙼𝙳+
case 'buygamelimit':
case 'buyglimit':{
  if (args.length < 1) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $250 balance`)            
 payout = v
 ane = 250 * payout
 if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
 kurangBalance(sender, ane, balance)
 givegame(sender, payout, glimit)
 reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
          }
          break              
case 'buylimit':{
  if (args.length < 1) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)  
  payout = body.slice(10)
  let ane = 150 * payout
  if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
  kurangBalance(sender, ane, balance)
  giveLimit(sender, parseInt(args[0]), limit)
  reply(monospace(`Pembeliaan limit sebanyak ${args[0]} berhasil\n\nSisa Balance :  $${(getBalance(sender, balance))}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
  }
break         

case 'claim':
cl =`𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝙿𝚒𝚕𝚒𝚑 𝙲𝚕𝚊𝚒𝚖`
but = [
   { buttonId: `!claimlimit`, buttonText: { displayText: '❄𝙻𝙸𝙼𝙸𝚃' }, type: 1 },
   { buttonId: `!claimglimit`, buttonText: { displayText: '🔫𝙶𝙻𝙸𝙼𝙸𝚃' }, type: 1 }]
  sendButton(from, cl, '𝙼𝚒𝚗𝚒𝚖 𝙻𝚒𝚖𝚒𝚝 𝚝𝚎𝚛𝚜𝚒𝚜𝚊 1', but, troli)
  break  
  
case 'claimlimit':
 if (getLimit(sender, limitCount, limit) < 2){ lmt  = `𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚊𝚗𝚍𝚊  𝚝𝚎𝚕𝚊𝚑 𝚖𝚎𝚗𝚍𝚊𝚙𝚊𝚝 20  𝚕𝚒𝚖𝚒𝚝 𝚜𝚎𝚌𝚊𝚛𝚊 𝚐𝚛𝚊𝚝𝚒𝚜 ` 
  setTimeout( () => { giveLimit(sender, parseInt(20), limit) }, 1100) 
  }else{ 
  reply(`𝙼𝚊𝚏𝚏 𝙰𝚗𝚍𝚊 𝚋𝚎𝚕𝚞𝚖  𝚋𝚒𝚜𝚊 𝚌𝚕𝚊𝚒𝚖 𝚕𝚒𝚖𝚒𝚝,𝙺𝚊𝚖𝚞 𝚖𝚊𝚜𝚒𝚑 𝙿𝚞𝚗𝚢𝚊 𝙻𝚒𝚖𝚒𝚝 ${getLimit(sender, limitCount, limit)}/${limitCount} 𝚃𝚎𝚛𝚜𝚒𝚜𝚊`) } 
  break 
    
case 'claimglimit': 
 if (cekGLimit(sender, gcount, glimit) < 2){ lmt  = `𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚊𝚗𝚍𝚊  𝚝𝚎𝚕𝚊𝚑 𝚖𝚎𝚗𝚍𝚊𝚙𝚊𝚝 20  𝙶𝚊𝚖𝚎 𝚕𝚒𝚖𝚒𝚝 𝚜𝚎𝚌𝚊𝚛𝚊 𝚐𝚛𝚊𝚝𝚒𝚜 ` 
  setTimeout( () => { givegame(sender, parseInt(20), limit) }, 1100) 
  }else{ 
  reply(`𝙼𝚊𝚏𝚏 𝙰𝚗𝚍𝚊 𝚋𝚎𝚕𝚞𝚖  𝚋𝚒𝚜𝚊 𝚌𝚕𝚊𝚒𝚖 𝚕𝚒𝚖𝚒𝚝,𝙺𝚊𝚖𝚞 𝚖𝚊𝚜𝚒𝚑 𝙿𝚞𝚗𝚢𝚊 𝙻𝚒𝚖𝚒𝚝 ${cekGLimit(sender, gcount, glimit)}/${gcount} 𝚃𝚎𝚛𝚜𝚒𝚜𝚊`) } 
  break   
  


case 'ceklimit':
lmt =`
♻️ 𝙸𝚗𝚏𝚘 𝙻𝚒𝚖𝚒𝚝
⋟ 𝙽𝚊𝚖𝚎       ⇢  *${pushname}*
⋟ 𝙱𝚘𝚝 𝙻𝚒𝚖𝚒𝚝    ⇢  *${isOwner ? '𝚄𝚗𝚕𝚒𝚖𝚒𝚝𝚎𝚍' : isPremium ? '𝚄𝚗𝚕𝚒𝚖𝚒𝚝𝚎𝚍' : getLimit(sender, limitCount, limit)}*
⋟ 𝙶𝚊𝚖𝚎 𝙻𝚒𝚖𝚒𝚝   ⇢  *${isOwner ? '𝚄𝚗𝚕𝚒𝚖𝚒𝚝𝚎𝚍' : cekGLimit(sender, gcount, glimit)}  𝙻𝚒𝚖𝚒𝚝*
⋟ 𝚂𝚝𝚊𝚝𝚞𝚜  ⇢  *${premi}*  `
reply(lmt)
break       
//+𝙿𝙴𝚃𝚄𝙰𝙻𝙰𝙽𝙶 𝙲𝙼𝙳+
    
case 'adventure':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
  //    if (isHealt(sender)) return reply('Healt')
  if (!isPetualang) return reply(mess.only.player)		
  ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
  const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
  const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
  const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
  anu = fs.readFileSync('./database/rpg/dungeon.js');
  jsonData = JSON.parse(anu);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  hasm = await getBuffer(randKey.result)  
  const adven = Math.ceil(Math.random() * 1000)  
  const money = Math.ceil(Math.random() * 300)		    
  setTimeout( () => {		
  caption = monospace(`「 DEATH 」\n\n ♯ Tempat  ${ad}\n ♯ MONEY : $${money}\n ♯ EXP : ${adven}Xp`)
  but = [
  { buttonId: `!myinventori`, buttonText: { displayText: '🎒 𝙸𝙽𝚅𝙴𝙽𝚃𝙾𝚁𝙸' }, type: 1 }]
  sendButLocation(from, caption, '𝙰𝚍𝚟𝚎𝚗𝚝𝚞𝚛𝚎', hasm, but, {quoted: mek})   
  }, 7000)
  setTimeout( () => {
  btf.sendMessage(from, `𝙰𝚠𝚊𝚊𝚜𝚜𝚜𝚜`, text) 
  }, 5000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, `𝚃𝚒𝚋𝚊 𝚃𝚒𝚋𝚊  𝚊𝚍𝚊 ${sesuatu}`, text) 
  }, 3000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, `𝙿𝚕𝚊𝚢𝚎𝚛 ${pushname} 𝚂𝚎𝚍𝚊𝚗𝚐 𝙱𝚎𝚛𝚝𝚞𝚊𝚕𝚊𝚗𝚐`, text) 
  }, 1500) // 1000 = 1s,
  addLevelingXp(sender, adven)
  addBalance(sender, money, balance) 
  gameAdd(sender, glimit) 
  reply(mess.uselimit)
  break
  
//+𝙸𝙽𝚅𝙴𝚃𝙾𝚁𝚈 𝙲𝙼𝙳+  
case 'rpgshop':
pp = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDSZ3W8U7r_jnLpZP3WcBmGq-1fUul2V3h2w&usqp=CAU`)
anu = monospace(`💰𝚁𝙿𝙶  𝚂𝙷𝙾𝙿
🔖 𝙿𝚛𝚒𝚌𝚒𝚗𝚐
 • 𝚜𝚎𝚕𝚕𝚒𝚔𝚊𝚗
 • 𝚜𝚎𝚕𝚕𝚋𝚎𝚜𝚒
 • 𝚜𝚎𝚕𝚕𝚎𝚖𝚊𝚜
 • 𝚜𝚎𝚕𝚕𝚍𝚖
 `)
 but = [
          { buttonId: `!mybag`, buttonText: { displayText: '🎒𝙼𝚈 𝙱𝙰𝙶' }, type: 1 }]
          sendButLocation(from, anu, `${botName}`, pp, but, {quoted: mek})
          break    

 
case 'myprofile':
case 'profile': case 'rpgmenu':

if (!isPetualang) return reply(mess.only.player)
pp = await  getBuffer(`https://telegra.ph/file/d6fb694ac76d7b10661b7.jpg`)
 reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pop = monospace(`☃️ 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
🎓 Mission
 • Mancing
 • Mining
 • Adventure
 • Quest
 `)
 but = [
          { buttonId: `!mybag`, buttonText: { displayText: '🎒𝙼𝚈 𝙱𝙰𝙶' }, type: 1 }]
          sendButLocation(from, pop, `${botName}`, pp, but, {quoted: mek})
          break       
break
case 'mybag':
case 'cekinvent': case 'myinventori':
if(!isPetualang) return reply(mess.only.player)
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
done = monospace(`🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n ♯ Name : ${pushname}\n\n ♯ Emas : ${getEmas(sender)}🪙\n ♯ Uang : $${(getBalance(sender, balance))}💰\n ♯ Besi : ${getBesi(sender)}⛓️\n ♯ Berlian : ${getDm(sender)}💎\n ♯ Ikan : ${getFish(sender)}🎣`)
but = [{ buttonId: `!adventure`, buttonText: { displayText: '🏹 𝙰𝙳𝚅𝙴𝙽𝚃𝚄𝚁𝙴' }, type: 1 }, { buttonId: `!mining`, buttonText: { displayText: '⛏️ 𝙼𝙸𝙽𝙸𝙽𝙶' }, type: 1 }, { buttonId: `!mancing`, buttonText: { displayText: '🎣  𝙼𝙰𝙽𝙲𝙸𝙽𝙶' }, type: 1 }]
  sendButton(from, done, 'Inventori User', but)
break  
  
//»»»𝘔𝘦𝘥𝘪𝘢 𝘔𝘦𝘯𝘶
 case 'toimg':  
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
  limitAdd(sender, limit)
  reply(mess.uselimit)
  reply(mess.wait)
  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await btf.downloadAndSaveMediaMessage(encmedia)
  ran = getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) return reply('Upp Sorry Failed to Convert To Sticker^_^')
  buffer = fs.readFileSync(ran)
  btf.sendMessage(from, buffer, image, {quoted: mek})
  
  fs.unlinkSync(ran)
  })
  break
case 'tourl':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  limitAdd(sender, limit)
  reply(mess.uselimit)
  
  if (
  ((isMedia && !mek.message.videoMessage) ||
  isQuotedImage ||
  isQuotedVideo) &&
  args.length == 0
  ) {
  boij =
  isQuotedImage || isQuotedVideo
  ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
  .extendedTextMessage.contextInfo
  : mek;
  reply(mess.wait)
  owgi = await btf.downloadMediaMessage(boij);
  res = await upload(owgi);
  tek = monospace(`Type : Image\nExpired : Permanent\nServer : Telegram ph\nResult : ${res}`)
  btf.sendMessage(from, tek, text, {quoted: mek});
  
  } else {
  reply("kirim/reply gambar/video");
  }
  break;	    
    case "emoji":
    case "semoji":
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  
  if (args.length < 1) return reply(`Send command *${prefix}semoji 😁`)
  limitAdd(sender, limit)
  reply(mess.uselimit)
  reply(mess.wait)
  qes = args.join(" ");
  emoji.get(`${qes}`).then((emoji) => {
  teks = `${emoji.images[4].url}`;
  sendStickerFromUrl(from, `${teks}`);  
  
  
  });
  break
case "tomp4":
  limitAdd(sender, limit)
  reply(mess.uselimit)
  if (
  ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
  args.length == 0
  ) {
  ger = isQuotedSticker
  ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
  .extendedTextMessage.contextInfo
  : mek;
  reply(mess.wait)
  owgi = await btf.downloadAndSaveMediaMessage(ger);
  webp2mp4File(owgi).then((res) => {
  sendMediaURL(from, res.result, "Done");
  
  });
  } else {
  reply("reply stiker");
  }
  fs.unlinkSync(owgi);
  break;			
	case 'attp':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
   if (!v) return reply(`Example: ${prefix + command} Hai`)
   limitAdd(sender, limit)
   reply(mess.uselimit)
   reply(mess.wait)
   buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(v)}`)
  btf.sendMessage(from, buffer, sticker, { quoted: mek })
   
    break

case 's': case 'sticker':  case 'S':
      var a = "Btf Bot";
      var b = "By mzTamvan";
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
      limitAdd(sender, limit)
   reply(mess.uselimit)
     if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
     const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
     media = await btf.downloadAndSaveMediaMessage(encmedia)
     await createExif(a,b)
     out = getRandom('.webp')
     ffmpeg(media)
     .on('error', (e) => {
     console.log(e)
     btf.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
     fs.unlinkSync(media)
})
     .on('end', () => {
     _out = getRandom('.webp')
     spawn('webpmux', ['-set','exif','./database/dbmedia/data.exif', out, '-o', _out])
     .on('exit', () => {
          btf.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out) 
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
          const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          const media = await btf.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          btf.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./database/dbmedia/data.exif', out, '-o', _out])
          .on('exit', () => {
          btf.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out)       
          } else if (isQuotedSticker){
          const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          media = await btf.downloadAndSaveMediaMessage(encmedia)
          createExif(a, b);
          modStick(media, zee, mek, from)
          } else {
          reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
          }
          
          break;
    
    
    
 
//»»»𝘚𝘵𝘰𝘳𝘢𝘨𝘦
    case 'addvideo':
  if (!isQuotedVideo) return reply('Reply videonya blokk!')
  reply(mess.wait)
  svst = body.slice(10)
  if (!svst) return reply('Nama videonya apa su?')
  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
  delb = await btf.downloadMediaMessage(boij)
  videonye.push(`${svst}`)
  fs.writeFileSync(`./database/dbmedia/video/${svst}.mp4`, delb)
  fs.writeFileSync('./database/dbmedia/video.json', JSON.stringify(videonye))
  btf.sendMessage(from, `√ 𝚂𝚄𝙲𝙲𝙴𝚂  Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
  break  
    case 'getvideo':
    reply(mess.wait)
  namastc = body.slice(10)
  buffer = fs.readFileSync(`./database/dbmedia/video/${namastc}.mp4`)
  btf.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
  break  
	case 'listvideo':
	case 'videolist':
  teks = `*List Video :*\n\n`
  for (let awokwkwk of videonye) {
  teks += `- ${awokwkwk}\n`
  }
  teks += `\n*Total : ${videonye.length}*`
  btf.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
  break
    case 'getsticker':
	case 'gets': 
   reply(mess.wait)
  namastc = body.slice(12)
  result = fs.readFileSync(`./database/dbmedia/sticker/${namastc}.webp`)
  btf.sendMessage(from, result, sticker, {quoted :mek})
  break
    case 'stickerlist':
	case 'liststicker': 
   reply(mess.wait)
  teks = `*Sticker List :*\n\n`
  for (let awokwkwk of setiker) {
	  	  teks += `- ${awokwkwk}\n`
  }
  teks += `\n*Total : ${setiker.length}*`
  btf.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
  break
    case 'addsticker':
    case 'addstiker':
  if (!isQuotedSticker) return reply('Reply stiker nya')
  svst = body.slice(12)
  if (!svst) return reply('Nama sticker nya apa?')
  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
  delb = await btf.downloadMediaMessage(boij)
	  	  setiker.push(`${svst}`)
	 	  fs.writeFileSync(`./database/dbmedia/sticker/${svst}.webp`, delb)
  fs.writeFileSync(`./database/dbmedia/stik.json`, JSON.stringify(setiker))
	  	  btf.sendMessage(from, `√ 𝚂𝚄𝙲𝙲𝙴𝚂  Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
	 	  break
    case 'addvn': 
  svst = body.slice(7)
  if (!svst) return reply('Nama audionya apa su?')
	  	  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
  delb = await btf.downloadMediaMessage(boij)
	  	  audionye.push(`${svst}`)
  fs.writeFileSync(`./database/dbmedia/audio/${svst}.mp3`, delb)
  fs.writeFileSync('./database/dbmedia/audio.json', JSON.stringify(audionye))
  btf.sendMessage(from, `√ 𝚂𝚄𝙲𝙲𝙴𝚂  Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
  break			
	case 'listvn':
	case 'vnlist': 
   	  teks = `*List Vn:*\n\n`
  for (let awokwkwk of audionye) {
  teks += `- ${awokwkwk}\n`
	  	  }
  teks += `\n*Total : ${audionye.length}*`
  btf.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
  break
    case 'getvn': 
  namastc = body.slice(7)
  buffer = fs.readFileSync(`./database/dbmedia/audio/${namastc}.mp3`)
	 	  btf.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
  break
    case 'addimage':
  if (!isQuotedImage) return reply('Reply imagenya blokk!')
  svst = body.slice(10)
  if (!svst) return reply('Nama imagenya apa su?')
  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	  delb = await btf.downloadMediaMessage(boij)
  imagenye.push(`${svst}`)
  fs.writeFileSync(`./database/dbmedia/image/${svst}.jpeg`, delb)
  fs.writeFileSync('./database/dbmedia/image.json', JSON.stringify(imagenye))
  btf.sendMessage(from, `√ 𝚂𝚄𝙲𝙲𝙴𝚂  Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
  break  
	case 'getimage':
  namastc = body.slice(10)
  buffer = fs.readFileSync(`./database/dbmedia/image/${namastc}.jpeg`)
  btf.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
  break  
    case 'imglist':
	case 'listimg':
  teks = `*List Image :*\n\n`
  for (let awokwkwk of imagenye) {
  teks += `- ${awokwkwk}\n`
  }
  teks += `\n*Total : ${imagenye.length}*`
  btf.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
	 	  break  
//»»»𝘊𝘰𝘯𝘷𝘦𝘳𝘵𝘦𝘳  
    case 'tovn':   
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  if (!isQuotedAudio) return reply('Reply Audionya')
  reply(mess.wait)
  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await btf.downloadAndSaveMediaMessage(encmedia)
  ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) return reply('Gagal mengkonversi audio ke ptt')
  topt = fs.readFileSync(ran)
  btf.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
  
  })
  break		   
    case "tomp3":   
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isQuotedVideo) return reply("Reply videonya!");
  limitAdd(sender, limit)
   reply(mess.uselimit)
  reply(mess.wait);
  encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
  .message.extendedTextMessage.contextInfo;
  media = await btf.downloadAndSaveMediaMessage(encmedia);
  ran = getRandom(".mp4");
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media);
  if (err) return fakegroup(`Err: ${err}`);
  buffer453 = fs.readFileSync(ran);
  btf.sendMessage(from, buffer453, audio, {
  mimetype: "audio/mp4",
  quoted: mek,
  });  
  fs.unlinkSync(ran);
  
  });
  break;  
    case "fast":    
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  if (!isQuotedVideo) return reply("Reply videonya!");
  reply(mess.wait);
  encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
  .message.extendedTextMessage.contextInfo;
  media = await btf.downloadAndSaveMediaMessage(encmedia);
  ran = getRandom(".mp4");
  exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
  (err) => {
  fs.unlinkSync(media);
  if (err) return fakegroup(`Err: ${err}`);
  buffer453 = fs.readFileSync(ran);
  btf.sendMessage(from, buffer453, video, {
  mimetype: "video/mp4",
  quoted: mek,
  });
  fs.unlinkSync(ran);
  
  }
  );
  break;
    case "slow":    
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isQuotedVideo) return reply("Reply videonya!");
  limitAdd(sender, limit)
   reply(mess.uselimit)
  reply(mess.wait);
  encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
  .message.extendedTextMessage.contextInfo;
  media = await btf.downloadAndSaveMediaMessage(encmedia);
  ran = getRandom(".mp4");
  exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
  (err) => {
  fs.unlinkSync(media);
  if (err) return fakegroup(`Err: ${err}`);
  buffer453 = fs.readFileSync(ran);
  btf.sendMessage(from, buffer453, video, {
  mimetype: "video/mp4",
  quoted: mek,
  });
  fs.unlinkSync(ran);
 
  }
  );
  break;
    case "reverse":    
  if (!isQuotedVideo) return reply("Reply videonya!");
  reply(mess.wait)
  encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
  .message.extendedTextMessage.contextInfo;
  media = await btf.downloadAndSaveMediaMessage(encmedia);
   limitAdd(sender, limit)
   reply(mess.uselimit)
  ran = getRandom(".mp4");
  exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
  fs.unlinkSync(media);
  if (err) return fakegroup(`Err: ${err}`);
  buffer453 = fs.readFileSync(ran);
  btf.sendMessage(from, buffer453, video, {
  mimetype: "video/mp4",
  quoted: mek,
  });
  fs.unlinkSync(ran);
  
  
  
  });
  break;  
    case 'bass':     
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isQuotedAudio) return reply('Reply Audionya')
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
	   	  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await btf.downloadAndSaveMediaMessage(encmedia)
  ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return reply('Error!')
  hah = fs.readFileSync(ran)
  btf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
  fs.unlinkSync(ran)
  
  })
  break
    case 'nightcore':    
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  	  if (!isQuotedAudio) return reply('Reply Audionya')
   reply(mess.wait)
   limitAdd(sender, limit)
   reply(mess.uselimit)
  night = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  core = await btf.downloadAndSaveMediaMessage(night)
  ran = getRandom('.mp3')
  reply(mess.wait)
  exec(`ffmpeg -i ${core} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(core)
  if (err) return reply('Error!')
  hah = fs.readFileSync(ran)
  btf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek, ptt: true})
  fs.unlinkSync(ran)
  
  })
  break
    case 'gemuk':    
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isQuotedAudio) return reply('Reply Audionya')
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await btf.downloadAndSaveMediaMessage(encmedia)
  ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return reply('Error!')
  hah = fs.readFileSync(ran)
  btf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
  fs.unlinkSync(ran)
  
  
	 	  })
  break
    case 'tupai':   
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isQuotedAudio) return reply('Reply Audionya')
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await btf.downloadAndSaveMediaMessage(encmedia)
  ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return reply('Error!')
  hah = fs.readFileSync(ran)
  btf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
  fs.unlinkSync(ran)
  
  })
  break
    case 'slow2':    
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isQuotedAudio) return reply('Reply Audionya')
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await btf.downloadAndSaveMediaMessage(encmedia)
  ran = getRandom('.mp3')
    exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return reply('Error!')
  hah = fs.readFileSync(ran)
  btf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
  fs.unlinkSync(ran)
  
  
  })
  break   
  
//»»»𝘚𝘦𝘢𝘳𝘤𝘩𝘪𝘯𝘨 𝘔𝘦𝘯𝘶
    case 'gimage':
    case 'googleimage':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (args.length < 1) return reply('Apa Yang Mau Dicari?')
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  teks = args.join(' ')
  res = await googleImage(teks, google)
  function google(error, result){
  if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
  else {
  var gugImg = result
  var akhir =  gugImg[Math.floor(Math.random() * gugImg.length)].url
  sendFileFromUrl(akhir, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
  
  }
  }
  break 
    case 'pinterest':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if(!v) return reply(`Antum Mau Nyari Gambar Ape? Contoh ${prefix}pinterest waifu ayasaka`)
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  pin = await hx.pinterest(v)
  ac = pin[Math.floor(Math.random() * pin.length)]
  di = await getBuffer(ac)
  but = [
   { buttonId: `${prefix + command} ${v}`, buttonText: { displayText: '𝙽𝙴𝚇𝚃 ⋟' }, type: 1 }]
  sendButImage(from, `pinterest ${v}`, `Klik Next Ngab`, di, but)
  
  break
    case 'lirik':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (args.length < 1) return reply("Apa Yang Mau Di Cari? ")
  limitAdd(sender, limit)
   reply(mess.uselimit)
  reply(mess.wait)
  teks = body.slice(7)
  lirikLagu(teks).then((res) => {
  let lirik = monospace(`❒「  SEARCH LIRIK  」\n└ Lirik Lagu :\n\n${res[0].result}\n`)
  reply(lirik)
  
  })
  break
case 'ytsearch': case 'yts':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (args.length < 1) return reply('Yang mau di cari apaan?')
  limitAdd(sender, limit)
   reply(mess.uselimit)
  teks = args.join(' ')
  reply(mess.wait)
  res = await yts(`${teks}`)
  kant = ``
  for (let i of res.videos) {
  kant += monospace(`❒「  YtSearch  」\n♯ Judul : ${i.title}\n♯ Views : ${i.views}\n♯ Di Upload Pada : ${i.ago}\n♯ Durasi : ${i.timestamp}\n♯ Channel : ${i.author.name}\n♯ Link Video : ${i.url}\n\n\n`)
  }
  var akhir = kant.trim()
  sendFileFromUrl(res.all[0].image, image, {quoted: troli, caption: akhir})
  
  break  
    case 'ranime': case 'random':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (args.length < 1) return reply('Apa Yang Mau Dicari?\nContoh #ranime sarada')
  if (args.length > 1) return reply('Hanya Satu Kata!! Contoh #ranime naruto')
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  let im = await hx.chara(v)
  let acak = im[Math.floor(Math.random() * im.length)]
  let li = await getBuffer(acak)   
  but = [
   { buttonId: `${prefix + command} ${v}`, buttonText: { displayText: '𝙽𝙴𝚇𝚃 ⋟' }, type: 1 }]
  sendButImage(from, `${v}`, `Klik Next Ngab`, li, but)
  
  break
  
  
//»»»𝘛𝘰𝘰𝘭𝘴 𝘔𝘦𝘯𝘶  				
    case "jadibot":
/*  if (isBanned) return reply(mess.banned)
  if (isGroup) return reply(`𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚙𝚛𝚒𝚟𝚊𝚝𝚎 𝚌𝚑𝚊𝚝 𝚍𝚎𝚗𝚐𝚊𝚗 𝚋𝚘𝚝, 𝙹𝚊𝚗𝚐𝚊𝚗 𝚍𝚒𝚍𝚊𝚕𝚊𝚖 𝚐𝚛𝚘𝚞𝚙`)
  limitAdd(sender, limit)
  reply(mess.uselimit)
  reply(`𝙼𝚎𝚗𝚓𝚊𝚍𝚒 𝚋𝚘𝚝 𝚜𝚎𝚖𝚎𝚗𝚝𝚊𝚛𝚊, 𝙶𝚞𝚗𝚊𝚔𝚊𝚗 𝙳𝚎𝚗𝚐𝚊𝚗 𝙱𝚒𝚓𝚊𝚔`)
   //   if (!isOwner && !mek.key.fromMe) return (mess.only.owner)
  if (mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
  jadibot(reply, btf, from);
*/
  reply(`𝙼𝚘𝚑𝚘𝚗 𝙼𝚊𝚊𝚏 𝙵𝚒𝚝𝚞𝚛 𝚜𝚊𝚊𝚝  𝚒𝚗𝚒 𝚔𝚊𝚖𝚒 𝙼𝚊𝚝𝚒𝚔𝚊𝚗 🙏\n_𝚂𝚘𝚛𝚛𝚢 𝚃𝚑𝚒𝚜 𝙵𝚎𝚊𝚝𝚞𝚛𝚎 𝙷𝚊𝚜 𝚋𝚎𝚗 𝙳𝚎𝚕𝚎𝚝𝚎𝚍_`)
  
  break;
    case "stopjadibot":
  if (mek.key.fromMe)
  return reply("tidak bisa stopjadibot kecuali owner");
  stopjadibot(reply);
  break;
    case "listjadibot":
  let tekss = "「 *LIST JADIBOT* 」\n";
  for (let i of listjadibot) {
  tekss += `*Nomor* : ${i.jid.split("@")[0]}\n*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`;
  }
  reply(tekss);
  break;	
    case 'ssweb': case 'ss':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (args.length < 1) return reply('Urlnya mana kak..')
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
   anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${v}`)
  buff = await getBuffer(anu.screenshot)
  btf.sendMessage(from, buff, image, {quoted: mek, caption : v})
  
  break      
  
//»»»𝘋𝘰𝘸𝘭𝘰𝘢𝘥𝘦𝘳 𝘔𝘦𝘯𝘶   				
case 'play':
  if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
  reply('𝙱𝚎𝚗𝚝𝚊𝚛 𝚖𝚊𝚜𝚣𝚎𝚎𝚑 𝚕𝚊𝚐𝚒 𝚗𝚢𝚊𝚛𝚒𝚒 ......')
  limitAdd(sender, limit)
   reply(mess.uselimit)
  let yut = await yts(v)
  yta(yut.videos[0].url)     
  .then(async(res) => {
  var { thumb, title, filesizeF, filesize } = res
  var capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁\n•💬 Judul : ${yut.all[0].title}\n•🎥 ID Video : ${yut.all[0].videoId}\n•⏰️ Diupload Pada : ${yut.all[0].ago}\n•👁️️ Views : ${yut.all[0].views}\n•▶️ Durasi : ${yut.all[0].timestamp}\n•📍 Channel : ${yut.all[0].author.name}\n•🔗 Link Channel : ${yut.all[0].author.url}\n•⚡ Link Video : ${yut.videos[0].url}`
  
  ya = await getBuffer(thumb)
  py =await btf.prepareMessage(from, ya, image)   
  but = [
  { buttonId: `!ytmp3 ${yut.videos[0].url}`, buttonText: { displayText: '「 🎵 𝙰𝚄𝙳𝙸𝙾  」' }, type: 1 },
  { buttonId: `!ytmp4 ${yut.videos[0].url}`, buttonText: { displayText: '「 🎥 𝚅𝙸𝙳𝙴𝙾 」' }, type: 1 }
  ]
  
  sendButLocation(from, capti, `\n${p}Silakan pilih type unduhan${p}`, ya, but, {quoted: mek})})
  
  break  
  

case 'ytmp4':
  if (args.length < 1) return reply('Link?')     
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  result_data = await fetchJson(`https://apibtf.herokuapp.com/api/download/ytmp4?url=${v}&apikey=${btfkey}`)
  result = result_data.result
  pp = await getBuffer(result.thumb)  
  ini_txt = `𝚂𝚞𝚌𝚌𝚎𝚜 𝙶𝚎𝚝 𝙳𝚊𝚝𝚊\n\n`
  ini_txt += `*📕 𝙹𝚞𝚍𝚞𝚕 : ${result.title}*\n`
  ini_txt += `*💿 𝙲𝚑𝚊𝚗𝚗𝚎𝚕 : ${result.channel}*\n`
  ini_txt += `*🎞️ 𝚅𝚒𝚎𝚠𝚜 : ${result.views} 𝙾𝚛𝚊𝚗𝚐*\n`  
  ini_txt += `*🗓️ 𝚄𝚙𝚕𝚘𝚊𝚍 𝚘𝚗 : ${result.published}*\n`  
  ini_txt += `*𝙿𝚕𝚎𝚊𝚜𝚎  𝚆𝚊𝚒𝚝 𝚜𝚘𝚖𝚎 𝚖𝚒𝚗𝚞𝚝𝚎𝚜*\n`    
  ini_txt += `*⚠️𝙹𝚒𝚔𝚊 𝙵𝚒𝚕𝚎 𝚃𝚒𝚍𝚊𝚔 𝚝𝚎𝚛𝚔𝚒𝚛𝚒𝚖 𝚋𝚎𝚛𝚊𝚛𝚝𝚒 𝙵𝚒𝚕𝚎 𝚝𝚎𝚛𝚕𝚊𝚕𝚞 𝚋𝚎𝚜𝚊𝚛  𝚊𝚝𝚊𝚞 𝙴𝚛𝚛𝚘𝚛*\n`
  
  btf.sendMessage(from, { contentText: `${ini_txt}`, footerText: `*${tanggal()}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail:  pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage') 
  ini_vid = await getBuffer(result.url)
  await btf.sendMessage(from, ini_vid, video, { mimetype: 'video/mp4', filename: `${result.title}.mp4`, quoted: mek })
  
  break
case 'ytmp3':
  if (args.length < 1) return reply('Link?')   
  reply(mess.wait)  
  limitAdd(sender, limit)
  reply(mess.uselimit)
  result_data = await fetchJson(`https://apibtf.herokuapp.com/api/download/ytmp3?url=${v}&apikey=${btfkey}`)
  result = result_data.result
  pp = await getBuffer(result.thumb)  
  ini_txt = `𝚂𝚞𝚌𝚌𝚎𝚜 𝙶𝚎𝚝 𝙳𝚊𝚝𝚊\n\n`
  ini_txt += `*📕 𝙹𝚞𝚍𝚞𝚕 : ${result.title}*\n`
  ini_txt += `*💿 𝙲𝚑𝚊𝚗𝚗𝚎𝚕 : ${result.channel}*\n`
  ini_txt += `*🎞️ 𝚅𝚒𝚎𝚠𝚜 : ${result.views} 𝙾𝚛𝚊𝚗𝚐*\n`  
  ini_txt += `*🗓️ 𝚄𝚙𝚕𝚘𝚊𝚍 𝚘𝚗 : ${result.published}*\n`  
  ini_txt += `*𝙿𝚕𝚎𝚊𝚜𝚎  𝚆𝚊𝚒𝚝 𝚜𝚘𝚖𝚎 𝚖𝚒𝚗𝚞𝚝𝚎𝚜*\n`    
  ini_txt += `*⚠️𝙹𝚒𝚔𝚊 𝙵𝚒𝚕𝚎 𝚃𝚒𝚍𝚊𝚔 𝚝𝚎𝚛𝚔𝚒𝚛𝚒𝚖 𝚋𝚎𝚛𝚊𝚛𝚝𝚒 𝙵𝚒𝚕𝚎 𝚝𝚎𝚛𝚕𝚊𝚕𝚞 𝚋𝚎𝚜𝚊𝚛  𝚊𝚝𝚊𝚞 𝙴𝚛𝚛𝚘𝚛*\n`
  
  btf.sendMessage(from, { contentText: `${ini_txt}`, footerText: `*${tanggal()}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail:  pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage') 
 ini_vid = await getBuffer(result.url)
  await btf.sendMessage(from, ini_vid, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: mek})   
break 
 




case 'tiktoknowm': 
case 'tiktok':  	    
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  limitAdd(sender, limit)
  reply(mess.uselimit)
   if (!v) return reply(`𝙻𝚒𝚗𝚔𝚗𝚢𝚊 𝚖𝚊𝚗𝚊 𝚔𝚊𝚔𝚊`)
   reply(mess.wait)
  anu = await fetchJson(`https://apibtf.herokuapp.com/api/download/tiktok?url=${v}&apikey=btf`)
    nowm = await getBuffer(anu.result.nowatermark)
  btf.sendMessage(from, nowm, video, {caption:`Done kak`, thumbnail:Buffer.alloc(0), quoted:troli})
  
  break
  
case "twitter":
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
   if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
   return reply(mess.error.url);
   if (!v) return fakegroup("Linknya?");
   limitAdd(sender, limit)
   reply(mess.uselimit)
   reply(mess.wait)
   ten = args[0];
   var res = await hx.twitter(`${ten}`);
   ren = `${g.HD}`;
   sendMediaURL(from, ren, "Nih kak video nya!!");
   
   break;
 case "facebook":
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
   if (!v) return reply("Linknya?");
   limitAdd(sender, limit)
   reply(mess.uselimit)
   reply(mess.wait)
   if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
   return reply(mess.error.url);
   te = args.join(" ");
   hx.fbdown(`${te}`).then((G) => {
   ten = `${G.HD}`;
   sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
   
   });
   break;
     case "instagram":
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  //  if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
   //return reply(mess.error.url);
   if (!v) return reply(mess.nolink)
   reply(mess.wait)
   limitAdd(sender, limit)
   reply(mess.uselimit)
   hx.igdl(args[0]).then(async (result) => {
   for (let i of result.medias) {
   if (i.url.includes("mp4")) {
   let link = await getBuffer(i.url);
   btf.sendMessage(from, link, video, {
   quoted: mek,
   caption: `𝙳𝚘𝚗𝚎 𝚔𝚊𝚔`,
   });
   } else {
   let link = await getBuffer(i.url);
   btf.sendMessage(from, link, image, {
   quoted: mek,
   caption: `𝙳𝚘𝚗𝚎  𝙺𝚊𝚔`,
   });
   }
   }
   });
   
   
   break;    
case 'mediafire':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isPremium) return reply(mess.only.premium)
  if (args.length < 1) return reply('Link Nya Mana? ')
  limitAdd(sender, limit)
  reply(mess.uselimit)
  //  if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
  reply(mess.wait)
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = monospace(`❒「  MediaFire  」\n• Nama : ${res[0].nama}\n• Ukuran : ${res[0].size}\n• Link : ${res[0].link}`)
  but = [
   { buttonId: `!dwd`, buttonText: { displayText: '⇩ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳' }, type: 1 }]
  sendButton(from, result, '𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛 ', but, troli)
  break
  case 'dwd':
  limitAdd(sender, limit)
  sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})  
  break  

//+++Random
    case 'waifu': case 'loli': case 'husbu': case 'milf': case 'cosplay': case 'wallml':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  limitAdd(sender, limit)
  reply(mess.uselimit)
  reply(mess.wait)
  let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
  let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
  fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
    	  var bb = await btf.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
  var buttonnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: '𝙽𝙴𝚇𝚃 ≽'}, type: 1}]
  var ButtonssMessages = {
  contentText: `*Antum Birahi Dengan ${command}!Tobat Brother*`,
  buttons: buttonnsss,
  footerText: `Klik Next Untuk Melanjutkan`,
  headerType: 4,
  imageMessage: bb.message.imageMessage
  }
  await btf.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : mek})
  fs.unlinkSync(`./${sender}.jpeg`)
  
  break  
/*»»»𝘔𝘢𝘬𝘦𝘳 𝘔𝘦𝘯𝘶  
case 'naruto': case 'loli':
case 'husbu': case 'milf': 
case 'cosplay': case 'nekonime':
case 'shota': case 'wallml':
case 'akira': case 'akiyama':
case 'ana': case 'asuna':
case 'ayuzawa': case 'boruto':
case 'chiho': case 'chitoge':
case 'deidara': case 'eba':
case 'elaina': case 'emilia':
case 'erza': case 'gremory':
case 'hestia': case 'hinata':
case 'isuzu': case 'itachi':
case 'itori':  case 'kagura':
case 'kakasih':  case 'kaori':
case 'kaneki': case 'kotori':
case 'kurumi': case 'madara':
case 'mikasa':  case 'miku': 
case 'minato': case 'nezuko':
case 'rize':  case 'sagiri':
case 'sakura': case 'sasuke':
case 'shina': case 'shinka': 
case 'shinomiya': case 'shizuka':
case 'tejina': case 'toukachan':
case 'tsunade': case 'yotsuba':
case 'yuki': case 'yumeko':
case 'fanart': case 'nino':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
limitAdd(sender, limit)
reply(mess.uselimit)
reply(mess.wait)  
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/anime/${command}?apikey=${dhakey}`)
Teks = `𝙳𝚘𝚗𝚎 𝚖𝚊𝚣𝚜𝚎𝚎𝚑`
sendButImage(from, Teks, `*${botName}*`, buffer, [  
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `𝙽𝙴𝚇𝚃  ≽`,
},
type: 1,
},
]);

break



  // Textprome //
  case 'blackpink':
case 'halloween':
case 'halloween2':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'snow':
case 'cloud':
case 'neondevil':
case 'neon':
case 'glowingneonlight':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case '3dstone':
case 'futuristic':
case 'sketch':
case 'bluecircuit':
case 'space':
case 'magmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorror':
case 'horrorgift':
case 'hotmetal':
case 'erodedmetal':
case '3dglowingmetal':
case 'blackmetal':
case 'bluemetal':
case 'shynimetal':
case 'rustymetal':
case 'metalpurple':
case 'metalrainbow':
case 'metaldarkgold':
case 'colorfullluxurymetal':
case 'glossybluemetal':
case '3dglossymetal':
case 'metallic':
case 'glossymetallic':
case 'christmastree':
case 'sparklesmerrychristmas':
case 'countryflag3d':
case 'americanflag3d':
case '3dscfi':
case '3drainbow':
case '3dwaterpipe':
case '3dchrome':
case 'bluegem':
case 'purplegem':
case 'pinkcandy':
case 'transformer':
case 'berry':
case 'brokenglass':
case '3drealistic':
case '3dunderwater':
case 'writeinsandsummerbeach':
case 'sandwriting':
case 'foilballoon':
case '3dglue':
case '1917':
case 'minion':
case 'doubleexposure':
case 'holographic3d':
case 'deluxegold':
case 'deluxesilver':
case 'glossycarbon':
case 'fabric':
case 'xmascards3d':
case 'wicker':
case 'fireworksparkle':
case 'skeleton':
case 'ultragloss':
case 'denim':
case 'decorategreen':
case 'peridot':
case 'rock':
case 'lava':
case 'rainbowequalizer':
case 'purpleglass':
case 'decorativeglass':
case 'chocolatecake':
case 'strawberry':
case 'koifish':
case 'bread':
case '3dbox':
case 'freeadvancedglow':
case 'honey':
case 'marble':
case 'marbleslabs':
case 'icecold':
case 'fruitjuice':
case 'abstragold':
case 'biscuit':
case 'bagel':
case 'wood':
case 'hexagolden':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=${dhakey}&text=${teks}`)
oke = await getBuffer(anu.result)
btf.sendMessage(from, oke, image, {quoted: mek, caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`})

break
case 'hartatahta': 
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
harta = await getBuffer(`https://apidhani.herokuapp.com/api/maker/harta-tahta?apikey=${dhakey}&text=${teks}`)
btf.sendMessage(from, harta, image, {quoted: mek, caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`})

break

//----> 2 TEXT <----//

case '8bit':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'pornhub':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'glitch':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'glitch2':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'layered':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case '3dsteel':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'realistic':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'lionlogo':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'ninjalogo':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'wolf':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'wolf2':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(6)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'halloween3':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween3?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'marvel':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'marvel2':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'cinematichorror':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(16)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'avengers':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'graffiti3':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'captainamerica':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(15)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'girlneko':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/girlneko?apikey=${dhakey}&text=${F1}&text2=${F2}`)
btf.sendMessage(from, girlneko, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'sadboy':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=${dhakey}&text=${F1}&text2=${F2}`)
btf.sendMessage(from, girlneko, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'makerkaneki':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(12)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/kaneki?apikey=${dhakey}&text=${F1}&text2=${F2}`)
btf.sendMessage(from, girlneko, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'rem':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(4)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/rem?apikey=${dhakey}&text=${F1}&text2=${F2}`)
btf.sendMessage(from, girlneko, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'lolimaker':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/lolimaker?apikey=${dhakey}&text=${F1}&text2=${F2}`)
btf.sendMessage(from, girlneko, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
case 'gura':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/gura?apikey=${dhakey}&text=${F1}&text2=${F2}`)
btf.sendMessage(from, girlneko, image, {caption: `*𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚊𝚔  𝙻𝚘𝚐𝚘𝚗𝚢𝚊 ☕︎☕︎☕︎*`, quoted: mek})

break
*/
//MAKER V2
case "buatquotes" :
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
limitAdd(sender,limit)
reply(mess.uselimit)
hasil =  await getBuffer(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${v}&apikey=MIMINGANZ`)
qtsm = `𝙽𝚒𝚑 𝚖𝚊𝚣𝚜𝚎𝚎𝚑/𝚖𝚋𝚊𝚔𝚎𝚑𝚑 *${pushname}*`

btf.sendMessage(from, hasil, image, {caption: `${qtsm}\n\n${botName}`, quoted: mek})

break

/*KATA KATA MENUNYA*/
case 'faktaunik':
case 'katailham':
case 'katasindiran':
case 'katabucin':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
limitAdd(sender,limit)
reply(mess.uselimit)
oke = await fetchJson(`https://leyscoders-api.herokuapp.com/api/${command}?apikey=MIMINGANZ`)
kta = (oke.result)
gas = `「 ${command} 」▷▷ \n\n ${kta}`
sendButMessage(from, gas, `Klik Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ ≽`,
},
type: 1,
},]);


break;


case 'pantun':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
limitAdd(sender,limit)
reply(mess.uselimit)
oke = await fetchJson(`https://leyscoders-api.herokuapp.com/api/pantun-pakboy?apikey=MIMINGANZ`)
kta = (oke.result)
gas = `「 𝙿𝙰𝚃𝚄𝙽 𝙽𝙸𝙷 𝙱𝙾𝚂𝚂」▷▷ \n\n ${kta}`
sendButMessage(from, gas, `Klik Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ ≽`,
},
type: 1,
},]);
break;

case 'cecan':
case 'cogan':
case 'cecan2':
case 'cogan2':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/cecan/${command}?apikey=${dhakey}`)
Teks = `𝙽𝚒𝚑 𝚖𝚊𝚣𝚜𝚎𝚎𝚑/𝚖𝚋𝚊𝚔𝚎𝚑𝚑 *${pushname}* 𝙹𝚊𝚗 𝙿𝚎𝚗𝚐𝚎𝚗, 𝚂𝚘𝚊𝚕𝚗𝚢𝚊 𝚕𝚞 𝚐𝚊 𝚐𝚘𝚘𝚍𝚕𝚘𝚔𝚒𝚗𝚐`
sendButImage(from, Teks, `*${botName}*`, buffer, [{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `𝙽𝙴𝚇𝚃  ≻`,
},
type: 1,
},
]);


break
case 'ppcp':
case 'ppcouple':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
limitAdd(sender,limit)
reply(mess.uselimit)
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomimage/ppcouple?apikey=${dhakey}`)
cowo = await getBuffer(anu.result.male)
Cowok = `𝙻𝚊𝚔𝚒𝚗𝚢𝚊  𝚔𝚊𝚔`
sendButImage(from, Cowok, `*${botName}*`, cowo, [  
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `𝙽𝙴𝚇𝚃  ≻`,
},
type: 1,
},
]);
cewe = await getBuffer(anu.result.female)
Cewek = `𝙲𝚎𝚠𝚎𝚗𝚢𝚊 𝚔𝚊𝚔`
sendButImage(from, Cewek, `*${botName}*`, cewe, [  
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `𝙽𝙴𝚇𝚃  ≻`,
},
type: 1,
},
]);


break
case 'meme':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomimage/meme?apikey=${dhakey}`)
buffer = await getBuffer(anu.result.url)
Teks = `𝚄𝚌𝚑𝚑𝚑𝚑𝚑𝚑𝚑𝚑`
sendButImage(from, Teks, `*${botName}*`, buffer, [  
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `𝙽𝙴𝚇𝚃  ≻`,
},
type: 1,
},
]);

break

case 'wallpaperhacker':
case 'wallpaperhacker2':
case 'wallpaperharley':
case 'wallpaperjoker':
case 'wallpaperpubg':
case 'wallpaperhp':
case 'wallpaperhp2':
case 'wallpaperkpop':
case 'wallpaperblackpink':
case 'wallpapergame':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
Teks = `𝚃𝚞𝚑𝚔𝚊𝚔 𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛𝚗𝚢𝚊`
sendButImage(from, Teks, `*${botName}*`, buffer, [  
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `𝙽𝙴𝚇𝚃  ≻`,
},
type: 1,
},
]);

break

case 'quotesimage':
case 'katakataimage':
case 'renungan':
case 'memeindo':
case 'aesthetic':
case 'yulibocil':
case 'doraemon':
case 'pokemon':
case 'pentol':
case 'tatasurya':
case 'kartun':
case 'anjing':
case 'kucing':
case 'satanic':
case 'boneka':
case 'mobil':
case 'motor':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
Teks = `𝙳𝚊𝚑 𝚓𝚊𝚍𝚒 𝚖𝚊𝚜𝚣𝚎𝚎𝚎𝚑`
sendButImage(from, Teks, `*${botName}*`, buffer, [  
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `𝙽𝙴𝚇𝚃  ≻`,
},
type: 1,
},
]);
break








case 'quotesali':
anu = await fetchJson(`https://apibtf.herokuapp.com/api/random/quotesali?apikey=${btfkey}`)
limitAdd(sender,limit)
reply(mess.uselimit)
qt = anu.Quotes
hoy = `*⌨𝚀𝚄𝙾𝚃𝙴𝚂 𝙰𝙻𝙸 𝙱𝙸𝙽  𝙰𝙱𝙸 𝚃𝙷𝙰𝙻𝙸𝙱*\n\n ◈${qt}◈`
reply(hoy)
break

case  'wikipedia':
if (!v) return  reply(`𝙼𝚊𝚞 𝚌𝚊𝚛𝚒 𝚊𝚙𝚊𝚊𝚗 𝚙𝚊𝚘𝚔?`)
limitAdd(sender,limit)
reply(mess.uselimit)
reply(mess.wait)
anu = await fetchJson(`https://myselfff.herokuapp.com/docs/random/wikipedia?query=${v}`)
wki = `*◩ 𝚆𝙸𝙺𝙸𝙿𝙴𝙳𝙸𝙰 ◩*\n\n*🔎 𝙿𝚎𝚗𝚌𝚊𝚛𝚒𝚊𝚗  : ${v}*\n*📄 𝙷𝚊𝚜𝚒𝚕 𝚙𝚎𝚗𝚌𝚊𝚛𝚒𝚊𝚗 :*\n\n ${anu.result.list}`
reply(wki)
break

case 'brainly':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
if (!v) return  reply(`𝙼𝚊𝚞 𝚃𝚊𝚗𝚢𝚊 𝚊𝚙𝚊𝚊𝚗 𝚙𝚊𝚘𝚔?`)
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
pp = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgUoRaYRwnXOPGAmx1PB8VbumD3S3-nSW-Q&usqp=CAU`)
/*brainly(args.join(" ")).then(res => {
hmm = '────────────\n'
for (let F of res.data) {*/


anu = await fetchJson(`https://api.xteam.xyz/brainly?soal=${v}&APIKEY=c99b34dfe5d32be1`)
brnly = `\n*『 _𝙱𝚁𝙰𝙸𝙽𝙻𝚈_ 』*\n\n*≽ 🔎 𝙿𝙴𝚁𝚃𝙰𝙽𝚈𝙰𝙰𝙽 :* ${anu.soal}\n\n*≽ 📖 𝙹𝙰𝚆𝙰𝙱𝙰𝙽 :* ${anu.jawaban}\n───────────\n`


btf.sendMessage(from, { contentText: `${brnly}`, footerText: `*${tanggal()}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail:  pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')

console.log(anu.jawaban)
     break    


//++Menunya  
    case 'allmenu': case 'm2':
  let q = 0
  pp = monospace(`𝙼𝚘𝚑𝚘𝚗 𝙼𝚊𝚊𝚏 𝙵𝚒𝚝𝚞𝚛 𝚒𝚗𝚒  𝙱𝚎𝚕𝚞𝚖 𝙵𝚒𝚡,  𝙰𝚞𝚝𝚑𝚘𝚛 𝚖𝚊𝚕𝚎𝚜 𝚗𝚐𝚘𝚍𝚒𝚗𝚐`)  
  but = [
   { buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 },
   { buttonId: `!owner`, buttonText: { displayText: '👼 𝙰𝚄𝚃𝙷𝙾𝚁' }, type: 1 }]
  sendButton(from, pp, 'Created By Butterfly', but, troli)
  break  

case 'owner':
vcard3 = 'BEGIN:VCARD\n' +
    'VERSION:3.0\n' +
    'N:Sy;Bot;;;\n' +
    `FN:${ownerName}\n` +
    `item1.TEL;waid=${ownerNumber}:${ownerNumber}\n` +
    `item1.X-ABLabel:👑 𝙲𝚛𝚎𝚊𝚝𝚘𝚛\n` +
    `item2.EMAIL;type=INTERNET:botcwt@gmail.com\n` +
    `item2.X-ABLabel:📧 Email\n` +
    `item3.URL:http://butterply.ezyro.com/\n` +
    `item3.X-ABLabel:⚙️ Web Owner\n` +
    `item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
    `item4.X-ABADR:ac\n` +
    `item4.X-ABLabel:🌍 Region\n` +
    `item5.X-ABLabel:⚔️ 𝙱𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢 - 𝙱𝚘𝚝 𝙾𝚠𝚗𝚎𝚛\n` +
    'END:VCARD'.trim()
btf.sendMessage(from, {displayName: `𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 𝙱𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢`, vcard: vcard3}, contact, 
{ quoted: troli, 
})
break

  
  
///ISLAMMENU   
case 'kisahnabi': case 'kisah': case 'nabi':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
 limitAdd(sender,limit)
reply(mess.uselimit)
if (!v) return reply(`𝙼𝚊𝚞 𝚌𝚊𝚛𝚒 𝚔𝚒𝚜𝚊𝚑 𝙽𝚊𝚋𝚒 𝚂𝚒𝚊𝚙𝚊 ?`)
pp  = await getBuffer(`https://www.bukukita.com/babacms/displaybuku/109595_f.jpg`)  
anu =  await  fetchJson(`https://apibtf.herokuapp.com/api/muslim/kisahnabi?nabi=${v}&apikey=${btfkey}`) 
hasil  = anu.result
kisah = `
*彡 𝙺𝙸𝚂𝙰𝙷 25  𝙽𝙰𝙱𝙸*

*≽  𝙽𝚊𝚖𝚊 𝙽𝚊𝚋𝚒               :  ${hasil.name}*
*≽  𝙺𝚎𝚕𝚊𝚑𝚒𝚛𝚊𝚗             :  ${hasil.kelahiran}*
*≽  𝚄𝚜𝚒𝚊 𝚆𝚊𝚏𝚊𝚝            :  ${hasil.wafat_usia}*
*≽  𝚃𝚎𝚖𝚙𝚊𝚝 𝚂𝚒𝚗𝚐𝚐𝚊𝚑  :  ${hasil.singgah}*
                  *≽ 𝙺𝚒𝚜𝚊𝚑 ≼*

${hasil.kisah}

`
btf.sendMessage(from, { contentText: `${kisah}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')  

break    
   
  
  
case 'premium':
prm = `𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚙𝚖 𝙾𝚠𝚗𝚎𝚛 𝚞𝚗𝚝𝚞𝚔 𝙼𝚎𝚗𝚓𝚊𝚍𝚒 𝚙𝚛𝚎𝚖𝚒𝚞𝚖 𝚞𝚜𝚎𝚛 *.𝚘𝚠𝚗𝚎𝚛*` 
reply(prm)
break;
  



/*case 'oton':
   reply(mess.wait)
  anu = await fetchJson(`https://api.olabdev.my.id/api/otakudesu-ongoing?apikey=cmMADEe5`)
  hh = anu.result
  ok = hh[Math.floor(Math.random() * hh.length)]
  pp = await getBuffer(oke.thumbnail)
 menu =`
彡 𝙾𝚃𝙰𝙺𝚄𝙳𝙴𝚂𝚄 𝙾𝙽 𝙶𝙾𝙸𝙽𝙶 彡

--≻ 𝙹𝚄𝙳𝚄𝙻  :  ${ok.judul}
--≻ 𝙴𝙿𝙸𝚂𝙾𝙳𝙴 :  ${ok.episode}
--≻ 𝙷𝙰𝚁𝙸  :  ${ok.hari}
--≻ 𝚃𝙰𝙽𝙶𝙶𝙰𝙻 :  ${ok.tanggal}
`
btf.sendMessage(from, { contentText: `${menu}`, footerText: `© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')

 but = [
  { buttonId: `!owner`, buttonText: { displayText: '𝙰𝚄𝚃𝙷𝙾𝚁' }, type: 1 },
  { buttonId: `!infosc`, buttonText: { displayText: '𝙸𝙽𝙵𝙾 𝚂𝙲' }, type: 1 }
  ]
  sendButLocation(from, menu, `\n${p}${wib} || ${tanggal()}${p}`, tamnl, but, {quoted: mek})
  break  

break
*/


case 'fancy':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit) 
if (!v) return reply(`𝚃𝚎𝚔𝚜𝚗𝚢𝚊 𝚊𝚙𝚊𝚊𝚗 ?`)
anu = await  fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${v}&apikey=FuckBitch`)

reply(anu.result)

break




case  'lapor':
if (!v) return reply(`𝙲𝚊𝚗𝚝𝚞𝚖𝚔𝚊𝚗 𝚍𝚎𝚝𝚊𝚒𝚕 𝚋𝚞𝚐𝚗𝚢𝚊`)
if (args.length > 300) return btf.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
stod = `${sender}`

laporan = `⚠️ 𝙻𝙰𝙿𝙾𝚁 𝙱𝚄𝙶 ⚠️
𝙿𝙴𝙻𝙰𝙿𝙾𝚁 : @${stod.split('@')[0]}
𝙻𝙰𝙿𝙾𝚁   :  ${v}`
var options = {
text: laporan,
contextInfo: {mentionedJid: [stod]},
}
btf.sendMessage(`${ownerNumber}@s.whatsapp.net`, options, text, {quoted: mek})
reply('𝙻𝚊𝚙𝚘𝚛𝚊𝚗 𝚜𝚞𝚍𝚊𝚑  𝚖𝚎𝚗𝚍𝚊𝚛𝚊𝚝 𝚍𝚒 𝚘𝚠𝚗𝚎𝚛')

break

case 'qadir':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
 limitAdd(sender,limit)
reply(mess.uselimit)
  let qadir = fs.readFileSync('./database/islam/abdulqadir.js');
  jsonData = JSON.parse(qadir);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  syk = randKey.name
  has = randKey.desc
  dst = `
  彡 𝙺𝙰𝚁𝙾𝙼𝙰𝙷 𝙿𝙰𝚁𝙰 𝚆𝙰𝙻𝙸 𝙰𝙻𝙻𝙰𝙷 彡
  
  ✯ 𝙽𝚊𝚖𝚊     : ${syk}
  ✫ 𝙺𝚊𝚛𝚘𝚖𝚊𝚑 : \n\n${has}
  `
  but = [{ buttonId: `!qadir`, buttonText: { displayText: '𝙽𝙴𝚇𝚃 ≽' }, type: 1 },{ buttonId: `!karomahwali`, buttonText: { displayText: ' ⎙ 𝙼𝙴𝙽𝚄' }, type: 1 }]
  sendButton(from, dst, `${botName}`, but, troli)
  
  break

case 'kalijaga':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
 limitAdd(sender,limit)
 reply(mess.uselimit)
  let kalijaga = fs.readFileSync('./database/islam/kalijaga.js');
  jsonData = JSON.parse(kalijaga);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  syk = randKey.name
  has = randKey.desc
  dst = `
  彡 𝙺𝙰𝚁𝙾𝙼𝙰𝙷 𝙿𝙰𝚁𝙰 𝚆𝙰𝙻𝙸 𝙰𝙻𝙻𝙰𝙷 彡
  
  ✯ 𝙽𝚊𝚖𝚊     : ${syk}
  ✫ 𝙺𝚊𝚛𝚘𝚖𝚊𝚑 : \n\n${has}
  `
  but = [{ buttonId: `!ampel`, buttonText: { displayText: '𝙽𝙴𝚇𝚃 ≽' }, type: 1 },{ buttonId: `!karomahwali`, buttonText: { displayText: ' ⎙ 𝙼𝙴𝙽𝚄' }, type: 1 }]
  sendButton(from, dst, `${botName}`, but, troli)
  
  break

case 'ampel':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)  
limitAdd(sender,limit)
reply(mess.uselimit)  
  let ampel = fs.readFileSync('./database/islam/ampel.js');
  jsonData = JSON.parse(ampel);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  syk = randKey.name
  has = randKey.desc
  dst = `
  彡 𝙺𝙰𝚁𝙾𝙼𝙰𝙷 𝙿𝙰𝚁𝙰 𝚆𝙰𝙻𝙸 𝙰𝙻𝙻𝙰𝙷 彡
  
  ✯ 𝙽𝚊𝚖𝚊     : ${syk}
  ✫ 𝙺𝚊𝚛𝚘𝚖𝚊𝚑 : \n\n${has}
  `
  but = [{ buttonId: `!ampel`, buttonText: { displayText: '𝙽𝙴𝚇𝚃 ≽' }, type: 1 },{ buttonId: `!karomahwali`, buttonText: { displayText: ' ⎙ 𝙼𝙴𝙽𝚄' }, type: 1 }]
  sendButton(from, dst, `${botName}`, but, troli)
  
  break


case 'bonang':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)    
limitAdd(sender,limit)
reply(mess.uselimit)  
  let bonang = fs.readFileSync('./database/islam/bonang.js');
  jsonData = JSON.parse(bonang);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  syk = randKey.name
  has = randKey.desc
  dst = `
  彡 𝙺𝙰𝚁𝙾𝙼𝙰𝙷 𝙿𝙰𝚁𝙰 𝚆𝙰𝙻𝙸 𝙰𝙻𝙻𝙰𝙷 彡
  
  ✯ 𝙽𝚊𝚖𝚊     : ${syk}
  ✫ 𝙺𝚊𝚛𝚘𝚖𝚊𝚑 : \n\n${has}
  `
  but = [{ buttonId: `!bonang`, buttonText: { displayText: '𝙽𝙴𝚇𝚃 ≽' }, type: 1 },{ buttonId: `!karomahwali`, buttonText: { displayText: ' ⎙ 𝙼𝙴𝙽𝚄' }, type: 1 }]
  sendButton(from, dst, `${botName}`, but, troli)
  
  break




case 'mandiwajib':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit) 
let wjb = JSON.parse(fs.readFileSync('./database/islam/mandiwajib.json'));
wajib = wjb[Math.floor(Math.random() * wjb.length)]
dst = `彡 𝙼𝙰𝙽𝙳𝙸 𝚆𝙰𝙹𝙸𝙱 彡\n\n${wajib}`
but = [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 }]
   sendButton(from, dst, `${botName}`, but, troli)
   
  break  
case 'rukunmandi':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
 limitAdd(sender,limit)
reply(mess.uselimit)
let rkn = JSON.parse(fs.readFileSync('./database/islam/rukunmandi.json'));
rukun = rkn[Math.floor(Math.random() * rkn.length)]
dst = `彡 𝚁𝚄𝙺𝚄𝙽 𝙼𝙰𝙽𝙳𝙸 𝚆𝙰𝙹𝙸𝙱 彡\n\n${rukun}`
but = [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 }]
   sendButton(from, dst, `${botName}`, but, troli)
   
  break





case 'drakor':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit) 
if(!v)  return reply(`𝙼𝚊𝚞 𝚌𝚊𝚛𝚒 𝚐𝚎𝚗𝚛𝚎 𝚊𝚙𝚊 ?`)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/dramaindo-search?text=${v}&apikey=FuckBitch`)
hsl = anu.data
hsl2 =  hsl[Math.floor(Math.random() * hsl.length)]
jdl  = hsl2.title
menu = `彡 𝙳𝚁𝙰𝙼𝙰  𝙺𝙾𝚁𝙴𝙰 彡

⎚ 𝙹𝚄𝙳𝚄𝙻   : ${hsl2.title}
⎚ 𝚂𝚃𝙰𝚃𝚄𝚂  : ${hsl2.status}
⎚ 𝙶𝙴𝙽𝚁𝙴   : ${hsl2.genre}
⎚ 𝙻𝙸𝙽𝙺     : ${hsl2.source}
`
pp = await getBuffer(hsl2.image)
btf.sendMessage(from, { contentText: `${menu}`, footerText: `*${botName}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '≺ 𝙼𝙴𝙽𝚄' }, type: 1 }, { buttonId: `!drakor ${v}`, buttonText: { displayText: '𝙽𝙴𝚇𝚃  ≻' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')

break


case 'cerpencinta':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit) 
anu  = await  fetchJson(`https://viko-api.herokuapp.com/api/cerpen/cinta?apikey=rxking`)
pp = await getBuffer(`https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/suaramerdeka/images/2018/09/03/cerpen-5b8caf9c3d95f.jpg`)
crp = `♨ 𝙲𝙴𝚁𝙿𝙴𝙽 𝙲𝙸𝙽𝚃𝙰☃
${anu.result}`
btf.sendMessage(from, { contentText: `${crp}`, footerText: `*${botName}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '≺ 𝙼𝙴𝙽𝚄' }, type: 1 }, { buttonId: `!cerpencinta`, buttonText: { displayText: '𝙽𝙴𝚇𝚃  ≻' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')

break
case 'cerpenhoror':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
 limitAdd(sender,limit)
reply(mess.uselimit)
anu  = await  fetchJson(`https://viko-api.herokuapp.com/api/cerpen/horor?apikey=rxking`)
pp = await getBuffer(`https://cdn.idntimes.com/content-images/post/20160303/hororcoverhauntedhiker-f8abcd6066340b8bd1b6d16f257846a6_600x400.jpg`)
crp = `♨ 𝙲𝙴𝚁𝙿𝙴𝙽 𝙷𝙾𝚁𝙾𝚁 ☃
${anu.result}`
btf.sendMessage(from, { contentText: `${crp}`, footerText: `*${botName}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: '≺ 𝙼𝙴𝙽𝚄' }, type: 1 }, { buttonId: `!cerpenhoror`, buttonText: { displayText: '𝙽𝙴𝚇𝚃  ≻' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')

break

case 'truth':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  limitAdd(sender,limit)
reply(mess.uselimit)
  const truth = _truth[Math.floor(Math.random() * _truth.length)]
  trth =  `❝ 𝚃𝚁𝚄𝚃𝙷 ❞\n\n${truth}`
  btf.sendMessage(from, { contentText: `${trth}`, footerText: `*${botName}*`, buttons: [{ buttonId: `!dare`, buttonText: { displayText: '⚔️ 𝙳𝙰𝚁𝙴' }, type: 1 },{ buttonId: `!truth`, buttonText: { displayText: '👑 𝚃𝚁𝚄𝚃𝙷' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail:  tde, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  
  break
   
   
    case 'dare':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  limitAdd(sender,limit)
  reply(mess.uselimit)
  const dare = _dare[Math.floor(Math.random() * _dare.length)]
  btf.sendMessage(from, { contentText: `${dare}`, footerText: `*${botName}*`, buttons: [{ buttonId: `!dare`, buttonText: { displayText: '⚔️ 𝙳𝙰𝚁𝙴' }, type: 1 },{ buttonId: `!truth`, buttonText: { displayText: '👑 𝚃𝚁𝚄𝚃𝙷' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail:  tde, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  
  break	
    
    
    
case 'tts': case 'gtts':   
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)  
  limitAdd(sender,limit)
 reply(mess.uselimit)
  var gtts = require('../lib/gtts')(args[0])
		if (args.length < 2) return btf.sendMessage(from, '𝚃𝚎𝚔𝚜𝚗𝚢𝚊 𝚖𝚊𝚗𝚊 𝚔𝚊𝚔 ?,  𝚂𝚞𝚊𝚛𝚊 𝚜𝚎𝚝𝚊𝚗 𝚖𝚊𝚞 ?', text, {quoted: troli})
		dtt = body.slice(8)
		ranm = getRandom('.mp3')
		rano = getRandom('.ogg')
		dtt.length > 500
     	? reply('𝚃𝚎𝚡𝚝𝚗𝚢𝚊 𝚔𝚎𝚋𝚊𝚗𝚢𝚊𝚔𝚊𝚗 𝚜𝚎𝚝𝚊𝚗!!!!! 😤')
		: gtts.save(ranm, dtt, function() {
	   	exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
			fs.unlinkSync(ranm)
			buffer = fs.readFileSync(rano)
	     	if (err) return reply(ind.stikga())
	btf.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
			fs.unlinkSync(rano)
  	})
  })
  break
case 'infobug':
case 'infogratisan':
grt = `
✪ WLG XL NEW✪
↬IP 104.18.26.90 
Host list
↯
annikagarbers.com
getgundryoliveoil.com
hammarbyherr.ebiljett.nu.cdn.cloudflare.net
jp-member.zlongame.com.cdn.cloudflare.net
mail.annikagarbers.com
mff.ebiljett.nu.cdn.cloudflare.net
mrtransmissionsouthbirm.com
nakedmalt.com
new.rexbo.fi
rexbo.fi
sea-member.zlongame.com.cdn.cloudflare.net
spinupcasinos.com
test.rexbo.fi
us-member.zlongame.com.cdn.cloudflare.net
vn-member.zlongame.com.cdn.cloudflare.net
www.freshfields.co.uk.cdn.cloudflare.net
www.jbei.org.cdn.cloudflare.net
www.lushusa.com.cdn.cloudflare.net
www.mrtransmissionsouthbirm.com
www.rexbo.fi
www.visitviborg.de.cdn.cloudflare.net


↬IP 104.18.27.90 
↯
Host  cdntest40.line-scdn.net

Bug support
↯
SSH WS ✓
Vmess ✓
Trogo ✓

Ntahlah, ini yg kesebar diberbagai grup sniff. Masih bisa dipake atau gk.


✪ AKRAB XL NEW✪

note0.microsoft.com

SSH WS ✓
Vmess ✓
Trogo ✓

✪ KZL AXIS NEW✪

CONNECT [host_port] [protocol][crlf]Host: isi bug kzl game[crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf][crlf]

List Bug Axis Hitz Kzl Games :
– cdn-axis.appsclub.com
– server.appsclub.com
– server4-1.operamini.com
– opx.opera.com


✪ WEB SSH ✪
darktunnel.net`
limitAdd(sender,limit)
reply(grt)
break
case 'infocovid':
anu = await fetchJson(`https://api-alya.herokuapp.com/api/other/coviddunia?apikey=alyacantik`)   
corona_res = anu.result   
cvd  =`
😷 𝙸𝚗𝚏𝚘 𝚆𝚘𝚛𝚕𝚍 𝙲𝚘𝚛𝚘𝚗𝚊
⋟ 𝙺𝚊𝚜𝚞𝚜          ⇢ ${corona_res.totalCases} 𝙾𝚛𝚊𝚗𝚐
≽ 𝚂𝚎𝚖𝚋𝚞𝚑       ⇢ ${corona_res.recovered} 𝙾𝚛𝚊𝚗𝚐
⋟ 𝙼𝚊𝚝𝚒            ⇢ ${corona_res.deaths} 𝙾𝚛𝚊𝚗𝚐
≽ 𝙰𝚌𝚝𝚒𝚟𝚎       ⇢ ${corona_res.activeCases} 𝙾𝚛𝚊𝚗𝚐
≽ 𝙽𝚎𝚐𝚊𝚝𝚒𝚟𝚎  ⇢ ${corona_res.closedCases} 𝙾𝚛𝚊𝚗𝚐
≽ 𝚄𝚙𝚍𝚊𝚝𝚎       ⇢ ${corona_res.lastUpdate}`
reply(cvd)
break  

case 'nulis':
case 'tulis':
 if (args.length < 1) return reply('Yang mau di tulis apaan?')
teks = args.join(' ')
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
nulis = encodeURIComponent(teks)
res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return reply(res.data.error)
buff = Buffer.from(res.data.result.split(',')[1], 'base64')
btf.sendMessage(from, buff, image, {quoted: freply, caption: mess.success}).catch(e => {
return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})

break  

case  'gojek':
 
  if (!isPetualang) return reply(mess.only.player)
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  pp = randomNomor(400)
  slm = await getBuffer(`https://digitalbisa.id/uploads/articles/dt-gojek-sebuah-inovasi-digital-bidang-transportasi-bjqxlvgspF.jpeg`)
done = monospace(`🏍️ 𝙺𝙰𝙽𝙶 𝙾𝙹𝙾𝙻 ${pushname}\n🛍️ 𝙲𝚞𝚊𝚗\n•𝚄𝚊𝚗𝚐 : $${pp}\n\n\n𝙹𝚒𝚔𝚊 𝚋𝚞𝚝𝚝𝚘𝚗  𝚝𝚒𝚍𝚊𝚔 𝚏𝚞𝚗𝚐𝚜𝚒 𝚜𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚎𝚝𝚒𝚔 .𝚖𝚢𝚋𝚊𝚐`)
  addBalance(sender, pp, balance)
  mining = (`🔹 ${pushname} 𝙱𝚎𝚔𝚎𝚛𝚓𝚊 𝚜𝚎𝚋𝚊𝚐𝚊𝚒 𝙶𝚘-𝙹𝚎𝚔 . . .`)
  setTimeout( () => {
  but = [{ buttonId: `!mybag`, buttonText: { displayText: '🎒 𝙼𝚈 𝙱𝙰𝙶' }, type: 1 }]
  sendButLocation(from, done, `𝙶𝚘𝚓𝚎𝚔 ${botName}`, slm, but, {quoted: mek})
  }, 19000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '👩‍👩‍👦 𝙿𝚎𝚗𝚞𝚖𝚙𝚊𝚗𝚐 𝚜𝚊𝚖𝚙𝚊𝚒 𝚝𝚞𝚓𝚞𝚊𝚗 𝚍𝚎𝚗𝚐𝚊 𝚜𝚎𝚕𝚊𝚖𝚊𝚝️....🚦.', text) 
  }, 17000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🏍️  𝙼𝚎𝚐𝚊𝚗𝚝𝚊𝚛 𝙿𝚎𝚗𝚞𝚖𝚙𝚊𝚗𝚐 𝙺𝚎 𝚝𝚎𝚖𝚙𝚊𝚝  𝚃𝚞𝚓𝚞𝚊𝚖 . 🏍️🏍️🏍️️.', text) 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '👩‍👩‍👦 𝙿𝚎𝚗𝚞𝚖𝚙𝚊𝚗𝚐 𝙳𝚒𝚝𝚎𝚖𝚞𝚔𝚊𝚗 . . ...🏍️️️️', text) 
  }, 5000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔎 𝙼𝚎𝚗𝚌𝚊𝚛𝚒 𝙿𝚎𝚗𝚞𝚖𝚙𝚊𝚗𝚐 .......️️', text) 
  }, 1500) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, mining, text, {quoted: mek}) 
  }, 0) // 1000 = 1s
  gameAdd(sender,glimit)
  break	  










case  'slime':
  if (!isGroup) return reply(mess.only.group)
  if (!isPetualang) return reply(mess.only.player)
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  pp = randomNomor(100)
  emas = randomNomor(10)
  dm = randomNomor(3)
  besi = randomNomor(40)
  slm = await getBuffer(`https://telegra.ph/file/915f3951af7556eddb44d.jpg`)
done = monospace(`🔪 𝙼𝙴𝙼𝙱𝚄𝙽𝚄𝙷 𝚂𝙻𝙸𝙼𝙴\n🛍️ 𝙷𝚊𝚍𝚒𝚊𝚑\n•𝙴𝚖𝚊𝚜 : ${emas} 🪙\n•𝚄𝚊𝚗𝚐 : $${pp} 💰\n•𝙱𝚎𝚜𝚒 : ${besi} ⛓️\n•𝙳𝚒𝚊𝚖𝚘𝚗𝚍 : ${dm} 💎\n\n\n𝙹𝚒𝚔𝚊 𝚋𝚞𝚝𝚝𝚘𝚗  𝚝𝚒𝚍𝚊𝚔 𝚏𝚞𝚗𝚐𝚜𝚒 𝚜𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚎𝚝𝚒𝚔 .𝚖𝚢𝚋𝚊𝚐`)
  addBalance(sender, pp, balance)  
  addBesi(sender, besi)
  addEmas(sender, emas)
  addDm(sender, dm)
  mining = (` ${pushname}  𝙼𝚎𝚗𝚓𝚊𝚕𝚊𝚗𝚔𝚊𝚗 𝙼𝚒𝚜𝚒 𝙺𝚒𝚕𝚕 𝚂𝚕𝚒𝚖𝚎 . . .`)
  setTimeout( () => {
  but = [{ buttonId: `!mybag`, buttonText: { displayText: '🎒 𝙼𝚈 𝙱𝙰𝙶' }, type: 1 }]
  sendButLocation(from, done, `𝙺𝚒𝚕𝚕 𝚂𝚕𝚒𝚖𝚎 ${botName}`, slm, but, {quoted: mek})
  }, 11000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🛍️ 𝙼𝚎𝚍𝚊𝚙𝚊𝚝 𝙷𝚊𝚍𝚒𝚊𝚑 . 👻👻.', text) 
  }, 9000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔪 𝚂𝚕𝚒𝚖𝚎 𝚃𝚎𝚛𝚋𝚞𝚗𝚞𝚑 . ☠️☠️.', text) 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔪 𝚂𝚕𝚒𝚖𝚎 𝙳𝚒𝚝𝚎𝚖𝚞𝚔𝚊𝚗 . . 👽👽️️️', text) 
  }, 4000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔎 𝙼𝚎𝚗𝚌𝚊𝚛𝚒 𝚂𝚕𝚒𝚖𝚎 . .🧤🧤️️', text) 
  }, 1500) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, mining, text, {quoted: mek}) 
  }, 0) // 1000 = 1s
  gameAdd(sender,glimit)
  break	  

case  'goblin':
  if (!isGroup) return reply(mess.only.group)
  if (!isPetualang) return reply(mess.only.player)
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  pp = randomNomor(200)
  emas = randomNomor(15)
  dm = randomNomor(5)
  besi = randomNomor(50)
  gbl = await getBuffer(`https://telegra.ph/file/f6c948147158700f50fbc.jpg`)
  if (getLevelingLevel(sender) >= 5 ){
done = monospace(`🔪 𝙼𝙴𝙼𝙱𝚄𝙽𝚄𝙷 𝙶𝙾𝙱𝙻𝙸𝙽\n🛍️ 𝙷𝚊𝚍𝚒𝚊𝚑\n•𝙴𝚖𝚊𝚜 : ${emas} 🪙\n•𝚄𝚊𝚗𝚐 : $${pp} 💰\n•𝙱𝚎𝚜𝚒 : ${besi} ⛓️\n•𝙳𝚒𝚊𝚖𝚘𝚗𝚍 : ${dm} 💎\n\n\n𝙹𝚒𝚔𝚊 𝚋𝚞𝚝𝚝𝚘𝚗  𝚝𝚒𝚍𝚊𝚔 𝚏𝚞𝚗𝚐𝚜𝚒 𝚜𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚎𝚝𝚒𝚔 .𝚖𝚢𝚋𝚊𝚐`)
  addBalance(sender, pp, balance)  
  addBesi(sender, besi)
  addEmas(sender, emas)
  addDm(sender, dm)
  goblin = (` ${pushname}  𝙼𝚎𝚗𝚓𝚊𝚕𝚊𝚗𝚔𝚊𝚗 𝙼𝚒𝚜𝚒 𝙺𝚒𝚕𝚕 𝙶𝚘𝚋𝚕𝚒𝚗 . . .`)
  setTimeout( () => {
  but = [{ buttonId: `!mybag`, buttonText: { displayText: '🎒 𝙼𝚈 𝙱𝙰𝙶' }, type: 1 }]
  sendButLocation(from, done, `𝙺𝚒𝚕𝚕 𝙶𝚘𝚋𝚕𝚒𝚗 ${botName}`, gbl, but, {quoted: mek})
  }, 11000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🛍️ 𝙼𝚎𝚍𝚊𝚙𝚊𝚝 𝙷𝚊𝚍𝚒𝚊𝚑 . 👻👻.', text) 
  }, 9000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔪 𝙶𝚘𝚋𝚕𝚒𝚗 𝚃𝚎𝚛𝚋𝚞𝚗𝚞𝚑 . ☠️☠️.', text) 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔪 𝙶𝚘𝚋𝚕𝚒𝚗 𝙳𝚒𝚝𝚎𝚖𝚞𝚔𝚊𝚗 . . 👽👽️️️', text) 
  }, 4000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔎 𝙼𝚎𝚗𝚌𝚊𝚛𝚒 𝙶𝚘𝚋𝚕𝚒𝚗 𝚍𝚒 𝙹𝚞𝚗𝚐𝚕𝚎 . .🧤🧤️️', text) 
  }, 1500) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, goblin, text, {quoted: mek}) 
  }, 0) // 1000 = 1s,
}else{
reply(`𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝙽𝚊𝚒𝚔𝚔𝚊𝚗 𝚕𝚎𝚟𝚎𝚕 𝚊𝚗𝚍𝚊 𝚔𝚎 5 \n𝙻𝚎𝚟𝚎𝚕 𝚊𝚗𝚍𝚊  𝚜𝚊𝚊𝚝 𝚒𝚗𝚒 ${getLevelingLevel(sender)}`)
}
gameAdd(sender,glimit)
 break	  




case 'evil':
  if (!isGroup) return reply(mess.only.group)
  if (!isPetualang) return reply(mess.only.player)
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  pp = randomNomor(300)
  emas = randomNomor(20)
  dm = randomNomor(10)
  besi = randomNomor(60)
  evl = await getBuffer(`https://telegra.ph/file/9784be88470be8bf30c91.jpg`)
  if (getLevelingLevel(sender) >= 10 ){
done = monospace(`🔪 𝙼𝙴𝙼𝙱𝚄𝙽𝚄𝙷 𝙴𝚅𝙸𝙻 𝙴𝚈𝙴\n🛍️ 𝙷𝚊𝚍𝚒𝚊𝚑\n•𝙴𝚖𝚊𝚜 : ${emas} 🪙\n•𝚄𝚊𝚗𝚐 : $${pp} 💰\n•𝙱𝚎𝚜𝚒 : ${besi} ⛓️\n•𝙳𝚒𝚊𝚖𝚘𝚗𝚍 : ${dm} 💎\n\n\n𝙹𝚒𝚔𝚊 𝚋𝚞𝚝𝚝𝚘𝚗  𝚝𝚒𝚍𝚊𝚔 𝚏𝚞𝚗𝚐𝚜𝚒 𝚜𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚎𝚝𝚒𝚔 .𝚖𝚢𝚋𝚊𝚐`)
  addBalance(sender, pp, balance)  
  addBesi(sender, besi)
  addEmas(sender, emas)
  addDm(sender, dm)
  dvl = (` ${pushname}  𝙼𝚎𝚗𝚓𝚊𝚕𝚊𝚗𝚔𝚊𝚗 𝙼𝚒𝚜𝚒 𝙺𝚒𝚕𝚕 𝙴𝚟𝚒𝚕 𝙴𝚢𝚎 . . .`)
  setTimeout( () => {
  but = [{ buttonId: `!mybag`, buttonText: { displayText: '🎒 𝙼𝚈 𝙱𝙰𝙶' }, type: 1 }]
  sendButLocation(from, done, `𝙺𝚒𝚕𝚕 𝙳𝚎𝚟𝚒𝚕 𝙴𝚢𝚎 ${botName}`, evl, but, {quoted: mek})
  }, 11000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🛍️ 𝙼𝚎𝚍𝚊𝚙𝚊𝚝 𝙷𝚊𝚍𝚒𝚊𝚑 . 👻👻.', text) 
  }, 9000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔪 𝙳𝚎𝚟𝚒𝚕 𝚃𝚎𝚛𝚋𝚞𝚗𝚞𝚑 . ☠️☠️.', text) 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔪 𝙳𝚎𝚟𝚒𝚕 𝙳𝚒𝚝𝚎𝚖𝚞𝚔𝚊𝚗 . . 👽👽️️️', text) 
  }, 4000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔎 𝙼𝚎𝚗𝚌𝚊𝚛𝚒 𝙳𝚎𝚟𝚒𝚕 𝙴𝚢𝚎 𝚍𝚒 𝙹𝚞𝚗𝚐𝚕𝚎 . .🧤🧤️️', text) 
  }, 1500) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, dvl, text, {quoted: mek}) 
  }, 0) // 1000 = 1s,
}else{
reply(`𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝙽𝚊𝚒𝚔𝚊𝚗 𝚕𝚎𝚟𝚎𝚕 𝚊𝚗𝚍𝚊 𝚔𝚎 10\n𝙻𝚎𝚟𝚎𝚕 𝚊𝚗𝚍𝚊  𝚜𝚊𝚊𝚝 𝚒𝚗𝚒 ${getLevelingLevel(sender)}`)
}  
  gameAdd(sender,glimit)
 break	  


case  'bahemoth':
  if (!isGroup) return reply(mess.only.group)
  if (!isPetualang) return reply(mess.only.player)
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  pp = randomNomor(350)
  emas = randomNomor(25)
  dm = randomNomor(15)
  besi = randomNomor(65)
  bh = await getBuffer(`https://telegra.ph/file/8429bfd0a5e69ed46c941.jpg`)
   if (getLevelingLevel(sender) >= 15 ){
done = monospace(`🔪 𝙼𝙴𝙼𝙱𝚄𝙽𝚄𝙷 𝙱𝙰𝙷𝙴𝙼𝙾𝚃𝙷\n🛍️ 𝙷𝚊𝚍𝚒𝚊𝚑\n•𝙴𝚖𝚊𝚜 : ${emas} 🪙\n•𝚄𝚊𝚗𝚐 : $${pp} 💰\n•𝙱𝚎𝚜𝚒 : ${besi} ⛓️\n•𝙳𝚒𝚊𝚖𝚘𝚗𝚍 : ${dm} 💎\n\n\n𝙹𝚒𝚔𝚊 𝚋𝚞𝚝𝚝𝚘𝚗  𝚝𝚒𝚍𝚊𝚔 𝚏𝚞𝚗𝚐𝚜𝚒 𝚜𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚎𝚝𝚒𝚔 .𝚖𝚢𝚋𝚊𝚐`)
  addBalance(sender, pp, balance)  
  addBesi(sender, besi)
  addEmas(sender, emas)
  addDm(sender, dm)
  bm = (` ${pushname}  𝙼𝚎𝚗𝚓𝚊𝚕𝚊𝚗𝚔𝚊𝚗 𝙼𝚒𝚜𝚒 𝙺𝚒𝚕𝚕 𝙱𝚊𝚑𝚎𝚖𝚘𝚝𝚑. . .`)
  setTimeout( () => {
  but = [{ buttonId: `!mybag`, buttonText: { displayText: '🎒 𝙼𝚈 𝙱𝙰𝙶' }, type: 1 }]
  sendButLocation(from, done, `𝙺𝚒𝚕𝚕 𝙱𝚊𝚑𝚎𝚖𝚘𝚝𝚑 ${botName}`, bh, but, {quoted: mek})
  }, 11000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🛍️ 𝙼𝚎𝚍𝚊𝚙𝚊𝚝 𝙷𝚊𝚍𝚒𝚊𝚑 . 👻👻.', text) 
  }, 9000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔪 𝙱𝚊𝚑𝚎𝚖𝚘𝚝𝚑 𝚃𝚎𝚛𝚋𝚞𝚗𝚞𝚑 . ☠️☠️.', text) 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔪 𝙱𝚊𝚑𝚎𝚖𝚘𝚝𝚑 𝙳𝚒𝚝𝚎𝚖𝚞𝚔𝚊𝚗 . . 👽👽️️️', text) 
  }, 4000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔎 𝙼𝚎𝚗𝚌𝚊𝚛𝚒 𝙱𝚊𝚑𝚎𝚖𝚘𝚝𝚑 𝚍𝚒 𝙹𝚞𝚗𝚐𝚕𝚎 . .🧤🧤️️', text) 
  }, 1500) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, bm, text, {quoted: mek}) 
  }, 0) // 1000 = 1s,
}else{
reply(`𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝙽𝚊𝚒𝚔𝚔𝚊𝚗 𝚕𝚎𝚟𝚎𝚕 𝚊𝚗𝚍𝚊 𝚔𝚎 15\n𝙻𝚎𝚟𝚎𝚕 𝚊𝚗𝚍𝚊  𝚜𝚊𝚊𝚝 𝚒𝚗𝚒 ${getLevelingLevel(sender)}`)
}  
  gameAdd(sender,glimit)
 break	  


case  'cockatrice':
  if (!isGroup) return reply(mess.only.group)
  if (!isPetualang) return reply(mess.only.player)
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  pp = randomNomor(400)
  emas = randomNomor(30)
  dm = randomNomor(20)
  besi = randomNomor(70)
  ck = await getBuffer(`https://telegra.ph/file/38c8aec14b9e878286f01.jpg`)
done = monospace(`🔪 𝙼𝙴𝙼𝙱𝚄𝙽𝚄𝙷 𝙲𝙾𝙲𝙺𝙰𝚃𝚁𝙸𝙲𝙴\n🛍️ 𝙷𝚊𝚍𝚒𝚊𝚑\n•𝙴𝚖𝚊𝚜 : ${emas} 🪙\n•𝚄𝚊𝚗𝚐 : $${pp} 💰\n•𝙱𝚎𝚜𝚒 : ${besi} ⛓️\n•𝙳𝚒𝚊𝚖𝚘𝚗𝚍 : ${dm} 💎\n\n\n𝙹𝚒𝚔𝚊 𝚋𝚞𝚝𝚝𝚘𝚗  𝚝𝚒𝚍𝚊𝚔 𝚏𝚞𝚗𝚐𝚜𝚒 𝚜𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚎𝚝𝚒𝚔 .𝚖𝚢𝚋𝚊𝚐`)
  addBalance(sender, pp, balance)  
  addBesi(sender, besi)
  addEmas(sender, emas)
  addDm(sender, dm)
   if (getLevelingLevel(sender) >= 20 ){
  bm = (` ${pushname}  𝙼𝚎𝚗𝚓𝚊𝚕𝚊𝚗𝚔𝚊𝚗 𝙼𝚒𝚜𝚒 𝙺𝚒𝚕𝚕 𝙲𝚘𝚌𝚔𝚊𝚝𝚛𝚒𝚌𝚎. . .`)
  setTimeout( () => {
  but = [{ buttonId: `!mybag`, buttonText: { displayText: '🎒 𝙼𝚈 𝙱𝙰𝙶' }, type: 1 }]
  sendButLocation(from, done, `𝙺𝚒𝚕𝚕 𝙲𝚘𝚌𝚔𝚊𝚝𝚛𝚒𝚌𝚎 ${botName}`, ck, but, {quoted: mek})
  }, 11000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🛍️ 𝙼𝚎𝚍𝚊𝚙𝚊𝚝 𝙷𝚊𝚍𝚒𝚊𝚑 . 👻👻.', text) 
  }, 9000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔪 𝙲𝚘𝚌𝚔𝚊𝚝𝚛𝚒𝚌𝚎 𝚃𝚎𝚛𝚋𝚞𝚗𝚞𝚑 . ☠️☠️.', text) 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔪 𝙲𝚘𝚌𝚔𝚊𝚝𝚛𝚒𝚌𝚎 𝙳𝚒𝚝𝚎𝚖𝚞𝚔𝚊𝚗 . . 🐓🐓️️️', text) 
  }, 4000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔎 𝙼𝚎𝚗𝚌𝚊𝚛𝚒 𝙲𝚘𝚌𝚔𝚊𝚝𝚛𝚒𝚌𝚎  𝚍𝚒 𝙹𝚞𝚗𝚐𝚕𝚎 . .🧤🧤️️', text) 
  }, 1500) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, bm, text, {quoted: mek}) 
  }, 0) // 1000 = 1s,
}else{
reply(`𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝙽𝚊𝚒𝚔𝚔𝚊𝚗 𝚕𝚎𝚟𝚎𝚕 𝚊𝚗𝚍𝚊 𝚔𝚎 20\n𝙻𝚎𝚟𝚎𝚕 𝚊𝚗𝚍𝚊  𝚜𝚊𝚊𝚝 𝚒𝚗𝚒 ${getLevelingLevel(sender)}`)
}

gameAdd(sender,glimit)
 break	  


case  'demondking':
  if (!isGroup) return reply(mess.only.group)
  if (!isPetualang) return reply(mess.only.player)
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  pp = randomNomor(500)
  emas = randomNomor(35)
  dm = randomNomor(35)
  besi = randomNomor(85)
   if (getLevelingLevel(sender) >= 25){
  ck = await getBuffer(`https://telegra.ph/file/4b527d6decd5a7371ed58.jpg`)
done = monospace(`🔪 𝙼𝙴𝙼𝙱𝚄𝙽𝚄𝙷 𝙳𝙴𝙼𝙾𝙽  𝙺𝙸𝙽𝙶𝚂\n🛍️ 𝙷𝚊𝚍𝚒𝚊𝚑\n•𝙴𝚖𝚊𝚜 : ${emas} 🪙\n•𝚄𝚊𝚗𝚐 : $${pp} 💰\n•𝙱𝚎𝚜𝚒 : ${besi} ⛓️\n•𝙳𝚒𝚊𝚖𝚘𝚗𝚍 : ${dm} 💎\n\n\n𝙹𝚒𝚔𝚊 𝚋𝚞𝚝𝚝𝚘𝚗  𝚝𝚒𝚍𝚊𝚔 𝚏𝚞𝚗𝚐𝚜𝚒 𝚜𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚎𝚝𝚒𝚔 .𝚖𝚢𝚋𝚊𝚐`)
  addBalance(sender, pp, balance)  
  addBesi(sender, besi)
  addEmas(sender, emas)
  addDm(sender, dm)
  bm = (` ${pushname}  𝙼𝚎𝚗𝚓𝚊𝚕𝚊𝚗𝚔𝚊𝚗 𝙼𝚒𝚜𝚒 𝙺𝚒𝚕𝚕 𝙵𝚘𝚞𝚛 𝙵𝚛𝚒𝚎𝚗𝚍𝚜. . .`)
  setTimeout( () => {
  but = [{ buttonId: `!mybag`, buttonText: { displayText: '🎒 𝙼𝚈 𝙱𝙰𝙶' }, type: 1 }]
  sendButLocation(from, done, `𝙺𝚒𝚕𝚕 𝙳𝚎𝚖𝚘𝚗 𝙺𝚒𝚗𝚐𝚜 ${botName}`, ck, but, {quoted: mek})
  }, 11000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🛍️ 𝙼𝚎𝚍𝚊𝚙𝚊𝚝 𝙷𝚊𝚍𝚒𝚊𝚑 . 👻👻.', text) 
  }, 9000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔪 𝙳𝚎𝚖𝚘𝚗 𝙺𝚒𝚗𝚐𝚜 𝚃𝚎𝚛𝚋𝚞𝚗𝚞𝚑 . ☠️☠️.', text) 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔪 𝙳𝚎𝚖𝚘𝚗  𝚔𝚒𝚗𝚐𝚜 𝙳𝚒𝚝𝚎𝚖𝚞𝚔𝚊𝚗 . .👑👑 ️️️', text) 
  }, 4000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, '🔎 𝙼𝚎𝚗𝚌𝚊𝚛𝚒 𝙳𝚎𝚖𝚘𝚗 𝙺𝚒𝚗𝚐𝚜  𝚍𝚒 𝙹𝚞𝚗𝚐𝚕𝚎 . .🧤🧤️️', text) 
  }, 1500) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, bm, text, {quoted: mek}) 
  }, 0) // 1000 = 1s,
}else{
reply(`𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝙽𝚊𝚒𝚔𝚔𝚊𝚗 𝚕𝚎𝚟𝚎𝚕 𝚊𝚗𝚍𝚊 𝚔𝚎 25\n𝙻𝚎𝚟𝚎𝚕 𝚊𝚗𝚍𝚊  𝚜𝚊𝚊𝚝 𝚒𝚗𝚒 ${getLevelingLevel(sender)}`)
}  
  gameAdd(sender,glimit)
 break	  


case 'tembak':
var pp = randomNomor(5)
        if(!v)  return reply(`𝙼𝚊𝚞 𝚗𝚎𝚖𝚋𝚊𝚔 𝚍𝚒𝚖𝚊𝚗𝚊 ?`)
        if (args[0] == 'udara') {
          setTimeout(() => {
            reply(`[ 𝚂𝚒𝚊𝚙 𝙱𝚎𝚛𝚋𝚞𝚛𝚞 👌 ]`)
          }, 1000)
          setTimeout(() => {
            reply(`[ 𝙼𝚞𝚕𝚊𝚒 𝚋𝚎𝚛𝚋𝚞𝚛𝚞 𝙷𝚎𝚠𝚊𝚗 🛶 ]`)
          }, 5000)
          setTimeout(() => {
            reply(`[ 𝙷𝚎𝚠𝚊𝚗 𝚝𝚎𝚛𝚝𝚊𝚗𝚐𝚔𝚊𝚙 🕸️ ]`)
          }, 8000)
          setTimeout(() => {
            reply(`[ 𝙰𝚗𝚍𝚊 𝙼𝚎𝚗𝚍𝚊𝚙𝚊𝚝 𝙷𝚎𝚠𝚊𝚗 𝙱𝚞𝚛𝚞𝚊𝚗 ]≻ ${buru3c} \n🎁 𝙷𝙰𝙳𝙸𝙰𝙷 \n𝙴𝚖𝚊𝚜 : ${pp} 🪙`)
         addEmas(sender, pp)
          }, 12000)
        }
        if (args[0] == 'darat') {
           setTimeout(() => {
            reply(`[ 𝚂𝚒𝚊𝚙 𝙱𝚎𝚛𝚋𝚞𝚛𝚞 👌 ]`)
          }, 1000)
          setTimeout(() => {
            reply(`[ 𝙼𝚞𝚕𝚊𝚒 𝚋𝚎𝚛𝚋𝚞𝚛𝚞 𝙷𝚎𝚠𝚊𝚗 🛶 ]`)
          }, 5000)
          setTimeout(() => {
            reply(`[ 𝙷𝚎𝚠𝚊𝚗 𝚝𝚎𝚛𝚝𝚊𝚗𝚐𝚔𝚊𝚙 🕸️ ]`)
          }, 8000)
          setTimeout(() => {
            reply(`[ 𝙰𝚗𝚍𝚊 𝙼𝚎𝚗𝚍𝚊𝚙𝚊𝚝 𝙷𝚎𝚠𝚊𝚗 𝙱𝚞𝚛𝚞𝚊𝚗 ]≻ ${buru2b} \n🎁 𝙷𝙰𝙳𝙸𝙰𝙷 \n𝙴𝚖𝚊𝚜 : ${pp} 🪙`)
         addEmas(sender, pp)
          }, 12000)
        }
        if (args[0] == 'laut') {
           setTimeout(() => {
            reply(`[ 𝚂𝚒𝚊𝚙 𝙱𝚎𝚛𝚋𝚞𝚛𝚞 👌 ]`)
          }, 1000)
          setTimeout(() => {
            reply(`[ 𝙼𝚞𝚕𝚊𝚒 𝚋𝚎𝚛𝚋𝚞𝚛𝚞 𝙷𝚎𝚠𝚊𝚗 🛶 ]`)
          }, 5000)
          setTimeout(() => {
            reply(`[ 𝙷𝚎𝚠𝚊𝚗 𝚝𝚎𝚛𝚝𝚊𝚗𝚐𝚔𝚊𝚙 🕸️ ]`)
          }, 8000)
          setTimeout(() => {
            reply(`[ 𝙰𝚗𝚍𝚊 𝙼𝚎𝚗𝚍𝚊𝚙𝚊𝚝 𝙷𝚎𝚠𝚊𝚗 𝙱𝚞𝚛𝚞𝚊𝚗 ]≻ ${buru1a} \n🎁 𝙷𝙰𝙳𝙸𝙰𝙷 \n𝙴𝚖𝚊𝚜 : ${pp} 🪙`)
         addEmas(sender, pp)
          }, 12000)
        
        }
        gameAdd(sender,glimit)
        break

case 'maling':
       if(!v) return  reply(`𝙼𝚊𝚞 𝚖𝚊𝚕𝚒𝚗𝚐 𝙳𝚒𝚖𝚊𝚗𝚊 ?`)
        if (args[0] == 'rumah') {
          setTimeout(() => {
            reply(`[ 𝚂𝚎𝚍𝚊𝚗𝚐 𝙼𝚎𝚖𝚋𝚘𝚋𝚘𝚕 𝚁𝚞𝚖𝚊𝚑 ]`)
          }, 1000)
          setTimeout(() => {
            reply(`[ 𝙼𝚎𝚗𝚐𝚐𝚎𝚕𝚎𝚍𝚊𝚑 𝙱𝚊𝚛𝚊𝚗𝚐 ]`)
          }, 5000)
          setTimeout(() => {
            reply(`[ 𝙱𝚞𝚜𝚎𝚍𝚍𝚍 !!!!  𝙰𝚍𝚊 𝚢𝚊𝚗𝚐 𝚙𝚞𝚗𝚢𝚊𝚊𝚊 🐽 ]`)
          }, 8000)
          setTimeout(() => {
            reply(`[ 𝙺𝙰𝙱𝚄𝚁𝚁𝚁𝚁𝚁, 𝚄𝚑 𝙳𝚊𝚙𝚎𝚝 𝚊𝚙𝚊 𝚗𝚒𝚑𝚑 ]\n[ ${buru4d} ]`)
          }, 12000)
        }
        if (args[0] == 'gedung') {
          setTimeout(() => {
            reply(`[ 𝚂𝚎𝚍𝚊𝚗𝚐 𝙼𝚎𝚖𝚊𝚜𝚞𝚔𝚒 𝚐𝚎𝚍𝚞𝚗𝚐 𝚕𝚎𝚠𝚊𝚝  𝚊𝚝𝚊𝚙 ]`)
          }, 1000)
          setTimeout(() => {
            reply(`[ 𝙼𝚎𝚗𝚐𝚐𝚎𝚕𝚎𝚍𝚊𝚑 𝙱𝚊𝚛𝚊𝚗𝚐 𝙳𝚒 𝚁𝚞𝚊𝚗𝚐𝚊𝚗 ]`)
          }, 5000)
          setTimeout(() => {
            reply(`[ 𝙰𝚗𝚓𝚎𝚛𝚛𝚛 𝙰𝚍𝚊 𝚂𝙰𝚃𝙿𝙰𝙼, 𝙱𝚄𝚁𝚄𝙰𝙽 𝙰𝙼𝙱𝙸𝙻𝙻 𝚕𝚊𝚕𝚞 𝙺𝚊𝚋𝚞𝚛𝚛𝚛 ]`)
          }, 8000)
          setTimeout(() => {
            reply(`[𝙺𝚊𝚋𝚞𝚛𝚛 𝙰𝚍𝚊 𝙿𝚘𝚕𝚒𝚌𝚎!! 𝙱𝚞𝚛𝚞 𝙼𝚊𝚜𝚞𝚔 𝙼𝚘𝚋𝚒 ]`)
          }, 12000)
          setTimeout(() => {
            reply(`[ 𝚈𝚎𝚊𝚢 𝙳𝚊𝚙𝚎𝚝 ]\n[ ${buru5e} ]`)
          }, 15000)
        }
        z
        gameAdd(sender,glimit)
break

case "reminder": // by Slavyan
        if (!v)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await btf.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
𝚁𝚎𝚖𝚒𝚗𝚍𝚎𝚛 𝙱𝚎𝚛𝚑𝚊𝚜𝚒𝚕 𝙳𝚒𝚊𝚔𝚝𝚒𝚏𝚔𝚊𝚗
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              btf.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/bot/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await btf.downloadAndSaveMediaMessage(encmedia);
          await btf.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
𝚁𝚎𝚖𝚒𝚗𝚍𝚎𝚛 𝙱𝚎𝚛𝚑𝚊𝚜𝚒𝚕 𝙳𝚒𝚊𝚔𝚝𝚒𝚏𝚔𝚊𝚗
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              btf.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              btf.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/bot/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await btf.downloadAndSaveMediaMessage(encmedia);
          await btf.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
𝚁𝚎𝚒𝚖𝚗𝚍𝚎𝚛 𝙱𝚎𝚛𝚑𝚊𝚜𝚒𝚕  𝙰𝚔𝚝𝚒𝚏
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              btf.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/bot/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await btf.downloadAndSaveMediaMessage(encmedia);
          await btf.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
𝚁𝚎𝚖𝚒𝚗𝚍𝚎𝚛 𝙱𝚎𝚛𝚑𝚊𝚜𝚒𝚕 𝙳𝚒𝚊𝚔𝚝𝚒𝚏𝚔𝚊𝚗
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              btf.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              btf.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/bot/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;





case 'afk':  
             
    if (isBanned) return reply(mess.banned)
    if (!isGroup) return reply(mess.only.group)
    if (isAfkOn) return reply('𝚆𝚘𝚢 𝙺𝚊𝚕𝚘 𝚊𝚏𝚔 𝚓𝚊𝚗 𝚗𝚒𝚖𝚋𝚛𝚞𝚗𝚐')
    const reason = v ? v : '𝙽𝚘𝚝𝚑𝚒𝚗𝚐.'
    afk.addAfkUser(sender, time, reason, _afk)
    const aluty = `𝙰𝙵𝙺 𝙼𝙾𝙳𝙴 *𝙾𝙽*\n\n➸ *𝚄𝚜𝚎𝚛*: ${pushname}\n➸ *𝙰𝚕𝚊𝚜𝚊𝚗*: ${reason}`
    reply(aluty)
    break




case 'cekip' :
if (!v) return  reply(`𝙸𝚙𝚗𝚢𝚊 𝙾𝚖 ? 𝙲𝚘𝚗𝚝𝚘𝚑 : 𝚌𝚎𝚔𝚒𝚙 209.58.139.51`)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cekip?ip=${v}&apikey=MIMINGANZ`)
res =  anu.result
hasil = ` 𝙸𝙿 𝙳𝙴𝚃𝙴𝙲𝚃𝙴𝙳\n
֍ 𝙲𝚘𝚞𝚗𝚝𝚛𝚢 : ${res.code_country} / ${res.country}
֍ 𝚁𝚎𝚐𝚒𝚘𝚗  : ${res.region_code} / ${res.region_name}
֍ 𝙲𝚒𝚝𝚢  : ${res.city}
֍ 𝙸𝚜𝚙    : ${res.isp}
֍ 𝚉𝙸𝙿 𝙺𝚘𝚍𝚎 : ${res.zip_code}
֍ 𝚃𝚒𝚖𝚎  𝚉𝚘𝚗𝚎 : ${res.timezone}`
reply(hasil)

break













default:
   
   if (hour_now >= '16:18:00' && hour_now <= '16:18:01') {
    pp = `Mantap`
    btf.sendMessage(`6281233959206@s.whatsapp.net`, pp, text)
     }
         
     if (isSimi && bodi != undefined){
     res = await axios.get(`https://api-sv2.simsimi.net/v2/?text=${bodi}&lc=id`)
     pp = res.data.success
     btf.sendMessage(from, pp, text)
     }
     if (isCmd) {      
     menu = `𝙼𝚘𝚑𝚘𝚗 𝙼𝚊𝚊𝚏 𝙺𝚊𝚔 ${pushname} 🤗\n𝙲𝚘𝚖𝚖𝚊𝚗𝚍 ${command} 𝚃𝚒𝚍𝚊𝚔/𝙱𝚎𝚕𝚞𝚖 𝚝𝚎𝚛𝚜𝚎𝚍𝚒𝚊 𝚍𝚒 𝚕𝚒𝚜𝚝 𝚖𝚎𝚗𝚞\n𝙼𝚘𝚑𝚘𝚗 𝚞𝚗𝚝𝚞𝚔 𝚖𝚎𝚗𝚐𝚎𝚌𝚎𝚔 𝚔𝚎𝚖𝚋𝚊𝚕𝚒 𝚖𝚎𝚗𝚞𝚗𝚢𝚊`
     but = [{ buttonId: `!menu`, buttonText: { displayText: '⎙ 𝙼𝙴𝙽𝚄' }, type: 1 }]
     sendButton(from, menu, `${botName}`, but, mek)
     break
     }
    
     if (budy.startsWith('>')) {
     console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
   try {
   let evaled = await eval(budy.slice(2))
     if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
     reply(`${evaled}`)
   } catch (err) {
   reply(`${err}`)
     }
     } else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
     try {
	 	  return btf.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
    } catch (err) {
     e = String(err)
     reply(util.format(e))
     }
   }
     }
    	  } catch (e) {
     e = String(e)
     if (!e.includes("this.isZero") && !e.includes("jid")) {
       console.log(('|\x1b[1;33m ERR \x1b[1;33m|'), time, chalk.red(e))       
       btf.sendMessage(`6281233959206@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 𝙱𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢 𝙱𝚘𝚝",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./database/media/btfbot.jpg'),sourceUrl:"https://wa.me/6281233959206?text=Assalamualaikum"}}})
        
     }
    	  }
     }



    
