const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (!message.mentions.has(client.user)) return;

  const command = message.content
    .replace(`<@${client.user.id}>`, '')
    .replace(`<@!${client.user.id}>`, '')
    .trim();

  if (command.startsWith('ش ')) {
    const song = command.slice(2).trim();
    await message.reply(`🎵 جاري تشغيل: **${song}**`);
  }

  if (command === 'ص+5') {
    await message.reply('🔊 تم رفع الصوت +5');
  }

  if (command === 'ص-5') {
    await message.reply('🔉 تم خفض الصوت -5');
  }
});

client.once('ready', () => {
  console.log(`TAM Music online: ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
