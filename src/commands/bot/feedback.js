const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1070455599147516014",
    token: "1NGlkgrjO7Hfpu2q_lGr-w8NqdaZTtmXQfkn65ey7F_Cq1mKx4U2ldrdmnQRuTEzmJSw",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Feedback successfully sent to the developers`,
        type: 'editreply'
    }, interaction);
}

 