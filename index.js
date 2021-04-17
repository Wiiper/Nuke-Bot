

//----------------------------------MODULES----------------------------------

const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client();
const { red, blue, cyan, green, orange, yellow, bold, underline, magenta } = require("chalk");
const config = require("./config.json");
const fs = require("fs");

//----------------------------------HANDLER----------------------------------

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = config.prefix;
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    let command;
 if (!message.content.startsWith(prefix)) return;
        
            if (client.commands.has(cmd)) {
                command = client.commands.get(cmd);
            } else {
                command = client.commands.get(client.aliases.get(cmd));
            }
        
            if (command) command.run(client, message, args);
});

fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return;

  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
    });
  });
});


client.on('ready', () => {
    console.clear(),
    console.log(yellow("──────────────────────────────") + underline(bold(red("NUKE BOT OFFICIAL")))+ yellow("──────────────────────────────\n"))
    console.log(red(`[CLIENT]`) + cyan(` | USERNAME: ${client.user.username}`)),
    console.log(red(`[CLIENT]`) + cyan(` | SUCCEFULLY LOGGED IN!`)),
    console.log(yellow("─────────────────────────────────────────────────────────────────────────────")),
    console.log(red(`[CONFIG] `) + cyan(`| PREFIX: ${config.prefix}`)),
    console.log(red(`[CONFIG] `) + cyan(`| DEVELOPERS: ${config.developer}`)),
    console.log(red(`[CONFIG] `) + cyan(`| GITHUB: ${config.github}`)),
    console.log(red(`[CONFIG] `) + cyan(`| NUMBER OF COMMANDS: ${client.commands.size}`)),
    console.log(yellow("─────────────────────────────────") + underline(bold(red("BOT COMMANDS")))+ yellow("─────────────────────────────────"))
    console.log(red(`[CMDS..] `) + cyan(`| ${config.prefix}help => ` + magenta("Bot display commands to you"))),
    console.log(red(`[CMDS..] `) + cyan(`| ${config.prefix}ccreate => `+ magenta("Bot creating 100 channels"))),
    console.log(red(`[CMDS..] `) + cyan(`| ${config.prefix}cdelete => `+ magenta("Bot deleting all channels"))),
    console.log(red(`[CMDS..] `) + cyan(`| ${config.prefix}rcreate => `+ magenta("Bot creating 100 roles"))),
    console.log(red(`[CMDS..] `) + cyan(`| ${config.prefix}rdelete => `+ magenta("Bot deleteing all roles"))),
    console.log(red(`[CMDS..] `) + cyan(`| ${config.prefix}massnick => `+ magenta("Bot changing nickname for all users"))),
    console.log(red(`[CMDS..] `) + cyan(`| ${config.prefix}guildname => `+ magenta("Sets guild name"))),
    console.log(red(`[CMDS..] `) + cyan(`| ${config.prefix}cspam => `+ magenta("Bot spaming to all server channels"))),
    console.log(yellow("─────────────────────────────────────────────────────────────────────────────"))
})



client.login(config.token)
