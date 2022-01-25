const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.once('ready', () => {
    console.log('I am online');
});


let nuNumber = 0;

client.on("messageCreate", (message) => {
    if (message.content.startsWith(".counting")) {
        nuNummer = message.toString().replace('.counting ','');
        nuNummer = parseInt(nuNummer);
        message.channel.send("Ik begin nu met checken van af " + nuNummer);
    }
});



client.on("messageCreate", (message) => {
    const channel01 = client.channels.cache.find(channel => channel.id === "911382847217086514");
    if (message.channel === channel01) {
        message01 = parseInt(message.content);
        console.log(message01);
        console.log(nuNummer);
        nuNummer = nuNummer + 1;
        if (message01 === nuNummer) {
            console.log("is gelijk");
        } else {
            message.react('❌');
            console.log("is niet gelijk");
        }
    }
})







client.login('OTM1MTQyMzY2NjAyNDg1Nzcw.Ye6VMg.glR8D0mpIzJuQfWlJnONJjygrmc');