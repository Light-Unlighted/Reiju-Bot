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

// THIS  MUST  BE  THIS  WAY
client.login("NTE2NTM4MjkwODcxMDc0ODI3.Dt1Hkg.lGHflFlz8h71yOHrJG_0G1LIffE");
