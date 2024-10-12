import { Telegraf } from "telegraf";
const TOKEN = "7966708804:AAFmyxHk19kgfgqt2CpBhJbEIg4s0WjZ1aA";
const bot = new Telegraf(TOKEN);

const web_link = "https://homestoken.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome to HomesToken", {
    reply_markup: {
      keyboard: [[{ text: "HomesToken", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
