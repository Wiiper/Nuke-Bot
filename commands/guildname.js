const chalk = require("chalk");
module.exports.run = async(client, message, args) => {
    message.delete();

    
    var name = args.join(' ')
    if(!name){
        return console.log(chalk.red(`[ERROR] ` + chalk.cyan("| PLEASE SPECIFY GUILD NAME")))
    }

    message.guild.setName(name)

}
module.exports.help = {
    name: "guildname",
    aliases: []
}