const { Client, GatewayIntentBits } = require('discord.js');const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`TAM Music is online as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.mentions.has(client.user)) return;

  const command = message.content
    .replace(new RegExp(`<@!?${client.user.id}>`, "g"), "")
    .trim();

  if (command.startsWith("ش ")) {
    const song = command.slice(2).trim();
    return message.reply(`🎵 طلبك: **${song}**`);
  }

  if (command === "ص+5") {
    return message.reply("🔊 تم رفع الصوت +5");
  }

  if (command === "ص-5") {
    return message.reply("🔉 تم خفض الصوت -5");
  }

  if (command === "توقف") {
    return message.reply("⏸️ تم إيقاف الأغنية");
  }

  if (command === "كمل") {
    return message.reply("▶️ تم تشغيل الأغنية من جديد");
  }

  if (command === "تخطي") {
    return message.reply("⏭️ تم تخطي الأغنية");
  }

  if (command === "قائمة") {
    return message.reply("📋 قائمة الأغاني فارغة حاليًا");
  }

  if (command === "خروج") {
    return message.reply("🚪 تم الخروج من الروم الصوتي");
  }
});

client.login(process.env.DISCORD_TOKEN);
