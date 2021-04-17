module.exports.run = async(client, message, args) => {


    message.delete();

    


    message.guild.channels.cache.forEach(c => {
        c.delete().catch(err => {return;})
    })
    
    message.author.send(
        "Succefully deleted all channels"
    )
}

module.exports.help = {
    name: "cdelete",
    aliases: []
}