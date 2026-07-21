//matheuzinho domina hahaha\\

const { downloadContentFromMessage } = require('wileys');

// MÓDULOS ABAIXO.. 

const { Boom }  = require('@hapi/boom');

const axios = require('axios');

const fs = require('fs-extra');

const cheerio = require('cheerio');

const crypto = require('crypto');

const util = require('util');

const P = require('pino');

const NodeCache = require("node-cache");

const linkfy = require('linkifyjs');

const request = require('request');

const ms = require('ms');

const ffmpeg = require('fluent-ffmpeg');

const fetch = require('node-fetch');

const qrterminal = require('qrcode-terminal');

const { exec, spawn, execSync } = require('child_process');

const moment = require('moment-timezone');

const colors = require("colors");

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

const { getBuffer, nit, supre, chyt, sesc, banner2, banner3, getMembros, getRandom, getExtension, getGroupAdmins, isFiltered, addFilter, upload } = require("./js/functions.js")

// DELETAR ARQUIVO..
function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

//json
const ownerconfig = JSON.parse(fs.readFileSync("./db/settings.json"))

const allconfig = JSON.parse(fs.readFileSync("./db/config-all.json"))

const logospath = JSON.parse(fs.readFileSync("./database/logos.json"))

const banned = JSON.parse(fs.readFileSync("./database/banned.json"))

/**
 * Representa um participante do grupo com seus IDs e níveis de permissão.
 * @typedef {Object} GroupParticipant
 * @property {string} id - O ID composto do participante (geralmente o LID).
 * @property {string} jid - O ID baseado no número de telefone (ex: 55219...@s.whatsapp.net).
 * @property {string} lid - O identificador LID do participante.
 * @property {'admin' | 'superadmin' | null} admin - Nível de administração (null se for membro comum).
 */

/**
 * Representa a estrutura completa de metadados de um grupo ou comunidade do WhatsApp.
 * @typedef {Object} GroupMetadata
 * @property {string} id - O JID do grupo (ex: 120363...@g.us).
 * @property {string} addressingMode - O modo de endereçamento (ex: 'lid').
 * @property {string} subject - O nome ou título do grupo.
 * @property {string} subjectOwner - O JID de quem definiu o título atual.
 * @property {string} subjectOwnerLid - O LID de quem definiu o título atual.
 * @property {number} subjectTime - Timestamp da última alteração do título.
 * @property {number} size - Número total de participantes.
 * @property {number} creation - Timestamp de criação do grupo.
 * @property {string} owner - O JID do criador do grupo (pode estar vazio se desconhecido).
 * @property {string} ownerLid - O LID do criador do grupo.
 * @property {string} [desc] - A descrição do grupo (opcional, nem todos possuem).
 * @property {string} [descId] - ID único da descrição.
 * @property {string} [descOwner] - JID de quem definiu a descrição.
 * @property {string} [descOwnerLid] - LID de quem definiu a descrição.
 * @property {number} [descTime] - Timestamp da última alteração da descrição.
 * @property {string} [linkedParent] - ID da Comunidade pai, caso este seja um subgrupo.
 * @property {boolean} restrict - Se true, apenas admins editam dados do grupo.
 * @property {boolean} announce - Se true, apenas admins enviam mensagens.
 * @property {boolean} isCommunity - Indica se é uma estrutura de Comunidade.
 * @property {boolean} isCommunityAnnounce - Indica se é o grupo de avisos da Comunidade.
 * @property {boolean} joinApprovalMode - Se true, novos membros precisam ser aprovados.
 * @property {boolean} memberAddMode - Configura quem pode adicionar membros.
 * @property {number} [ephemeralDuration] - Duração das mensagens temporárias (em segundos), se ativado.
 * @property {GroupParticipant[]} participants - Array contendo todos os participantes.
 */

/**
 * Carrega e analisa os grupos do arquivo JSON local.
 * Retorna um array vazio caso o arquivo não exista.
 * * @type {GroupMetadata[]}
 */
const allGroups = fs.existsSync('./grupos.json') ? JSON.parse(fs.readFileSync('./grupos.json')) : []

// CONVERTER BYTES EM KB / MB / GB / TB
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
if(bytes == 0) {
return "n/a";
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
if(i == 0) {
return bytes + " " + sizes[i];
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
};

// ANTI NOME MODIFICADA / EMOJI
function antiModLetra(str) {
for (let i = 0, n = str.length; i < n; i++) {
if(str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

// Transformar segundos em hora/minutos
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Hora${Number(pad(hours)) !== 1 ? "s" : ""}, ${pad(minutes)} Minuto${Number(pad(minutes)) !== 1 ? "s" : ""} e ${pad(seconds)} Segundo${Number(pad(seconds)) !== 1 ? "s" : ""}`;
}

// FUNÇÃO DO BAILES PRA PUXAR MÍDIA ENVIADA, E EXECUTAR AÇÃO..
const getFileBuffer = async (mediakey, MediaType) => {
  
const stream = await downloadContentFromMessage(mediakey, MediaType);

let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};

// Tudo abaixo await sleep(1000) vai demorar 1 segundo pra funcionar, 1000 é igual 1 segundo..
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

// ENVIAR FIGU EM URL
const enviarfiguUrl = async (zora, from, link, mr) => {
ranp = getRandom('.gif');
rano = getRandom('.webp');
ini_buffer = `${link}`;
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
DLT_FL(ranp);
buff = fs.readFileSync(rano);
zora.sendMessage(from, {sticker: buff}, {quoted: mr}).catch(() => {
return console.log("Erro..");
});
DLT_FL(rano);
});
};

const RSM_FUNC = async(zora, nmrdn, hora120, upsert) => {
switch(hora120) {
case "02:00:00": case "04:00:00":
case "07:00:00": case "10:00:00":  
case "13:00:00": case "15:00:00":
case "18:00:00": case "22:00:00":
exec("cd DADOS/BOT-QR && rm -rf pre-key* sender* session*");
setTimeout(async () => {
file = require.resolve("./start.js");
delete require.cache[file];
require(file);
}, 1200);
console.log(colors.blue("Reiniciando para diminuir o peso do qrcode.."))
break;
}
}

// INTELIGENCIA-ARTIFICIAL
const simih = async (text) => {
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+text+"&lc=pt"})
return datasimi.message
} catch (e){
return
}}

//
const isJsonIncludes = (json, value) => {
if(JSON.stringify(json).includes(value)) return true
return false
}

const alerandom = (nmr) => {
return Math.floor(Math.random()*nmr)
}

const sendHours = (formato) => {
  return moment.tz('America/Sao_Paulo').format(formato)
}

const rmLetras = (txt) => {
  return txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

const { convertUserID } = require("./database/pushnames/senderlid.js")

const identArroba = (txt) => {
  if(txt.includes('@')) {
    tamanho = txt.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "")
    nmr = tamanho + (tamanho.length > 13 ? "@lid" : "@s.whatsapp.net")
    return convertUserID(nmr)
  } else return txt.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
}

const addNumberMais = (nmr) => {
  usu = (nmr.includes("@s.whatsapp.net") ? nmr : identArroba(nmr)).split("@")[0]
  return "+" + usu.slice(0, 2) + " " + usu.slice(2, 4) + " " + usu.slice(4, usu.length - 4) + "-" + usu.slice(usu.length - 4, usu.length)
}

const iniMai = (texto) => {
  txt = texto.toUpperCase().slice(0, 1) + texto.slice(1)
  return txt
}

const getIDbyWhatsLink = (whatsapp) => {
  return whatsapp.split('app.com/')[1].split('?mode')[0]
}

const reverse = (texto) => {
  return texto.split("").reverse().join("")
}

function saveJSON(inter, caminho){
fs.writeFileSync(caminho, JSON.stringify(inter, null, 2))}

const contar = (frase, letraProcurada) => {
  total = 0
  for(i = 0; i < frase.length; i++) {
    if(letraProcurada == frase[i]) total += 1
  }
  return total
}

const contarDias = (dias) => {
  if(!dias.includes("/")) return "Tem que colocar em /, ex: 01/01/2024"
  barra = 0
  for(i of dias) {
    if(i == "/") barra += 1
  }
  if(barra <= 0 || barra > 2) return "Revise o formato da data pfvr... Receio que você não tenha colocado o formato correto DD/MM/YYYY"
  var [aa, bb, cc] = dias.split("/")
  year = cc.length == 2 ? "20" + cc : cc
  if(Number(aa) < 1 || Number(aa) > 31) return `Os dias vão de 1 até no mxm 31`
  if(Number(bb) < 1 || Number(bb) > 12) return `Os meses vão de 1 até no mxm 12`
  if(Number(year) < 1 || Number(aa) > 100000000) return `Os anos vão de 1 até no mxm 100000000`
  day = Number(year) * 365
  day += Number(bb) * 30
  day += Number(aa)
  return day
}

const converterDias = (dias) => {
  nmr = Number(dias)
  if(nmr < 0) return "A quantidade de dias precisa ser ≥ 0"
  year = (nmr - (nmr % 365)) / 365
  mm = ((nmr % 365) - ((nmr % 365) % 30)) / 30
  day = (nmr % 365) % 30
  txt = year > 0 ? year + ` Ano${year != 1 ? "s" : ""}${day > 0 ? mm > 0 ? ", " : " e " : "  "}` : ``
  txt += mm > 0 ? mm + ` M${mm != 1 ? "eses" : "ês"}${day > 0 ? " e " : "  "}` : ``
  txt += day > 0 ? day + ` Dia${day != 1 ? "s" : ""}  ` : ``
  return txt.slice(0, txt.length - 2)
}

const contarMin = (base_a) => {
  if(contar(String(base_a), `:`) != 1) return `É necessário o uso dos : no horário, seguindo apenas horas e minutos`
  var [a, b] = base_a.split(':')
  return Number(Number(a) * 60) + Number(b)
}

const converterMin = (base_b) => {
  if(Number(base_b) === 0) return `00:00`
  if(!Number(base_b)) return `Precisa ser um número`
  nmr = Number(base_b)
  b = nmr % 60
  a = (nmr - b) / 60
  return `${a < 10 ? `0` + a : a}:${b < 10 ? `0` + b : b}`
}

module.exports = {

// MÓDULOS ABAIXO >
  
P, fs, util, Boom, axios, linkfy, request, ms, ffmpeg, fetch, 
qrterminal, exec, spawn, 
execSync, moment, time, hora, date, colors, cheerio, NodeCache, getBuffer, upload,
//js
nit, supre, chyt, sesc, banner2, banner3, RSM_FUNC, getGroupAdmins, getMembros, getExtension, getRandom, isFiltered, addFilter,
sendHours, rmLetras, identArroba, addNumberMais, iniMai, reverse, contar, contarDias, converterDias, contarMin, converterMin, isJsonIncludes, alerandom,
getIDbyWhatsLink,

//json
saveJSON, logospath, allconfig, ownerconfig, banned, allGroups,

// FUNÇÃO... 

kyun, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, antiModLetra, convertBytes
}