import { ActivityType } from 'discord.js'

const config = {
    bot: { // bot : Object
        token: '', // your bot token : String
        applicationid: '887754162731909171', // your bot application id : String
        status: { // bot status : Object
            text: 'with discord.js', // text for the status : String
            type: ActivityType.Playing, // ActivityType.Playing, ActivityType.Streaming, ActivityType.Listening, ActivityType.Watching : ActivityType
            status: 'online' // online, idle, invisible, dnd : String
        },
        guild: {
            id: '1099272311980445727', // your guild id : String
            name: 'Test Server' // your guild name : String
        },
        role: {
            adminroles: ["1154086724075520061"], // admin roles : Array
            memberroles: [] // member roles : Array
        },
        channel: {
            welcome: '887754162731909174', // welcome channel id : String
            logs: '887754162731909174', // logs channel id : String
            logsconfirm: '' // logs confirm : String
        },
        sendlogs: {
            enable: true, // send logs to member : Boolean
        }
    },
    main: {
        embeds: {

        }
    }

}

export default config