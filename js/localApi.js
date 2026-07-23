const yts = require('yt-search');
const { YtDlp } = require('@choewy/yt-dlp');
const { createCanvas, loadImage } = require('@napi-rs/canvas');

/**
 * Pesquisa um vídeo no YouTube usando yt-search localmente.
 */
async function searchYt(q) {
  try {
    const res = await yts(q);
    const v = res.videos ? res.videos[0] : null;
    if (!v) return { sucesso: false, erro: 'Nenhum resultado encontrado' };
    return {
      sucesso: true,
      data: {
        titulo: v.title,
        canal: v.author ? v.author.name : 'Desconhecido',
        thumbnail: v.thumbnail || v.image,
        duracao: v.timestamp || v.duration.toString(),
        url: v.url,
        views: v.views || 0
      }
    };
  } catch (err) {
    console.error('[localApi] Erro na busca do YouTube:', err);
    return { sucesso: false, erro: err.message };
  }
}

/**
 * Baixa o áudio de um vídeo do YouTube usando yt-dlp localmente.
 * Retorna { sucesso, buffer, titulo }
 */
async function downloadYtMp3(url) {
  try {
    const ytdlp = new YtDlp({ url }).format('ba/b');
    const result = await ytdlp.video().buffer();
    return {
      sucesso: true,
      buffer: result.buffer,
      titulo: result.title
    };
  } catch (err) {
    console.error('[localApi] Erro no download MP3:', err);
    return { sucesso: false, erro: err.message };
  }
}

/**
 * Baixa o vídeo de um vídeo do YouTube usando yt-dlp localmente.
 * Retorna { sucesso, buffer, titulo }
 */
async function downloadYtMp4(url) {
  try {
    const ytdlp = new YtDlp({ url }).format('b/bv*+ba');
    const result = await ytdlp.video().buffer();
    return {
      sucesso: true,
      buffer: result.buffer,
      titulo: result.title
    };
  } catch (err) {
    console.error('[localApi] Erro no download MP4:', err);
    return { sucesso: false, erro: err.message };
  }
}

/**
 * Gera localmente um card de status/ping usando Canvas.
 */
async function createPingCard({ ping, tempoFormatado, memoria, avatarUrl, fundoUrl }) {
  try {
    const width = 800;
    const height = 300;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Fundo
    try {
      if (fundoUrl) {
        const bgImg = await loadImage(fundoUrl);
        ctx.drawImage(bgImg, 0, 0, width, height);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.75)'; // Overlay escuro
        ctx.fillRect(0, 0, width, height);
      } else {
        throw new Error('Sem fundo');
      }
    } catch {
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#0f172a');
      grad.addColorStop(1, '#1e1b4b');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    }

    // Avatar
    const avatarSize = 120;
    const avatarX = 40;
    const avatarY = 90;
    try {
      if (avatarUrl) {
        const avatarImg = await loadImage(avatarUrl);
        ctx.save();
        ctx.beginPath();
        ctx.arc(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(avatarImg, avatarX, avatarY, avatarSize, avatarSize);
        ctx.restore();
      }
    } catch {
      // avatar fallback
    }

    // Informações
    const textX = avatarX + avatarSize + 40;
    ctx.fillStyle = '#6366f1';
    ctx.font = 'bold 32px sans-serif';
    ctx.fillText('ZORA BOT STATUS', textX, 85);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText(`⚡ Ping: ${ping}s`, textX, 135);
    ctx.fillText(`⌚ Uptime: ${tempoFormatado}`, textX, 175);
    ctx.fillText(`💻 Memória: ${memoria}`, textX, 215);

    return await canvas.encode('png');
  } catch (err) {
    console.error('[localApi] Erro ao criar Ping Card:', err);
    return null;
  }
}

/**
 * Gera localmente um card de tocador de música usando Canvas.
 */
async function createMusicCard({ titulo, canal, duracao, thumbUrl }) {
  try {
    const width = 800;
    const height = 280;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Fundo Gradiente
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#111827');
    grad.addColorStop(1, '#311b92');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Thumbnail da música
    const thumbWidth = 220;
    const thumbHeight = 180;
    const thumbX = 30;
    const thumbY = 50;

    try {
      if (thumbUrl) {
        const thumbImg = await loadImage(thumbUrl);
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(thumbX, thumbY, thumbWidth, thumbHeight, 15);
        ctx.clip();
        ctx.drawImage(thumbImg, thumbX, thumbY, thumbWidth, thumbHeight);
        ctx.restore();
      }
    } catch {
      // Fallback rect
      ctx.fillStyle = '#374151';
      ctx.fillRect(thumbX, thumbY, thumbWidth, thumbHeight);
    }

    // Textos
    const textX = thumbX + thumbWidth + 30;
    ctx.fillStyle = '#a855f7';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('🎵 YOUTUBE PLAY', textX, 80);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px sans-serif';
    // Truncar título se for muito grande
    const maxTitleLen = 32;
    const titleText = titulo.length > maxTitleLen ? titulo.substring(0, maxTitleLen) + '...' : titulo;
    ctx.fillText(titleText, textX, 125);

    ctx.fillStyle = '#9ca3af';
    ctx.font = '18px sans-serif';
    ctx.fillText(`👤 ${canal}`, textX, 165);
    ctx.fillText(`⏱️ Duração: ${duracao}`, textX, 200);

    return await canvas.encode('png');
  } catch (err) {
    console.error('[localApi] Erro ao criar Music Card:', err);
    return null;
  }
}

module.exports = {
  searchYt,
  downloadYtMp3,
  downloadYtMp4,
  createPingCard,
  createMusicCard
};
