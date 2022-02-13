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
// Manzillar
bot.action("btn_1", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.reply(
      "Manzillar",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Hududiy filliallar", "btn_5"),
          Markup.button.callback("Konsulliklar", "btn_8"),
        ],
        [
          Markup.button.callback("Elchixonalar va vakolatxonalar", 'btn_6'),
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
// Yangiliklardan xabardor bolib borishingiz uchun
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
// Murojiat qoldirish uchun
bot.action("btn_3", async (ctx)=>{
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      `<a href="http://www.migration.uz/application/create">Murojiat qoldirish uchun</a>`
    );
    
  } catch (error) {
    console.error(error);
  }
})
// Filliallar
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
          Markup.button.callback("Sirdaryo ", "btn_17"),
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
// Vakolatxona
bot.action("btn_6", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.reply(
      "Vakolatxona va Elchixona",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Vakolatxona", "btn_23"), 
          Markup.button.callback("Elchixona", "btn_24"),
        ]
      ])
    );
    
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

// Konsulliklar 
bot.action("btn_8", async(ctx)=>{
  try {
    await ctx.answerCbQuery();
    await ctx.reply(
      "Konsullar",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Бангконгдаги бош консулхона", "btn_68"), 
          Markup.button.callback("Дубайдаги бош консулхона", "btn_69"),
        ],
        [
          Markup.button.callback("Жиддадаги бош консулхона", "btn_70"), 
          Markup.button.callback("Истамбулдаги бош консулхона", "btn_71"),
        ],
        [
          Markup.button.callback("Қозондаги бош консулхона", "btn_72"), 
          Markup.button.callback("Шанхайдаги бош консулхона", "btn_73"),
        ],
        [
          Markup.button.callback("Франкфуртдаги бош консулхона", "btn_74"), 
          Markup.button.callback("Санкт-Петурбургдаги бош консулхона", "btn_75"),
        ],
        [
          Markup.button.callback("Ростовдаги бош консулхона", "btn_76"), 
          Markup.button.callback("Олмаотадаги бош консулхона", "btn_77"),
        ],
        [
          Markup.button.callback("Нью-Йоркдаги бош консулхона", "btn_78"), 
          Markup.button.callback("Новосибирскдаги бош консулхона", "btn_79"),
        ],
      ])
    );
    
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
})

// Konsulliklar
function consul(btn, lat, lan, text) {
  bot.action(btn, async (ctx) => {
    try {
      await telegram.sendLocation(ctx.chat.id, lat, lan);
      await ctx.replyWithHTML(`${text}`);
    } catch (error) {
      console.error(error);
    }
  });
}
// Бангконгдаги бош консулхона
consul("btn_68", 13.740640582578711, 100.54819330838903, 'Бангконгдаги бош консулхона manzili')
// Дубайдаги бош консулхона
consul("btn_69", 25.256565968013557, 55.31072743740501, 'Дубайдаги бош консулхона manzili')
// Жиддадаги бош консулхона
consul("btn_70", 21.629955765961473, 39.13860510850161, 'Жиддадаги бош консулхона manzili')
// Истамбулдаги бош консулхона
consul("btn_71", 41.077548907195606, 29.01750403226283, 'Истамбулдаги бош консулхона manzili')
// Қозондаги бош консулхона
consul("btn_72", 55.77867786648602, 49.129856098404744, 'Қозондаги бош консулхона manzili')
// Шанхайдаги бош консулхона
consul("btn_73", 31.249190567604174, 121.49042699761723, 'Шанхайдаги бош консулхона manzili')
// Франкфуртдаги бош консулхона
consul("btn_74", 50.118872801900075, 8.68858553867173, 'Франкфуртдаги бош консулхона manzili')
// Санкт-Петурбургдаги бош консулхона
consul("btn_75", 50.118872801900075, 8.68858553867173, 'Санкт-Петурбургдаги бош консулхона manzili')
// Ростовдаги бош консулхона
consul("btn_76", 47.22460597916381, 39.72292899833528, 'Ростовдаги бош консулхона manzili')
// Олмаотадаги бош консулхона
consul("btn_77", 43.20374275346765, 76.91203171144947, 'Олмаотадаги бош консулхона manzili')
// Нью-Йоркдаги бош консулхона
consul("btn_78", 40.750038871007376, -73.97542285979196, 'Нью-Йоркдаги бош консулхона manzili')
// Новосибирскдаги бош консулхона
consul("btn_79", 55.039794292743586, 82.93584886954052, 'Новосибирскдаги бош консулхона manzili')


bot.action("btn_23", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.reply(
      "Vakolatxona",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Россия Федерацияси", "btn_32"), 
          Markup.button.callback("Корея Республикаси", "btn_24"),
        ]
      ])
    );
    
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

bot.action('btn_24', async (ctx)=>{
  try {
    await ctx.answerCbQuery();
    await ctx.reply(
      "Elchixona",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Бирлашган Араб Амирликларидаги элчихона", "btn_33"), 
          Markup.button.callback("Туркиядаги элчихона", "btn_34"),
        ],
        [
          Markup.button.callback("Афинадаги элчихона", "btn_35"), 
          Markup.button.callback("Туркманистондаги элчихона", "btn_36"),
        ],
        [
          Markup.button.callback("Азарбайжондаги элчихона", "btn_37"), 
          Markup.button.callback("Германиядаги элчихона", "btn_38"),
        ],
        [
          Markup.button.callback("Қирғизистондаги элчихона", "btn_39"), 
          Markup.button.callback("Бельгиядаги элчихона", "btn_40"),
        ],
        [
          Markup.button.callback("Полшадаги элчихона", "btn_41"), 
          Markup.button.callback("АҚШдаги элчихона", "btn_42"),
        ],
        [
          Markup.button.callback("Австрядаги элчихона", "btn_43"), 
          Markup.button.callback("Ҳиндистондаги элчихона", "btn_44"),
        ],
        [
          Markup.button.callback("Екатеринбургдаги элчихона", "btn_45"), 
          Markup.button.callback("Индонезиядаги элчихона", "btn_46"),
        ],
        [
          Markup.button.callback("Покистондаги элчихона", "btn_47"), 
          Markup.button.callback("Украинадаги элчихона", "btn_48"),
        ],
        [
          Markup.button.callback("Малайзиядаги элчихона", "btn_49"), 
          Markup.button.callback("Буюк Британиядаги элчихона", "btn_50"),
        ],
        [
          Markup.button.callback("Миср элчихонаси", "btn_51"), 
          Markup.button.callback("Афғонистондаги элчихона", "btn_52"),
        ],
        [
          Markup.button.callback("Саудиа Арабистони Подшоҳлигидаги элчихона", "btn_53"), 
          Markup.button.callback("Қувайтдаги элчихона", "btn_54"),
        ],
        [
          Markup.button.callback("Япониядаги элчихона", "btn_55"), 
          Markup.button.callback("Эрондаги элчихона", "btn_56"),
        ],
        [
          Markup.button.callback("Исроилдаги элчихона", "btn_57"), 
          Markup.button.callback("Цингапурдаги элчихона", "btn_58"),
        ],
        [
          Markup.button.callback("Кореядаги элчихона", "btn_59"), 
          Markup.button.callback("Италиядаги элчихона", "btn_60"),
        ],
        [
          Markup.button.callback("Хитойдаги элчихона", "btn_61"), 
          Markup.button.callback("Франциядаги элчихона", "btn_62"),
        ],
        [
          Markup.button.callback("Қозоғистондаги элчихона", "btn_63"), 
          Markup.button.callback("Россиядаги элчихона", "btn_64"),
        ],
        [
          Markup.button.callback("Беларусдаги элчихона", "btn_65"), 
          Markup.button.callback("Уммондаги Элчихона", "btn_66"),
        ],
        [
          Markup.button.callback("Испаниядаги элчихона", "btn_67"), 
        ],
      ])
    );
    
    
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
})
// Elchixona
// Бирлашган Араб Амирликларидаги элчихона
elchi("btn_33", 24.444278994513944, 54.41455238211567, 'Бирлашган Араб Амирликларидаги элчихона манзили!')
// Туркиядаги элчихона
elchi("btn_34", 39.87248206619246, 32.86392204571917, 'Туркиядаги элчихона манзили!')
// Афинадаги элчихона
elchi("btn_35", 38.013377420350444, 23.7704333438151, 'Афинадаги элчихона манзили!')
// Туркманистондаги элчихона
elchi("btn_36", 37.944395783753, 58.35945449723727, 'Туркманистондаги элчихона манзили!')
// Азарбайжондаги элчихона
elchi("btn_37", 40.35129867707628, 49.804822174569225, 'Азарбайжондаги элчихона манзили!')
// Германиядаги элчихона
elchi("btn_38", 52.53476699810613, 13.355841434503855, 'Германиядаги элчихона манзили!')
// Қирғизистондаги элчихона
elchi("btn_39", 42.83321853615102, 74.58426898019441, 'Қирғизистондаги элчихона манзили!')
// Бельгиядаги элчихона
elchi("btn_40", 50.80305823116729, 4.3881604958097, 'Бельгиядаги элчихона манзили!')
// Полшадаги элчихона
elchi("btn_41", 52.150767691925665, 21.024463453530476, 'Полшадаги элчихона манзили!')
// АҚШдаги элчихона
elchi("btn_42", 38.90852735256902,  -77.0395766934884, 'АҚШдаги элчихона манзили!')
// Австрядаги элчихона
elchi("btn_43", 48.24042034387942,  16.312963926402904, 'Австрядаги элчихона манзили!')
// Ҳиндистондаги элчихона
elchi("btn_44", 28.590722793936884,  77.17780408535243, 'Ҳиндистондаги элчихона манзили!')
// Екатеринбургдаги элчихона
elchi("btn_45", 56.84120430965575,  60.61265568809314, 'Екатеринбургдаги элчихона манзили!')
// Индонезиядаги элчихона
elchi("btn_46", -6.236378323295416,  106.80503028134149, 'Индонезиядаги элчихона манзили!')
// Покистондаги элчихона
elchi("btn_47", 33.71875988797603,  73.03812025664149, 'Покистондаги элчихона манзили!')
// Украинадаги элчихона
elchi("btn_48", 50.454925295726774,  30.516991797646273, 'Украинадаги элчихона манзили!')
// Малайзиядаги элчихона
elchi("btn_49", 3.1544418360886914,  101.75415867153502, 'Малайзиядаги элчихона манзили!')
// Буюк Британиядаги элчихона
elchi("btn_50", 51.50664268170274,  -0.20515924409555078, 'Буюк Британиядаги элчихона манзили!')
// Миср элчихонаси
elchi("btn_51", 30.042451025212017,  31.214712055259547, 'Миср элчихона манзили!')
// Афғонистондаги элчихона
elchi("btn_52", 34.53979727628865,  69.1826342323586, 'Афғонистондаги элчихона манзили!')
// Саудиа Арабистони Подшоҳлигидаги элчихона
elchi("btn_53", 24.708759276381418,  46.70206392630878, 'Саудиа Арабистони Подшоҳлигидаги элчихона манзили!')
// Қувайтдаги элчихона
elchi("btn_54", 29.2869839459442,  48.072332168735, 'Қувайтдаги элчихона манзили!')
// Япониядаги элчихона
elchi("btn_55", 35.639651217065186,  139.73707066889529, 'Япониядаги элчихона манзили!')
// Эрондаги элчихона
elchi("btn_56", 35.804237034744176,  51.475708497735454, 'Эрондаги элчихона манзили!')
// Исроилдаги элчихона
elchi("btn_57", 32.08754611599336,  34.81746869763784, 'Исроилдаги элчихона манзили!')
// Цингапурдаги элчихона
elchi("btn_58", 1.3009625881565763,  103.84276539722717, 'Цингапурдаги элчихона манзили!')
// Кореядаги элчихона
elchi("btn_59", 37.53488972591446,  127.00167499778397, 'Кореядаги элчихона манзили!')
// Италиядаги элчихона
elchi("btn_60", 41.909750408926016,  12.470312340244002, 'Италиядаги элчихона манзили!')
// Хитойдаги элчихона
elchi("btn_61", 39.94287144608594,  116.45153499785474, 'Хитойдаги элчихона манзили!')
// Франциядаги элчихона
elchi("btn_62", 48.8710347216855,  2.3200317251341303, 'Франциядаги элчихона манзили!')
// Қозоғистондаги элчихона
elchi("btn_63", 43.26024871891677,  76.96371816940604, 'Қозоғистондаги элчихона манзили!')
// Россиядаги элчихона
elchi("btn_64", 55.73268098285613,  37.62100169840296, 'Россиядаги элчихона манзили!')
// Беларусдаги элчихона
elchi("btn_65", 53.939271184180775,  27.49223602716975, 'Беларусдаги элчихона манзили!')
// Уммондаги Элчихона
elchi("btn_66", 23.60739726203906,  58.44959846861621, 'Уммондаги элчихона манзили!')
// Испаниядаги элчихона
elchi("btn_67", 40.435752362402454,  -3.6897059598015853, 'Испаниядаги элчихона манзили!')





function elchi(btn, lat, lan, text) {
  bot.action(btn, async (ctx) => {
    try {
      await telegram.sendLocation(ctx.chat.id, lat, lan);
      await ctx.replyWithHTML(`${text}`);
    } catch (error) {
      console.error(error);
    }
  });
}


bot.action("btn_32", async (ctx)=>{
  try {
    await ctx.answerCbQuery();
    await ctx.reply(
      "Россия Федерацияси",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Москва шаҳри", "btn_25"), 
          Markup.button.callback("Санкт-Петербург шаҳри", "btn_26"),
        ],
        [
          Markup.button.callback("Екатеринбург шаҳри", "btn_27"), 
          Markup.button.callback("Новосибирск шаҳри", "btn_28"),
        ],
        [
          Markup.button.callback("Самара шаҳри", "btn_29"), 
          Markup.button.callback("Уфа шаҳри", "btn_30"),
        ],
      ])
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
})

function rossiya(btn, lat, lan, text) {
  bot.action(btn, async (ctx) => {
    try {
      await telegram.sendLocation(ctx.chat.id, lat, lan);
      await ctx.replyWithHTML(`${text}`);
    } catch (error) {
      console.error(error);
    }
  });
}
// Москва
rossiya("btn_25", 55.73481971124438, 37.62056874267248, `📍Манзил: Москва шаҳри 1-Казачий тор кўчаси, 11/2 (Метро Полянка).
☎️ +7 (925) 045-47-44.`)
// Санкт-Петербург
rossiya("btn_26", 59.91390068461683, 30.315817660011795, `📍Манзил: Санкт-Петербург шаҳри, 4-Красноармейская кўчаси, 4А-уй\n☎️ +7 (951) 680-95-97.`)
// Екатеринбург шаҳри
rossiya("btn_27", 59.913916819735704, 30.315678185151736, `📍Манзил: Екатеринбург шаҳри, Карл Либкнехт кўчаси 22 уй.
☎️ +7 (925) 950-89-77, +7 (922) 186-35-66.`)
// Новосибирск шаҳри
rossiya("btn_28", 55.73484991418824, 37.62050436966015, `📍Манзил: Новосибирск шаҳри, Ломоносова кўчаси, 55-уй.
☎️ +7 (953) 862-00-07.`)
// Самара шаҳри
rossiya("btn_29", 53.20556605594967, 50.126368184914405, `📍Манзил: Самара шаҳри, Ново-Садовая кўчаси, 3-уй.
☎️ +7 (917) 872-42-26.`)
// Уфа шаҳри
rossiya("btn_30", 54.72384807897076, 55.94297372729565, `Манзил: Уфа шаҳри, Верхнеторговая майдони кўчаси, 4-уй, 516-офис.
☎️ +7 (917) 469-20-88, +7 (347) 216-33-43.`)
// Корея
rossiya("btn_31", 35.176364, 126.808108, `Манзил: 광주광역시 광산구 사암로 359 (월곡동) (3 층)
359, Saam-roo, Kvansan-gu, Kvangju (Volgok-dong) (3-қават)
☎️ 070-4252-2772, 062-962-0201, 062-962-0205 (факс).
E-mail: migrationuzkr@gmail.com
Telegram: @migrationuzkr`)

bot.action("btn_24", async (ctx)=>{
  try {
    await ctx.answerCbQuery();
    await ctx.reply(
      "Корея Республикаси",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Квангжу шаҳри", "btn_31"), 
        ]
      ])
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
})


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
  `\n\n<b>Filial raxbari:</b>\nГавхарака\n\n<b>Tel raqami:</b>\n☎️95 202-33-55 (+998 90 571 47 77)`,
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
  `\n\n<b>Filial raxbari:</b>\nТожиддин ака\n\n<b>Tel raqami:</b>\n75 224-05-25(+998 98 777 34 37)`,
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
  "Sirdaryo filliali malumotlari"
);
// Toshkent viloyati
infoMap(
  "btn_18",
  `\n\n<b>Filial raxbari:</b>\nНодир ака\n\n<b>Tel raqami:</b>\n+998 99 999 96 99`,
  41.064729854845915,
  69.34362918650616,
  "Toshkent viloyati filliali malumotlari"
);
// Toshkent shahri
infoMap(
  "btn_19",
  `\n\n<b>Filial raxbari:</b>\nУлугбек ака\n\n<b>Tel raqami:</b>\n71-236-30-40(236-00-23)`,
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
