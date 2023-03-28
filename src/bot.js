const Discord = require('discord.js');
const { token } = require('../config.json');
const client = new Discord.Client({
    intents: [
        Discord.IntentsBitField.Flags.GuildMessages,
    ]
});
const server = client.guilds.cache.find(guild => guild.name === 'Bot Test Server');


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// client.on('message', msg => {

// })

server.systemChannel.send('Test Message');

client.login(token);