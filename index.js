const { Telegraf, Markup, Telegram, Scenes, session } = require("telegraf");

require("dotenv").config();
const text = require("./config");

const bot = new Telegraf(process.env.BOT_TOKEN);
const telegram = new Telegram(process.env.BOT_TOKEN);

bot.help((ctx) => ctx.reply(text.commands));

bot.hears("O`zbekcha", async (ctx) => {
  try {
    await ctx.reply(
      "O`zbek",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("📍Manzil", "btn_1"),
          Markup.button.callback("🗓Yangiliklar", "btn_2"),
        ],
        [
          Markup.button.callback("Murojiat qoldirish", "btn_3"),
          Markup.button.callback("Orqaga qaytish", "btn_4"),
        ],
      ])
    );

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

bot.start(async (ctx) => {
  try {
    await ctx.reply(
      `${ctx.message.from.first_name} tilni tanlang!\n${ctx.message.from.first_name} виберайте язык!`,
      Markup.keyboard([
        [Markup.button.callback("O`zbekcha"), Markup.button.callback("Руский")],
      ])
        .oneTime()
        .resize()
    );
  } catch (e) {
    console.error(e);
  }
});

bot.action("btn_1", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.reply(
      "Manzillar",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Hududiy filliallar", "btn_5"),
          Markup.button.callback("Konsul", "btn_8"),
          
        ],
        [
          Markup.button.callback("Elchixona va vakolatxonalar", "btn_6"),
        ],
      ])
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

bot.action("btn_2", async (ctx) => {
  
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      `<a href="https://t.me/migratsiyaagentligi">Yangiliklardan xabardor bolib borishingiz uchun</a>`
    );
  } catch (error) {
    console.error(error);
  }
});

bot.action("btn_5", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.reply(
      "Filliallar",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Andijon", "btn_9"),
          Markup.button.callback("Buxoro", "btn_10"),
        ],
        [
          Markup.button.callback("Jizzax ", "btn_11"),
          Markup.button.callback("Qashqadaryo", "btn_12"),
        ],
        [
          Markup.button.callback("Navoiy ", "btn_13"),
          Markup.button.callback("Namangan", "btn_14"),
        ],
        [
          Markup.button.callback("Samarqand ", "btn_15"),
          Markup.button.callback("Surxandaryo", "btn_16"),
        ],
        [
          Markup.button.callback("Guliston ", "btn_17"),
          Markup.button.callback("Toshkent viloyati", "btn_18"),
        ],
        [
          Markup.button.callback("Toshkent shahri ", "btn_19"),
          Markup.button.callback("Nukus", "btn_20"),
        ],
        [
          Markup.button.callback("Xorazm ", "btn_21"),
          Markup.button.callback("Farg'ona", "btn_22"),
        ],
      ])
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

bot.action("btn_6", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      `
      <a href="https://t.me/migratsiyaagentligi">
      Переслано из Ташқи меҳнат миграцияси агентлиги / The Agency for foreign labor migration Ташқи меҳнат миграцияси агентлигининг хориждаги ваколатхоналари:
      </a>
      
      🇷🇺 Россия Федерацияси
      
      Москва шаҳри:
      📍Манзил: Москва шаҳри 1-Казачий тор кўчаси, 11/2 (Метро Полянка).
      ☎️ +7 (925) 045-47-44.
      
      Санкт-Петербург шаҳри:
      📍Манзил: Санкт-Петербург шаҳри, 4-Красноармейская кўчаси, 4А-уй. 
      Ўзбекистон Республикасининг Санкт-Петербург шаҳридаги Бош консулхонаси биноси.
      ☎️ +7 (951) 680-95-97.
      
      Екатеринбург шаҳри:
      📍Манзил: Екатеринбург шаҳри, Карл Либкнехт кўчаси 22 уй.
      ☎️ +7 (925) 950-89-77, +7 (922) 186-35-66.
      
      Новосибирск шаҳри:
      📍Манзил: Новосибирск шаҳри, Ломоносова кўчаси, 55-уй.
      ☎️ +7 (953) 862-00-07.
      
      Самара шаҳри:
      📍Манзил: Самара шаҳри, Ново-Садовая кўчаси, 3-уй.
      ☎️ +7 (917) 872-42-26.
      
      Уфа шаҳри:
      📍Манзил: Уфа шаҳри, Верхнеторговая майдони кўчаси, 4-уй, 516-офис.
      ☎️ +7 (917) 469-20-88, +7 (347) 216-33-43.
      
      🇰🇷 Корея Республикаси
      
      Квангжу шаҳри:
      📍Манзил: 광주광역시 광산구 사암로 359 (월곡동) (3 층)
      359, Saam-roo, Kvansan-gu, Kvangju (Volgok-dong) (3-қават)
      ☎️ 070-4252-2772, 062-962-0201, 062-962-0205 (факс).
      E-mail: migrationuzkr@gmail.com
      Telegram: @migrationuzkr
      
      ☎️ Ишонч телефонлари: (71) 202-33-55, (71) 200-00-61 ёки 1282 қисқа рақами
      Моддий ёрдам олиш учун: www.birgamiz.com
      Маслаҳат олиш учун: consalting.labormigration.uz
      
      🔻 Ахборот каналларимизни кузатиб боринг
      
      Телеграм (https://t.me/migratsiyaagentligi) | Facebook (https://www.facebook.com/migratsiyaagentligi) | Youtube (https://www.youtube.com/channel/UCcML3ZArS2qqNLhBm79oiqw/videos) | Веб-сайт (http://www.migration.uz/)`
    );
  } catch (error) {
    console.error(error);
  }
});

function infoMap(btn, text, lat, lan, name) {
  bot.action(btn, async (ctx) => {
    try {
      await telegram.sendLocation(ctx.chat.id, lat, lan);
      await ctx.replyWithHTML(`${name}${text}`);
    } catch (error) {
      console.error(error);
    }
  });
}

// Andijon
infoMap(
  "btn_9",
  `\n\n<b>Filial raxbari:</b>\nМухтаров Мурод Мухтарович\n\n<b>Tel raqami:</b>\n☎️90 544-16-02 (95 202-33-55)`,
  41.37255691958309,
  69.288790291014,
  "Andijon filliali malumotlari"
);
// Buxoro
infoMap(
  "btn_10",
  `\n\n<b>Filial raxbari:</b>\nХамдамов Анвар Нормуродович\n\n<b>Tel raqami:</b>\n☎️65 226-56-99 (93 686-11-78)`,
  39.764434871119164,
  64.40835581349384,
  "Buxoro filliali malumotlari"
);
// Jizzax
infoMap(
  "btn_11",
  `\n\n<b>Filial raxbari:</b>\nАбдусаидов Сунатулло Хусанович\n\n<b>Tel raqami:</b>\n☎️72 226-91-87(93 992-95-59)`,
  40.11309002699019,
  67.83306872883537,
  "Jizzax filliali malumotlari"
);
// Qashqadaryo
infoMap(
  "btn_12",
  `\n\n<b>Filial raxbari:</b>\nXali yoq\n\n<b>Tel raqami:</b>\nXali yoq`,
  38.83258775290569,
  65.80790130528706,
  "Qashqadaryo filliali malumotlari"
);
// Navoiy
infoMap(
  "btn_13",
  `\n\n<b>Filial raxbari:</b>\nРажабов Қахрамон Разақович\n\n<b>Tel raqami:</b>\n☎️79 224-11-60(98 778-10-17)`,
  40.10912240280854,
  65.36061781349385,
  "Navoiy filliali malumotlari"
);
// Namangan
infoMap(
  "btn_14",
  `\n\n<b>Filial raxbari:</b>\nАпаков Муҳаммадаюбхон\n\n<b>Tel raqami:</b>\n☎️69 227-94-64(90 554-22-20)`,
  20.758670941406404,
  -0.000005728835389003358,
  "Namangan filliali malumotlari"
);
// Samarqand
infoMap(
  "btn_15",
  `\n\n<b>Filial raxbari:</b>\nНормуратов Умид Мухтарович\n\n<b>Tel raqami:</b>\n☎️66 233-24-00(99 320-62-12)`,
  39.65524940525757,
  66.9665332711646,
  "Samarqand filliali malumotlari"
);
// Surxandaryo
infoMap(
  "btn_16",
  `\n\n<b>Filial raxbari:</b>\nХамраев Рустам Усманович\n\n<b>Tel raqami:</b>\n☎️76 222-45-22(99 715-10-05)`,
  37.22043226460796,
  67.27771881349382,
  "Surxandaryo filliali malumotlari"
);
// Guliston
infoMap(
  "btn_17",
  `\n\n<b>Filial raxbari:</b>\nИсроилов Сирожиддин Мамарахимович\n\n<b>Tel raqami:</b>\n☎️67 225-55-59(94 407-18-07)`,
  40.497166345408885,
  68.77635181349383,
  "Guliston filliali malumotlari"
);
// Toshkent viloyati
infoMap(
  "btn_18",
  `\n\n<b>Filial raxbari:</b>\nXali yoq\n\n<b>Tel raqami:</b>\nXali yoq`,
  41.064729854845915,
  69.34362918650616,
  "Toshkent viloyati filliali malumotlari"
);
// Toshkent shahri
infoMap(
  "btn_19",
  `\n\n<b>Filial raxbari:</b>\nXali yoq\n\n<b>Tel raqami:</b>\nXali yoq`,
  41.3030661953467,
  69.28198194876636,
  "Toshkent shahri filliali malumotlari"
);
// Nukus
infoMap(
  "btn_20",
  `\n\n<b>Filial raxbari:</b>\nАчилов Азамат Турсинбаевич\n\n<b>Tel raqami:</b>\n☎️61 222-53-32(91 376-07-76)`,
  42.44197021610947,
  59.610176462295975,
  "Nukus shahri filliali malumotlari"
);
// Xorazm
infoMap(
  "btn_21",
  `\n\n<b>Filial raxbari:</b>\nРамаданов Михаил Сергеевич\n\n<b>Tel raqami:</b>\n☎️62 224-12-35(91 376-07-76)`,
  41.54516978621329,
  60.61565861084039,
  "Xorazm shahri filliali malumotlari"
);
// Farg'ona
infoMap(
  "btn_22",
  `\n\n<b>Filial raxbari:</b>\nАтабаев Отабек Улуғбекович\n\n<b>Tel raqami:</b>\n☎️91 661-07-77(73 244-40-01 (05))`,
  41.54516978621329,
  60.61565861084039,
  "Farg'ona shahri filliali malumotlari"
);

// bot.command("/O`zbekcha", (ctx)=>{
//   ctx.replyWithHTML('<b>Malumotlar</b>', Markup.inlineKeyboard([
//     [Markup.button.callback("Manzil", 'b_1'),Markup.button.callback("Yangiliklar", 'b_2')],
//     [Markup.button.callback("Murojiat qoldirish", 'b_3'),Markup.button.callback("Orqaga qaytish", 'b_4')],
//   ]))
// })

// function addActionBtn(name) {
//   bot.action(name, async (ctx) => {
//     await ctx.replyWithHTML( "Tilni tanlang! Виберайте язык",
//       Markup.inlineKeyboard([
//         [
//           Markup.button.callback("Manzil", "btn_1"),
//           Markup.button.callback("Malumot", "btn_1"),
//         ],
//       ])
//     );
// try {
//   await ctx.answerCbQuery();
//   if (src !== false) {
//     await ctx.replyWithPhoto({
//       source: src,
//     });
//   }
//   await telegram.sendLocation(ctx.chat.id, 41.29665114651708, 69.25379765497149)

//   await ctx.replyWithHTML(text, {
//     disable_web_page_preview: true,
//   });
// } catch (e) {
//   console.error(e);
// }
//   });
// }

// addActionBtn("btn_1");

// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
