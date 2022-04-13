const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Привет, Алина!");
  setTimeout(() => {
    ctx.reply("Поздравляю тебя с днем рождения! 🎉");
    setTimeout(() => {
      ctx.reply("Напиши мне кодовую фразу, и я расскажу, где искать подарок");
    }, 500);
  }, 500);
});
bot.command("check", (ctx) => ctx.reply("Бот работает корректно"));
bot.help((ctx) => ctx.reply("Пожалуйста, пришли кодовую фразу"));
bot.on("text", (ctx) => {
  if (
    /алинка[-\s](супер[-\s]?стар|super[-\s]?star)/.test(
      ctx.message.text.toLowerCase()
    )
  ) {
    ctx.reply("Хмм.. дай-ка подумать.. 🤔");
    setTimeout(() => {
      ctx.reply("Пожалуй..");
      setTimeout(() => {
        ctx.reply(
          "Да, думаю, фраза правильная! Ты действительно супер-звезда 🌟"
        );
        setTimeout(() => {
          ctx.reply(
            "Ищи свой подарок внутри того, что освещает тебя во время съемок Тик-Токов"
          );
        }, 1000);
      }, 2000);
    }, 2000);
  } else {
    ctx.reply("Боюсь, это неправильная фраза. Попробуй другую");
  }
});
bot.launch();
