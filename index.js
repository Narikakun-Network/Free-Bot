const http = require('http');
http.createServer(function (req, res) {
  res.write("online");
  res.end();
}).listen(8080);

const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
  console.log('ready');
})

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.includes("今何時")) {
    var now = new Date();
    now.setTime(now.getTime() + 32400000);
    message.channel.send("現在時刻は、" + now.getHours() + "時" + now.getMinutes() + "分" + now.getSeconds() + "秒 です。");
  }
})

var tokens = require("./token.json");

client.login(tokens.Discord_Token);