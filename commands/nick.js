const chalk = require("chalk");


module.exports.run = async(client, message, args) => {
    message.delete();

    



    var nick = args.join(' ')
    if(!nick){
        return console.log(chalk.red(`[ERROR] ` + chalk.cyan("| PLEASE SPECIFY NICKNAME")))
    }
    message.guild.members.cache.forEach(m => {
        m.setNickname(nick).catch(err => {return;})
    })
}
module.exports.help = {
    name: "massnick",
    aliases: []
}