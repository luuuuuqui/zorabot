const menuprincipal = (prefix) => {
return `
*< DONO >*
Ξ⌇) ${prefix}setprefix
Ξ⌇) ${prefix}nome-bot
Ξ⌇) ${prefix}nome-dono
Ξ⌇) ${prefix}fotomenu
Ξ⌇) ${prefix}numero-dono
Ξ⌇) ${prefix}entrar
Ξ⌇) ${prefix}reiniciar
Ξ⌇) ${prefix}console
Ξ⌇) ${prefix}botoes

*< ADM >*
*BEM VINDO - MODO 1 (IMAGEM)*
Ξ⌇) ${prefix}bemvindo 
Ξ⌇) ${prefix}legendabv 
Ξ⌇) ${prefix}fundobv 

*BEM VINDO - MODO 2 (TEXTO)*
Ξ⌇) ${prefix}bemvindo2 
Ξ⌇) ${prefix}legendabv2 

*ANTI*
Ξ⌇) ${prefix}antilinkgp 
Ξ⌇) ${prefix}antilinkall
Ξ⌇) ${prefix}antiimg 
Ξ⌇) ${prefix}antivideo 
Ξ⌇) ${prefix}antiaudio 
Ξ⌇) ${prefix}antifig 
Ξ⌇) ${prefix}antidoc 
Ξ⌇) ${prefix}antiloc 
Ξ⌇) ${prefix}antifake 

*OUTROS*
Ξ⌇) ${prefix}ban
Ξ⌇) ${prefix}play
Ξ⌇) ${prefix}ytmp3
Ξ⌇) ${prefix}ytmp4
Ξ⌇) ${prefix}marcar 
Ξ⌇) ${prefix}videourl
Ξ⌇) ${prefix}exemplos
`
}

module.exports = { menuprincipal }