import { Client, REST, Routes, Collection } from 'discord.js'
import config from './config/config'
import fs from 'fs'
const client = new Client({
    intents: 32767
}) as ClientWithCommands;

client.on('ready', () => {
    console.log(`[BOT] Logged in as ${client.user?.tag}! in server ${client.guilds.cache.get(config.bot.guild.id)?.name}`)
    client.user?.setPresence({
        activities: [{
            name: config.bot.status.text,
            type: config.bot.status.type
        }],
        status: config.bot.status.status as any
    })
})

interface ClientWithCommands extends Client {
    commands: Collection<string, any>;
}

client.commands = new Collection()

const handlers = fs.readdirSync('./src/handlers').filter(file => file.endsWith('.ts'))
for (const file of handlers) {
    console.log(`[HANDLER] Loading ${handlers}`)
    require(`./handlers/${file}`)(client)
}


client.login(config.bot.token)
