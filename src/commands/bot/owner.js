const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Sam The Dev`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `BLVCKSATAN#8736`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `SamDevORG`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `Not existing yet`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 