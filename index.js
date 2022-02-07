const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();
const text = require("./config");




const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) =>
  console.log(
    ctx.reply(
      `Привет  ${
        ctx.message.from.first_name ? ctx.message.from.first_name : "незнакомец"
      }`
    )
  )
);
bot.help((ctx) => ctx.reply(text.commands));
bot.command("til", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>O`zbekcha</b>",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Manzil", "btn_1"),
          Markup.button.callback("Yangiliklar", "btn_2"),
        ],
        [
          Markup.button.callback("Murojiat qoldirish", "btn_3"),
          Markup.button.callback("Orqaga qaytish", "btn_4"),
        ],
      ])
    );
    ctx.replyWithHTML(
      "<b>Руский</b>",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Адрес", "btn_1"),
          Markup.button.callback("Новости", "btn_2"),
        ],
        [
          Markup.button.callback("Оставить заявки", "btn_3"),
          Markup.button.callback("Назад", "btn_4"),
        ],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});
function addActionBtn(name, /* src */ text /* map */) {
  bot.action(name, async (ctx) => {
    try {
      await ctx.answerCbQuery()
      // if (src !== false) {
      //   await ctx.replyWithPhoto({
      //     source: src
      //   })
      // }
      // if (map !== false) {
      //   await ctx.replyWithLocation({
          
      //   })
      // }
      
      await ctx.replyWithHTML(text, {
        disable_web_page_preview: true
      })
      
    } catch (e) {
      console.error(e);
    }
  });
}

addActionBtn('btn_1', /* './img/tashCity.jpg', */ text.text_UZ,/*  text.map_UZ */)

// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
