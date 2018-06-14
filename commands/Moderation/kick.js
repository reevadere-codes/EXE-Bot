const main = require('../index').Main;
const data = main.getData();
const wikis = {
    home: data.wikis().home,
    commands: data.wikis().commands,
    replies: data.wikis().replies,
    faq: data.wikis().faq,
    isEnabled: data.wikisEnabled()
};

const discord = require('discord.js');
const { Message, Client } = discord;
class kick {
    /**
     * 
     * @param {Message} msg 
     * @param {Client} client 
     */
    constructor(msg, client) {

        if (msg.member.hasPermission(['KICK_MEMBERS']) || msg.member.hasPermission(['ADMINISTRATOR'])) {
            if (msg.mentions.members.first()) {
                if (msg.member.user.id == msg.mentions.members.first().id) {
                    msg.channel.send(new discord.RichEmbed()
                        .setColor([255, 0, 0])
                        .setDescription('Why do you want to kick yourself...?')
                        .setTitle('Are you serious?'));
                } else {
                    if (msg.mentions.members.first().id == client.user.id) {
                        msg.channel.send(new discord.RichEmbed()
                            .setColor([255, 0, 0])
                            .setDescription('WHY ME!!!???')
                            .setTitle(';-;'));
                    } else {
                        if (msg.mentions.members.first().kickable) {
                            msg.mentions.members.first().kick().then((member) => {
                                msg.channel.send(new discord.RichEmbed()
                                    .setColor([255, 0, 0])
                                    .setTitle('Kicked')
                                    .setDescription('Succesfully kicked: ' + member.user.tag));
                            });
                        } else {
                            msg.channel.send(new discord.RichEmbed()
                                .setColor([255, 0, 0])
                                .setTitle('Kick Error')
                                .setDescription('I don\'t have permissions to do that'));
                        }
                    }
                }
            } else {
                msg.channel.send(new discord.RichEmbed()
                    .setColor([255, 0, 0])
                    .addField('Help', 'Check the [wiki](' + wikis.commands + '#moderation) for help!')
                    .setDescription('Pleace specify an user!'));

            }
        } else {
            msg.channel.send(new discord.RichEmbed()
                .setAuthor(msg.member.user.username, msg.member.user.displayAvatarURL)
                .setTitle('ERROR')
                .setDescription('You dont have permissions to run that command.')
                .setColor([255, 0, 0]));
        }
    }
}
module.exports = kick;
