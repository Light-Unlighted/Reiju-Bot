const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot Starter');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

var tablePat = ["tapote la tête de", 
				"frotte la tête de",
 				"caresse la tête de"]

client.on('message', message => {
	let cmember = message.mentions.members.first();
    if (message.content.startsWith(".pat ")) {
       var Random = Math.floor(Math.random() * 2)
        message.channel.send( message.author + tablePat[Random] + cmember.toString())
    }

})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTE2NTM4MjkwODcxMDc0ODI3.Dt1Hkg.lGHflFlz8h71yOHrJG_0G1LIffE);
