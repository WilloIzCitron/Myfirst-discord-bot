
const Discord = require('discord.js');

module.exports = {
    name: '8ball',
    alias: [''],
    deskripsi: 'Tanyakan sesuatu kepada bot',
    usage: '8ball <reason>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        if (!args[1]) return message.reply('Apakah ini sebuah pertanyaan?');
        const replies = [
            'Maybe.',
            'Certainly not.',
            'I hope so.',
            'Not in your wildest dreams.',
            'There is a good chance.',
            'Quite likely.',
            'I think so.',
            'I hope not.',
            'I hope so.',
            'Never!',
            'Pfft.',
            'Sorry, bucko.',
            'Hell, yes.',
            'Hell to the no.',
            'The future is bleak.',
            'The future is uncertain.',
            'I would rather not say.',
            'Who cares?',
            'Possibly.',
            'Never, ever, ever.',
            'There is a small chance.',
            'Yes!',
            'lol no.',
            'There is a high probability.',
            'What difference does it makes?',
            'Not my problem.',
            'Ask someone else.'
        ];
        const result = Math.floor((Math.random() * replies.length));
        const question = args.slice('0').join(' ');

        const embed = new Discord.MessageEmbed()
            .setTitle('MAGIC 8 BALL!!!')
            .setColor('#AA9900')
            .addField('Q:', question)
            .addField('A:', replies[result]);
        return message.channel.send({ embed });
    }
};
