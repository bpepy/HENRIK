const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    var isHank = Object.is('@bpep', message.author);
    if (message.content.substring(0,6) === 'Henrik') {
    	message.channel.send('HENRIK!'+message.author+message.client+message.id+message.member);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
