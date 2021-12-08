const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    switch(message.author.bot) {

	case true:
	break;
	case false:
        if (message.content.substring(0,6) === 'HENRIK') {
    	    message.channel.send('HENRIK!');
  	    }
	else if (message.content.substring(0,7) === 'GEORGIE') {
		message.channel.send('GEORGIE!');
  	    }
	else if (message.content.substring(0,4) === 'IGOR') {
		message.channel.send('IGOR!');
  	    }    
	else if (message.content.substring(0,4) === 'HUSKA') {
		message.channel.send('HUSKA!');
  	    }   
            break;    
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN); 
