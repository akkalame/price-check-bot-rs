/// bot calculador de precios PurgeGold 1.0.1

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token, actividad, tipoActividad } = require('./config.json');
const { purgeGold, vikingSkill} = require('./users.json');


quests = {};
skills = ' !melee !range !prayer !magic !runecrafting !construction !agility !herblore !thieving !crafting !fletching !slayer !hunter !mining !smithing !fishing !cooking !firemaking !woodcutting !farming !att !str !def !wc !rc !herb !smith !fm';

client.on('ready', () => {
    console.log(`Bot is ready as: ${client.user.tag}`);
    client.user.setActivity(actividad, {
        type: tipoActividad
    });
})

client.on('message', message => {
    if (message.author.id != client.user.id) {
        if (message.guild.id === purgeGold || message.guild.id === vikingSkill) {
            quests = require(`./quest${message.guild.id}.json`);
            sp = require(`./skills${message.guild.id}`);

            var msg = message.content.toLowerCase().trim().split(' ')[0];
            if (msg === `!server`) {
                enviarMsg(message.channel, `el nombre de este server es: ${message.guild.name}\n id: ${message.guild.id}`);

            }
            if (msg === `${prefix}q`) {
                q = questCalc(message.content.toLowerCase().trim());

                enviarMsg(message.channel, q);

            } else if (skills.search(msg)) {
                q = ' ';
                switch (msg) {
                    case '!melee':
                        q = sp.meleeCalc(message.content.trim().split(' ')[1], repChar(msg, prefix));
                        break;
                    case '!att':
                        q = sp.meleeCalc(message.content.trim().split(' ')[1], repChar(msg, prefix));
                        break;
                    case '!str':
                        q = sp.meleeCalc(message.content.trim().split(' ')[1], repChar(msg, prefix));
                        break;
                    case '!def':
                        q = sp.meleeCalc(message.content.trim().split(' ')[1], repChar(msg, prefix));
                        break;
                    case '!range':
                        q = sp.rangeCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!prayer':
                        q = sp.prayerCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!magic':
                        q = sp.magicCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!runecrafting':
                        q = sp.runecraftingCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!construction':
                        q = sp.constructionCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!agility':
                        q = sp.agilityCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!herblore':
                        q = sp.herbCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!thieving':
                        q = sp.thievingCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!crafting':
                        q = sp.craftingCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!fletching':
                        q = sp.fletchingCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!slayer':
                        q = sp.slayerCalc(message.content.trim().split(' ')[1]), msg;
                        break;
                    case '!hunter':
                        q = sp.hunterCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!mining':
                        q = sp.miningCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!smithing':
                        q = sp.smithCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!fishing':
                        q = sp.fishCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!cooking':
                        q = sp.cookCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!firemaking':
                        q = sp.fmCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!woodcutting':
                        q = sp.wcCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!farming':
                        q = sp.farmCalc(message.content.trim().split(' ')[1], msg);
                        break;

                    default:
                        break;
                }

                enviarMsg(message.channel, q);
            }
        }
    }
})

client.login(token);

/// aqui se calculan los precios de las skill y las quest, recibiendo determinados parametros




function questCalc(q) {
    var precio = 0;
    var lista, r;
    var notExist = '';

    if (q.trim().split(' ')[1].trim() == 'all') {

        r = questCape(quests);
    } else {
        this.q = q.substr(3, undefined);

        var posicion = this.q.indexOf("'");

        while (posicion != -1) {
            this.q = this.q.replace("'", '')
            posicion = this.q.indexOf("'");
        }
        posicion = this.q.indexOf(".");

        while (posicion != -1) {
            this.q = this.q.replace(".", '')
            posicion = this.q.indexOf(".");
        }

        lista = this.q.split(',');

        lista.forEach(function (element) {
            if (quests[element.trim()] != undefined) {
                precio += quests[element.trim()];
            } else {
                notExist += ` **${element.trim()}** |`;
            }
        });

        r = `**${precio}m** for all of it.`;
        if (notExist != '') {
            r += `\n\nThese quests were not found:\n${notExist}`
        }

    }
    return r;
    //return this.q+String(quests[this.q]);

}

const questCape = (obj, tabSize = 0) => {
    var total = 0;
    for (let k in obj) {
        const v = obj[k];
        if (Object.prototype.toString.call(v) === '[object Object]') {
            console.log(`${k}:`);
            it(v, tabSize + 1);
        } else {
            total += v;
        }
    }
    return `**${total}m** for a Quest Cape\n\n(this price is only for quests, the value of skills is not included)`;
};

function enviarMsg(canal, msg) {
    //recibe el canal y el mensaje a enviar

    canal.send(msg);
}

function repChar(txt, char, rep = '') {
    this.txt = txt;
    var posicion = txt.indexOf(`${char}`);
    while (posicion != -1) {
        this.txt = this.txt.replace(`${char}`, `${rep}`)
        posicion = this.txt.indexOf(`${char}`);
    }
    return this.txt;
}

