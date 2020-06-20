const Discord = require("discord.js");
const { getMember } = require("../../function.js");

module.exports = {
    name: "lovecount",
    alias: ["lc"],
    category: "fun",
    deskripsi: "Kalkulator cinta dengan cara Tag Pasanganmu",
    usage: "[mention | id | username]",
    run: async (client, message, args) => {
        let person = getMember(message, args[0]);
          if (!args[0]) return message.reply("Tag pasangan kamu 😘");

        if (!person || message.author.id === person.id) {
            person = message.guild.members.cache
                .filter(m => m.id !== message.author.id)
                .random();
        }

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        const embed = new Discord.MessageEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ = **${person.displayName}** loves **${message.member.displayName}** this much:`,
            `💟 = ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send(embed);
    }
}