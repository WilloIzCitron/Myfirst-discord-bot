const Discord = require("discord.js");
const superagent = require('superagent');
const axios = require('axios');
const { getMember } = require("../../function.js");
module.exports = {
  name: "hug",
    category: "fun",
    deskripsi: "Peluk seseorang :)",
    run: async (client, message, args) => {
      let person = getMember(message, args[0]);
          if (!args[0]) return message.reply("Tag Sesorang yang mau dipeluk");

        if (!person || message.author.id === person.id) {
            person = message.guild.members.cache
                .filter(m => m.id !== message.author.id)
                .random();
        }

        let getJoke = async () => {
              let response = await axios.get(
        "https://nekos.life/api/v2/img/hug"
        );
      let joke = response.data;
      return joke;
    };
  let jokeValue = await getJoke();
        let Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`OwO, ${message.author.username} hug ${message.mentions.users.first().username}`)
            .setImage(`${jokeValue.url}`)
            return message.channel.send(Embed)
    
    
  }
}