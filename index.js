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
    message.channel.send("現在時刻は、" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " です。");
  }
})

client.login(process.env.DISCORD_BOT_SECRET);