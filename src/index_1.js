/// bot calculador de precios PurgeGold 1.0.1

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token, actividad, tipoActividad } = require('./config.json');
const { purgeGold} = require('./users.json');
const xpLvl = require('./xpLvl.json');
const questsPurge = require(`./quest${purgeGold}.json`);

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
                        q = meleeCalc(message.content.trim().split(' ')[1], repChar(msg, prefix));
                        break;
                    case '!att':
                        q = meleeCalc(message.content.trim().split(' ')[1], repChar(msg, prefix));
                        break;
                    case '!str':
                        q = meleeCalc(message.content.trim().split(' ')[1], repChar(msg, prefix));
                        break;
                    case '!def':
                        q = meleeCalc(message.content.trim().split(' ')[1], repChar(msg, prefix));
                        break;
                    case '!range':
                        q = rangeCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!prayer':
                        q = prayerCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!magic':
                        q = magicCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!runecrafting':
                        q = runecraftingCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!construction':
                        q = constructionCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!agility':
                        q = agilityCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!herblore':
                        q = herbCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!thieving':
                        q = thievingCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!crafting':
                        q = craftingCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!fletching':
                        q = fletchingCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!slayer':
                        q = slayerCalc(message.content.trim().split(' ')[1]), msg;
                        break;
                    case '!hunter':
                        q = hunterCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!mining':
                        q = miningCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!smithing':
                        q = smithCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!fishing':
                        q = fishCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!cooking':
                        q = cookCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!firemaking':
                        q = fmCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!woodcutting':
                        q = wcCalc(message.content.trim().split(' ')[1], msg);
                        break;
                    case '!farming':
                        q = farmCalc(message.content.trim().split(' ')[1], msg);
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

function meleeCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*valores referenciales del precio
    LVL 1->70 SAND CRABS - 15GP/XP

    LVL 70->99 SAND CRABS - 10GP/XP 
    LVL 70->99 NMZ - 9GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price ${capitalize(msg)} ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 70) {

            if (lvl[1] <= 70) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 15) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal minimum  **${totalPrice.toFixed(2)} M**`
                r += `\n\nSand Crabs (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 70) {

                xpLeft = Math.abs(xpLvl['70'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 15) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                con2Price = (xpLeft * 9) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal minimum  **${totalPrice.toFixed(2)} M**`
                r += `\n\nSand Crabs (${lvl[0]}-70)  **${conPrice.toFixed(2)} M** `;
                r += `\nNMZ (70-${lvl[1]})  **${con2Price.toFixed(2)} M** `;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                con2Price = (xpLeft * 10) / 1000000;

                r += `\nSand Crabs (70-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 70) {

                if (lvl[1] <= 99 & lvl[1] > 70) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 9) / 1000000;

                    totalPrice = con2Price;

                    r += `\nTotal minimum  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nNMZ (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 10) / 1000000;

                    r += `\n\nSand Crabs (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${prefix}${msg} 1-99 **`;
    }


}

function rangeCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*valores referenciales del precio
    LVL 1->70 SAND CRABS - 15GP/XP

    LVL 70->99 SAND CRABS - 10GP/XP 
    LVL 70->99 NMZ - 9GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Range ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 70) {

            if (lvl[1] <= 70) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 15) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal minimum  **${totalPrice.toFixed(2)} M**`
                r += `\n\nSand Crabs (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 70) {

                xpLeft = Math.abs(xpLvl['70'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 15) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                con2Price = (xpLeft * 9) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal minimum  **${totalPrice.toFixed(2)} M**`
                r += `\n\nSand Crabs (${lvl[0]}-70)  **${conPrice.toFixed(2)} M** `;
                r += `\nNMZ (70-${lvl[1]})  **${con2Price.toFixed(2)} M** `;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                con2Price = (xpLeft * 10) / 1000000;

                r += `\nSand Crabs (70-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 70) {

                if (lvl[1] <= 99 & lvl[1] > 70) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 9) / 1000000;

                    totalPrice = con2Price;

                    r += `\nTotal minimum  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nNMZ (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 10) / 1000000;

                    r += `\n\nSand Crabs (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function prayerCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->99 (Gilded altar) - 10GP/XP
LVL 1-99 With Arceus spell (best ensouled head you can use) 20GP/XP
*/
    try {
        var gilderPrice, arceusPrice, r;
        var lvl = q.split('-');
        var xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])

        gilderPrice = (xpLeft * 10) / 1000000;
        arceusPrice = (xpLeft * 20) / 1000000;

        r = `**Price Prayer ${lvl[0]}-${lvl[1]} **`;
        r += `\n\nGilder Altar (${lvl[0]}-${lvl[1]})  **${gilderPrice.toFixed(2)} M**`;
        r += ` \nArceus Spell (${lvl[0]}-${lvl[1]})  **${arceusPrice.toFixed(2)} M**`
        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function magicCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*SPLASHING - 16GP/XP
Hight Alchemy- 18GP/XP
*/
    try {
        var splashPrice, haPrice, r;
        var lvl = q.split('-');
        var xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])

        splashPrice = (xpLeft * 16) / 1000000;
        haPrice = (xpLeft * 18) / 1000000;

        r = `**Price Magic ${lvl[0]}-${lvl[1]} ** `;
        r += `\n\nSplashing (${lvl[0]}-${lvl[1]})  **${splashPrice.toFixed(2)} M**`;
        r += `\nHight Alchemy (${lvl[0]}-${lvl[1]}) **${haPrice.toFixed(2)} M**`
        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function wcCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->51  - 66GP/XP
    LVL 51->70 - 44GP/XP
    LVL 70->99 - 36GP/XP
*/
    try {
        var fPrice, lavaPrice, lava2Price, zmiPrice, zmi2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');
        r = `**Price Woodcutting  ${lvl[0]}-${lvl[1]} **`;

        //lava
        if (lvl[0] < 51) {

            if (lvl[1] <= 51) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 66) / 1000000;
                r += `\nBest way  **${fPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 70 & lvl[1] > 51) {

                xpLeft = Math.abs(xpLvl['51'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 66) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['51'])
                lavaPrice = (xpLeft * 44) / 1000000;

                totalPrice = fPrice + lavaPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBest way (${lvl[0]}-51) **${fPrice.toFixed(2)} M** `;
                r += `\nWillow (51-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 70) {

                xpLeft = Math.abs(xpLvl['51'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 66) / 1000000;

                xpLeft = Math.abs(xpLvl['70'] - xpLvl['51'])
                lavaPrice = (xpLeft * 44) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                lava2Price = (xpLeft * 36) / 1000000;

                totalPrice = fPrice + lavaPrice + lava2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBest way (${lvl[0]}-51) **${fPrice.toFixed(2)} M** `;
                r += `\nWillow (51-70)  **${lavaPrice.toFixed(2)} M** `;
                r += `\nWillow (70-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] < 70) {

                if (lvl[1] <= 70 & lvl[1] > 51) {


                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['51'])
                    lavaPrice = (xpLeft * 44) / 1000000;

                    totalPrice = lavaPrice;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nWillow (${lvl[0]}-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
                }
                if (lvl[1] <= 99 & lvl[1] > 70) {

                    xpLeft = Math.abs(xpLvl['70'] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 44) / 1000000;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                    lava2Price = (xpLeft * 36) / 1000000;

                    totalPrice = lavaPrice + lava2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nWillow (${lvl[0]}-70)  **${lavaPrice.toFixed(2)} M** `;
                    r += `\nWillow (70-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                }

            } else {
                if (lvl[0] <= 99) {

                    if (lvl[1] <= 99 & lvl[1] > 70) {

                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                        lava2Price = (xpLeft * 36) / 1000000;

                        totalPrice = lava2Price;

                        r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                        r += `\nWillow (${lvl[0]}-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                    }

                }
            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function thievingCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 01->55 - 77GP/XP
    LVL 55->80 - 48GP/XP
    LVL 80->99 - 38.5GP/XP
*/
    try {
        var fPrice, lavaPrice, lava2Price, zmiPrice, zmi2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');
        r = `**Price Thieving ${lvl[0]}-${lvl[1]} **`;

        //lava
        if (lvl[0] < 55) {

            if (lvl[1] <= 55) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 77) / 1000000;
                r += `\nAny way  **${fPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 80 & lvl[1] > 55) {

                xpLeft = Math.abs(xpLvl['55'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 77) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['55'])
                lavaPrice = (xpLeft * 48) / 1000000;

                totalPrice = fPrice + lavaPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nAny way (${lvl[0]}-55) **${fPrice.toFixed(2)} M** `;
                r += `\nPyramid (55-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 80) {

                xpLeft = Math.abs(xpLvl['55'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 77) / 1000000;

                xpLeft = Math.abs(xpLvl['80'] - xpLvl['55'])
                lavaPrice = (xpLeft * 48) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['80'])
                lava2Price = (xpLeft * 38.5) / 1000000;

                totalPrice = fPrice + lavaPrice + lava2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nAny way (${lvl[0]}-55) **${fPrice.toFixed(2)} M** `;
                r += `\nPyramid (55-80)  **${lavaPrice.toFixed(2)} M** `;
                r += `\nPyramid (80-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] < 80) {

                if (lvl[1] <= 80 & lvl[1] > 55) {


                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['55'])
                    lavaPrice = (xpLeft * 48) / 1000000;

                    totalPrice = lavaPrice;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nPyramid (${lvl[0]}-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
                }
                if (lvl[1] <= 99 & lvl[1] > 80) {

                    xpLeft = Math.abs(xpLvl['80'] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 48) / 1000000;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['80'])
                    lava2Price = (xpLeft * 38.5) / 1000000;

                    totalPrice = lavaPrice + lava2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nPyramid (${lvl[0]}-80)  **${lavaPrice.toFixed(2)} M** `;
                    r += `\nPyramid (80-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                }

            } else {
                if (lvl[0] <= 99) {

                    if (lvl[1] <= 99 & lvl[1] > 80) {

                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                        lava2Price = (xpLeft * 38.5) / 1000000;

                        totalPrice = lava2Price;

                        r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                        r += `\nPyramid (${lvl[0]}-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                    }

                }
            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function fishCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->50  - 55GP/XP
    LVL 50->70 - 38.5GP/XP
    LVL 70->99 - 22GP/XP
*/
    try {
        var fPrice, lavaPrice, lava2Price, zmiPrice, zmi2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');
        r = `**Price Fishing ${lvl[0]}-${lvl[1]} **`;

        //lava
        if (lvl[0] < 50) {

            if (lvl[1] <= 50) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 55) / 1000000;
                r += `\nBest way  **${fPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 70 & lvl[1] > 50) {

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 55) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                lavaPrice = (xpLeft * 38.5) / 1000000;

                totalPrice = fPrice + lavaPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBest way (${lvl[0]}-50) **${fPrice.toFixed(2)} M** `;
                r += `\nBest way (50-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 70) {

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 55) / 1000000;

                xpLeft = Math.abs(xpLvl['70'] - xpLvl['50'])
                lavaPrice = (xpLeft * 38.5) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                lava2Price = (xpLeft * 22) / 1000000;

                totalPrice = fPrice + lavaPrice + lava2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBest way (${lvl[0]}-50) **${fPrice.toFixed(2)} M** `;
                r += `\nBest way (50-70)  **${lavaPrice.toFixed(2)} M** `;
                r += `\nBest way (70-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] < 70) {

                if (lvl[1] <= 70 & lvl[1] > 50) {


                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                    lavaPrice = (xpLeft * 38.5) / 1000000;

                    totalPrice = lavaPrice;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nBest way (${lvl[0]}-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
                }
                if (lvl[1] <= 99 & lvl[1] > 70) {

                    xpLeft = Math.abs(xpLvl['70'] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 38.5) / 1000000;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                    lava2Price = (xpLeft * 22) / 1000000;

                    totalPrice = lavaPrice + lava2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nBest way (${lvl[0]}-70)  **${lavaPrice.toFixed(2)} M** `;
                    r += `\nBest way (70-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                }

            } else {
                if (lvl[0] <= 99) {

                    if (lvl[1] <= 99 & lvl[1] > 70) {

                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                        lava2Price = (xpLeft * 22) / 1000000;

                        totalPrice = lava2Price;

                        r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                        r += `\nBest way (${lvl[0]}-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                    }

                }
            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function hunterCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->30  - 77GP/XP
    LVL 30->60 - 66GP/XP
    LVL 60->99 - 44GP/XP
*/
    try {
        var fPrice, lavaPrice, lava2Price, zmiPrice, zmi2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');
        r = `**Price Hunter ${lvl[0]}-${lvl[1]} **`;

        //lava
        if (lvl[0] < 30) {

            if (lvl[1] <= 30) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 77) / 1000000;
                r += `\nBirds  **${fPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 60 & lvl[1] > 30) {

                xpLeft = Math.abs(xpLvl['30'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 77) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['30'])
                lavaPrice = (xpLeft * 66) / 1000000;

                totalPrice = fPrice + lavaPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBirds (${lvl[0]}-30) **${fPrice.toFixed(2)} M** `;
                r += `\nSalamanders (30-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 60) {

                xpLeft = Math.abs(xpLvl['30'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 77) / 1000000;

                xpLeft = Math.abs(xpLvl['60'] - xpLvl['30'])
                lavaPrice = (xpLeft * 66) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                lava2Price = (xpLeft * 44) / 1000000;

                totalPrice = fPrice + lavaPrice + lava2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBirds (${lvl[0]}-30) **${fPrice.toFixed(2)} M** `;
                r += `\nSalamanders (30-60)  **${lavaPrice.toFixed(2)} M** `;
                r += `\nSalamanders (60-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] < 60) {

                if (lvl[1] <= 60 & lvl[1] > 30) {


                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['30'])
                    lavaPrice = (xpLeft * 66) / 1000000;

                    totalPrice = lavaPrice;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nSalamanders (${lvl[0]}-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
                }
                if (lvl[1] <= 99 & lvl[1] > 60) {

                    xpLeft = Math.abs(xpLvl['60'] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 66) / 1000000;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                    lava2Price = (xpLeft * 44) / 1000000;

                    totalPrice = lavaPrice + lava2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nSalamanders (${lvl[0]}-60)  **${lavaPrice.toFixed(2)} M** `;
                    r += `\nSalamanders (60-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                }

            } else {
                if (lvl[0] <= 99) {

                    if (lvl[1] <= 99 & lvl[1] > 60) {

                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                        lava2Price = (xpLeft * 44) / 1000000;

                        totalPrice = lava2Price;

                        r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                        r += `\nSalamanders (${lvl[0]}-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                    }

                }
            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function runecraftingCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->23 - 140GP/XP
    LVL 23->60 (LAVAS *LUNAR DIPLO REQ*) - 132GP/XP
    LVL 60->99 (LAVAS *LUNAR DIPLO REQ*) - 80GP/XP
    LVL 1->50 (ZMI)  - 140GP/XP
    LVL 50->99 (ZMI) - 100GP/XP
*/
    try {
        var fPrice, lavaPrice, lava2Price, zmiPrice, zmi2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');
        r = `**Price Runecrafting ${lvl[0]}-${lvl[1]} **`;

        //lava
        if (lvl[0] < 23) {

            if (lvl[1] <= 23) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 140) / 1000000;
                r += `\nRegular way  **${fPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 60 & lvl[1] > 23) {

                xpLeft = Math.abs(xpLvl['23'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 140) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['23'])
                lavaPrice = (xpLeft * 132) / 1000000;

                totalPrice = fPrice + lavaPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nRegular way (${lvl[0]}-23) **${fPrice.toFixed(2)} M** `;
                r += `\nLava Runes/ZMI (23-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 60) {

                xpLeft = Math.abs(xpLvl['23'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 140) / 1000000;

                xpLeft = Math.abs(xpLvl['60'] - xpLvl['23'])
                lavaPrice = (xpLeft * 132) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                lava2Price = (xpLeft * 80) / 1000000;

                totalPrice = fPrice + lavaPrice + lava2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nRegular way (${lvl[0]}-23) **${fPrice.toFixed(2)} M** `;
                r += `\nLava Runes/ZMI (23-60)  **${lavaPrice.toFixed(2)} M** `;
                r += `\nLava Runes/ZMI (60-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] < 60) {

                if (lvl[1] <= 60 & lvl[1] > 23) {


                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['23'])
                    lavaPrice = (xpLeft * 132) / 1000000;

                    totalPrice = lavaPrice;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nLava Runes/ZMI (${lvl[0]}-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
                }
                if (lvl[1] <= 99 & lvl[1] > 60) {

                    xpLeft = Math.abs(xpLvl['60'] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 132) / 1000000;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                    lava2Price = (xpLeft * 80) / 1000000;

                    totalPrice = lavaPrice + lava2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nLava Runes/ZMI (${lvl[0]}-60)  **${lavaPrice.toFixed(2)} M** `;
                    r += `\nLava Runes/ZMI (60-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                }

            } else {
                if (lvl[0] <= 99) {

                    if (lvl[1] <= 99 & lvl[1] > 60) {

                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                        lava2Price = (xpLeft * 80) / 1000000;

                        totalPrice = lava2Price;

                        r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                        r += `\nLava Runes/ZMI (${lvl[0]}-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                    }

                }
            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function constructionCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->52  - 44GP/XP
    LVL 52->99 - 16GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Construction ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 52) {

            if (lvl[1] <= 52) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 44) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny type (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 52) {

                xpLeft = Math.abs(xpLvl['52'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 44) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['52'])
                con2Price = (xpLeft * 16) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny type (${lvl[0]}-52)  **${conPrice.toFixed(2)} M** `;
                r += `\nAny type (52-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 52) {

                if (lvl[1] <= 99 & lvl[1] > 52) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 16) / 1000000;

                    totalPrice = con2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nAny type (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function farmCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->34  - 66gp/XP  
    LVL 34->99 - 38.5gp/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Farming  ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 34) {

            if (lvl[1] <= 34) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 66) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\ntree-allotments-herbs (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 34) {

                xpLeft = Math.abs(xpLvl['34'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 66) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['34'])
                con2Price = (xpLeft * 38.5) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\ntree-allotments-herbs (${lvl[0]}-34)  **${conPrice.toFixed(2)} M** `;
                r += `\nTithe farm (34-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 34) {

                if (lvl[1] <= 99 & lvl[1] > 34) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 38.5) / 1000000;

                    totalPrice = con2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nTithe farm (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function cookCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->70 - 75GP/XP
    LVL 70->99 (FISH) - 18GP/XP
    LVL 35->99 (WINNES) - 15GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var winePrice = 0;
        var cookPrice = 0;
        var lvl = q.split('-');

        r = `**Price Cooking ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 70) {

            if (lvl[1] <= 70) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]]);
                conPrice = (xpLeft * 75) / 1000000;

                //wine
                if (lvl[0] >= 35) {
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]]);
                    winePrice = (xpLeft * 16.5) / 1000000;

                    totalPrice = winePrice;
                } else {
                    if (lvl[1] > 35) {
                        xpLeft = Math.abs(xpLvl['35'] - xpLvl[lvl[0]]);
                        cookPrice = (xpLeft * 75) / 1000000;

                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['35']);
                        winePrice = (xpLeft * 16.5) / 1000000;

                        totalPrice = winePrice + cookPrice;
                    } else {
                        totalPrice = conPrice;
                    }
                }

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`

                if (winePrice > 0) {
                    if (cookPrice > 0) {
                        r += `\n\nFish (${lvl[0]}-35)  **${cookPrice.toFixed(2)} M** `;
                        r += `\nWines (35-${lvl[1]})  **${winePrice.toFixed(2)} M** `;
                    } else {
                        r += `\n\nWines (${lvl[0]}-${lvl[1]})  **${winePrice.toFixed(2)} M** `;
                    }
                }

                r += `\n\nFish (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 70) {

                xpLeft = Math.abs(xpLvl['70'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 75) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                con2Price = (xpLeft * 18) / 1000000;

                //wine
                if (lvl[0] >= 35) {
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]]);
                    winePrice = (xpLeft * 16.5) / 1000000;

                    totalPrice = winePrice;
                } else {

                    xpLeft = Math.abs(xpLvl['35'] - xpLvl[lvl[0]]);
                    cookPrice = (xpLeft * 75) / 1000000;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['35']);
                    winePrice = (xpLeft * 16.5) / 1000000;

                    totalPrice = winePrice + cookPrice;

                }

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`

                if (winePrice > 0) {
                    if (cookPrice > 0) {
                        r += `\n\nFish (${lvl[0]}-35)  **${cookPrice.toFixed(2)} M** `;
                        r += `\n\nWines (35-${lvl[1]})  **${winePrice.toFixed(2)} M** `;
                    } else {
                        r += `\n\nWines (${lvl[0]}-${lvl[1]})  **${winePrice.toFixed(2)} M** `;
                    }
                }

                r += `\n\nFish (${lvl[0]}-70)  **${conPrice.toFixed(2)} M** `;
                r += `\nFish (70-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 70) {

                if (lvl[1] <= 99 & lvl[1] > 70) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 18) / 1000000;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]]);
                    winePrice = (xpLeft * 16.5) / 1000000;

                    totalPrice = winePrice;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nWines (${lvl[0]}-${lvl[1]})  **${winePrice.toFixed(2)} M** `;
                    r += `\n\nFish (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function slayerCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*(PRICES MIGHT VARIES DEPENDING ON COMBAT LEVEL AND GEAR)
    1->50  - 159GP/XP
    50->99 - 89GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Slayer ${lvl[0]}-${lvl[1]} ** \n(Prices might varies depending by combat level and gear)`;

        if (lvl[0] < 50) {

            if (lvl[1] <= 50) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 132) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBest way (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 50) {

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 132) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                con2Price = (xpLeft * 82.5) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBest way (${lvl[0]}-50)  **${conPrice.toFixed(2)} M** `;
                r += `\nBest way (50-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 50) {

                if (lvl[1] <= 99 & lvl[1] > 50) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 82.5) / 1000000;

                    totalPrice = con2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nBest way (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function fmCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->50  - 49.5GP/XP
    LVL 50->99 - 15GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Firemaking ${lvl[0]}-${lvl[1]} **`;

        if (lvl[0] < 50) {

            if (lvl[1] <= 50) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 49.5) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nLogs (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 50) {

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 49.5) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                con2Price = (xpLeft * 16) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nLogs (${lvl[0]}-50)  **${conPrice.toFixed(2)} M** `;
                r += `\nwintertodt (50-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 50) {

                if (lvl[1] <= 99 & lvl[1] > 50) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 16) / 1000000;

                    totalPrice = con2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nwintertodt (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function craftingCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->54  - 49.5GP/XP
    LVL 54->99 - 17GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Crafting ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 54) {

            if (lvl[1] <= 54) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 49.5) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny type (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 54) {

                xpLeft = Math.abs(xpLvl['54'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 49.5) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['54'])
                con2Price = (xpLeft * 14.8) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny type (${lvl[0]}-54)  **${conPrice.toFixed(2)} M** `;
                r += `\nAny type (54-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 54) {

                if (lvl[1] <= 99 & lvl[1] > 54) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 14.8) / 1000000;

                    totalPrice = con2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nAny type (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function miningCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->72  - 55GP/XP
    LVL 72->99 - 44GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Mining ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 72) {

            if (lvl[1] <= 72) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 55) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nIron ore (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 72) {

                xpLeft = Math.abs(xpLvl['72'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 55) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['72'])
                con2Price = (xpLeft * 44) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nIron ore (${lvl[0]}-72)  **${conPrice.toFixed(2)} M** `;
                r += `\nIron ore (72-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 72) {

                if (lvl[1] <= 99 & lvl[1] > 72) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 44) / 1000000;

                    totalPrice = con2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nIron ore (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function smithCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 50->99 (BF*GOLD BARS*) - 22GP/XP
    LVL 1->99  (BARS) - 41GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Smithing ${lvl[0]}-${lvl[1]} ** `;

        //bow
        if (lvl[0] < 50) {

            if (lvl[1] <= 99 & lvl[1] > 50) {

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 38.5) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                con2Price = (xpLeft * 22) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBars (${lvl[0]}-50)  **${conPrice.toFixed(2)} M** `;
                r += `\nBF Gold Bars (50-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 50) {

                if (lvl[1] <= 99 & lvl[1] > 50) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 22) / 1000000;

                    totalPrice = con2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nBF Gold Bars (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        //dart
        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
        conPrice = (xpLeft * 38.5) / 1000000;
        totalPrice = conPrice;
        r += `\n\nBars (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function fletchingCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->99 (DARTS) - 11GP/XP
    LVL 50->99 (BOWS) - 16.5GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Crafting ${lvl[0]}-${lvl[1]} ** `;

        //dart
        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
        conPrice = (xpLeft * 11) / 1000000;
        totalPrice = conPrice;

        r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
        r += `\n\nDarts (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
        //bow
        if (lvl[0] < 50) {

            if (lvl[1] <= 99 & lvl[1] > 50) {

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 11) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                con2Price = (xpLeft * 16.5) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\n\nDarts (${lvl[0]}-50)  **${conPrice.toFixed(2)} M** `;
                r += `\nBow (50-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 50) {

                if (lvl[1] <= 99 & lvl[1] > 50) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 16.5) / 1000000;

                    totalPrice = con2Price;

                    r += `\n\nBow (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function agilityCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->60  - 71.5GP/XP
LVL 60->99 - 66GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Agility ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 60) {

            if (lvl[1] <= 60) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 71.5) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBest way (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 60) {

                xpLeft = Math.abs(xpLvl['60'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 71.5) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                con2Price = (xpLeft * 66) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBest way (${lvl[0]}-60)  **${conPrice.toFixed(2)} M** `;
                r += `\nBest way (60-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 60) {

                if (lvl[1] <= 99 & lvl[1] > 60) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 66) / 1000000;

                    totalPrice = con2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nBest way (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function herbCalc(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->50  - 26GP/XP
LVL 50->99 - 19GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Herblore ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 50) {

            if (lvl[1] <= 50) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 22) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny potion (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 50) {

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 22) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                con2Price = (xpLeft * 16.5) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny potion (${lvl[0]}-50)  **${conPrice.toFixed(2)} M** `;
                r += `\nBest potion possible (50-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 50) {

                if (lvl[1] <= 99 & lvl[1] > 50) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 16.5) / 1000000;

                    totalPrice = con2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nBest potion possible (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}


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

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}