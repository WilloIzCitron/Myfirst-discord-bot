const Discord = require("discord.js");
const { createCanvas, loadImage } = require('canvas');
const GIFEncoder = require('gifencoder');
const request = require('node-superfetch');
const path = require('path');
const { streamToArray } = require('../../util/Util');
const { drawImageWithTint } = require('../../util/Canvas');
const coord1 = [-25, -33, -42, -14];
const coord2 = [-25, -13, -34, -10];

module.exports = {
  name: "triggered",
      deskripsi: "Triggered Avatar",
  run: async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    		const avatarURL = user.displayAvatarURL({ format: 'png', size: 512 });
		try {
      const base = await loadImage('https://cdn.discordapp.com/attachments/688763072864976906/702119398638354482/triggered.png');
			const { body } = await request.get(avatarURL);
			const avatar = await loadImage(body);
			const encoder = new GIFEncoder(base.width, base.width);
			const canvas = createCanvas(base.width, base.width);
			const ctx = canvas.getContext('2d');
			ctx.fillStyle = 'white';
			ctx.fillRect(0, 0, base.width, base.width);
			const stream = encoder.createReadStream();
			encoder.start();
			encoder.setRepeat(0);
			encoder.setDelay(50);
			encoder.setQuality(200);
			for (let i = 0; i < 4; i++) {
				drawImageWithTint(ctx, avatar, 'red', coord1[i], coord2[i], 300, 300);
				ctx.drawImage(base, 0, 218, 256, 38);
				encoder.addFrame(ctx);
			}
			encoder.finish();
			const buffer = await streamToArray(stream);
			return message.channel.send({ files: [{ attachment: Buffer.concat(buffer), name: 'triggered.gif' }] });
		} catch (err) {
			return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
};