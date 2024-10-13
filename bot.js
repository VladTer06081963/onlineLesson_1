const fs = require('fs');

const pug = require('pug');
const html = pug.renderFile('layout.pug');
fs.writeFileSync('index.html', html);


const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();



// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.token;
const webAppUrl = 'https://vladter06081963.github.io/onlineLesson_1/'


// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});



// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message',async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;


  // if(text === '/start') {
  //   await bot.sendMessage(chatId, 'Ниже появится кнопка, Заполни форму,', {
  //     reply_markup: {
  //       inline_keyboard: [
  //         [{text: 'заполни форму', web_app: {url: webAppUrl}}]
  //       ]
  //     }
  //   }

  //   )
  // }
  // send a message to the chat acknowledging receipt of their message
  await bot.sendMessage(chatId, 'Received your message ' + `${chatId}`);
});