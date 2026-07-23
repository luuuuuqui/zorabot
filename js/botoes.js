const fs = require(`fs`)

const { proto, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID } = require(`wileys`)

const identArroba = (txt) => {return txt.includes('@') ? txt.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : txt.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"}

const configAllPath = "./db/config-all.json"
const configAllJson = fs.existsSync(configAllPath) ? JSON.parse(fs.readFileSync(configAllPath, "utf8")) : {}
var botoes = configAllJson?.botoes || false

const sendButton = async(from, dados, zora, buttons, info) => {
  try {
    if(botoes) {
      but = []
      for(i of buttons) {
        if(i.type == `copy_url`) but.push({name: "cta_url", buttonParamsJson: JSON.stringify({display_text: i.text, url: i.url, merchant_url: i.url})})
        if(i.type == `copy_text`) but.push({name: "cta_copy", buttonParamsJson: JSON.stringify({display_text: i.text, copy_code: i.url})})
        if(i.type == `call`) but.push({name: "cta_call", buttonParamsJson: JSON.stringify({display_text: i.text, id: i.url})})
        if(i.type == `cmd`) but.push({name: "quick_reply", buttonParamsJson: JSON.stringify({display_text: i.text, id: i.command, disabled: false})})
        if(i.type == `list` || i.type == `lista`) {
          caixa = []
          for(a of i.rowId) {
            lista = []
            for(b of a.options) {
              lista.push({header: b?.name || ``, title: b?.title || ``, description: b?.body, id: b?.command || ``, disabled: false})
            }
            caixa.push({title: a?.title || ``, highlight_label: a?.body || ``, rows: lista})
          }
          but.push({name: "single_select", buttonParamsJson: JSON.stringify({title: i.title, sections: caixa})})
        }
      }
      if(dados?.image) {
        midia = await prepareWAMessageMedia({image: dados?.image}, {upload: zora.waUploadToServer})
      } else if(dados?.video) {
        midia = await prepareWAMessageMedia({video: dados?.video}, {upload: zora.waUploadToServer})
      } else { midia = undefined }
      vom = {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: dados?.image ? {
                hasMediaAttachment: false,
                imageMessage: midia.imageMessage
              } : dados?.video ? {
                hasMediaAttachment: false,
                videoMessage: midia.videoMessage
              } : undefined,
              body: {
                text: dados?.caption ? dados?.caption : dados?.text
              },
              footer: {
                text: dados?.footer
              },
              contextInfo: {
                participant: info ? info.key.id : ``,
                mentionedJid: dados?.mentions,
                quotedMessage: info ? info.message : undefined,
                forwardingScore: dados?.contextInfo?.forwardingScore || undefined,
                isForwarded: dados?.contextInfo?.isForwarded || undefined,
                forwardedNewsletterMessageInfo: dados?.contextInfo?.forwardedNewsletterMessageInfo || undefined
              },
              nativeFlowMessage: {
                messageVersion: 1,
                buttons: but,
                messageParamsJson: ""
              },
            }
          }
        }
      }
      gwafc = generateWAMessageFromContent("0", vom, {userJid: zora.user?.id})
      zora.relayMessage(from, gwafc.message, {messageId: generateMessageID(zora.user?.id)}, {quoted: info})
    } else {
      return zora.sendMessage(from, dados, {quoted: info})
    }
  } catch(e) {console.log(e)}
}

const sendConfigButton = (lista) => {
  but = []
  for(i of lista) {
    but.push({
      buttonId: i.command,
      buttonText: {
        displayText: i.text,
      }
    })
  }
  return but
}

const EnvButton = async(from, dados, zora, buttons, info) => {
  try {
    isVid = dados.length >= 4 && dados[3]
    isImg = dados.length >= 3
    isFt = dados.length >= 2
    menc = []
    for(i of dados[0].split(" ")) {
      if(i.includes("@")) menc.push(identArroba(i))
    }
    if(botoes) {
      if(isVid) return zora.sendMessage(from, {video: {url: dados[2]}, caption: dados[0], footer: dados[1], mentions: menc, buttons: sendConfigButton(buttons), viewOnce: true, headerType: 6}, {quoted: info})
      if(isImg) return zora.sendMessage(from, {image: {url: dados[2]}, caption: dados[0], footer: dados[1], mentions: menc, buttons: sendConfigButton(buttons), viewOnce: true, headerType: 6}, {quoted: info})
      return zora.sendMessage(from, {text: dados[0], footer: isFt ? dados[1] : undefined, mentions: menc, buttons: sendConfigButton(buttons), viewOnce: true, headerType: 6}, {quoted: info})
    } else {
      if(isVid) return zora.sendMessage(from, {video: {url: dados[2]}, caption: dados[0], footer: dados[1], mentions: menc}, {quoted: info})
      if(isImg) return zora.sendMessage(from, {image: {url: dados[2]}, caption: dados[0], footer: dados[1], mentions: menc}, {quoted: info})
      return zora.sendMessage(from, {text: dados[0], footer: isFt ? dados[1] : undefined, mentions: menc}, {quoted: info})
    }
  } catch(e) {console.log(e)}
}

const sendRouletteButton = async(from, dados, zora, sender, butao, info) => {
  but = []
  for(i of butao) {
    if(i.type == `copy_url`) but.push({name: "cta_url", buttonParamsJson: JSON.stringify({display_text: i.text, url: i.url, merchant_url: i.url})})
    if(i.type == `copy_text`) but.push({name: "cta_copy", buttonParamsJson: JSON.stringify({display_text: i.text, copy_code: i.url})})
    if(i.type == `call`) but.push({name: "cta_call", buttonParamsJson: JSON.stringify({display_text: i.text, id: i.url})})
    if(i.type == `cmd`) but.push({name: "quick_reply", buttonParamsJson: JSON.stringify({display_text: i.text, id: i.command, disabled: false})})
    if(i.type == `list` || i.type == `lista`) {
      caixa = []
      for(a of i.rowId) {
        lista = []
        for(b of a.options) {
          lista.push({header: b?.name || ``, title: b?.title || ``, description: b?.body, id: b?.command || ``, disabled: false})
        }
        caixa.push({title: a?.title || ``, highlight_label: a?.body || ``, rows: lista})
      }
      but.push({name: "single_select", buttonParamsJson: JSON.stringify({title: i.title, sections: caixa})})
    }
  }
  cardImage = {
    header: proto.Message.InteractiveMessage.Header.create({
      ...(await prepareWAMessageMedia({image: dados?.image}, {upload: zora.waUploadToServer})),
      hasMediaAttachment: true,
      title: dados?.caption + (dados?.footer ? `\n> ` + dados?.footer : ``)
    }),
    nativeFlowMessage: {
      buttons: but,
      messageParamsJson: ""
    }
  }
  let blackzin_buttons = generateWAMessageFromContent(from, {
    interactiveMessage: {
      contextInfo: {
        participant: sender,
        mentionedJid: dados?.mentions,
        quotedMessage: info?.message
      },        
      carouselMessage: {
        cards: [cardImage],
        messageVersion: 1,
      }
    }
  }, {})
  return zora.relayMessage(from, blackzin_buttons.message, {messageId: blackzin_buttons.key.id})
}

module.exports = { sendButton, EnvButton, sendRouletteButton }