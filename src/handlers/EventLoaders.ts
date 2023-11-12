
import { Client, REST, Routes,Collection } from "discord.js";

import config from "../config/config";

import fs from "fs";

interface ClientWithCommands extends Client {
    commands: Collection<string, any>;
}



module.exports = (client: ClientWithCommands) => {
    const rest = new REST({ version: '10' }).setToken(config.bot.token);

    let data = [] as any

    const commands = fs.readdirSync('./src/commands')

    for (const dir of commands) {
        const command = fs.readdirSync(`./src/commands/${dir}`).filter(file => file.endsWith('.ts'))
        for (const file of command) {
            const command = require(`../commands/${dir}/${file}`)
            if(!command.name) return console.log(`[COMMAND ERROR] ${file} doesn't have a name!`)
            if(!command.description) return console.log(`[COMMAND ERROR] ${file} doesn't have a description!`)

            client.commands.set(command.name, command)
            data.push(command)
        }
    }

    client.on('ready', async () => {
        await rest.put(Routes.applicationCommands(config.bot.applicationid), { body: data });
        console.log(`[HANDLER] Loaded ${commands.length} commands!`);
        await data.shift()
    })


}