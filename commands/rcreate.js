const chalk = require("chalk");

module.exports.run = async(client, message, args) => {
    
    message.delete();
    let channelname = args.join(' ');
    if(!channelname){
        return console.log(chalk.red(`[ERROR] ` + chalk.cyan("| PLEASE SPECIFY ROLE NAME")))
    }
    message.author.send("Created 100 roles!");

    var i;
    for (i = 0; i < 100; i++) {
        setTimeout(() => {
            message.guild.roles.create(channelname, {color: "RANDOM"})
            .catch(err => {return;})
        }, 1*1)
    }
}
module.exports.help = {
    name: "rcreate",
    aliases: []
}