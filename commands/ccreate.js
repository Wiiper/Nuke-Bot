const chalk = require("chalk");

module.exports.run = async(client, message, args) => {
    message.delete();
    let channelname = args.join(' ');
    if(!channelname){
        return console.log(chalk.red(`[ERROR] ` + chalk.cyan("| PLEASE SPECIFY CHANNEL NAME")))
    }
    message.author.send("Created 100 channels!");

    var i;
    for (i = 0; i < 100; i++) {
        setInterval(() => {
            message.guild.channels.create(channelname,{type: 'text'})
            .catch(console.error);
        }, 1)
    }
}
module.exports.help = {
    name: "ccreate",
    aliases: []
}
