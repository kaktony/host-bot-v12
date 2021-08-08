require("express")().listen(1343);//
//cod by tony
const db = require("quick.db"); 
const discord = require("discord.js");//zangana
const client = new discord.Client({ disableEveryone: true });//
client.login("");// tokene bot liradane zor gumaxo dast karemaka error te bkayt qushke bqet zangana up
const fetch = require("node-fetch");
const fs = require('fs')//
// taybat ba tony
setInterval(() => {
  var links = db.get("linkler");//
  if(!links) return 
  var linkA = links.map(c => c.url)//
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };//
  })
  console.log("Başarıyla Pinglendi.")
}, 60000)

client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {//
db.set("linkler", [])
}//zangana
})

client.on("ready", () => {
  client.user.setActivity(`u!help | Uptime bot!`)//
  console.log(`Logined`)//zangana
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");//
  if(spl[0] == "u!uptime") {
  var link = spl[1]//
  fetch(link).then(() => {//
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("**⛔ Bu bot zaten uptime ediliyor.**")//
    
    let yardım = new Discord.RichEmbed()//
        .setAuthor(client.user.username)
        .setColor(0x6A3DB8)
        .setDescription("**✅ Projekt has been hosted 7/24!**")//
        .setFooter(`© ${client.user.username}`)
        .setTimestamp()
     message.channel.send(yardım).then(msg => msg.delete(60000)); //
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    let yardım = new Discord.RichEmbed()//
        .setAuthor(client.user.username)
        .setColor(0x6A3DB8)
        .setDescription("⛔ **Error! You can just add proper urls.**")//
        .setFooter(`© ${client.user.username}`)
        .setTimestamp()
   return message.channel.send(yardım).then(msg => msg.delete(60000)); //
  })//
  }
})


client.on("message", message => {//
  if(message.author.bot) return;
  var spl = message.content.split(" ");//
  if(spl[0] == "u!botsay") {//
  var link = spl[1]
 message.channel.send(`**${db.get("linkler").length} / 1000**`)//
}})


const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");//
  if(spl[0] == "u!help") {
let embed = new Discord.RichEmbed()//
.setColor('08FF05')
.addField(`**Uptime bot**!`)
.setDescription(`**After using the Uptime command, wait 1-5 minutes for it to be added to the system.**

 🌙 **u!help** : Opens the bot's help menu.

 🔋 **u!uptime <link>** : Makes the project link you add open 24/7.

 ⚡ **u!botsay** : Shows the number of projects that are uptime with our bot.

 🔮 **u!bot** : Shows the bot's statistical data.
cod by tony
`)
.setAuthor(`uptime BOT`, client.user.avatarURL)
.setImage(``)
return message.channel.send(embed);//
    }
  
  })
  const log = message => {//Zangana
  console.log(`${message}`);
}
  
client.on("message", message => {//
  if(message.author.bot) return;
  var spl = message.content.split(" ");//
  if(spl[0] == "u!bot") {
  var link = spl[1]
 message.channel.send(`***Join Support Bot Fore More Info 
 https://discord.gg/tTFsEnRXvn
 ***`)//
}})

