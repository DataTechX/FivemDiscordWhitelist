module.exports = {

    name: 'test',
    description: 'Test command',
    async execute(client: any, interaction: any) {

        // check permissions
        if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply({ content: 'You don\'t have permission to use this command!', ephemeral: true })

        await interaction.reply({ content: 'Test command!', ephemeral: true })
    }
}