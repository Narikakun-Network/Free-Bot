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
  if (message.content.include("なりかくん")) {
    message.channel.send("なりかくんって誰？");
  }
})

client.login(process.env.TOKEN);