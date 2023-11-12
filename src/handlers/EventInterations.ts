
import { Client, REST, Routes,Collection,GuildMemberRoleManager } from "discord.js";

import config from "../config/config";

import fs from "fs";

interface ClientWithCommands extends Client {
    commands: Collection<string, any>;
}


module.exports = (client: ClientWithCommands) => {

    client.on('interactionCreate', async interaction => {

        if(interaction.isCommand()) {
            const cmd = client.commands.get(interaction.commandName)
            if(!cmd) return
            try {
                await cmd.execute(client,interaction)
            } catch (error) {
                console.log(error)
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
            }

        }
        
    })


}