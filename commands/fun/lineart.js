// DEPRECATED?

const Discord = require('discord.js');

module.exports = {
    name: 'lineart',
    run: (client, message, args) => {
        const avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', size: 512 }) : message.author.avatarURL({ format: 'png', size: 512 });
        const embed = new Discord.MessageEmbed()
            .setColor('#ff9900')
            .setImage(`https://api.alexflipnote.dev//colourify?image=${ avatar}`);
        message.channel.send({ embed });
    }
};
