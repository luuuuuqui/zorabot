# zorabot

bot de whatsapp desenvolvido em node.js com suporte a mensagens multi-device.

o bot foi refatorado para executar buscas, downloads de mídia (youtube mp3/mp4) e geração de cards visuais 100% localmente, sem dependência de apis externas nem chaves de acesso pagas.

## 🚀 recursos

- **busca e downloads de áudio/vídeo**: busca no youtube via `yt-search` e downloads via `yt-dlp` (`@choewy/yt-dlp`);
- **geração de cards visuais (canvas)**: cards dinâmicos para status do bot e player de música renderizados com `@napi-rs/canvas`;
- **independente de apis externas**: não precisa de tokens ou cadastros em sites terceiros;
- **execução leve**: baixo consumo de memória ram e respostas rápidas.

## 📋 pré-requisitos

- `node.js` (versão 18 ou superior)
- `ffmpeg` (para conversão e processamento de áudio/vídeo)
- `git`

## 📦 instalação

1. clone o repositório:
```bash
git clone https://github.com/luuuuuqui/zorabot.git
cd zorabot
```

2. instale as dependências do projeto:
```bash
npm install
```

## ⚙️ configuração

os arquivos de configuração ficam no diretório `db/`:

- `db/settings.json`: nome do bot, prefixo padrão e número do dono.
- `db/config-all.json`: configurações de comportamento, grupos e permissões.

## ⚡ execução

para iniciar o bot, execute:

```bash
npm start
```

ou diretamente pelo script shell:

```bash
sh zora.sh
```

no primeiro início, um qrcode será exibido no terminal para pareamento com o whatsapp.

## 🤖 comandos principais

| comando | descrição | exemplo |
| :--- | :--- | :--- |
| `!ping` | exibe a velocidade de resposta, tempo ativo e uso de memória com card visual | `!ping` |
| `!play <nome>` | pesquisa uma música no youtube e exibe um card com os botões de download | `!play fuji kaze` |
| `!ytmp3 <url>` | baixa o áudio (mp3) de um vídeo do youtube | `!ytmp3 https://youtu.be/...` |
| `!ytmp4 <url>` | baixa o vídeo (mp4) de um vídeo do youtube | `!ytmp4 https://youtu.be/...` |

## 🛠️ estrutura do projeto

```text
zorabot/
├── db/            # arquivos de configuração e banco de dados em json
├── js/            # módulos de utilitários e integração local (localApi.js)
├── index.js       # arquivo principal de tratamento de mensagens e comandos
├── start.js       # script de inicialização e reconexão automática
└── zora.sh        # script para execução rápida no terminal
```
