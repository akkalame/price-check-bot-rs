/// bot calculador de precios PurgeGold 0.0.1

const Discord = require('discord.js');
const client = new Discord.Client();
skills = ' !melee !range !prayer !magic !runecrafting !construction !agility !herblore !thieving !crafting !fletching !slayer !hunter !mining !smithing !fishing !cooking !firemaking !woodcutting !farming !att !str !def !wc !rc !herb !smith !fm';

client.on('ready', () => {
    console.log(`Bot is ready as: ${client.user.tag}`);
})

client.on('message', message => {
    if(message.author.id != client.user.id){
        //recibiendo el mensaje
        //console.log(message.content);
        var msg = message.content.toLowerCase().trim().split(' ')[0];

        if (msg === '!q'){
            price = questCalc(message.content);

            enviarMsg(message.channel,price+"m for all of it");

        }else{
            if (skills.search(msg)){
                q = ' ';
                switch (msg) {
                    case '!melee':
                        q = meleeCalc(message.content.trim().split(' ')[1],msg);
                        break;
                    case '!range':
                        q = rangeCalc(message.content.trim().split(' ')[1],msg);
                        break;
                        case '!prayer':
                            q = prayerCalc(message.content.trim().split(' ')[1],msg);
                            break;
                        case '!magic':
                            q = magicCalc(message.content.trim().split(' ')[1],msg);
                            break;
                        case '!runecrafting':
                            q = runecraftingCalc(message.content.trim().split(' ')[1],msg);
                            break;
                        case '!construction':
                            q = constructionCalc(message.content.trim().split(' ')[1],msg);
                            break;
                        case '!agility':
                            q = agilityCalc(message.content.trim().split(' ')[1],msg);
                            break;
                        case '!herblore':
                            q = herbCalc(message.content.trim().split(' ')[1],msg);
                            break;
                        case '!thieving':
                            q = thievingCalc(message.content.trim().split(' ')[1],msg);
                            break;
                        case '!crafting':
                            q = craftingCalc(message.content.trim().split(' ')[1],msg);
                        break;
                        case '!fletching':
                            q = fletchingCalc(message.content.trim().split(' ')[1],msg);
                            break;
                        case '!slayer':
                            q = slayerCalc(message.content.trim().split(' ')[1]),msg;
                            break;
                        case '!hunter':
                            q = hunterCalc(message.content.trim().split(' ')[1],msg);
                            break;
                        case '!mining':
                            q = miningCalc(message.content.trim().split(' ')[1],msg);
                            break;
                        case '!smithing':
                            q = smithCalc(message.content.trim().split(' ')[1],msg);
                            break;
                        case '!fishing':
                            q = fishCalc(message.content.trim().split(' ')[1],msg);
                            break;
                        case '!cooking':
                            q = cookCalc(message.content.trim().split(' ')[1],msg);
                            break;
                        case '!firemaking':
                            q = fmCalc(message.content.trim().split(' ')[1],msg);
                            break;
                        case '!woodcutting':
                            q = wcCalc(message.content.trim().split(' ')[1],msg);
                            break;
                        case '!farming':
                            q = farmCalc(message.content.trim().split(' ')[1],msg);
                            break;

                        default:
                            break;
                }

                enviarMsg(message.channel,q);
            }  
        }
    }
})

client.login('ODAxODI0Mjk0Mjc0NTk2ODY0.YAmTEA.V8P-hj4DL8qBzgheAMnOf4nVfeU');


/// aqui se calculan los precios de las skill y las quest, recibiendo determinados parametros

function meleeCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*valores referenciales del precio
    LVL 1->99 SAND CRABS - 19GP/XP 
    LVL 1->99 NMZ - 16GP/XP
*/
    try {
        var crabPrice, nmzPrice, r;
        var lvl = q.split('-');
        var xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])

        crabPrice = (xpLeft * 19)/1000000;
        nmzPrice = (xpLeft * 16)/1000000;

        r = `**Price Melee ${lvl[0]}-${lvl[1]} **`;
        r += `\n\nSAND CRABS (${lvl[0]}-${lvl[1]}) **${crabPrice.toFixed(2)} M**`;
        r += `\nNMZ (${lvl[0]}-${lvl[1]})  **${nmzPrice.toFixed(2)} M**`

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }
    

}

function rangeCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*valores referenciales del precio
    LVL 1->99 SAND CRABS - 19GP/XP 
    LVL 1->99 NMZ - 16GP/XP
*/
    try{
        var crabPrice, nmzPrice, r;
        var lvl = q.split('-');
        var xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])

        crabPrice = (xpLeft * 19)/1000000;
        nmzPrice = (xpLeft * 16)/1000000;

        r = `**Price Range ${lvl[0]}-${lvl[1]} **`;

        r += `\n\nSAND CRABS (${lvl[0]}-${lvl[1]}) **${crabPrice.toFixed(2)} M**`;
        r += `\nNMZ (${lvl[0]}-${lvl[1]})  **${nmzPrice.toFixed(2)} M**`
        return r;

    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function prayerCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*LVL 1->99 (Gilded altar) - 12GP/XP
LVL 1-99 With Arceus spell (best ensouled head you can use) 29GP/XP
*/
    try{
        var gilderPrice, arceusPrice, r;
        var lvl = q.split('-');
        var xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])

        gilderPrice = (xpLeft * 12)/1000000;
        arceusPrice = (xpLeft * 29)/1000000;

        r = `**Price Prayer ${lvl[0]}-${lvl[1]} **`;
        r += `\n\nGilder Altar (${lvl[0]}-${lvl[1]})  **${gilderPrice.toFixed(2)} M**`;
        r += ` \nArceus Spell (${lvl[0]}-${lvl[1]})  **${arceusPrice.toFixed(2)} M**`
        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function magicCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*SPLASHING - 21GP/XP
Hight Alchemy- 26GP/XP
*/
    try{
        var splashPrice, haPrice, r;
        var lvl = q.split('-');
        var xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])

        splashPrice = (xpLeft * 21)/1000000;
        haPrice = (xpLeft * 26)/1000000;

        r = `**Price Magic ${lvl[0]}-${lvl[1]} ** `;
        r += `\n\nSplashing (${lvl[0]}-${lvl[1]})  **${splashPrice.toFixed(2)} M**`;
        r += `\nHight Alchemy (${lvl[0]}-${lvl[1]}) **${haPrice.toFixed(2)} M**`
        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function wcCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*LVL 1->51  - 79GP/XP
    LVL 51->70 - 49GP/XP
    LVL 70->99 - 39GP/XP
*/
    try{
        var fPrice, lavaPrice, lava2Price, zmiPrice, zmi2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');
        r = `**Price Woodcutting  ${lvl[0]}-${lvl[1]} **`;

        //lava
        if (lvl[0] < 51){

            if(lvl[1] <= 51){

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 79)/1000000;
                r += `\nBest way  **${fPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 70 & lvl[1] > 51){

                xpLeft = Math.abs(xpLvl['51'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 79)/1000000;
                
                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['51'])
                lavaPrice = (xpLeft * 49)/1000000;

                totalPrice = fPrice + lavaPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBest way (${lvl[0]}-51) **${fPrice.toFixed(2)} M** `; 
                r += `\nWillow (51-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 99 & lvl[1] > 70){

                xpLeft = Math.abs(xpLvl['51'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 79)/1000000;
                
                xpLeft = Math.abs(xpLvl['70'] - xpLvl['51'])
                lavaPrice = (xpLeft * 49)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                lava2Price = (xpLeft * 39)/1000000;

                totalPrice = fPrice + lavaPrice + lava2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBest way (${lvl[0]}-51) **${fPrice.toFixed(2)} M** `; 
                r += `\nWillow (51-70)  **${lavaPrice.toFixed(2)} M** `;
                r += `\nWillow (70-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] < 70){

                if(lvl[1] <= 70 & lvl[1] > 51){
        
                    
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['51'])
                    lavaPrice = (xpLeft * 49)/1000000;
        
                    totalPrice = lavaPrice;
        
                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nWillow (${lvl[0]}-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
                }
                if(lvl[1] <= 99 & lvl[1] > 70){
                    
                    xpLeft = Math.abs(xpLvl['70'] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 49)/1000000;
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                    lava2Price = (xpLeft * 39)/1000000;
        
                    totalPrice = lavaPrice + lava2Price;
        
                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nWillow (${lvl[0]}-70)  **${lavaPrice.toFixed(2)} M** `;
                    r += `\nWillow (70-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                }
        
            }else{
                if (lvl[0] <= 99){

                    if(lvl[1] <= 99 & lvl[1] > 70){
            
                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                        lava2Price = (xpLeft * 39)/1000000;
            
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

function thievingCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*LVL 01->55 - 89GP/XP
    LVL 55->80 - 59GP/XP
    LVL 80->99 - 39GP/XP
*/
    try{
        var fPrice, lavaPrice, lava2Price, zmiPrice, zmi2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');
        r = `**Price Thieving ${lvl[0]}-${lvl[1]} **`;

        //lava
        if (lvl[0] < 55){

            if(lvl[1] <= 55){

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 89)/1000000;
                r += `\nAny way  **${fPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 80 & lvl[1] > 55){

                xpLeft = Math.abs(xpLvl['55'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 89)/1000000;
                
                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['55'])
                lavaPrice = (xpLeft * 59)/1000000;

                totalPrice = fPrice + lavaPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nAny way (${lvl[0]}-55) **${fPrice.toFixed(2)} M** `; 
                r += `\nPyramid (55-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 99 & lvl[1] > 80){

                xpLeft = Math.abs(xpLvl['55'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 89)/1000000;
                
                xpLeft = Math.abs(xpLvl['80'] - xpLvl['55'])
                lavaPrice = (xpLeft * 59)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['80'])
                lava2Price = (xpLeft * 39)/1000000;

                totalPrice = fPrice + lavaPrice + lava2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nAny way (${lvl[0]}-55) **${fPrice.toFixed(2)} M** `; 
                r += `\nPyramid (55-80)  **${lavaPrice.toFixed(2)} M** `;
                r += `\nPyramid (80-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] < 80){

                if(lvl[1] <= 80 & lvl[1] > 55){
        
                    
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['55'])
                    lavaPrice = (xpLeft * 59)/1000000;
        
                    totalPrice = lavaPrice;
        
                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nPyramid (${lvl[0]}-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
                }
                if(lvl[1] <= 99 & lvl[1] > 80){
                    
                    xpLeft = Math.abs(xpLvl['80'] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 59)/1000000;
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['80'])
                    lava2Price = (xpLeft * 39)/1000000;
        
                    totalPrice = lavaPrice + lava2Price;
        
                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nPyramid (${lvl[0]}-80)  **${lavaPrice.toFixed(2)} M** `;
                    r += `\nPyramid (80-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                }
        
            }else{
                if (lvl[0] <= 99){

                    if(lvl[1] <= 99 & lvl[1] > 80){
            
                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['80'])
                        lava2Price = (xpLeft * 39)/1000000;
            
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

function fishCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*LVL 1->50  - 59GP/XP
    LVL 50->70 - 39GP/XP
    LVL 70->99 - 29GP/XP
*/
    try{
        var fPrice, lavaPrice, lava2Price, zmiPrice, zmi2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');
        r = `**Price Fishing ${lvl[0]}-${lvl[1]} **`;

        //lava
        if (lvl[0] < 50){

            if(lvl[1] <= 50){

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 59)/1000000;
                r += `\nBest way  **${fPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 70 & lvl[1] > 50){

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 59)/1000000;
                
                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                lavaPrice = (xpLeft * 39)/1000000;

                totalPrice = fPrice + lavaPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBest way (${lvl[0]}-50) **${fPrice.toFixed(2)} M** `; 
                r += `\nBest way (50-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 99 & lvl[1] > 70){

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 59)/1000000;
                
                xpLeft = Math.abs(xpLvl['70'] - xpLvl['50'])
                lavaPrice = (xpLeft * 39)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                lava2Price = (xpLeft * 29)/1000000;

                totalPrice = fPrice + lavaPrice + lava2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBest way (${lvl[0]}-50) **${fPrice.toFixed(2)} M** `; 
                r += `\nBest way (50-70)  **${lavaPrice.toFixed(2)} M** `;
                r += `\nBest way (70-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] < 70){

                if(lvl[1] <= 70 & lvl[1] > 50){
        
                    
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                    lavaPrice = (xpLeft * 39)/1000000;
        
                    totalPrice = lavaPrice;
        
                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nBest way (${lvl[0]}-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
                }
                if(lvl[1] <= 99 & lvl[1] > 70){
                    
                    xpLeft = Math.abs(xpLvl['70'] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 39)/1000000;
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                    lava2Price = (xpLeft * 29)/1000000;
        
                    totalPrice = lavaPrice + lava2Price;
        
                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nBest way (${lvl[0]}-70)  **${lavaPrice.toFixed(2)} M** `;
                    r += `\nBest way (70-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                }
        
            }else{
                if (lvl[0] <= 99){

                    if(lvl[1] <= 99 & lvl[1] > 70){
            
                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                        lava2Price = (xpLeft * 29)/1000000;
            
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

function hunterCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*LVL 1->30  - 89GP/XP
    LVL 30->60 - 79GP/XP
    LVL 60->99 - 59GP/XP
*/
    try{
        var fPrice, lavaPrice, lava2Price, zmiPrice, zmi2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');
        r = `**Price Hunter ${lvl[0]}-${lvl[1]} **`;

        //lava
        if (lvl[0] < 30){

            if(lvl[1] <= 30){

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 89)/1000000;
                r += `\nBirds  **${fPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 60 & lvl[1] > 30){

                xpLeft = Math.abs(xpLvl['30'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 89)/1000000;
                
                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['30'])
                lavaPrice = (xpLeft * 79)/1000000;

                totalPrice = fPrice + lavaPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBirds (${lvl[0]}-30) **${fPrice.toFixed(2)} M** `; 
                r += `\nSalamanders (30-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 99 & lvl[1] > 60){

                xpLeft = Math.abs(xpLvl['30'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 89)/1000000;
                
                xpLeft = Math.abs(xpLvl['60'] - xpLvl['30'])
                lavaPrice = (xpLeft * 79)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                lava2Price = (xpLeft * 59)/1000000;

                totalPrice = fPrice + lavaPrice + lava2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBirds (${lvl[0]}-30) **${fPrice.toFixed(2)} M** `; 
                r += `\nSalamanders (30-60)  **${lavaPrice.toFixed(2)} M** `;
                r += `\nSalamanders (60-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] < 60){

                if(lvl[1] <= 60 & lvl[1] > 30){
        
                    
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['30'])
                    lavaPrice = (xpLeft * 79)/1000000;
        
                    totalPrice = lavaPrice;
        
                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nSalamanders (${lvl[0]}-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
                }
                if(lvl[1] <= 99 & lvl[1] > 60){
                    
                    xpLeft = Math.abs(xpLvl['60'] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 79)/1000000;
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                    lava2Price = (xpLeft * 59)/1000000;
        
                    totalPrice = lavaPrice + lava2Price;
        
                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nSalamanders (${lvl[0]}-60)  **${lavaPrice.toFixed(2)} M** `;
                    r += `\nSalamanders (60-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                }
        
            }else{
                if (lvl[0] <= 99){

                    if(lvl[1] <= 99 & lvl[1] > 60){
            
                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                        lava2Price = (xpLeft * 59)/1000000;
            
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

function runecraftingCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*LVL 1->23 - 160GP/XP
    LVL 23->60 (LAVAS *LUNAR DIPLO REQ*) - 150GP/XP
    LVL 60->99 (LAVAS *LUNAR DIPLO REQ*) - 110GP/XP
    LVL 1->50 (ZMI)  - 140GP/XP
    LVL 50->99 (ZMI) - 100GP/XP
*/
    try{
        var fPrice, lavaPrice, lava2Price, zmiPrice, zmi2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');
        r = `**Price Runecrafting ${lvl[0]}-${lvl[1]} **`;

        //lava
        if (lvl[0] < 23){

            if(lvl[1] <= 23){

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 160)/1000000;
                r += `\nRegular way  **${fPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 60 & lvl[1] > 23){

                xpLeft = Math.abs(xpLvl['23'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 160)/1000000;
                
                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['23'])
                lavaPrice = (xpLeft * 150)/1000000;

                totalPrice = fPrice + lavaPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nRegular way (${lvl[0]}-23) **${fPrice.toFixed(2)} M** `; 
                r += `\nLava Runes (23-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 99 & lvl[1] > 60){

                xpLeft = Math.abs(xpLvl['23'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 160)/1000000;
                
                xpLeft = Math.abs(xpLvl['60'] - xpLvl['23'])
                lavaPrice = (xpLeft * 150)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                lava2Price = (xpLeft * 110)/1000000;

                totalPrice = fPrice + lavaPrice + lava2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nRegular way (${lvl[0]}-23) **${fPrice.toFixed(2)} M** `; 
                r += `\nLava Runes (23-60)  **${lavaPrice.toFixed(2)} M** `;
                r += `\nLava Runes (60-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] < 60){

                if(lvl[1] <= 60 & lvl[1] > 23){
        
                    
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['23'])
                    lavaPrice = (xpLeft * 150)/1000000;
        
                    totalPrice = lavaPrice;
        
                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nLava Runes (${lvl[0]}-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
                }
                if(lvl[1] <= 99 & lvl[1] > 60){
                    
                    xpLeft = Math.abs(xpLvl['60'] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 150)/1000000;
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                    lava2Price = (xpLeft * 110)/1000000;
        
                    totalPrice = lavaPrice + lava2Price;
        
                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nLava Runes (${lvl[0]}-60)  **${lavaPrice.toFixed(2)} M** `;
                    r += `\nLava Runes (60-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                }
        
            }else{
                if (lvl[0] <= 99){

                    if(lvl[1] <= 99 & lvl[1] > 60){
            
                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                        lava2Price = (xpLeft * 110)/1000000;
            
                        totalPrice = lava2Price;
            
                        r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                        r += `\nLava Runes (${lvl[0]}-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
            
                    }
            
                }
            }
        }

        //zmi
        if (lvl[0] < 50){

            if(lvl[1] <= 50){

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                zmiPrice = (xpLeft * 140)/1000000;

                r += `\n\nZMI (${lvl[0]}-${lvl[1]})  **${zmiPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 99 & lvl[1] > 50){

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                zmiPrice = (xpLeft * 140)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                zmi2Price = (xpLeft * 100)/1000000;

                r += `\n\nZMI (${lvl[0]}-50)  **${zmiPrice.toFixed(2)} M** `;
                r += `\n\nZMI (50-${lvl[1]})  **${zmi2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] >= 50){

                if(lvl[1] <= 99 & lvl[1] > 50){
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    zmi2Price = (xpLeft * 100)/1000000;
        
                    r += `\n\nZMI (${lvl[0]}-${lvl[1]})  **${zmi2Price.toFixed(2)} M** `;
                }
        
            }
        }
    
        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function constructionCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*LVL 1->52  - 49GP/XP
    LVL 52->99 - 19GP/XP
*/
    try{
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Construction ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 52){

            if(lvl[1] <= 52){

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 49)/1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny type (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 99 & lvl[1] > 52){

                xpLeft = Math.abs(xpLvl['52'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 49)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['52'])
                con2Price = (xpLeft * 19)/1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny type (${lvl[0]}-52)  **${conPrice.toFixed(2)} M** `;
                r += `\nAny type (52-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] >= 52){

                if(lvl[1] <= 99 & lvl[1] > 52){
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 19)/1000000;
                    
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

function farmCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*LVL 1->30  - 79gp/XP  
    LVL 30->99 - 45gp/XP
*/
    try{
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Farming  ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 30){

            if(lvl[1] <= 30){

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 79)/1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny type (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 99 & lvl[1] > 30){

                xpLeft = Math.abs(xpLvl['30'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 79)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['30'])
                con2Price = (xpLeft * 45)/1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny type (${lvl[0]}-30)  **${conPrice.toFixed(2)} M** `;
                r += `\nTree (30-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] >= 30){

                if(lvl[1] <= 99 & lvl[1] > 30){
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 45)/1000000;
                    
                    totalPrice = con2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nTree (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }
        
            }
        }

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}


function cookCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*LVL 1->70 - 75GP/XP
    LVL 70->99 (FISH) - 30GP/XP
    LVL 35->99 (WINNES) - 19GP/XP
*/
    try{
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var winePrice = 0;
        var cookPrice = 0;
        var lvl = q.split('-');

        r = `**Price Cooking ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 70){

            if(lvl[1] <= 70){

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]]);
                conPrice = (xpLeft * 75)/1000000;

                //wine
                if (lvl[0] >= 35){
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]]);
                    winePrice = (xpLeft * 19)/1000000;

                    totalPrice = winePrice; 
                }else{
                    if (lvl[1] > 35){
                        xpLeft = Math.abs(xpLvl['35'] - xpLvl[lvl[0]]);
                        cookPrice = (xpLeft * 75)/1000000;

                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['35']);
                        winePrice = (xpLeft * 19)/1000000;

                        totalPrice = winePrice + cookPrice; 
                    }else{
                        totalPrice = conPrice; 
                    }
                }

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                
                if(winePrice > 0){
                    if(cookPrice > 0){
                        r += `\n\nFish (${lvl[0]}-35)  **${cookPrice.toFixed(2)} M** `;
                        r += `\nWines (35-${lvl[1]})  **${winePrice.toFixed(2)} M** `;
                    }else{
                        r += `\n\nWines (${lvl[0]}-${lvl[1]})  **${winePrice.toFixed(2)} M** `;
                    }
                }
                
                r += `\n\nFish (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 99 & lvl[1] > 70){

                xpLeft = Math.abs(xpLvl['70'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 75)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                con2Price = (xpLeft * 30)/1000000;

                //wine
                if (lvl[0] >= 35){
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]]);
                    winePrice = (xpLeft * 19)/1000000;

                    totalPrice = winePrice; 
                }else{
                    
                    xpLeft = Math.abs(xpLvl['35'] - xpLvl[lvl[0]]);
                    cookPrice = (xpLeft * 75)/1000000;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['35']);
                    winePrice = (xpLeft * 19)/1000000;

                    totalPrice = winePrice + cookPrice; 
                    
                }

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                
                if(winePrice > 0){
                    if(cookPrice > 0){
                        r += `\n\nFish (${lvl[0]}-35)  **${cookPrice.toFixed(2)} M** `;
                        r += `\n\nWines (35-${lvl[1]})  **${winePrice.toFixed(2)} M** `;
                    }else{
                        r += `\n\nWines (${lvl[0]}-${lvl[1]})  **${winePrice.toFixed(2)} M** `;
                    }
                }

                r += `\n\nFish (${lvl[0]}-70)  **${conPrice.toFixed(2)} M** `;
                r += `\nFish (70-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] >= 70){

                if(lvl[1] <= 99 & lvl[1] > 70){
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 30)/1000000;
                    
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]]);
                    winePrice = (xpLeft * 19)/1000000;

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

function slayerCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*(PRICES MIGHT VARIES DEPENDING ON COMBAT LEVEL AND GEAR)
    1->50  - 159GP/XP
    50->99 - 89GP/XP
*/
    try{
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Slayer ${lvl[0]}-${lvl[1]} ** \n(Prices might varies depending by combat level and gear)`;

        if (lvl[0] < 50){

            if(lvl[1] <= 50){

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 159)/1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBest way (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 99 & lvl[1] > 50){

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 159)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                con2Price = (xpLeft * 89)/1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBest way (${lvl[0]}-50)  **${conPrice.toFixed(2)} M** `;
                r += `\nBest way (50-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] >= 50){

                if(lvl[1] <= 99 & lvl[1] > 50){
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 89)/1000000;
                    
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

function fmCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*LVL 1->50  - 59GP/XP
    LVL 50->99 - 19GP/XP
*/
    try{
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Firemaking ${lvl[0]}-${lvl[1]} **`;

        if (lvl[0] < 50){

            if(lvl[1] <= 50){

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 59)/1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nLogs (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 99 & lvl[1] > 50){

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 59)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                con2Price = (xpLeft * 19)/1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nLogs (${lvl[0]}-50)  **${conPrice.toFixed(2)} M** `;
                r += `\nwintertodt (50-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] >= 50){

                if(lvl[1] <= 99 & lvl[1] > 50){
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 19)/1000000;
                    
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

function craftingCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*LVL 1->54  - 59GP/XP
    LVL 54->99 - 24GP/XP
*/
    try{
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Crafting ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 54){

            if(lvl[1] <= 54){

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 59)/1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny type (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 99 & lvl[1] > 54){

                xpLeft = Math.abs(xpLvl['54'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 59)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['54'])
                con2Price = (xpLeft * 24)/1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny type (${lvl[0]}-54)  **${conPrice.toFixed(2)} M** `;
                r += `\nAny type (54-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] >= 54){

                if(lvl[1] <= 99 & lvl[1] > 54){
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 24)/1000000;
                    
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

function miningCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*LVL 1->72  - 59GP/XP
    LVL 72->99 - 49GP/XP
*/
    try{
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Mining ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 72){

            if(lvl[1] <= 72){

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 59)/1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nIron ore (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 99 & lvl[1] > 72){

                xpLeft = Math.abs(xpLvl['72'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 59)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['72'])
                con2Price = (xpLeft * 49)/1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nIron ore (${lvl[0]}-72)  **${conPrice.toFixed(2)} M** `;
                r += `\nIron ore (72-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] >= 72){

                if(lvl[1] <= 99 & lvl[1] > 72){
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 49)/1000000;
                    
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

function smithCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*LVL 50->99 (BF*GOLD BARS*) - 29GP/XP
    LVL 1->99  (BARS) - 45GP/XP
*/
    try{
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Smithing ${lvl[0]}-${lvl[1]} ** `;

        //bow
        if (lvl[0] < 50){

            if(lvl[1] <= 99 & lvl[1] > 50){

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 45)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                con2Price = (xpLeft * 29)/1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBars (${lvl[0]}-50)  **${conPrice.toFixed(2)} M** `;
                r += `\nBF Gold Bars (50-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] >= 50){

                if(lvl[1] <= 99 & lvl[1] > 50){
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 29)/1000000;
                    
                    totalPrice = con2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nBF Gold Bars (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }
        
            }
        }

        //dart
        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
        conPrice = (xpLeft * 45)/1000000;
        totalPrice = conPrice;
        r += `\n\nBars (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

function fletchingCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*LVL 1->99 (DARTS) - 13GP/XP
    LVL 50->99 (BOWS) - 20GP/XP
*/
    try{
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Crafting ${lvl[0]}-${lvl[1]} ** `;

        //dart
        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
        conPrice = (xpLeft * 13)/1000000;
        totalPrice = conPrice;

        r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
        r += `\n\nDarts (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
        //bow
        if (lvl[0] < 50){

            if(lvl[1] <= 99 & lvl[1] > 50){

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 13)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                con2Price = (xpLeft * 20)/1000000;

                totalPrice = conPrice + con2Price;

                r += `\n\nDarts (${lvl[0]}-50)  **${conPrice.toFixed(2)} M** `;
                r += `\nBow (50-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] >= 50){

                if(lvl[1] <= 99 & lvl[1] > 50){
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 20)/1000000;
                    
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

function agilityCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*LVL 1->60  - 90GP/XP
LVL 60->99 - 70GP/XP
*/ 
    try{
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Agility ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 60){

            if(lvl[1] <= 60){

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 90)/1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBest way (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 99 & lvl[1] > 60){

                xpLeft = Math.abs(xpLvl['60'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 90)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                con2Price = (xpLeft * 70)/1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBest way (${lvl[0]}-60)  **${conPrice.toFixed(2)} M** `;
                r += `\nBest way (60-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] >= 60){

                if(lvl[1] <= 99 & lvl[1] > 60){
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 70)/1000000;
                    
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

function herbCalc(q,msg){
    //$deberia llegar algo como 1-99
    /*LVL 1->50  - 26GP/XP
LVL 50->99 - 19GP/XP
*/
    try{
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Herblore ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 50){

            if(lvl[1] <= 50){

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 26)/1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBest way (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if(lvl[1] <= 99 & lvl[1] > 50){

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 26)/1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                con2Price = (xpLeft * 19)/1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBest way (${lvl[0]}-50)  **${conPrice.toFixed(2)} M** `;
                r += `\nBest way (50-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        }else{
            if (lvl[0] >= 50){

                if(lvl[1] <= 99 & lvl[1] > 50){
        
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 19)/1000000;
                    
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


function questCalc(q){
    var precio = 0;
    var lista, r;
    this.q = q.substr(3,undefined);
    
    lista = this.q.split(',');
    lista.forEach(element => precio += quests[element.trim()]);
    
    return precio;
    //return this.q+String(quests[this.q]);

}

function enviarMsg(canal, msg){
    //recibe el canal y el mensaje a enviar

    canal.send(msg);
}

xpLvl = {
    '1': 0,'2': 83,'3': 174,'4': 276,'5': 388,'6': 512,'7': 650,'8': 801,'9': 969,'10': 1154,
    '11': 1358,'12': 1584,'13': 1833,'14': 2107,'15': 2411,'16': 2746,'17': 3115,'18': 3523,
    '19': 3973,'20': 4470,'21': 5018,'22': 5624,'23': 6291,'24': 7028,'25': 7842,'26': 8740,
    '27': 9730,'28': 10824,'29': 12031,'30': 13363,'31': 14833,'32': 16456,'33': 18247,'34': 20224,
    '35': 22406,'36': 24815,'37': 27473,'38': 30408,'39': 33648,'40': 37224,'41': 41171,'42': 45529,
    '43': 50339,'44': 55649,'45': 61512,'46': 67983,'47': 75127,'48': 83014,'49': 91721,'50': 101333,
    '51': 111945,'52': 123660,'53': 136594,'54': 150872,'55': 166636,'56': 184040,'57': 203254,
    '58': 224466,'59': 247886,'60': 273742,'61': 302288,'62': 333804,'63': 368599,'64': 407015,
    '65': 449428,'66': 496254,'67': 547953,'68': 605032,'69': 668051,'70': 737627,'71': 814445,
    '72': 899257,'73': 992895,'74': 1096278,'75': 1210421,'76': 1336443,'77': 1475581,'78': 1629200,
    '79': 1798808,'80': 1986068,'81': 2192818,'82': 2421087,'83': 2673114,'84': 2951373,'85': 3258594,
    '86': 3597792,'87': 3972294,'88': 4385776,'89': 4842295,'90': 5346332,'91': 5902831,'92': 6517253,
    '93': 7195629,'94': 7944614,'95': 8771558,'96': 9684577,'97': 10692629,'98': 11805606,'99': 13034431
}
quests = {
    "black knights fortress": 1.5,
    "cook's assistant": 0.5,
    "cooks assistant": 0.5,
    "demon slayer":  2,
    "doric's quest": 0.5,
    "dorics quest": 0.5,
    "dragon slayer": 4,
    "ernest the chicken": 1,
    "goblin diplomacy": 0.5,
    "imp catcher": 0.5,
    "misthalin mystery": 1.5,
    "pirate's treasure": 1.5,
    "pirates treasure": 1.5,
    "prince ali rescue": 2,
    "romeo & juliet": 1,
    "rune mysteries": 1,
    "sheep shearer": 2,
    "shield of arrav": 1.5,
    "the corsair curse": 2,
    "the knight's sword": 2,
    "the knights sword": 2,
    "the restless ghost": 1,
    "vampire slayer": 1,
    "witch's potion": 1,
    "witchs potion": 1,
    "x marks the spot": 1.5,
    "a porcine of interest": 1.5,
    "a soul's bane": 2.5,
    "a souls bane": 2.5,
    "a tail of two cats": 3.5,
    "a taste of hope": 8,
    "alfred barcrawl": 2,
    "animal magnetism": 4,
    "another slice of h.a.m": 3,
    "another slice of ham": 3,
    "architectural alliance": 2.5,
    "bear your soul": 2,
    "between a rock": 2.5,
    "big chompy bird hunting": 2,
    "biohazard": 2,
    "bone voyage": 2.5,
    "cabin fever": 2.5,
    "client of kourend": 2,
    "clock tower": 2,
    "cold war": 3.5,
    "contact": 4,
    "creature of fenkenstrain": 3.5,
    "curse of the empty lord": 8,
    "darkness of hallowvale": 9,
    "death plateau": 2.5,
    "death to the dorgeshuun": 3,
    "desert treasure": 7.5,
    "desert treasure 1 prayer": 12.5,
    "devious minds": 3.5,
    "dragon slayer 2": 26,
    "dream mentor": 5,
    "druidic ritual": 1,
    "dwarf cannon": 2,
    "eadgar's ruse": 3,
    "eadgars ruse": 3,
    "eagle's peak": 2.5,
    "eagles peak": 2.5,
    "elemental workshop 1": 1.5,
    "elemental workshop 2": 2.5,
    "enakhra's lament": 2.5,
    "enakhras lament": 2.5,
    "enchanted key": 2.5,
    "enlightened journey": 3,
    "enter the abyss": 2.5,
    "fairytale 1 growing pains": 3,
    "fairytale 2 curse a queen": 4,
    "family crest": 2.5,
    "family pest": 2.5,
    "fight arena": 2.5,
    "fishing contest": 1.5,
    "forgettable tale": 5,
    "garden of traunquility": 7.5,
    "gertrude's cat": 1,
    "gertrudes cat": 1,
    "ghosts ahoy": 3,
    "grim tales": 3.5,
    "haunted mine": 3.5,
    "hazeel cult": 2,
    "heroes' quest": 6,
    "heroes quest": 6,
    "holy grail": 2.5,
    "horror from the deep": 3.5,
    "icthlarin's little helper": 5,
    "icthlarins little helper": 5,
    "in aid of the myreque": 5,
    "in search of knowledge": 5,
    "in search of the myreque": 3.5,
    "jungle potion": 3,
    "king's ransom": 3.5,
    "kings ransom": 3.5,
    "lair of tarn razorlor": 2.5,
    "legends' quest": 6,
    "legends quest": 6,
    "lost city": 3,
    "lunar diplomacy": 6,
    "making friends with my arm": 5,
    "making history": 1.5,
    "merlin's crystal": 2.5,
    "merlins crystal": 2.5,
    "monk's friend": 1.5,
    "monks friend": 1.5,
    "monkey madness 1": 5.5,
    "monkey madness": 5.5,
    "monkey madness 1 43 prayer": 6.5,
    "monkey madness 2": 28,
    "mountain daughter": 3,
    "mourning's end part 1": 11,
    "mournings end part 1": 11,
    "mourning's end part 2": 20,
    "mournings end part 2": 20,
    "murder mystery": 2,
    "my arm's big adventure": 3,
    "my arms big adventure": 3,
    "nature spirit": 3,
    "observatory quest": 2,
    "olaf's quest": 2.5,
    "olafs quest": 2.5,
    "one small favour": 7,
    "plague city": 2.5,
    "priest in peril": 2.5,
    "rag and bone man 2": 7.5,
    "rag and bone man": 3.5,
    "ratcatchers": 6,
    "recruitment drive": 2.5,
    "regicide": 6,
    "regicide 56 agility": 8,
    "rfd: another cook's quest": 0.5,
    "rfd: culinaromancer": 4,
    "rfd: dwarf": 1.5,
    "rfd: evil dave cat": 4,
    "rfd: evil dave kitten": 7,
    "rfd: king awowogei": 5,
    "rfd: lumbridge guide": 2.5,
    "rfd: ogre": 3,
    "rfd: pirate pete": 2,
    "rfd: sir amik varze": 2.5,
    "rfd: the goblin generals": 1.5,
    "roving elves": 4,
    "royal trouble": 4,
    "rum deal": 2.5,
    "scorpion catcher": 2,
    "sea slug": 1.5,
    "search of knowledge": 5,
    "shades of mort'ton": 2.5,
    "shadow of the storm": 2.5,
    "sheep herder": 2.5,
    "shilo village": 3,
    "sins of the father": 28,
    "skippy and the mogres": 2.5,
    "song of the elves": 28,
    "spirits of the elid": 2.5,
    "swan song": 3.5,
    "tai bwo wannai trio": 4,
    "tale of the righteous": 2.5,
    "tears of guthix": 1.5,
    "temple of ikov": 3,
    "the ascent of arceuus": 1.5,
    "the depths of despair": 2.5,
    "the dig site": 3.5,
    "the eyes of glouphrie": 3,
    "the feud": 2.5,
    "the forsaken tower": 2.5,
    "the fremennik exiles": 6.5,
    "the fremennik isles": 7.5,
    "the fremennik trials": 6,
    "the general's shadow": 2.5,
    "the generals shadow": 2.5,
    "the giant dwarf": 3.5,
    "the golem": 2.5,
    "the grand tree": 3,
    "the great brain robbery": 4.5,
    "the hand in the sand": 3,
    "the lost tribe": 3.5,
    "the slug menace": 2.5,
    "the tourist trap": 3.5,
    "throne of miscellania": 3.5,
    "tower of life": 3,
    "tree gnome village": 2.5,
    "tribal totem": 1.5,
    "troll romance": 2.5,
    "troll stronghold": 2.5,
    "underground pass": 5,
    "underground pass 50 agil": 6.5,
    "wanted": 3,
    "watchtower": 3,
    "waterfall quest": 2.5,
    "what lies below": 2.5,
    "witch's house": 2,
    "witchs house": 2,
    "zogre flesh eaters": 3.5,
};