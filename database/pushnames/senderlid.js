const fs = require('fs')
const path = require('path')
const colors = require('colors')

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

const pushnamepath = (lid) => {return `./database/pushnames/${lid}.json`}

/**
 * @typedef {{jid: string, lid: string, name: string, date: number}} pushnamedata
 */
/**
 * @returns {pushnamedata[]}
 */
function pushnames() {
    const folderPath = pushnamepath('teste').split('/teste.json')[0]
    const allData = []
    try {
        const files = fs.readdirSync(folderPath)
        const jsonFiles = files.filter(file => file.endsWith('.json'))
        jsonFiles.forEach(file => {
            const filePath = path.join(folderPath, file)
            const fileContent = fs.readFileSync(filePath, 'utf8')
            try {
                const jsonData = JSON.parse(fileContent)
                allData.push(jsonData)
            } catch(parseError) {
                console.error(`Erro ao fazer o parse do arquivo JSON ${file}:`, parseError)
            }
        })
        return allData
    } catch (err) {
        console.error('Erro ao ler a pasta:', err)
        return []
    }
}

/**
 * verifica se o jid ou lid do usuário existe
 * @param {string} lid 
 * @param {'jid' | 'lid'} type 
 * @returns {boolean}
 */
function existsLidData(lid, type = 'lid') {
    let jid = lid
    if(type == 'lid') {
        return fs.existsSync(pushnamepath(lid))
    } else if(type == 'jid') {
        if(pushnames().length <= 0) return false
        let datapush = pushnames().filter(push => push.jid == jid)
        return datapush.length > 0
    } else return false
}

/**
 * pega a informação jid ou lid do número
 * @param {string} lid 
 * @param {'jid' | 'lid'} type 
 * @returns {pushnamedata}
 */
function userLid(lid, type = 'lid') {
    let jid = lid
    if(type == 'lid') {
        return JSON.parse(fs.readFileSync(pushnamepath(lid)))
    } else if(type == 'jid') {
        if(pushnames().length <= 0) return false
        let datapush = pushnames().filter(push => push.jid == jid)
        return datapush[0]
    } else return {}
}

/**
 * converte o número de jid pra lid e lid pra jid
 * @param {string | Array<string>} testArray id do usuário
 * @param {string} type padrão jid, opção lid
 * @returns {string | Array<string>}
 */
const convertUserID = (testArray, type = 'jid') => {
    if(testArray == undefined) return
    let lidArray = Array.isArray(testArray) ? testArray : [testArray]
    let finish = []
    let onlyid = allGroups.flatMap(flat => flat.participants)
    let someid = [...new Map(onlyid.map(o => [o.jid, o])).values()]
    lidArray.forEach(lid => {
        let find = lid.endsWith('@lid') ? 'lid' : 'jid'
        let jid = lid
        var toseejson = false
        let datauser = find == 'lid' ? someid.filter(m => m.lid == lid) : someid.filter(m => m.jid == jid)
        //console.log(datauser)
        if(datauser.length > 0) {
            if(type == 'lid') {
                finish.push(datauser[0].lid)
            } else if(type == 'jid') {
                finish.push(datauser[0].jid)
            } else {
                var toseejson = true
            }
        } else {
            var toseejson = true
        }
        if(toseejson) {
            let liduser = existsLidData(lid, find) ? userLid(lid, find) : {jid, lid}
            if(type == 'lid') {
                finish.push(liduser.lid)
            } else if(type == 'jid') {
                finish.push(liduser.jid)
            } else finish.push(lid)
        }
    })
    return Array.isArray(testArray) ? finish : finish[0]
}

/**
 * @param {string} data 
 * @param {'jid' | 'lid'} lid 
 */
function saveUserID(data, lid) {
    let user = convertUserID(lid, 'lid')
    fs.writeFileSync(pushnamepath(user), JSON.stringify(data, null, 2))
}

const templidpath = pushnamepath('teste').split('teste')[0] + 'templid.json'

/**
 * @param {string} id 
 */
function saveTempLid(id) {
    fs.writeFileSync(templidpath, JSON.stringify({
        id,
        date: Date.now()
    }, null, 2))
}

/**
 * @param {string} jid 
 * @param {string} lid 
 * @param {string} name 
 * @param {number} date 
 */
function addLidJson(jid, lid, name, date) {
    let data = {
        jid,
        lid,
        name,
        date
    }
    return saveUserID(data, lid)
}

/**
 * Tenta ler e analisar o arquivo temporário de ID de lote (tempLidPath).
 * * Se o arquivo existir e for um JSON válido, retorna um objeto que inclui:
 * - json {true}         // Indica que a leitura e a análise foram bem-sucedidas.
 * - {...propriedades}   // As propriedades lidas do arquivo JSON (id, date, etc.).
 * * Se o arquivo não existir, retorna:
 * - json {false}        // Indica que o arquivo não foi encontrado.
 * * @type {{json: boolean} & ({id: string, date: number}|{})}
 */
const tempLid = fs.existsSync(templidpath) ? {json: true, ...JSON.parse(fs.readFileSync(templidpath))} : {json: false}

/**
 * Processa informações de uma mensagem/evento para identificar e salvar o JID (WhatsApp ID)
 * e o LID (Linked ID) do remetente. Esta função lida com o cliente do bot (matheuzinho)
 * e atualiza um registro persistente (provavelmente um arquivo JSON ou DB) se o usuário
 * for novo ou se o tempo de validade do registro existente tiver expirado.
 *
 * @param {object} matheuzinho O objeto cliente do bot WhatsApp.
 * @param {object} test O objeto de mensagem/evento do WhatsApp.
 * @param {object} test.key A chave que identifica o remetente.
 * @param {string} test.key.remoteJid O JID do chat (grupo ou PV).
 * @param {string} [test.key.senderLid] O Linked ID (LID) do remetente em PV.
 * @param {string} [test.key.participant] O JID do remetente em grupos.
 * @param {boolean} test.key.fromMe Indica se a mensagem é do próprio bot.
 * @param {string} [test.pushName] O nome de exibição do remetente.
 * @param {number} [restart=3600000] O tempo de validade (em milissegundos) para o registro
 * do usuário antes que ele precise ser atualizado. Padrão: 1 hora (1000 * 60 * 60).
 * @returns {Promise<void|boolean>}
 */
async function addUserID(matheuzinho, test, restart = 1000 * 60 * 60) {
    try {
        if(test.key.fromMe) {
            let astainfo = await matheuzinho.user
            var info = {
                key: {
                    remoteJid: astainfo.id,
                    senderLid: astainfo.lid
                },
                pushName: astainfo.name,
            }
        } else {
            var info = test
        }
        let from = info.key.remoteJid
        let isGroup = from.endsWith('@g.us')
        let name = info.pushName ? info.pushName : 'user'
        let time = restart
        if(isGroup) {
            var senderjid = info.key.participant
            if(!tempLid.json || (tempLid.json && tempLid.id != senderlid && Date.now() >= (tempLid.date + 3000))) {
                saveTempLid(senderjid)
                let infoGP = await matheuzinho.groupMetadata(from)
                let datauser = infoGP.participants.filter(m => m.jid == senderjid)
                if(datauser?.length > 0) {
                    var senderlid = datauser[0].lid
                } else return
            } else {
                let onlyid = allGroups.flatMap(flat => flat.participants)
                let someid = [...new Map(onlyid.map(o => [o.jid, o])).values()]
                let datauser = someid.filter(m => m.jid == senderjid)
                if(datauser.length > 0) {
                    var senderlid = datauser[0].lid
                } else return
            }
        } else {
            if(info.key?.senderLid) {
                var senderjid = info.key.remoteJid
                var senderlid = info.key.senderLid
            } else return
        }
        if(senderjid == undefined || senderlid == undefined || senderlid.includes('status')) return
        let jid = senderjid.includes(':') ? senderjid.split(':')[0] + '@s.whatsapp.net' : senderjid
        let lid = senderlid.includes(':') ? senderlid.split(':')[0] + '@lid' : senderlid
        let date = Date.now()
        if(!existsLidData(lid)) {
            //console.log(colors.green('ADICIONANDO INFORMAÇÕES DO USUÁRIO:'), colors.green(data))
            return addLidJson(jid, lid, name, date + time)
        } else {
            let datauser = userLid(lid)
            if(date >= datauser.date) {
                //console.log(colors.yellow('EDITANDO INFORMAÇÕES DO USUÁRIO:'), colors.yellow(data))
                return addLidJson(jid, lid, name, date + time)
            }
        }
    } catch(e) {
        console.error(colors.red(e))
    }
}

/**
 * @param {string} lid 
 */
function rmUserID(lid) {
    let user = convertUserID(lid, 'lid')
    if(existsLidData(lid)) {
        fs.unlinkSync(pushnamepath(user))
    }
}

/**
 * 
 * @param {string} id 
 */
function getname(id) {
    if(existsLidData(id, 'lid')) return userLid(id, 'lid').name
    if(existsLidData(id, 'jid')) return userLid(id, 'jid').name
    return 'usuário'
}

module.exports = { pushnames, existsLidData, userLid, convertUserID, saveUserID, addUserID, rmUserID, addLidJson, getname }