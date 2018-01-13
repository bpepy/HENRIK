const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', function (user, userID, channelID, message, evt) {
var hank = 'HENRIK!';
var mess=message;
var ishank = Object.is(hank, user);

switch(ishank) {

	case true:
	break;
	case false:

    if (message.substring(0, 1) == 'H') {
        var args = message.substring(1,6);
        var cmd = args[0];      

        switch(args) {
            // !ping
            case 'ENRIK':
                client.sendMessage({
                    to: channelID,
                    message: 'HENRIK!'
                 });
            break;
            
         }
     }
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
