// Initialise a client and Discord object.
const Discord = require("discord.js");
const client = new Discord.Client();
const phin = require("phin");
const ytdl = require('ytdl-core');

const config = require("./config.json");

// Create Invite when join server
client.on("guildCreate", async guild => {
  const invite = await guild.channels.first().createInvite({
    maxAge: 0
  });
  console.log(`Joined a new guild named: ${guild.name} with invite: https://discord.gg/${invite.code}`)
});

//When Client Is Ready
client.once('ready', () => {
    console.info(`[ INFO ] Bot has logged (^o^)`);
	
function setActivity() {
	console.info(`[ CMDS ] Activity Functions have started`);
    //Variable Array for what the setGame can be set to
    var Gameinfo = [`Blasting off again!`, `Running on ${client.guilds.size} Servers`, `Trying to catch pikachu`, `Try ${config.prefix}help`, `${config.prefix}help`,
        `At the speed of sound!`, `MEOWTH!`, `Ding!` // Change these to what you want, add as many or as few as you want to
    ]

    var info = Gameinfo[Math.floor(Math.random() * Gameinfo.length)]; //Random Math to set the setGame to something in the GameInfo array

    client.user.setActivity(info) // "playing Game" '...' Sets the setGame to what the info Random math picked from the GameInfo Array
    if (config.debugMode === "1") {
        console.log(`[ LOG ] set Activity set to ( ${info} )`) //Logs to console what the setGame was set as.
    }

}

setInterval(setActivity, 1000 * 60 * 2) //sets and picks a new game every 2 minutes
	
});

client.login(config.token);