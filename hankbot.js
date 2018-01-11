var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth_hank.json');



// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

function wordInString(s, word){
  return new RegExp( '\\b' + word + '\\b', 'i').test(s);
}

//wordInString('did you, or did you not, get why?', 'you')

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
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
                bot.sendMessage({
                    to: channelID,
                    message: 'HENRIK!'
                 });
            break;
            
         }
     }
	}
});

bot.login(process.env.BOT_TOKEN);
