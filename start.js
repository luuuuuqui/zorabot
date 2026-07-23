const { 'default': makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore } = require('wileys');

const { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, colors, NodeCache, getGroupAdmins, antiModLetra, isJsonIncludes, identArroba } = require('./config.js');

const configAllPath = "./db/config-all.json"
const configAllJson = fs.existsSync(configAllPath) ? JSON.parse(fs.readFileSync(configAllPath, "utf8")) : {}
var { conexao = {} } = configAllJson;

const { convertUserID } = require('./js/senderlid.js')

const replaceAll = (frase, txt, rp) => {
  caixa = [frase]
  for(i = 0; i < 500; i++) {
    caixa.push(caixa[i].replace(txt, rp))
  }
  return caixa[caixa.length - 1]
}

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

const kontol_info2 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Closing session: SessionEntry")){ 
return kontol_info2(...arguments); 
}};

const kontol_info1 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Removing old closed session: SessionEntry {")){
return kontol_info1(...arguments);
}};

const msgRetryCounterCache = new NodeCache();

var qrcode = "./database/ZORA-QR";

const readline = require("readline");
const { cfonts } = require('./js/functions.js');

const pairingCode = process.argv.includes("--code");
const rl = readline.createInterface({input: process.stdin, output: process.stdout,});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function STZR() {

const { state, saveCreds } = await useMultiFileAuthState(qrcode);

const { version, isLatest } = await fetchLatestBaileysVersion();

const zora = makeWASocket({
 version,
 auth: state,
 printQRInTerminal: !pairingCode,
 qrTimeout: 180000,
 logger: P({ level: 'silent' }),
 browser: Browsers.macOS('Chrome'), // ou Browsers.windows('Chrome')
 msgRetryCounterCache,
 connectTimeoutMs: 60000,
 defaultQueryTimeoutMs: 0,
 keepAliveIntervalMs: 30000,
 emitOwnEvents: false,
 generateHighQualityLinkPreview: false,
 patchMessageBeforeSending: (message) => {
 const requiresPatch = !!(message?.interactiveMessage)
 if (requiresPatch) {
 message = {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadataVersion: 2,
 deviceListMetadata: {}
 },
 ...message
 }
 }
 }
 }
 return message
 }
})

const PhoneNumber = require('awesome-phonenumber')

const getCorretConnectionLetter = (txt) => {
  keycaracteresespeciais = false
  keycaracteresresponse = []
  caracteresespeciais = [` `, `#`, `%`, `$`, `&`, `?`, `:`, `;`, `(`, `)`, `[`, `]`, `{`, `}`, `/`, `\\`, `|`, `\´`, `\``, `'`, `"`, `.`, `+`, `-`, `_`, `=`]
  for(z of txt) {
    if(isJsonIncludes(caracteresespeciais, z)) {
      keycaracteresespeciais = true
      mapcaracteres = caracteresespeciais.indexOf(z)
      keycaracteresresponse.push(caracteresespeciais[mapcaracteres])
    }
  }
  return {findcharacters: keycaracteresespeciais, charactersresponse: keycaracteresresponse}
}

if(pairingCode && !zora.authState.creds.registered) {
let phoneNumber = await question(`${colors.white("- ")}${colors.cyan("Insira no parâmetro o número de telefone que deseja conectar o bot:\n\n")} `);
if(!conexao.padrao) {
  if(conexao.cod.length != 8) return console.log(colors.red(`O código "${conexao.cod}" que você registrou './db/config-all.json' não possui 8 caracteres... É obrigatório esse tamanho de cód caso o paring code personalizado esteja ativo`))
  if(antiModLetra(conexao.cod)) return console.log(colors.red(`O código "${conexao.cod}" que você registrou './db/config-all.json' está usando letras modificadas... Favor rever isso aí`))
  totalletter = getCorretConnectionLetter(conexao.cod)
  if(totalletter.findcharacters) return console.log(colors.red(`Opa jogador, visto que o sistema de paring code personalizado está ativo, foram encontrados caracteres indevidos, tais como:\n- ${totalletter.charactersresponse.join('\n- ')}\n\nVer "${conexao.cod}" em './db/config-all.json'`))
}
phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
let codetest = !conexao.padrao ? conexao.cod : undefined
let code = await zora.requestPairingCode(phoneNumber, codetest);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`${colors.white("- ")}${colors.cyan("Código de Emparelhamento no WhatsApp:")} ${code}`);
rl.close();
}

zora.ev.process(
async(events) => {

if(events["group-participants.update"]) {
  try {
    var ZRMD = events["group-participants.update"];
    const from = ZRMD.id
    const membro = convertUserID(ZRMD.participants[0])
    const isGroup = from.endsWith('@g.us');
    const groupPath = `./database/grupos/${from}.json`
    if(!fs.existsSync(groupPath) && isGroup) return
    var jsonGp = JSON.parse(fs.readFileSync(groupPath));
    const bemvindo = jsonGp.bemvindo
    const saida = jsonGp.saida
    const isAntiFake = jsonGp.antis.fake
    const BemVindo1 = bemvindo[0].funcao && bemvindo[0].desc.length > 0
    const BemVindo2 = bemvindo[1].funcao && bemvindo[1].desc.length > 0
    const Saida1 = saida[0].funcao && saida[0].desc.length > 0
    const Saida2 = saida[1].funcao && saida[1].desc.length > 0
    if(ZRMD.action === 'add') {
      //anti gringo no grupo
      if(isAntiFake) {
        setTimeout(async() => {
          let thisGroup = await zora.groupMetadata(from)
          let removefake = thisGroup.participants.filter(person => convertUserID(ZRMD.participants, 'lid').indexOf(person.lid) >= 0 || convertUserID(ZRMD.participants, 'jid').indexOf(person.jid) >= 0)
          let byebye = removefake.filter(rf => rf.jid.includes('@s') && !rf.jid.startsWith('55'))
          if(byebye.length > 0) {
            setTimeout(async() => {
              zora.groupParticipantsUpdate(from, byebye.map(bye => bye.lid), 'remove')
            }, 1000)
            return
          }
        }, 500);
      }
      //bem vindo de foto
      if(BemVindo1) {
        zora.sendMessage(from, {image: {url: bemvindo[0].fundo}, caption: bemvindo[0].desc})
      }
      //bem vindo sem foto
      if(BemVindo2) {
        zora.sendMessage(from, {text: bemvindo[0].desc})
      }
    }
    if(ZRMD.action === 'remove') {
      //saída com foto
      if(Saida1) {
        zora.sendMessage(from, {image: {url: saida[0].fundo}, caption: bemvindo[0].desc})
      }
      //saída sem foto
      if(Saida2) {
        zora.sendMessage(from, {text: saida[0].desc})
      }
    }
  } catch(e) {
    console.log(e)
  }
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"]
require("./index.js")(upsert, zora)
}

if(events["connection.update"]) {
const update = events["connection.update"]
const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(qr) {
console.log(colors.green("VOCÊ PRECISARÁ DE UM SEGUNDO CELULAR, PARA TIRAR FOTO DO QRCODE, PRA DEPOIS ESCANEAR A FOTO QUE TIROU"))
}

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode

switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(colors.yellow("Conexão caiu, irei ligar novamente, se continuar com este erro, provavelmente sua internet está caindo constantemente.."));
} else if(shouldReconnect == 401) {
console.log(colors.red("O QRCODE DO BOT FOI DESCONECTADO, RE-LEIA O QRCODE DENOVO PARA CONECTAR"))
exec(`rm -rf ${qrcode}`);
} else if(shouldReconnect == 515) {
console.log(colors.gray("Restart Nescessario para estabilizar a conexão..."))
} else if(shouldReconnect == 440) {
return console.log(colors.gray("Está tendo um pequeno conflito, se isso aparecer mais de 4 vez, creio que há uma outra sessão aberta, ou o bot ligado em outro lugar, caso contrário ignore.."))
} else if(shouldReconnect == 503) {
console.log(colors.grey("Erro desconhecido, code: 503"));
} else if(shouldReconnect == 502) {
console.log(colors.grey("CONEXÃO TA QUERENDO CAIR, É A INTERNET..."))
} else if(shouldReconnect == 408) {
console.log(colors.gray("Conexão fraca..."))
} else {
console.log('Conexão Fechada _- POR: ', lastDisconnect?.error);
}
STZR()
}
break;

case 'connecting':
console.log(colors.yellow('Estabilizando conexão do bot...'))
break;

case 'open':
const banner = cfonts.render((`ZORA MD`), {
font: 'block',
align: "center",
gradient: ['yellow', 'red']
});
const banner2 = cfonts.render((`O FIM E APENAS O COMECO`), {
font: 'console',
align: 'center',
gradient: ['cyan', 'blue']
});
console.log(banner.string)   
console.log(banner2.string)  
console.log(colors.cyan(`Todos os sistemas iniciados com sucesso :)`))
await zora.sendPresenceUpdate("available")
break;

default:
break;
}
}


if(events["creds.update"]) {
await saveCreds();
}

require("./index.js")(zora, qrcode)

})
}
STZR().catch(async(e) => {
console.log(colors.red("ERROR EM START.JS: "+e))
})