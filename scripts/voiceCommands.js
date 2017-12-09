class voiceCommands {
    constructor(prefix, msg, servers, discord, wikis, yt) {

        
        var messageArray = msg.content.split(' ');
        var command = messageArray[0];
        var args = messageArray.slice(1).join(' ');

        function play(connection, msg) {
            var server = servers[msg.guild.id]
            server.dispatcher = connection.playStream(yt(server.queue[0], { filter: "audioonly"}));
            server.queue.shift()
            server.dispatcher.on('end', ()=>{
                if(server.queue[0]) play(connection,msg)
                else connection.disconnect();
            })
        }

        if(command == prefix + 'join') {


        }else if (command == prefix + 'play'){
            if(!args[0] || args == ""){
                msg.channel.send(new discord.RichEmbed()
                .setColor([255,0,0])
                .setDescription('link undefined'))
                return;
            }

            if(!msg.member.voiceChannel){
                msg.channel.send(new discord.RichEmbed()
                .setColor([255,0,0])
                .setDescription('voice channel undefined'))
                return;
            }

            if(!servers[msg.guild.id]){
                servers[msg.guild.id] = {
                    queue: []
                }

            }

            var server = servers[msg.guild.id];

            server.queue.push(args)
            console.log(args[1]);

            if(!msg.guild.voiceConnection) msg.member.voiceChannel.join().then((connection) =>{
                play(connection, msg);
            })

        }else if(command == prefix + 'skip'){
            var server = servers[msg.guild.id]
            if(server.dispatcher) server.dispatcher.end()

        }else if(command == prefix + 'stop'){
            var server = servers[msg.guild.id]
            if(msg.guild.voiceConnection) msg.guild.voiceConnection.disconnect();
        }
    }
}




module.exports = voiceCommands;
