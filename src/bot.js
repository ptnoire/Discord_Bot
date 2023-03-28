const {Client, Events, GatewayIntentBits, Partials } = require('discord.js');
const { token } = require('../config.json');

const ints = { intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent, 
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildMessageReactions,
    ],
    partials: [
        Partials.Channel, 
        Partials.Message, 
        Partials.Reaction
    ],
}

const client = new Client(ints);

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', (msg) => {
    const messageData = {
        channel: msg.channel.name,
        member: msg.author.tag,
        author: msg.member.nickname,
        content: msg.content,
        timestamp: new Date(msg.createdTimestamp),
        id: msg.id,
    }
    console.log(messageData);
})

client.on('messageDelete', (msg) => {
    console.log(msg.id);
    // Delete Message in DataBase
})

client.on('guildScheduledEventCreate', (ev) => {
    const eventData = {
        name: ev.name,
        description: ev.description,
        location: ev.entityMetadata.location,
        timeStart: new Date(ev.scheduledStartTimestamp),
        timeEnd: new Date(ev.scheduledEndTimestamp),
        id: ev.id,
        eventCreatedAt: new Date(),
    }
    console.log(eventData);
    // POST to database
})

client.on('guildScheduledEventDelete', (evC) => {
    console.log(evC);
    // Find evC.id -> Delete From DataBase
})

// DEBUG LOG
// client.on('debug', (info) => console.log(`Discord Bot Debug: ${info}`));
client.on('error', (err) => console.error(`Discord Bot Error: ${err}`));

client.login(token);