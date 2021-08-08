require("express")().listen(1343);//zangana
//cod by zangana
const db = require("quick.db"); 
const discord = require("discord.js");//zangana
const client = new discord.Client({ disableEveryone: true });//zangana
client.login("NzU4NTg3OTM2ODE5MjQ5MTcy.X2xIEg.A2_ihk1khPQZZ3jNWKG8T630Tc0");// tokene bot liradane zor gumaxo dast karemaka error te bkayt qushke bqet zangana up
const fetch = require("node-fetch");
const fs = require('fs')//zangana
// taybat ba zangana 
setInterval(() => {
  var links = db.get("linkler");//zangana
  if(!links) return 
  var linkA = links.map(c => c.url)//zangana
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };// zangana is here
  })
  console.log("Başarıyla Pinglendi.")
}, 60000)

client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {//zangana
db.set("linkler", [])
}//zangana
})

client.on("ready", () => {
  client.user.setActivity(`u!help | Uptime bot!`)//zangana
  console.log(`Logined`)//zangana
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");//zangana
  if(spl[0] == "u!uptime") {
  var link = spl[1]//zangana
  fetch(link).then(() => {//zangana
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("**⛔ Bu bot zaten uptime ediliyor.**")//zangana
    
    let yardım = new Discord.RichEmbed()//zangana
        .setAuthor(client.user.username)
        .setColor(0x6A3DB8)
        .setDescription("**✅ Projekt has been hosted 7/24!**")//zangana
        .setFooter(`© ${client.user.username}`)
        .setTimestamp()
     message.channel.send(yardım).then(msg => msg.delete(60000)); //zangana
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    let yardım = new Discord.RichEmbed()//zangana
        .setAuthor(client.user.username)
        .setColor(0x6A3DB8)
        .setDescription("⛔ **Error! You can just add proper urls.**")//zangana
        .setFooter(`© ${client.user.username}`)
        .setTimestamp()
   return message.channel.send(yardım).then(msg => msg.delete(60000)); //zangana
  })//zangana
  }
})


client.on("message", message => {//zangana
  if(message.author.bot) return;
  var spl = message.content.split(" ");//zangana
  if(spl[0] == "u!botsay") {//zangana
  var link = spl[1]
 message.channel.send(`**${db.get("linkler").length} / 1000**`)//zangana
}})

//laquze xushke awa bm kaefy pem nayat zangana up

const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");//Zangana
  if(spl[0] == "u!help") {
let embed = new Discord.RichEmbed()//Zangana
.setColor('08FF05')
.addField(`**Uptime bot**!`)
.setDescription(`**After using the Uptime command, wait 1-5 minutes for it to be added to the system.**

 🌙 **u!help** : Opens the bot's help menu.

 🔋 **u!uptime <link>** : Makes the project link you add open 24/7.

 ⚡ **u!botsay** : Shows the number of projects that are uptime with our bot.

 🔮 **u!bot** : Shows the bot's statistical data.
cod by zangana
`)
.setAuthor(`uptime BOT`, client.user.avatarURL)
.setImage(``)
return message.channel.send(embed);//Zangana
    }
  
  })
  const log = message => {//Zangana
  console.log(`${message}`);
}
  
client.on("message", message => {//Zangana
  if(message.author.bot) return;
  var spl = message.content.split(" ");//Zangana
  if(spl[0] == "u!bot") {
  var link = spl[1]
 message.channel.send(`***Join Support Bot Fore More Info 
 https://discord.gg/tTFsEnRXvn
 ***`)//zangana
}})

