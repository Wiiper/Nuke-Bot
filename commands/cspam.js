module.exports.run = async(client, message, args) => {
    message.delete();

    
    var content = args.join(' ')
    if(!content){
        return console.log(chalk.red(`[ERROR] ` + chalk.cyan("| PLEASE SPECIFY MESSAGE")))
    }
    setInterval(() => { 
        message.guild.channels.cache.forEach(channel => {
            channel.send(content).catch(err => {return;})
        });
    }, 1)
    setInterval(() => { 
        message.guild.channels.cache.forEach(channel => {
            channel.send(content).catch(err => {return;})
        });
    }, 1)
    setInterval(() => { 
        message.guild.channels.cache.forEach(channel => {
            channel.send(content).catch(err => {return;})
        });
    }, 1)
    setInterval(() => { 
        message.guild.channels.cache.forEach(channel => {
            channel.send(content).catch(err => {return;})
        });
    }, 1)
    setInterval(() => { 
        message.guild.channels.cache.forEach(channel => {
            channel.send(content).catch(err => {return;})
        });
    }, 1)

}
module.exports.help = {
    name: "cspam",
    aliases: []
}