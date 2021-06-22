const Discord = require('discord.js');
const rakunayar = require('../Settings/config.json')

module.exports = {
    name: 'başvuru',
    aliases: ['basvuru'],

    run: async(client, message, args) => {
		const embed = new Discord.MessageEmbed().setColor(rakunayar.Color).setFooter(rakunayar.Footer)
if(![rakunayar.TagRoleID].some(role => message.member.roles.cache.get(role))) return message.react(rakunayar.CarpiID) 
if([rakunayar.Staff].some(role2 => message.member.roles.cache.get(role2))) return message.react(rakunayar.CarpiID) 

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if(message.channel.id === rakunayar.CCID){
	var channel = message.guild.channels.cache.find((channel) => channel.name === `${message.member.displayName}-başvuru`);
	
	var LogChannel = message.guild.channels.cache.find((channel) => channel.id === rakunayar.LogChannelID);
	if(channel){
		return message.channel.send(`Zaten başvuru kanalınız açık! <#${channel.id}>`).then(msg => msg.delete({timeout: 6000}));
		} else {
        let category = message.guild.channels.cache.get(rakunayar.KategoryID);
        message.guild.channels.create(`${message.member.displayName}-başvuru`, {
            parent: category,
            permissionOverwrites: [
                {id: rakunayar.EveryoneID, deny: ['VIEW_CHANNEL']},
                {id: message.author.id, allow: [('VIEW_CHANNEL'), ('SEND_MESSAGES')]}]
            }).then(channel => {


				const filter = m => m.author === message.author;
				var cevaplar = [];
				message.react(rakunayar.TikID)


				channel.send("İsim Yaş");
				channel.awaitMessages(filter, { max: 1 })
				  .then(function (collected) {
					  collected.each(msj => cevaplar.push(msj.content));

				channel.send(`Sorun 2`);
			    channel.awaitMessages(filter, { max: 1 })
					.then(function (collected) {
					collected.each(msj => cevaplar.push(msj.content));

				channel.send(`Sorun 3`);
				channel.awaitMessages(filter, { max: 1 })
					.then(function (collected) {
					collected.each(msj => cevaplar.push(msj.content));

				channel.send(`Sorun 4`);
				channel.awaitMessages(filter, { max: 1 })
					.then(function (collected) {
					collected.each(msj => cevaplar.push(msj.content));

                channel.send(`Sorun 5`);
				channel.awaitMessages(filter, { max: 1 })
						.then(function (collected) {
						collected.each(msj => cevaplar.push(msj.content));

                channel.send(`Sorun 6`);
						channel.awaitMessages(filter, { max: 1 })
						.then(function (collected) {
						collected.each(msj => cevaplar.push(msj.content));

								  
				channel.send("Başvurunuz başarıyla alındı, yetkili arkadaşlar sizinle ilgilenecekler, başvuru için teşekkür ederiz. Kanal birazdan silinecek...")

				LogChannel.send(embed.setDescription(`
${message.author.tag} (\`${message.author.id}\`) **Kullanıcısının Başvuru Formu**  

Soru 1 = İsim Yaş
\`${cevaplar[0]}\`

Soru 2 = Sorun 2
\`${cevaplar[1]}\`

Soru 3 = Sorun 3
\`${cevaplar[2]}\`

Soru 4 = Sorun 4
\`${cevaplar[3]}\`

Soru 5 = Sorun 5
\`${cevaplar[4]}\`

Soru 6 = Sorun 6
\`${cevaplar[5]}\``));
									setTimeout(function() {
										channel.delete()
									}, 3000);
							  })
							  })
							  })
							  })
							  })
							  })
			  }).catch(console.error);
		}
	}
}
}