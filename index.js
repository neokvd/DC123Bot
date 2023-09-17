const { Client, Intents, MessageReaction, ReactionCollector } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('I am online');
});

let nuNumber = 0;
let xmessage = 0;

//Dit command zorgt er voor dat het bot weet vanaf waar hij mmoet beginnen van af tellen. als je nog niet bent gestart doen dan .counting 0 als je er al mee bezig bent doe dan .counting (het laatste getal dat er staat)
//Zorg dat de rest van de mensen in de server deze command niet weten behalve admins. Iedereen die dit weet kan deze command gebruiken.
client.on("messageCreate", (message) => {
    if (message.content.startsWith(".counting"/*Start of the command you want to set the begin number with (don't make it complicated just one word)*/)) {
        nuNumber = message.toString().replace('.counting '/*If you changed the start of the command than make this the same (don't forget to type a space after)*/,'');
        nuNumber = parseInt(nuNumber);
        message.channel.send("Ik begin nu met checken van af " + nuNumber);
    }
});

client.on("messageCreate", (message) => {
    const channel01 = client.channels.cache.find(channel => channel.id === "HIER"/*Counting channel ID hier*/);
    if (message.channel === channel01) {
        message01 = parseInt(message.content);
        console.log(message01);
        nuNumber = nuNumber + 1;
        console.log(nuNumber);
        if (message01 === nuNumber) {
            console.log("is gelijk");
        } else {
            message.react('❌');
            
            if (xmessage > 0) {
                channel01.messages.fetch(xmessage.toString()).then(me => {
                    me.reactions.removeAll()
	                .catch(error => console.error('Failed to clear reactions:', error));
                    console.log("removed reactions message id:" + me.id);
                    console.log("last Xmessage is:" + xmessage);
                    xmessage = message.id
                    console.log("new xmessage is:" + message.id);
                    console.log("is niet gelijk");
                })
            } else {
                console.log("last Xmessage is:" + xmessage);
                xmessage = message.id
                console.log("new xmessage is:" + message.id);
                console.log("is niet gelijk");
            }
        }
    }
});

client.login('HIER'/*BOT_TOKEN hier*/);

/*short version how to run: Change the channel id for the channel where you want that the bot checks. Start the bot. Type .counting and then the last number in your counting channel or 0 if you didn't start yet. Now you are set!! HAVE FUN COUNTING!*/
// If you type in the counting channel while the .counting command hasn't run yet the bot crashes. Just strat it back  up again and don't type in the counting channel.
