const { downloadContentFromMessage, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat } = require('wileys');

//_-_-_-__-_-_-_-_-_-MODULOS/FUNÇÕES-_-_-_-_-_-__-_-_-_-_-\\

const { P, fs, util, Boom, axios, linkfy, request, ms, ffmpeg, fetch, qrterminal, exec, spawn, execSync, moment, time, hora, date, colors, cheerio, NodeCache, kyun, enviarfiguUrl, getBuffer, getFileBuffer, DLT_FL, sleep, antiModLetra, convertBytes, RSM_FUNC, nit, supre, chyt, sesc, upload, getGroupAdmins, getMembros, getRandom, getExtension, isFiltered, addFilter, sendHours, isJsonIncludes, alerandom, addNumberMais, allGroups, saveJSON, rmLetras, identArroba, getIDbyWhatsLink } = require("./config.js")

const os = require("os")

const { banned, logospath, allconfig, ownerconfig } = require("./config.js")

var { nomebot, nomedono, prefix, numerodono } = require("./db/settings.json");

var { visualizarmsg, siteapi, donos, dbgp, botoes, channel } = require("./db/config-all.json")

const { APIKEYZORA } = require("./db/apikey.json")

//=============USER=JID-LID==============\\

const { pushnames, existsLidData, userLid, convertUserID, saveUserID, addUserID, rmUserID, getname } = require("./database/pushnames/senderlid.js")

//====================≠≠===============\\
 
var nmrdn2 = numerodono.replace(new RegExp("[()+-/ +/]", "gi"), ""); + "@s.whatsapp.net"

var numerodono_ofc = nmrdn2.split("@")[0]

var nmrdnCmMais = "+" + numerodono_ofc.slice(0, 2) + " " + numerodono_ofc.slice(2, 4) + " " + numerodono_ofc.slice(4, numerodono_ofc.length - 4) + "-" + numerodono_ofc.slice(numerodono_ofc.length - 4, numerodono_ofc.length)

async function reiniciarZR() {
file = require.resolve("./start.js");
delete require.cache[file];
require(file);
}

// ABAIXO: INÍCIO DE CONEXÃO

async function startZora() {

module.exports = zora = async(zora, qrcode) => {
module.exports = upsert = async(upsert, zora) => {
async function msgupsrt() {

var hora120 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

//RSM_FUNC(zora, nmrdn2, hora120, upsert);

for(const info of upsert?.messages || []) {

addUserID(zora, info)
/**
 * @type {string}
 */
const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');

mygp = `./database/grupos/${from}.json`

if(isGroup) {
  if(!fs.existsSync(mygp)) {
    var group_data = {
      id: from,
      bemvindo: [
        {
          funcao: false,
          fundo: `https://i.ibb.co/YB8G6zkT/70b84626-cf07-4a45-895e-d3f367bb3028.jpg`,
          desc: ``
        },
        {
          funcao: false,
          desc: ``
        },
      ],
      saida: [
        {
          funcao: false,
          fundo: `https://i.ibb.co/YB8G6zkT/70b84626-cf07-4a45-895e-d3f367bb3028.jpg`,
          desc: ``
        },
        {
          funcao: false,
          desc: ``
        },
      ],
      advertir: [],
      antis: {
        linkgp: false,
        linkall: false,
        imagem: false,
        video: false,
        audio: false,
        figurinha: false,
        documento: false,
        localizacao: false,
        fake: false
      }
    }
    return fs.writeFileSync(mygp, JSON.stringify(group_data, null, 2))
  } else {
    /**
     * @type {{
     * id: string,
     * bemvindo: [{funcao: boolean, fundo: string, desc: string},
     * {funcao: boolean, desc: string}],
     * saida: [{funcao: boolean, fundo: string, desc: string},
     * {funcao: boolean, desc: string}],
     * advertir: unknown[],
     * antis: {
     * linkgp: boolean,
     * linkall: boolean,
     * imagem: boolean,
     * video: boolean,
     * audio: boolean,
     * figurinha: boolean,
     * documento: boolean,
     * localizacao: boolean,
     * fake: boolean
     * }
     * }}
     */
    var dataGp = JSON.parse(fs.readFileSync(`./database/grupos/${from}.json`));
  }
}

function setGp(index){
fs.writeFileSync(mygp, JSON.stringify(index, null, 2))}

const logomenupath = logospath.logo

if(!info.message) return;
if(upsert.type == "append") return;  
const baileys = require('wileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushTestName = info.pushName ? info.pushName : 'Usuário';
if(visualizarmsg) {
await zora.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

//global.prefix;
//global.blocked;

const speed = require('performance-now');

const { sendButton } = require('./js/botoes.js')

//menus aqui
const { menuprincipal } = require('./js/menus.js')

//==============(BODY)================\\

var body = type === "conversation" ? info.message.conversation : type == "editedMessage" ? info.message.editedMessage.message.protocolMessage.editedMessage?.conversation || info.message.editedMessage.message.protocolMessage.editedMessage?.imageMessage?.caption || info.message.editedMessage.message.protocolMessage.editedMessage?.videoMessage?.caption || info.message.editedMessage.message.protocolMessage.editedMessage?.documentMessage?.caption : type === "viewOnceMessageV2" ? info.message.viewOnceMessageV2.message.imageMessage ? info.message.viewOnceMessageV2.message.imageMessage.caption : info.message.viewOnceMessageV2.message.videoMessage.caption : type === "imageMessage" ? info.message.imageMessage.caption : type === "videoMessage" ? info.message.videoMessage.caption : type === "extendedTextMessage" ? info.message.extendedTextMessage.text : type === "viewOnceMessage" ? info.message.viewOnceMessage.message.videoMessage ? info.message.viewOnceMessage.message.videoMessage.caption : info.message.viewOnceMessage.message.imageMessage.caption : type === "documentWithCaptionMessage" ? info.message.documentWithCaptionMessage.message.documentMessage.caption : type === "buttonsMessage" ? info.message.buttonsMessage.imageMessage.caption : type === "buttonsResponseMessage" ? info.message.buttonsResponseMessage.selectedButtonId : type === "listResponseMessage" ? info.message.listResponseMessage.singleSelectReply.selectedRowId : type === "templateButtonReplyMessage" ? info.message.templateButtonReplyMessage.selectedId : type === "groupInviteMessage" ? info.message.groupInviteMessage.caption : type === "pollCreationMessageV3" ? info.message.pollCreationMessageV3 : type === "interactiveResponseMessage" ? JSON.parse(info.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : type === "text" ? info.text : ""

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

const args = body.trim().split(/ +/).slice(1);

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var isCmd = body.trim().startsWith(prefix);

const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

const q = args.join(' ');

var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';

//======================================\\

try {var groupMetadata = isGroup ?  await zora.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';

const userID = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] +'@s.whatsapp.net': info.key.participant : info.key.remoteJid;

const sender = convertUserID(userID)

const senderlid = convertUserID(userID, 'lid')

const pushname = getname(sender)

const arg = body.substring(body.indexOf(' ') + 1);

const botNumber = await zora.user.id.split(':')[0]+'@s.whatsapp.net';

const groupDesc = isGroup ? groupMetadata.desc : ''

/**
 * @type {{id: string, jid: string, lid: string, admin: string | null}[]}
 */
const groupMembers = isGroup ? groupMetadata.participants : ''

const isnit = nit.includes(sender) 

const issupre = supre.includes(sender)

const ischyt = chyt.includes(sender)

const isSesc = sesc.includes(sender)

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const somembros = isGroup ? getMembros(groupMembers) : ''

//=======================================\\

const nmrdn = numerodono_ofc + "@s.whatsapp.net"

const whatIsPhone = info.key.id.length > 21 ? "Android 👤" : info.key.id.substring(0, 2) == '3A' ? "iPhone 🍎" : "Whatsapp Web 🌐"

const isIOS = whatIsPhone.toLowerCase().includes(`iphone`) ? true : false

const quoted = info.quoted ? info.quoted : seloctt

const isBot = info.key.fromMe ? true : false

const isOwner = nmrdn.includes(sender) || JSON.stringify(donos).includes(sender) || isBot || isnit || issupre || ischyt || isSesc

const isSupremeOwner = nmrdn.includes(sender) || isBot || isnit || issupre || ischyt || isSesc

const isAllOwner = (id = sender) => {
if(numerodono.includes(id) || nit.includes(id) || supre.includes(id) || chyt.includes(id) || sesc.includes(id)) return true
return false
}

const existsAdmin = (id = sender) => {
if(groupAdmins.includes(id)) return true
return false
}

//=======================================\\

var letras = `abcdefghijklmnopqrstuvwxyz`

const randomLetra = letras[alerandom(letras.length)].toUpperCase()

const randomUser = isGroup ? groupMembers[alerandom(groupMembers.length)].id : sender

const botIsAdm = groupAdmins.includes(botNumber)

const isAdmin = groupAdmins.includes(sender) || isOwner

//=========(funções/consts)=============\\
const isConsole = allconfig.console

const isVerificado = allconfig.verificado

//=======================================\\

const enviar = {
  successo: '️❬ ✔ ❭ Sucesso 🖤',
  msg: {
    grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
    vip: '[❗] ESTE COMANDO É SÓ PARA *USUÁRIOS VIP*',
    mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${nomedono}*`,
    banido: '[❗] Você está proibido de usar os comandos do bot... Entre em contato com meu dono para saber o por que ❌' ,    donosmt: '[❗] Este comando está restrito ao uso do meu dono ❌',
    donosmt2: `[❗] Este comando só pode ser usado pelo ${nomedono}, meu dono ❌`,
    adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
    Badmin: '[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
    consulta: '[⚙️] consultando dados, aguarde um momento❗',
    notusu: `[❗] ID do usuário não encontrado ou inexistente ❌`
  }
}

var downoff = 'Sistema apresenta instabilidades... Pfvr, volte mais tarde.'

var downon = 'Sistema cancelou a operação, devido a demora na resposta...'

var semfoto = `https://telegra.ph/file/d9909cc45b86459fcb8a9.jpg`

//==========(VERIFICADO)===============\\

if(isVerificado) {
var selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${nomebot}`}}}
} else {
var selo = info
}

//selo contato
if(isVerificado) {
var seloctt = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}}
} else {
var seloctt = info
}

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\

//marcação apenas de mensagem
const menc_message = convertUserID(info.message?.extendedTextMessage?.contextInfo?.participant)

//marcação de @
const menc_arroba = convertUserID(args?.join(" ").replace("@", "") + (args?.join(" ").replace("@", "").length > 13 ? "@lid" : "@s.whatsapp.net"))

//marcação de muitos @
const menc_arroba2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid.map(infojid => (convertUserID(infojid)))

//sender ou marcação
const sender_ou_n = q.includes("@") ? menc_arroba : sender

//marcação ou número
const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_message 

//marcação de mensagem e @
const menc_arrobamessage = q.includes("@") ? menc_arroba : menc_message 

//todo tipo de marcação
const all_type_number = q.includes("@") ? menc_arroba : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_message 

//outro tipo de marcação
const menc_message_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_message

const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}

////////////////////////////////////////////

/**
 * @returns {string[]}
 */
const getallcases = () => {
  findindex = fs.readFileSync("index.js").toString().match(/case\s+'(.+?)'/g)
  cstt = []
  for(i of findindex) {
    cstt.push(i.split(`'`)[1])
  }
  return cstt
}

//lista todas as cases da index
const allCases = getallcases();

const getSimilarity = require(`./js/similaridade.js`)

/**
 * retorna um comando semelhante ao que foi procurado
 * @param {string} txt dado a ser buscado
 */
const similarityCmd = (txt) => {
  let getsmlrt = getSimilarity(allCases, txt)
  if(rmLetras(getsmlrt.nome).includes(`nao encontrado`)) return {comando: getsmlrt.nome, porcentagem: getsmlrt.porcentagem}
  return {comando: prefix+getsmlrt.nome, porcentagem: Number(Number(getsmlrt.porcentagem).toFixed(1))}
}

////////////////////////////////////////////

/**
 * função de remover do chat um participante X de um grupo Y
 * @param {string} id id do grupo
 * @param {string} usu jid ou lid do participante
 */
function remover(id, usu) {
zora.groupParticipantsUpdate(id, [usu], "remove")}

/**
 * função de promover a admin um participante X em um grupo Y
 * @param {string} id id do grupo
 * @param {string} usu jid ou lid do participante
 */
function promover(id, usu) {
zora.groupParticipantsUpdate(id, [usu], "promote")}

/**
 * função de rebaixar a membro um participante X de um grupo Y
 * @param {string} id id do grupo
 * @param {string} usu jid ou lid do participante
 */
function rebaixar(id, usu) {
zora.groupParticipantsUpdate(id, [usu], "demote")}

/**
 * função de aceitar da lista de espera um participante X em um grupo Y
 * @param {string} id id do grupo
 * @param {string} usu jid ou lid do participante
 */
function aceitar(id, usu) {
zora.groupRequestParticipantsUpdate(id, [usu], "approve")}

/**
 * função de recusar um participante X da lista de espera de um grupo Y
 * @param {string} id id do grupo
 * @param {string} usu jid ou lid do participante
 */
function recusar(id, usu) {
zora.groupRequestParticipantsUpdate(id, [usu], "reject")}

async function wppuser(user) {
const [result] = await zora.onWhatsApp(user.split("@")[0])
if(result == undefined) return reply(`[❗] erro, o mod "${user}" não foi encontrado no whatsapp ❌`)}

async function carregamento(id, txt, hehe) {
  var download = [
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘█▒▒▒▒▒▒▒▒▒〙10%`,
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘███▒▒▒▒▒▒▒〙35%`,
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘█████▒▒▒▒▒〙51%`,
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘███████▒▒▒〙62%`,
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘████████▒▒〙80%`,
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘██████████〙100%`,
    `${txt.length > 0 ? "~_*© duck system*_~\n" : ""}𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...`
    ]
  let { key } = await zora.sendMessage(id, {text: `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘▒▒▒▒▒▒▒▒▒▒〙0%`}, {quoted: hehe})
  await sleep(2000)
  for(let i = 0; i < download.length; i++) {
    await zora.sendMessage(id, {text: download[i], edit: key }, {quoted: hehe})
  }
}

/**
 * tranforma número grandes em pequenas extenções, exemplo:
 * - 1000 = 1K
 * - 12409444 = 12.4M
 * - 56 = 56
 * @param {number} value número a ser consultado
 * @returns {string}
 */
const largeNumber = (value) => {
  if(!Number(value)) return value + " não é número..."
  if(Number(value) < 0) return "O número precisa ser ≥ 0"
  nmr = `${Number(value).toFixed(0)}`
  if(nmr.length >= 4) {
    /**
     * verifica se existe um ponto no número, o final, exemplo:
     * - 1045 (1K) = false
     * - 1378 (1.3K) = true
     * @param {string} nmr número base
     * @returns 
     */
    const existPoint = (nmr) => {
      if(Number(nmr) !== 0) return "." + `${nmr}`
      return ``
    }
    if(nmr.length >= 4) txt = nmr.slice(0, (nmr.length - 3)) + existPoint(nmr.slice((nmr.length - 3), (nmr.length - 2))) + "K"
    if(nmr.length >= 7) txt = nmr.slice(0, (nmr.length - 6)) + existPoint(nmr.slice((nmr.length - 6), (nmr.length - 5))) + "M"
    if(nmr.length >= 10) txt = nmr.slice(0, (nmr.length - 9)) + existPoint(nmr.slice((nmr.length - 9), (nmr.length - 8))) + "B"
    if(nmr.length >= 13) txt = nmr.slice(0, (nmr.length - 12)) + existPoint(nmr.slice((nmr.length - 12), (nmr.length - 11))) + "T"
  } else { txt = nmr }
  return txt
}

const gerarkey = (a) => {
  nmr = Number(a)
  idks = randomLetra + a + "-"
  idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(sender.slice(2, 8))}`
  idks += `${randomLetra + (nmr * 2) + randomLetra}` + "-" + `${Number(moment.tz('America/Sao_Paulo').format('DDMMYY')) + Number(moment.tz('America/Sao_Paulo').format('HHmmss'))}` + randomLetra
  return idks
}

////////////////////////////////////////////
function setOwner(index){
fs.writeFileSync("./db/settings.json", JSON.stringify(index, null, 2))}

function setConfig(index){
fs.writeFileSync("./db/config-all.json", JSON.stringify(index, null, 2))}

var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

if(!isCmd && info.key.fromMe) return

const reply = (texto) => {
zora.sendMessage(from, { text: texto }, {quoted: seloctt}).catch(e => {
return reply("Erro..");
})
}

const shuffle = (XXX) => {
palavra = `${XXX} `
armax = []
for(i = 0; i < palavra.length; i++) {
armax.push({letra: palavra.split(palavra.slice(i+1))[0].slice(i)})
}
pross = ""
total_armax = armax.length
for(a = 0; a < total_armax; a++) {
alex = Math.floor(Math.random()*armax.length)
pross += `${armax[alex].letra}`
armax.splice(alex, 1)
}
return pross
}

const convertNumberInMonth = (pser) => {
  allmes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
  return allmes[Number(pser) - 1]
}

const realtime = `${sendHours('HH')} hora${Number(sendHours('HH')) !== 1 ? "s" : ""}, ${sendHours('mm')} minuto${Number(sendHours('mm')) !== 1 ? "s" : ""} e ${sendHours('ss')} segundo${Number(sendHours('ss')) !== 1 ? "s" : ""} do dia ${sendHours('DD')} de ${convertNumberInMonth(sendHours('MM'))} de ${sendHours('YYYY')}`

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa madrugada'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}

const time_emoji = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time_emoji > "00:00:00" && time_emoji < "05:00:00"){
var tempo_emoji = '🌑'
} if(time_emoji > "05:00:00" && time_emoji < "12:00:00"){
var tempo_emoji = '☀️'
} if(time_emoji > "12:00:00" && time_emoji < "18:00:00"){
var tempo_emoji = '🍃'
} if(time_emoji > "18:00:00"){
var tempo_emoji = '🌙'
}

const time_pro = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time_pro > "00:00:00" && time_pro < "05:00:00"){
var tempo_pro = 'uma'
} if(time_pro > "05:00:00" && time_pro < "12:00:00"){
var tempo_pro = 'um'
} if(time_pro > "12:00:00" && time_pro < "18:00:00"){
var tempo_pro = 'uma'
} if(time_pro > "18:00:00"){
var tempo_pro = 'uma'
}

//FUNÇÕES DE ENVIO DE MENSAGEM ABAIXO

const sendSticker = (from, filename, info) => {
zora.sendMessage(from, {sticker: {url: fileName}}, {quoted: info})
}

/**
 * função de envio de contado
 * * exemplo de uso:
 * * * sendContact('123456789101112@g.us', 'Matheus, 'ZORA BOT', '5519982766489')
 * @param {string} id id do local onde será enviado, exemplo: 123456789101112@g.us
 * @param {string} nome1 nome do contado, exemplo: Matheus
 * @param {string} nome2 nome da organizção, exemplo: ZORA BOT
 * @param {string} nmr número do contado, exemplo: 5519982766489
 */
async function sendContact(id, nome1, nome2, nmr) {
nmr1 = `${nmr.split('@')[0].replace(new RegExp("[()+-/ +/]", "gi"), "")}`
nmr2 = "+" + nmr1.slice(0, 2) + " " + nmr1.slice(2, 4) + " " + nmr1.slice(4, nmr1.length - 4) + "-" + nmr1.slice(nmr1.length - 4, nmr1.length)
vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + `FN: ${nome1}\n` // full name
            + `ORG: ${nome2};\n` // the organization of the contact
            + `TEL;type=CELL;type=VOICE;waid=${nmr1}:${nmr2}\n` // WhatsApp ID + phone number
            + 'END:VCARD'
await zora.sendMessage(id, {contacts: {  displayName: nome1,  contacts: [{ vcard }] }})
}

async function sendForwardingMessage(id, texto, hehe, encaminhado = 999) {
  menc = []
  for(i of texto.split(`\n`).join(` `).split(` `)) {
    if(i.includes(`@`)) menc.push(identArroba(i))
  }
  zora.sendMessage(id, {text: texto, contextInfo: {mentionedJid: menc, forwardingScore: encaminhado, isForwarded: true}}, {quoted: hehe})
}

async function sendUrlText(id, texto, title, desc, foto, link, hehe) {
menc = []
sp = texto.split(` `)
for(i of sp) {
if(i.includes(`@`)) menc.push(identArroba(i))
}
sendButton(id, {image: {url: foto}, caption: texto, footer: title, mentions: menc}, zora, [{type: 'copy_url', text: desc, url: link}], hehe)
}

async function sendUrlText2(id, texto, title, desc, foto, link, hehe) {
zora.sendMessage(id, {image: {url: foto}, caption: texto, contextInfo: {forwardingScore: 10, isForwarded: true}}, {quoted: hehe})
}

async function sendUrlDoc(id, txt, tipo, titulo, tamanho, nome, desc, thumb, link, hehe) {
menc = []
sp = txt.split(`\n`).join(` `).split(` `)
for(i of sp) {
if(i.includes(`@`)) menc.push(identArroba(i))
}
zora.sendMessage(id, {image: {url: thumb}, caption: txt, contextInfo: {mentionedJid: menc, forwardingScore: 10, isForwarded: true}}, {quoted: hehe})
}

function sendChannelText(id, txt, channel, name, hehe) {
menc = []
sp = txt.split(`\n`).join(` `).split(` `)
for(i of sp) {
if(i.includes(`@`)) menc.push(identArroba(i))
}
zora.sendMessage(id, {text: txt, mentions: menc, contextInfo: {forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: channel, newsletterName: name}}}, {quoted: hehe})}

function sendChannelImage(id, img, txt, channel, hehe) {
menc = []
sp = txt.split(`\n`).join(` `).split(` `)
for(i of sp) {
if(i.includes(`@`)) menc.push(identArroba(i))
}
zora.sendMessage(id, {image: {url: img}, caption: txt, mentions: menc, contextInfo: {forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: channel, newsletterName: name}}}, {quoted: hehe})}

const sendVideo = (id, link, desc, hehe) => {
  menc = []
  sp = desc.split(`\n`).join(` `).split(` `)
  for(i of sp) {
    if(i.includes(`@`)) menc.push(identArroba(i))
  }
  return zora.sendMessage(id, {video: {url: link}, caption: desc, mentions: menc}, {quoted: hehe})
}

/**
 * exemplo de uso da função
 * @param {string} origem caminho até o arquivo original do áudio (exemplo: './database/audios/teste.mp3')
 * @param {string} [nomeArquivo] nome do arquivo pra salvar o áudio
 */
async function sendAudioPTT(origem, nomeArquivo = 'audio') {
  try {
    const tempDir = './database/midia/audios/ptt';
    if(!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

    let originalLocal;
    let ext;
    let mp3Local = path.join(tempDir, `${nomeArquivo}_orig.mp3`); 
    const opusLocal = path.join(tempDir, `${nomeArquivo}.ogg`);
    
    if(origem.startsWith('http')) {
      const url = new URL(origem);
      ext = path.extname(url.pathname);
      if(!ext) ext = '.mp3';
      const tempOrig = path.join(tempDir, `${nomeArquivo}_orig${ext}`);
      
      const res = await fetch(origem);
      if(!res.ok) throw new Error('Falha ao baixar o áudio');
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(tempOrig, buffer);

      
      if(ext !== '.mp3') {
        await new Promise((resolve, reject) => {
          exec(`ffmpeg -y -i "${tempOrig}" -c:a mp3 -b:a 128k "${mp3Local}"`, (err) => {
            if(err) return reject(err);
            fs.unlinkSync(tempOrig);
            resolve();
          });
        });
        originalLocal = mp3Local;
      } else {
      fs.renameSync(tempOrig, mp3Local);
      originalLocal = mp3Local;
    }
    } else {
      ext = path.extname(origem);
      if(!ext) ext = '.mp3'; 
      const tempOrig = path.join(tempDir, `${nomeArquivo}_orig${ext}`);
      fs.copyFileSync(origem, tempOrig);

      if(ext !== '.mp3') {
        await new Promise((resolve, reject) => {
          exec(`ffmpeg -y -i "${tempOrig}" -c:a mp3 -b:a 128k "${mp3Local}"`, (err) => {
            if(err) return reject(err);
            fs.unlinkSync(tempOrig);
            resolve();
          });
        });
        originalLocal = mp3Local;
      } else {
        fs.copyFileSync(tempOrig, mp3Local);
        fs.unlinkSync(tempOrig);
        originalLocal = mp3Local;
      }
    }
    await new Promise((resolve, reject) => {
      exec(`ffmpeg -y -i "${originalLocal}" -c:a libopus -b:a 64k -vbr on "${opusLocal}"`, (err) => {
        if(err) return reject(err);
        resolve();
      });
    });
    await blackmd.sendMessage(from, {
      audio: fs.readFileSync(opusLocal),
      mimetype: 'audio/ogg; codecs=opus',
      ptt: true
    }, {quoted: info});

    // Limpa arquivos temporários
    fs.unlinkSync(originalLocal);
    fs.unlinkSync(opusLocal);
  } catch (e) {
    console.log('Erro ao enviar áudio PTT:', e);
    reply('Erro ao enviar o áudio!');
  }
}

const sendAudio = (id, link, tipo, hehe) => {
  return zora.sendMessage(id, {audio: {url: link}, mimetype: tipo}, {quoted: hehe})
}

function sendChannelAudio(link, id = from) {
  zora.sendMessage(id, {
    audio: {url: link},
    mimetype: `audio/mpeg`,
    contextInfo: {
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: blackchannel,
        newsletterName: channel.name
      }
    }
  }, {quoted: seloctt})
}

const sendImage = (id, ytb, cap, hehe) => {
menc = []
sp = cap.split(`\n`).join(` `).split(` `)
for(i of sp) {
if(i.includes(`@`)) menc.push(identArroba(i))
}
zora.sendMessage(id, {image: {url: ytb}, caption: cap, mentions: menc}, {quoted: hehe})
}

const sendMess = (hehe, ytb, yah) => {
menc = []
sp = ytb.split(`\n`).join(` `).split(` `)
for(i of sp) {
if(i.includes(`@`)) menc.push(identArroba(i))
}
zora.sendMessage(hehe, {text: ytb, mentions: menc}, {quoted: yah})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? zora.sendMessage(from, {text: teks.trim(), mentions: memberr}) : zora.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
zora.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
zora.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const reagir = async (emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
zora.sendMessage(from, reactionMessage)
}

const verificarN = async(sla) => {
const [result] = await zora.onWhatsApp(sla)
if(result == undefined) {
reply("Este usuário não é existente no WhatsApp")
} else {
reply(`-> ${sla} Número inserido é existente no WhatsApp.\n\ncom o id: ${result.jid}`)
}
}

const enviarfigu = async (figu, tag) => {
zora.sendMessage(from, {sticker: {url: figu}}, {quoted: tag})
}

function detectarHost() {//créditos: vini kibe
  if(fs.existsSync('/data/data/com.termux/files/home')) return 'Termux';
  if(fs.existsSync('/etc/cloud') || fs.existsSync('/etc/init.d') || os.hostname().includes('vps')) return 'VPS';
  if(process.env.PTERODACTYL) return 'Pterodactyl';
  const platform = os.platform();
  if(platform === 'win32') return 'PC (Windows)';
  if(platform === 'linux' && !fs.existsSync('/etc/cloud')) return 'PC (Linux)';
  return 'Ambiente desconhecido';
}

//========================================\\

//BAN GRUPO & BOT OFF
if(isCmd && isJsonIncludes(banned, sender)) {
  AB = banned.map(i => i.id).indexOf(sender)
  if(banned[AB].save != Number(sendHours("DD"))) {
    banned[AB].save = Number(sendHours("DD"))
    saveJSON(banned, "./database/banned.json")
    return reply("[❗] Usuário bloqueado de usar os comandos ❌")
  } else return
}

//=======================================\\

const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('enviando sticker');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
zora.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: seloctt}).catch(e => {
return reply("Erro..")
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return reply("Erro.. FNC")
}
}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isFig = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isDocument = type == 'documentMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isFig) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
            

////FIMMMMMMMMM/////
if(isConsole) {
if(isGroup && info.message?.reactionMessage?.text) {
console.log(colors.white(`
╓─━${"⎓⎔".repeat(20)}⎓━─┒
┢╕\t${colors.cyan(nomebot)}
╽╟ • ᴜꜱᴜáʀɪᴏ ~> ${colors.brightYellow(pushname)}
╽║
╽╟ • ɴúᴍᴇʀᴏ ~> ${colors.brightMagenta(sender.includes(`status`) ? `status` : addNumberMais(sender.split("@")[0]))}
╽║
╽╟ • ɢʀᴜᴩᴏ ~> ${isGroup ? colors.blue(groupName) : colors.red(`"privado"`)}
╽║
╽╟ • ʀᴇᴀçãᴏ ~>『 ${info.message.reactionMessage.text} 』
┕╨${"⚋".repeat(44)}┚
`))
} else if(isGroup && !isCmd) {
console.log(colors.white(`
╓─━${"⎓⎔".repeat(20)}⎓━─┒
┢╕\t${colors.cyan(nomebot)}
╽╟ • ᴜꜱᴜáʀɪᴏ ~> ${colors.brightYellow(pushname)}
╽║
╽╟ • ɴúᴍᴇʀᴏ ~> ${colors.brightMagenta(sender.includes(`status`) ? `status` : addNumberMais(sender.split("@")[0]))}
╽║
╽╟ • ɢʀᴜᴩᴏ ~> ${colors.blue(groupName)}
╽║
╽╟ • ᴛɪᴩᴏ ~> ${colors.cyan(type == "stickerMessage" ? `"figurinha"` : type == "documentMessage" ? `"documento"` : type == "locationMessage" ? `"localização"` : type == "audioMessage" ? `"áudio"` : type == "videoMessage" ? `"vídeo"` : type == "imageMessage" ? `"imagem"` : `"mensagem"`)}
┕╨${"⚋".repeat(44)}┚
`))
} else if(isCmd && !isGroup) {
console.log(colors.white(`
╓─━${"⎓⎔".repeat(20)}⎓━─┒
┢╕\t${colors.cyan(nomebot)}
╽╟ • ᴜꜱᴜáʀɪᴏ ~> ${colors.brightYellow(pushname)}
╽║
╽╟ • ɴúᴍᴇʀᴏ ~> ${colors.brightMagenta(sender.includes(`status`) ? `status` : addNumberMais(sender.split("@")[0]))}
╽║
╽║『 ${colors.red("ᴩʀɪᴠᴀᴅᴏ")} 』
╽║
╽╟ • ᴄᴏᴍᴀɴᴅᴏ ~> ${colors.cyan(prefix+command)}
┕╨${"⚋".repeat(44)}┚
`)) 
} else if(isCmd && isGroup) {
console.log(colors.white(`
╓─━${"⎓⎔".repeat(20)}⎓━─┒
┢╕\t${colors.cyan(nomebot)}
╽╟ • ᴜꜱᴜáʀɪᴏ ~> ${colors.brightYellow(pushname)}
╽║
╽╟ • ɴúᴍᴇʀᴏ ~> ${colors.brightMagenta(sender.includes(`status`) ? `status` : addNumberMais(sender.split("@")[0]))}
╽║
╽╟ • ɢʀᴜᴩᴏ ~> ${colors.blue(groupName)}
╽║
╽╟ • ᴄᴏᴍᴀɴᴅᴏ ~> ${colors.cyan(prefix+command)}
┕╨${"⚋".repeat(44)}┚
`))
} else {
console.log(colors.white(`
╓─━${"⎓⎔".repeat(20)}⎓━─┒
┢╕\t${colors.white(nomebot)}
╽╟ • ᴜꜱᴜáʀɪᴏ ~> ${colors.brightYellow(pushname)}
╽║
╽╟ • ɴúᴍᴇʀᴏ ~> ${colors.brightMagenta(sender.includes(`status`) ? `status` : addNumberMais(sender.split("@")[0]))}
╽║
╽║『 ${colors.red("ᴩʀɪᴠᴀᴅᴏ")} 』
┕╨${"⚋".repeat(44)}┚
`))
}
}

const isAntiLinkGP = isGroup ? dataGp.antis.linkgp : undefined

const isAllAntiLink = isGroup ? dataGp.antis.linkall : undefined

const isAntiImg = isGroup ? dataGp.antis.imagem : undefined

const isAntiVideo = isGroup ? dataGp.antis.video : undefined

const isAntiAudio = isGroup ? dataGp.antis.audio : undefined

const isAntiFig = isGroup ? dataGp.antis.figurinha : undefined

const isAntiDoc = isGroup ? dataGp.antis.documento : undefined

const isAntiLoc = isGroup ? dataGp.antis.localizacao : undefined

const isAntiFake = isGroup ? dataGp.antis.fake : undefined

const isBemVindo = isGroup ? dataGp.bemvindo[0].funcao : undefined

const isBemVindo2 = isGroup ? dataGp.bemvindo[1].funcao : undefined

//MENUS FUNC (você pode escolher)

function sendMenuInList(id = from) {
  botaoblk = {
    type: `list`,
    title: `〘 𝗩𝗘𝗥 𝗠𝗘𝗡𝗨 〙`,
    rowId: [
      {
        title: realtime,
        options: [
          {title: "╰𝙈𝙀𝙉𝙐-𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇╮", command: `${prefix}comandos`, body: `ᖾ ${nomebot}`},
          {title: "╰𝙋𝙄𝙉𝙂╮", command: `${prefix}ping`, body: `ᖾ ${nomebot}`}
        ]
      }
    ]
  }
  sendButton(id, {image: {url: logomenupath}, caption: `
𝑾𝑬𝑳𝑪𝑶𝑴𝑬 *@${sender.split("@")[0]}*, ${tempo == "bom dia" ? "𝑩𝑶𝑴 𝑫𝑰𝑨" : tempo == "boa tarde" ? "𝑩𝑶𝑨 𝑻𝑨𝑹𝑫𝑬" : "𝑩𝑶𝑨 𝑵𝑶𝑰𝑻𝑬"}
`, mentions: [sender], footer: `${sendHours("DD-MM-YYYY")} ┋ ${sendHours("HH:mm")}h`, contextInfo: {
    forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: {
      newsletterJid: channel.id, newsletterName: channel.nome
    }
  }}, zora, [botaoblk], info)
}

function sendMenu(cap, hehe) {
  menc = []
  for(i of cap.split(' ')) {
    if(i.includes('@')) menc.push(identArroba(i))
  }
  zora.sendMessage(from, {image: {url: logospath.logo}, caption: cap, mentions: menc}, {quoted: hehe})
}

//============(EVAL-EXECUÇÕES)===========\\

if(budy.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!isOwner && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return zora.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(budy.startsWith('(>')){
try {
if(info.key.fromMe) return   
if(!isOwner && !isnit && !issupre && !ischyt && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return zora.sendMessage(from, {text: bang}, {quoted: seloctt})
}

zora.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}


if(body.startsWith('$')) {
if(info.key.fromMe) return 
if(!isOwner && !isnit) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}

//TODOS OS ANTIS

if(isGroup && botIsAdm) {
  function timeDEL() {
    setTimeout(async() => {
      zora.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
    }, 2000)
  }
  function violacaoAdmAntiAll() {reply(`Opa, violação detectada... Mas você é adm, e por isso foi livrado do banimento 🥱`)}
  //anti link grupo
  if(isAntiLinkGP) {
    getlinkgp = []
    for(i of body.split(" ")) {
      if(i.includes("chat.whatsapp.com")) getlinkgp.push(i)
    }
    if(getlinkgp.length > 0) {
      if(isAdmin) return violacaoAdmAntiAll()
      linkgp = await zora.groupInviteCode(from)
      if(getlinkgp.length == 1 && getlinkgp[0].includes(linkgp)) return reply(`Ops, link do nosso grupo, não irei remover 💁🏻‍♂️`)
      mention(`Punindo usuário @${sender.split("@")[0]} por enviar link de grupo ❌`)
      remover(from, sender)
      timeDEL()
    }
  }
  //anti link geral
  if(isAllAntiLink) {
    getlinkall = 0
    for(i of body.split(" ")) {
      if(isUrl(i)) getlinkall += 1
    }
    if(getlinkall > 0) {
      if(isAdmin) return violacaoAdmAntiAll()
      mention(`Punindo usuário @${sender.split("@")[0]} por enviar links ❌`)
      remover(from, sender)
      timeDEL()
    }
  }
  //anti imagem
  if(isAntiImg && isImage) {
    if(isAdmin) return violacaoAdmAntiAll()
    mention(`Punindo usuário @${sender.split("@")[0]} por enviar fotos 🖼❌`)
    remover(from, sender)
    timeDEL()
  }
  //anti video
  if(isAntiVideo && isVideo) {
    if(isAdmin) return violacaoAdmAntiAll()
    mention(`Punindo usuário @${sender.split("@")[0]} por enviar vídeo 🎥❌`)
    remover(from, sender)
    timeDEL()
  }
  //anti audio
  if(isAntiAudio && isAudio) {
    if(isAdmin) return violacaoAdmAntiAll()
    mention(`Punindo usuário @${sender.split("@")[0]} por enviar áudio 🎤❌`)
    remover(from, sender)
    timeDEL()
  }
  //anti sticker
  if(isAntiFig && isFig) {
    if(isAdmin) return violacaoAdmAntiAll()
    mention(`Punindo usuário @${sender.split("@")[0]} por enviar figurinha 🧩❌`)
    remover(from, sender)
    timeDEL()
  }
  //anti documento
  if(isAntiDoc && isDocument) {
    if(isAdmin) return violacaoAdmAntiAll()
    mention(`Punindo usuário @${sender.split("@")[0]} por enviar documento 📂❌`)
    remover(from, sender)
    timeDEL()
  }
  //anti localização
  if(isAntiLoc && isLocation) {
    if(isAdmin) return violacaoAdmAntiAll()
    mention(`Punindo usuário @${sender.split("@")[0]} por enviar localização 📍❌`)
    remover(from, sender)
    timeDEL()
  }
}

//FINALZIN ==============================>

const sendAsPoll = (jid, name = '', values = [], selectableCount = 0) => { return zora.sendMessage(jid, { poll: { name, values, selectableCount }}) }

async function atualizarGrupos(reset = false) {
  allconfig.dbgp = sendHours('HH')
  dbgp = sendHours('HH')
  setConfig(allconfig)
  allgp = Object.entries((await zora.groupFetchAllParticipating())).slice(0).map(entry => entry[1]).map(v => v).sort((a, b) => (a[0] < b.length))
  saveJSON(allgp, './grupos.json')
  console.log(colors.green(`LISTA DE ${allgp.length} GRUPOS ATUALIZADA COM SUCESSO ÀS ${sendHours('HH:mm')}`))
  //DADOS DE GRUPOS SALVOS
  deleteGP = allGroups.filter(a => !allgp.some(b => b.id === a.id))
  if(deleteGP.length > 0) {
    console.log(colors.red('REMOVENDO JSON DE DADOS DOS GRUPOS QUE O BOT NÃO SE ENCONTRA MAIS:\n'), colors.white(deleteGP.map(d => `- ./database/grupos/${d.id}.json (${d.subject})`).join('\n')))
    deleteGP.forEach(f => {
      if(fs.existsSync(`./database/grupos/${f.id}.json`)) {
        fs.unlinkSync(`./database/grupos/${f.id}.json`)
      }
    })
  }
  if(reset) {
    setTimeout(() => {
      process.exit()
    }, 2000);
  }
}

if(isGroup && Number(dbgp) !== Number(sendHours('HH'))) {atualizarGrupos(true)}

//INICIO DE COMANDO DE PREFIXO

switch(command) {

//cases de exemplo
case 'exemplo': case 'exemplos': {//isso é uma case
let txt = `
EXEMPLOS DE BOTÕES:
- ${prefix}b1
- ${prefix}b2
- ${prefix}b3
- ${prefix}b4
- ${prefix}b5

EXEMPLOS DE LISTAS:
- ${prefix}l1
- ${prefix}l2

EXEMPLOS DE RESPOSTAS:
- ${prefix}r1
- ${prefix}r2
- ${prefix}r3
- ${prefix}r4
- ${prefix}r5

EXEMPLOS DE MENÇÕES:
- ${prefix}m1
- ${prefix}m2
- ${prefix}m3
- ${prefix}m4
`
zora.sendMessage(from, {text: txt})
break }

case 'b1'://botão de texto
sendButton(from, {text: `Texto principal`, footer: `Texto secundário`}, zora, [{type: `cmd`, text: `MENU`, command: `${prefix}menu`}, {type: `cmd`, text: `PING`, command: `${prefix}ping`}], info)
break

case 'b2'://botão de texto com menção
sendButton(from, {text: `Texto principal mencionando @${sender.split('@')[0]}`, footer: `Texto secundário`, mentions: [sender]}, zora, [{type: `cmd`, text: `MENU`, command: `${prefix}menu`}], info)
break

case 'b3'://botão de imagem
//a url pode ser um link ou caminho do arquivo
sendButton(from, {image: {url: logomenupath}, caption: `Texto principal`, footer: `Texto secundário`, mentions: [sender]}, zora, [{type: `cmd`, text: `MENU`, command: `${prefix}menu`}], info)
break

case 'b4'://botão de copiar
sendButton(from, {text: `Texto principal`, footer: `Texto secundário`}, zora, [{type: `copy_text`, text: `CANAL AQUI`, url: `https://whatsapp.com/channel/0029VbBCEri6xCSQ0AI1ok1L`}], info)
break

case 'b5'://botão de url
sendButton(from, {text: `Texto principal`, footer: `Texto secundário`}, zora, [{type: `copy_url`, text: `SITE AQUI`, url: `https://blacksystemofc.com.br`}], info)
break

case 'l1'://lista de texto
//o mentions também funciona
sendButton(from, {text: `Texto principal`, footer: `Texto secundário`}, zora, [{type: `list`, title: `AMOSTRA DE LISTA`, rowId: [
  {
    title: `Texto interno 1 do menu`,
    options: [
      {title: `MENU`, body: `Texto base 1 do comando`, command: `${prefix}comandos`},
      {title: `PING`, body: `Texto base 2 do comando`, command: `${prefix}ping`}
    ]
  },
  {
    title: `Texto interno 2 do menu`,
    options: [
      {title: `MENU`, body: `Texto base 1 do comando`, command: `${prefix}comandos`},
      {title: `PING`, body: `Texto base 2 do comando`, command: `${prefix}ping`}
    ]
  }
]}], info)
break

case 'l2'://lista de imagem
//o mentions também funciona
sendButton(from, {image: {url: logomenupath}, caption: `Texto principal`, footer: `Texto secundário`}, zora, [{type: `list`, title: `AMOSTRA DE LISTA`, rowId: [
  {
    title: `Texto interno 1 do menu`,
    options: [
      {title: `MENU`, body: `Texto base 1 do comando`, command: `${prefix}comandos`},
      {title: `PING`, body: `Texto base 2 do comando`, command: `${prefix}ping`}
    ]
  }
]}], info)
break

case 'r1'://responder mensagem com função 1
reply(`Resposta simples`)
break

case 'r2'://responder mensagem com função 2
sendMess(from, `Resposta simples no grupo`)
sendMess(sender, `Resposta simples no privado`)
break

case 'r3'://responder mensagem sem função
zora.sendMessage(from, {text: `Resposta simples`}, {quoted: info})
break

case 'r4'://responder mensagem sem função e menção
zora.sendMessage(from, {text: `Resposta simples com menção @${sender.split('@')[0]} e @${botNumber.split('@')[0]}`, mentions: [sender, botNumber]}, {quoted: info})
break

case 'r5'://responder mensagem com menção
mention(`Resposta simples com menção @${sender.split('@')[0]}`)
break

case 'i1'://responder mensagem com imagem com função
sendImage(from, logomenupath, `Descrição da imagem aqui`, info)
break

case 'i2'://responder mensagem com imagem com função e menção
sendImage(from, logomenupath, `Exemplo com menção @${sender.split('@')[0]}`, info)
break

case 'i3'://responder mensagem com imagem sem função
zora.sendMessage(from, {image: {url: logomenupath}, caption: `Descrição da imagem aqui`}, {quoted: info})
break

case 'i4'://responder mensagem com imagem sem função e menção
zora.sendMessage(from, {image: {url: logomenupath}, caption: `Descrição da imagem com menção @${sender.split('@')[0]} aqui`, mentions: [sender]}, {quoted: info})
break

case 'm1'://exemplo avançado de menção mensagem e @
if(!menc_arrobamessage) return reply(`Marque a mensagem de alguém ou @ dela`)
mention(`Menção avançada com menção @${menc_arrobamessage.split('@')[0]}`)
break

case 'm2'://exemplo avançado de menção de mensagem
if(!menc_message) return reply(`Marque a mensagem de alguém`)
mention(`Menção avançada com menção @${menc_message.split('@')[0]}`)
break

case 'm3'://exemplo avançado de menção de @
if(!menc_arroba) return reply(`Marque o @ de alguém`)
mention(`Menção avançada com menção @${menc_arroba.split('@')[0]}`)
break

case 'm4': {//exemplo avançado de menção de texto
if(!q) return reply(`Exemplo: ${prefix+command} +55 33 9116-5807`)
let usu = identArroba(q)
mention(`Menção avançada 1 com menção @${usu.split('@')[0]}`)
zora.sendMessage(sender, {text: `Menção avançada 2 com menção @${usu.split('@')[0]}`, mentions: [usu]})
break }

case 'm5'://exemplo avançado de menção tudo
if(!all_type_number) return reply(`Marque qualquer coisa`)
mention(`Menção avançada com menção @${all_type_number.split('@')[0]}`)
break

//fim dos exemplos

case 'fotomenu':
case 'fundomenu':
if(!isOwner) return reply(enviar.msg.dono)
if(!isQuotedImage) return reply("Marque uma imagem")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`Calma ae, tem muitos comandos usando essa foto... Tô trocando aqui`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
img = await getFileBuffer(boij, 'image')
fs.writeFileSync(logomenupath, img)
reply(`A foto do menu foi alterada com sucesso`)
} else {
reply(`Mande uma imagem com o comando ${prefix + command} para trocar a foto de todos os menu...`)
}
break

case 'videourl':
case 'gerarlink':
case 'videopralink':
case 'imgpralink':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
return sendButton(from, {image: {url: res}, caption: `Link da imagem gerado com sucesso ↴`, footer: nomebot}, zora, [{type: 'copy_text', text: 'COPIAR 🖼', url: res}, {type: 'copy_url', text: 'ABRIR 🔁', url: res}], seloctt)
} else if((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && !q.length <= 1) { 
reply(`Gerando link do vídeo pra você...`)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
return sendButton(from, {video: {url: res}, caption: `Link do vídeo gerado com sucesso ↴`, footer: nomebot}, astaup, [{type: 'copy_text', text: 'COPIAR 🎥', url: res}, {type: 'copy_url', text: 'ABRIR 🔁', url: res}], seloctt)
} else {
reply("Você deve marcar uma imagem, ou um vídeo de até 30 segundos..")
}
} catch(e) {
console.log(e)
reply('Ocorreu algum Erro, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é até 30 segundos.')
}
break

case 'menu': case 'm':
setTimeout(() => {reagir("❤")}, 300)
if(isIOS || !botoes) return sendMenu(menuprincipal(prefix), seloctt)
sendMenuInList()
break

case 'comandos':
setTimeout(() => {reagir("🤖")}, 300)
sendMenu(menuprincipal(prefix), seloctt)
break

case 'ping':
reagir("⚡")
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
ping = r.toFixed(3)
if(ping < 0) stts = `lento`; 
if(ping >= 0) stts = `estável`; 
if(ping >= 1) stts = `bom`; 
if(ping >= 3) stts = `ruim`; 
if(ping >= 10) stts = `extremamente lento`
let ppimg = 'https://i.ibb.co/YB8G6zkT/70b84626-cf07-4a45-895e-d3f367bb3028.jpg';
let memoria = (process.memoryUsage().rss / 1024 / 1024).toFixed(2) + ' MB';
let tempoFormatado = kyun(uptime); 
let fundoAPI = 'https://i.ibb.co/m5KgWDj7/85b1152d-ac35-421a-aedc-90aff993daaf.jpg';
let cardUrl = `${siteapi}/canvas/ping2?ping=${ping}&uptime=${encodeURIComponent(tempoFormatado)}&memory=${encodeURIComponent(memoria)}&avatar=${encodeURIComponent(ppimg)}&fundo=${encodeURIComponent(fundoAPI)}&apitoken=${APIKEYZORA}`;    
host = detectarHost()
txt = `⚡ 𝚅𝚎𝚕𝚘𝚌𝚒𝚍𝚊𝚍𝚎〘 ${String(ping)} 〙
✍🏽 𝙿𝚒𝚗𝚐⇒ ${stts}
💻 𝚂𝚎𝚛𝚟𝚒𝚍𝚘𝚛⇒ ${host}
🗓️ 𝙳𝚊𝚝𝚊 & 𝙷𝚘𝚛𝚊
⇒${sendHours("DD/MM/YYYY")}ㅤ┋ㅤ${sendHours("HH:mm:ss")}
⌚ 𝚃𝚎𝚖𝚙𝚘 𝙰𝚝𝚒𝚟𝚘
⇒${kyun(uptime)}`
sendUrlText(from, txt, nomebot, `⇒ ${sendHours("DD/MM/YYYY")}ㅤ┋ㅤ${sendHours("HH:mm:ss")}`, cardUrl, siteapi, seloctt)
break;

case 'play':
if (!q) return reply(`Olá ${sender.split('@')[0]} me diga o nome da música!\nExemplo: ${prefix}play eu era`);
reagir("👾") 
try {
let buscaRes = await axios.get(`${siteapi}/api/search/yt?q=${encodeURIComponent(q)}&apitoken=${APIKEYZORA}`);
let dadosBusca = buscaRes.data.data;
if (!buscaRes.data.sucesso || !dadosBusca) return reply('Não consegui encontrar essa música ):');
let titulo = dadosBusca.titulo;
let canal = dadosBusca.canal;
let thumb = dadosBusca.thumbnail;
let duracao = dadosBusca.duracao;
let linkYt = dadosBusca.url;
let views = dadosBusca.views.toLocaleString('pt-BR'); 
let cardMusic = `${siteapi}/canvas/musicard?nome=${encodeURIComponent(titulo)}&autor=${encodeURIComponent(canal)}&logo=${encodeURIComponent(thumb)}&end=${encodeURIComponent(duracao)}&apitoken=${APIKEYZORA}`;
let txtPlay = `🎵 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐏𝐥𝐚𝐲\n\n`
txtPlay += `🎧 𝐓𝐢́𝐭𝐮𝐥𝐨⇒ ${titulo}\n`
txtPlay += `👤 𝐂𝐚𝐧𝐚𝐥⇒ ${canal}\n`
txtPlay += `⏱️ 𝐃𝐮𝐫𝐚𝐜̧𝐚̃𝐨⇒ ${duracao}\n`
txtPlay += `👁️ 𝐕𝐢𝐞𝐰𝐬⇒ ${views}\n`
txtPlay += `🔗 𝐋𝐢𝐧𝐤⇒ ${linkYt}\n\n`
txtPlay += `👇🏽 *Escolha o formato para baixar:*`
sendButton(from, {
image: { url: cardMusic },
caption: txtPlay,    
footer: `${nomebot}`         
}, zora, [
{ type: `cmd`, text: `ÁUDIO`, command: `${prefix}ytmp3 ${linkYt}` },
{ type: `cmd`, text: `VÍDEO`, command: `${prefix}ytmp4 ${linkYt}` }
], info);
} catch (e) {
reply('Ops um erro no servidor da API.');
}
break;

case 'ytmp3':
if (!q) return reply(`Cade o link do youtube?`);
try {
let apiAudio = await axios.get(`${siteapi}/api/dl/ytmp3?url=${q}&apitoken=${APIKEYZORA}`);
if(!apiAudio.data.sucesso) return reply('Erro ao gerar o áudio.');        
let linkBaixar = apiAudio.data.data.download;
zora.sendMessage(from, { audio: { url: linkBaixar }, mimetype: 'audio/mp4' }, { quoted: info });
} catch(e) {
reply('Erro ao baixar.');
}
break;

case 'ytmp4':
if (!q) return reply(`Cade o link do youtube?`);
try {
let apiVideo = await axios.get(`${siteapi}/api/dl/ytmp4?url=${q}&apitoken=${APIKEYZORA}`);
if(!apiVideo.data.sucesso) return reply('Erro ao gerar o vídeo.');        
let linkBaixar = apiVideo.data.data.download;
zora.sendMessage(from, { video: { url: linkBaixar }, mimetype: 'video/mp4' }, { quoted: info });
} catch(e) {
reply('Erro ao baixar.');
}
break;

case 'bemvindo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isAdmin) return reply(enviar.msg.adm)
if(isBemVindo) {
dataGp.bemvindo[0].funcao = false
setGp(dataGp)
reply(`Bem vindo desativado com sucesso ✔`)
} else {
dataGp.bemvindo[0].funcao = true
setGp(dataGp)
reply(`Bem vindo ativado com sucesso ✔`)
}
break

case 'legendabv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isAdmin) return reply(enviar.msg.adm)
if(!isBemVindo) return reply(`Necessário ativar o bem vindo primeiro, use ${prefix}bemvindo`)
if(!q) return reply(`Ex: ${prefix+command} Olá amigo, bem vindo ao nosso grupo`)
dataGp.bemvindo[0].desc = q
setGp(dataGp)
reply(`Legenda definida com sucesso... Quando alguém entrar no grupo, será recebido com uma imagem e essa legenda`)
break

case 'fundobv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isAdmin) return reply(enviar.msg.adm)
if(!isBemVindo) return reply(`Necessário ativar o bem vindo primeiro, use ${prefix}bemvindo`)
gfb = await getFileBuffer(boij, 'image')
up = await upload(gfb)
dataGp.bemvindo[0].fundo = up
setGp(dataGp)
return sendUrlText(from, `Fundo do menu alterado com sucesso ✔`, nomebot, ``, up, up, seloctt)
break

case 'bemvindo2':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isAdmin) return reply(enviar.msg.adm)
if(isBemVindo2) {
dataGp.bemvindo[1].funcao = false
setGp(dataGp)
reply(`Bem vindo desativado com sucesso ✔`)
} else {
dataGp.bemvindo[1].funcao = true
setGp(dataGp)
reply(`Bem vindo ativado com sucesso ✔`)
}
break

case 'legendabv2':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isAdmin) return reply(enviar.msg.adm)
if(!isBemVindo2) return reply(`Necessário ativar o bem vindo primeiro, use ${prefix}bemvindo`)
if(!q) return reply(`Ex: ${prefix+command} Olá amigo, bem vindo ao nosso grupo`)
dataGp.bemvindo[1].desc = q
setGp(dataGp)
reply(`Legenda definida com sucesso... Quando alguém entrar no grupo, será recebido com um texto e essa legenda`)
break

case 'antilinkgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isAdmin) return reply(enviar.msg.adm)
if(isAntiLinkGP) {
dataGp.antis.linkgp = false
setGp(dataGp)
return reply(`Anti link gp desativado com sucesso ☑`)
} else {
dataGp.antis.linkgp = true
setGp(dataGp)
return reply(`Anti link gp desativado com sucesso ✅`)
}
break

case 'antilinkall':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isAdmin) return reply(enviar.msg.adm)
if(isAllAntiLink) {
dataGp.antis.linkall = false
setGp(dataGp)
return reply(`Anti link geral desativado com sucesso ☑`)
} else {
dataGp.antis.linkall = true
setGp(dataGp)
return reply(`Anti link geral ativado com sucesso ✅`)
}
break

case 'antiimg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isAdmin) return reply(enviar.msg.adm)
if(isAntiImg) {
dataGp.antis.imagem = false
setGp(dataGp)
return reply(`Anti imagem desativado com sucesso ☑`)
} else {
dataGp.antis.imagem = true
setGp(dataGp)
return reply(`Anti imagem ativado com sucesso ✅`)
}
break

case 'antivideo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isAdmin) return reply(enviar.msg.adm)
if(isAntiVideo) {
dataGp.antis.video = false
setGp(dataGp)
return reply(`Anti vídeo desativado com sucesso ☑`)
} else {
dataGp.antis.video = true
setGp(dataGp)
return reply(`Anti vídeo ativado com sucesso ✅`)
}
break

case 'antiaudio':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isAdmin) return reply(enviar.msg.adm)
if(isAntiAudio) {
dataGp.antis.audio = false
setGp(dataGp)
return reply(`Anti áudio desativado com sucesso ☑`)
} else {
dataGp.antis.audio = true
setGp(dataGp)
return reply(`Anti áudio ativado com sucesso ✅`)
}
break

case 'antifig':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isAdmin) return reply(enviar.msg.adm)
if(isAntiFig) {
dataGp.antis.figurinha = false
setGp(dataGp)
return reply(`Anti figurinha desativado com sucesso ☑`)
} else {
dataGp.antis.figurinha = true
setGp(dataGp)
return reply(`Anti figurinha ativado com sucesso ✅`)
}
break

case 'antidoc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isAdmin) return reply(enviar.msg.adm)
if(isAntiDoc) {
dataGp.antis.documento = false
setGp(dataGp)
return reply(`Anti documento desativado com sucesso ☑`)
} else {
dataGp.antis.documento = true
setGp(dataGp)
return reply(`Anti documento ativado com sucesso ✅`)
}
break

case 'antiloc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isAdmin) return reply(enviar.msg.adm)
if(isAntiLoc) {
dataGp.antis.localizacao = false
setGp(dataGp)
return reply(`Anti localização desativado com sucesso ☑`)
} else {
dataGp.antis.localizacao = true
setGp(dataGp)
return reply(`Anti localização ativado com sucesso ✅`)
}
break

case 'antifake':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isAdmin) return reply(enviar.msg.adm)
if(isAntiFake) {
dataGp.antis.fake = false
setGp(dataGp)
return reply(`Anti fake desativado com sucesso ☑`)
} else {
dataGp.antis.fake = true
setGp(dataGp)
return reply(`Anti fake ativado com sucesso ✅`)
}
break

case 'ban':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isAdmin) return reply(enviar.msg.adm)
if(!botIsAdm) return reply(enviar.msg.Badmin)
if(!menc_arrobamessage) return reply(`Marque o @ da pessoa que você quer banir`)
AB = groupMembers.map(i => i.jid).indexOf(menc_arrobamessage)
if(AB < 0) return reply(`Usuário não está mais entre nós`)
remover(from, menc_arrobamessage)
setTimeout(() => {
  mention(`Usuário @${menc_arrobamessage.split('@')[0]} foi removido com sucesso`)
}, 1000);
break

case 'totag':
case 'cita':
case 'hidetag': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
var DFC = {}
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage : info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage : info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage : info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage : info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue && !purple && !yellow ? rsm.conversation : info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
function escapeRegExp(string) {
return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
/**
 * reparar texto
 * @param {string} text 
 * @returns {string}
 */
function replaceCommand(text) {
if(prefix && command) {
let escapedPrefix = escapeRegExp(prefix)
let escapedCommand = escapeRegExp(command)
return text ? text.replace(new RegExp(escapedPrefix + escapedCommand, "gi"), "").trim() : ''
}
return text
}
if(pink && !aud_d && !purple) {
DFC = { 
image: { url: pink.url }, 
caption: q.length > 1 ? q : replaceCommand(pink.caption), 
mentions: MRC_TD,
mimetype: pink.mimetype,
fileSha256: pink.fileSha256,
fileLength: pink.fileLength,
height: pink.height,
width: pink.width,
mediaKey: pink.mediaKey,
fileEncSha256: pink.fileEncSha256,
directPath: pink.directPath,
mediaKeyTimestamp: pink.mediaKeyTimestamp,
jpegThumbnail: pink.jpegThumbnail
}
} else if (blue && !aud_d && !purple) {
DFC = { 
video: { url: blue.url }, 
caption: q.length > 1 ? q.trim() : replaceCommand(blue.caption), 
mentions: MRC_TD,
mimetype: blue.mimetype,
fileSha256: blue.fileSha256,
fileLength: blue.fileLength,
height: blue.height,
width: blue.width,
mediaKey: blue.mediaKey,
fileEncSha256: blue.fileEncSha256,
directPath: blue.directPath,
mediaKeyTimestamp: blue.mediaKeyTimestamp,
jpegThumbnail: blue.jpegThumbnail
}
} else if (red && !aud_d && !purple) {
DFC = { text: replaceCommand(red), mentions: MRC_TD }
} else if (!aud_d && !figu_d && green && !purple) {
DFC = { text: replaceCommand(green), mentions: MRC_TD }
} else if (purple) {
DFC = { 
document: { url: purple.url }, 
mentions: MRC_TD,
mimetype: purple.mimetype,
fileSha256: purple.fileSha256,
fileLength: purple.fileLength,
mediaKey: purple.mediaKey,
fileEncSha256: purple.fileEncSha256,
directPath: purple.directPath,
mediaKeyTimestamp: purple.mediaKeyTimestamp
}
} else if (yellow && !aud_d) {
DFC = { 
document: { url: yellow.url }, 
caption: q.length > 1 ? q.trim() : replaceCommand(yellow.caption), 
mentions: MRC_TD,
mimetype: yellow.mimetype,
fileSha256: yellow.fileSha256,
fileLength: yellow.fileLength,
mediaKey: yellow.mediaKey,
fileEncSha256: yellow.fileEncSha256,
directPath: yellow.directPath,
mediaKeyTimestamp: yellow.mediaKeyTimestamp,
jpegThumbnail: yellow.jpegThumbnail
}
} else if (figu_d && !aud_d) {
DFC = { 
sticker: { url: figu_d.url }, 
mentions: MRC_TD,
mimetype: figu_d.mimetype,
fileSha256: figu_d.fileSha256,
fileLength: figu_d.fileLength,
mediaKey: figu_d.mediaKey,
fileEncSha256: figu_d.fileEncSha256,
directPath: figu_d.directPath,
mediaKeyTimestamp: figu_d.mediaKeyTimestamp,
jpegThumbnail: figu_d.jpegThumbnail
}
} else if (aud_d) {
DFC = { 
audio: { url: aud_d.url }, 
mentions: MRC_TD,
mimetype: aud_d.mimetype,
fileSha256: aud_d.fileSha256,
fileLength: aud_d.fileLength,
mediaKey: aud_d.mediaKey,
fileEncSha256: aud_d.fileEncSha256,
directPath: aud_d.directPath,
mediaKeyTimestamp: aud_d.mediaKeyTimestamp,
ptt: true
}
}
if(DFC?.text != undefined && DFC?.text.length <= 0) return reply("Marque uma imagem, vídeo, áudio ou escreva algo para o bot retornar a mesma mensagem marcando todos os membros do grupo")
astaup.sendMessage(from, DFC, {quoted: info}).catch(e => {
console.log(e)
})
break

case 'marcar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isAdmin) return reply(enviar.msg.adm)
if(!botIsAdm) return reply(enviar.msg.Badmin)
txt = q ? q+`\n\n` : ``
txt += groupMembers.map(i => `- @` + i.jid.split("@")[0]).join("\n")
if(isQuotedImage || isImage) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
img = await getFileBuffer(boij, 'image')
zora.sendMessage(from, {image: img, caption: txt, mentions: groupMembers.map(m => m.jid)}, {quoted: info})
} else mention(txt)
break

//mudar o prefixo do bot
case 'setprefix':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply("KD o prefixo senhor? para eu atualizar no arquivo...")
prefix = q
ownerconfig.prefix = q
setOwner(ownerconfig)
reply("*Prefixo atualizado com sucesso*...")
break

//mudar nome do bot
case 'nome-bot':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply("KD o nome do bot senhor? para eu atualizar no arquivo...")
nomebot = q
ownerconfig.nomebot = q
setOwner(ownerconfig)
reply("*Nome do bot atualizado com sucesso*...")
break

//mudar nome do dono do bot
case 'nome-dono':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply("KD o nome do dono senhor? para eu atualizar no arquivo...")
nomedono = q
ownerconfig.nomedono = q
setOwner(ownerconfig)
reply("*Nome do dono atualizado com sucesso*...")
break

//mudar número do dono do bot
case 'numero-dono':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply("KD o número do dono senhor? para eu atualizar no arquivo...")
numerodono = identArroba(q).split("@")[0]
ownerconfig.numerodono = identArroba(q).split("@")[0]
setOwner(ownerconfig)
reply("*Número do dono atualizado com sucesso*...")
break

case 'join': case 'entrar':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply('Insira um link de convite ao lado do comando.')
if(!q.includes('chat.whatsapp.com/')) return reply('Ops, verifique o link que você inseriu.')
link = getIDbyWhatsLink(q)
await sleep(500)
try {
zora.groupAcceptInvite(`${link}`)
await sleep(500)
reply(`*O bot entrou no grupo com sucesso* 🥰`)
} catch(erro) {
console.log(erro)
reply(`Erro, não foi possível entrar no grupo... Melhor adicionar manualmente.`)
}
break

case 'console':
if(!isOwner) return reply(enviar.msg.dono)
if(console) {
allconfig.console = false
console = false
setConfig(allconfig)
return reply(`Console desativado com sucesso 🎪`)
} else {
allconfig.console = true
console = true
setConfig(allconfig)
return reply(`Console ativado com sucesso 🎪`)
}
break

case 'botoes':
if(!isOwner) return reply(enviar.msg.dono)
if(console) {
allconfig.botoes = false
botoes = false
setConfig(allconfig)
return reply(`Console desativado com sucesso 🎪`)
} else {
allconfig.botoes = true
botoes = true
setConfig(allconfig)
return reply(`Console ativado com sucesso 🎪`)
}
break

case 'reiniciar': case 'rr':
if(!isOwner) return reply(enviar.msg.dono)
reply(`REINICIANDO SISTEMAS!!`)
//o process.exit() faz o bot reiniciar
setTimeout(() => {process.exit()}, 700)
break

default:
//início dos comandos sem prefixo
if(isCmd) {
reagir("❌")
let AB = similarityCmd(command)
txt = `ᴏ ᴄᴏᴍᴀɴᴅᴏ "${prefix+command}" ɴᴀ̃ᴏ ꜰᴏɪ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ, ${AB.porcentagem > 0 ? `ᴠᴏᴄᴇ̂ ᴇꜱᴛᴀᴠᴀ ᴘᴇɴꜱᴀɴᴅᴏ ᴇᴍ "${AB.comando}"?` : `ᴍᴀꜱ ᴛᴀᴍʙᴇ́ᴍ ɴᴀ̃ᴏ ᴛᴇɴʜᴏ ɪᴅᴇɪᴀ ᴅᴏ ǫᴜᴇ ᴠᴏᴄᴇ̂ ᴇꜱᴛᴀ́ ᴘʀᴏᴄᴜʀᴀɴᴅᴏ...`}`
reply(txt)
}

if (budy2.toLowerCase() === 'prefixo') {
sendButton(from, {
text: `Olá *@${sender.split('@')[0]}* meu prefixo [ ${prefix} ]`, 
footer: `Clique no botão abaixo para copiar`
}, zora, [
{
type: `copy_text`, 
text: `COPIAR PREFIXO`, 
url: `${prefix}` 
}
], info);
}
}



}
}
msgupsrt().catch(async(e) => {
if(String(e).includes("Erro: aborted")) {
file = require.resolve("./start.js")  
delete require.cache[file]
require(file)
} else {
return console.log(e)
}
})
}
}
}
startZora().catch(e => {
return console.log(e+" -INDEX..ERROS")
})