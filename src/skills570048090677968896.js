//vikingskill
const prefix = "!";
const xpLvl = require('./xpLvl.json');

exports.meleeCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*valores referenciales del precio
    LVL 1->70 SAND CRABS - 15GP/XP

    LVL 70->99 SAND CRABS - 10GP/XP 
    LVL 70->99 NMZ - 8GP/XP
*/
    try {
        var gilderPrice, arceusPrice, r;
        var lvl = q.split('-');
        var xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])

        gilderPrice = (xpLeft * 10) / 1000000;
        arceusPrice = (xpLeft * 8) / 1000000;

        r = `**Price ${capitalize(msg)} ${lvl[0]}-${lvl[1]} **`;
        r += `\n\nSand Crabs (${lvl[0]}-${lvl[1]})  **${gilderPrice.toFixed(2)} M**`;
        r += ` \nNMZ (${lvl[0]}-${lvl[1]})  **${arceusPrice.toFixed(2)} M**`
        return r;

        /*var conPrice, con2Price, xpLeft, totalPrice, r;
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
                con2Price = (xpLeft * 8) / 1000000;

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
                    con2Price = (xpLeft * 8) / 1000000;

                    totalPrice = con2Price;

                    r += `\nTotal minimum  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nNMZ (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 10) / 1000000;

                    r += `\n\nSand Crabs (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;*/
    } catch (error) {
        return `Right command is: \n\n **${prefix}${msg} 1-99 **`;
    }


}

exports.rangeCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*valores referenciales del precio
    LVL 1->70 SAND CRABS - 15GP/XP

    LVL 70->99 SAND CRABS - 10GP/XP 
    LVL 70->99 NMZ - 8GP/XP
*/
    try {
        var gilderPrice, arceusPrice, r;
        var lvl = q.split('-');
        var xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])

        gilderPrice = (xpLeft * 10) / 1000000;
        arceusPrice = (xpLeft * 8) / 1000000;

        r = `**Price ${capitalize(msg)} ${lvl[0]}-${lvl[1]} **`;
        r += `\n\nSand Crabs (${lvl[0]}-${lvl[1]})  **${gilderPrice.toFixed(2)} M**`;
        r += ` \nNMZ (${lvl[0]}-${lvl[1]})  **${arceusPrice.toFixed(2)} M**`
        return r;
        /*
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
                con2Price = (xpLeft * 8) / 1000000;

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
                    con2Price = (xpLeft * 8) / 1000000;

                    totalPrice = con2Price;

                    r += `\nTotal minimum  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nNMZ (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 10) / 1000000;

                    r += `\n\nSand Crabs (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;*/
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

exports.prayerCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->99 (Gilded altar) - 9GP/XP
LVL 1-99 With Arceus spell (best ensouled head you can use) 20GP/XP
*/
    try {
        var gilderPrice, arceusPrice, r;
        var lvl = q.split('-');
        var xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])

        gilderPrice = (xpLeft * 9) / 1000000;
        //arceusPrice = (xpLeft * 20) / 1000000;

        r = `**Price Prayer ${lvl[0]}-${lvl[1]} **`;
        r += `\n\nGilder Altar (${lvl[0]}-${lvl[1]})  **${gilderPrice.toFixed(2)} M**`;
        //r += ` \nArceus Spell (${lvl[0]}-${lvl[1]})  **${arceusPrice.toFixed(2)} M**`
        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

exports.magicCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*SPLASHING - 15GP/XP
Hight Alchemy- 18GP/XP
*/
    try {
        var splashPrice, haPrice, sJewel, r;
        var lvl = q.split('-');
        var xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])

        splashPrice = (xpLeft * 15) / 1000000;
        haPrice = (xpLeft * 18) / 1000000;
        sJewel = (xpLeft * 14) / 1000000;

        r = `**Price Magic ${lvl[0]}-${lvl[1]} ** `;
        r += `\n\nSplashing (${lvl[0]}-${lvl[1]})  **${splashPrice.toFixed(2)} M**`;
        r += `\nHight Alchemy (${lvl[0]}-${lvl[1]}) **${haPrice.toFixed(2)} M**`;
        r += `\nString Jewelry (${lvl[0]}-${lvl[1]}) **${sJewel.toFixed(2)} M**`;
        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

exports.wcCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->41  - 50GP/XP
    LVL 41->70 - 40GP/XP
    LVL 70->99 - 35GP/XP
*/
    try {
        var fPrice, lavaPrice, lava2Price, zmiPrice, zmi2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');
        r = `**Price Woodcutting  ${lvl[0]}-${lvl[1]} **`;

        //lava
        if (lvl[0] < 41) {

            if (lvl[1] <= 41) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 50) / 1000000;
                r += `\nBest way  **${fPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 70 & lvl[1] > 41) {

                xpLeft = Math.abs(xpLvl['41'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 50) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['41'])
                lavaPrice = (xpLeft * 40) / 1000000;

                totalPrice = fPrice + lavaPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBest way (${lvl[0]}-41) **${fPrice.toFixed(2)} M** `;
                r += `\nWillow (41-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 70) {

                xpLeft = Math.abs(xpLvl['41'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 50) / 1000000;

                xpLeft = Math.abs(xpLvl['70'] - xpLvl['41'])
                lavaPrice = (xpLeft * 40) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                lava2Price = (xpLeft * 35) / 1000000;

                totalPrice = fPrice + lavaPrice + lava2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBest way (${lvl[0]}-41) **${fPrice.toFixed(2)} M** `;
                r += `\nWillow (41-70)  **${lavaPrice.toFixed(2)} M** `;
                r += `\nWillow (70-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] < 70) {

                if (lvl[1] <= 70 & lvl[1] > 41) {


                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 40) / 1000000;

                    totalPrice = lavaPrice;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nWillow (${lvl[0]}-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
                }
                if (lvl[1] <= 99 & lvl[1] > 70) {

                    xpLeft = Math.abs(xpLvl['70'] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 40) / 1000000;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                    lava2Price = (xpLeft * 35) / 1000000;

                    totalPrice = lavaPrice + lava2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nWillow (${lvl[0]}-70)  **${lavaPrice.toFixed(2)} M** `;
                    r += `\nWillow (70-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                }

            } else {
                if (lvl[0] <= 99) {

                    if (lvl[1] <= 99 & lvl[1] > 70) {

                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                        lava2Price = (xpLeft * 35) / 1000000;

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

exports.thievingCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 01->55 - 55GP/XP
    LVL 55->80 - 40GP/XP
    LVL 80->99 - 35GP/XP
*/
    try {
        var fPrice, lavaPrice, lava2Price, zmiPrice, zmi2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');
        r = `**Price Thieving ${lvl[0]}-${lvl[1]} **`;

        //lava
        if (lvl[0] < 55) {

            if (lvl[1] <= 55) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 55) / 1000000;
                r += `\nAny way  **${fPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 80 & lvl[1] > 55) {

                xpLeft = Math.abs(xpLvl['55'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 55) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['55'])
                lavaPrice = (xpLeft * 40) / 1000000;

                totalPrice = fPrice + lavaPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nAny way (${lvl[0]}-55) **${fPrice.toFixed(2)} M** `;
                r += `\nPyramid (55-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 80) {

                xpLeft = Math.abs(xpLvl['55'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 55) / 1000000;

                xpLeft = Math.abs(xpLvl['80'] - xpLvl['55'])
                lavaPrice = (xpLeft * 40) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['80'])
                lava2Price = (xpLeft * 35) / 1000000;

                totalPrice = fPrice + lavaPrice + lava2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nAny way (${lvl[0]}-55) **${fPrice.toFixed(2)} M** `;
                r += `\nPyramid (55-80)  **${lavaPrice.toFixed(2)} M** `;
                r += `\nPyramid (80-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] < 80) {

                if (lvl[1] <= 80 & lvl[1] > 55) {


                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 40) / 1000000;

                    totalPrice = lavaPrice;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nPyramid (${lvl[0]}-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
                }
                if (lvl[1] <= 99 & lvl[1] > 80) {

                    xpLeft = Math.abs(xpLvl['80'] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 40) / 1000000;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['80'])
                    lava2Price = (xpLeft * 35) / 1000000;

                    totalPrice = lavaPrice + lava2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nPyramid (${lvl[0]}-80)  **${lavaPrice.toFixed(2)} M** `;
                    r += `\nPyramid (80-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                }

            } else {
                if (lvl[0] <= 99) {

                    if (lvl[1] <= 99 & lvl[1] > 80) {

                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                        lava2Price = (xpLeft * 35) / 1000000;

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

exports.fishCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->50  - 50GP/XP
    LVL 50->70 - 35GP/XP
    LVL 70->99 - 20GP/XP
*/
    try {
        var fPrice, lavaPrice, lava2Price, zmiPrice, zmi2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');
        r = `**Price Fishing ${lvl[0]}-${lvl[1]} **`;

        //lava
        if (lvl[0] < 50) {

            if (lvl[1] <= 50) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 50) / 1000000;
                r += `\nBest way  **${fPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 70 & lvl[1] > 50) {

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 50) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                lavaPrice = (xpLeft * 35) / 1000000;

                totalPrice = fPrice + lavaPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBest way (${lvl[0]}-50) **${fPrice.toFixed(2)} M** `;
                r += `\nBest way (50-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 70) {

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 50) / 1000000;

                xpLeft = Math.abs(xpLvl['70'] - xpLvl['50'])
                lavaPrice = (xpLeft * 35) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                lava2Price = (xpLeft * 20) / 1000000;

                totalPrice = fPrice + lavaPrice + lava2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBest way (${lvl[0]}-50) **${fPrice.toFixed(2)} M** `;
                r += `\nBest way (50-70)  **${lavaPrice.toFixed(2)} M** `;
                r += `\nBest way (70-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] < 70) {

                if (lvl[1] <= 70 & lvl[1] > 50) {


                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 35) / 1000000;

                    totalPrice = lavaPrice;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nBest way (${lvl[0]}-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
                }
                if (lvl[1] <= 99 & lvl[1] > 70) {

                    xpLeft = Math.abs(xpLvl['70'] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 35) / 1000000;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                    lava2Price = (xpLeft * 20) / 1000000;

                    totalPrice = lavaPrice + lava2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nBest way (${lvl[0]}-70)  **${lavaPrice.toFixed(2)} M** `;
                    r += `\nBest way (70-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                }

            } else {
                if (lvl[0] <= 99) {

                    if (lvl[1] <= 99 & lvl[1] > 70) {

                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                        lava2Price = (xpLeft * 20) / 1000000;

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

exports.hunterCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->30  - 60GP/XP
    LVL 30->60 - 55GP/XP
    LVL 60->99 - 40GP/XP
*/
    try {
        var fPrice, lavaPrice, lava2Price, zmiPrice, zmi2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');
        r = `**Price Hunter ${lvl[0]}-${lvl[1]} **`;

        //lava
        if (lvl[0] < 30) {

            if (lvl[1] <= 30) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 60) / 1000000;
                r += `\nBirds  **${fPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 60 & lvl[1] > 30) {

                xpLeft = Math.abs(xpLvl['30'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 60) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['30'])
                lavaPrice = (xpLeft * 55) / 1000000;

                totalPrice = fPrice + lavaPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBirds (${lvl[0]}-30) **${fPrice.toFixed(2)} M** `;
                r += `\nSalamanders (30-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 60) {

                xpLeft = Math.abs(xpLvl['30'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 60) / 1000000;

                xpLeft = Math.abs(xpLvl['60'] - xpLvl['30'])
                lavaPrice = (xpLeft * 55) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                lava2Price = (xpLeft * 40) / 1000000;

                totalPrice = fPrice + lavaPrice + lava2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nBirds (${lvl[0]}-30) **${fPrice.toFixed(2)} M** `;
                r += `\nSalamanders (30-60)  **${lavaPrice.toFixed(2)} M** `;
                r += `\nSalamanders (60-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] < 60) {

                if (lvl[1] <= 60 & lvl[1] > 30) {


                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 55) / 1000000;

                    totalPrice = lavaPrice;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nSalamanders (${lvl[0]}-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
                }
                if (lvl[1] <= 99 & lvl[1] > 60) {

                    xpLeft = Math.abs(xpLvl['60'] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 55) / 1000000;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                    lava2Price = (xpLeft * 40) / 1000000;

                    totalPrice = lavaPrice + lava2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nSalamanders (${lvl[0]}-60)  **${lavaPrice.toFixed(2)} M** `;
                    r += `\nSalamanders (60-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                }

            } else {
                if (lvl[0] <= 99) {

                    if (lvl[1] <= 99 & lvl[1] > 60) {

                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                        lava2Price = (xpLeft * 40) / 1000000;

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

exports.runecraftingCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*
    LVL 1->23 - 90GP/XP
    LVL 23->60 (LAVAS *LUNAR DIPLO REQ*) - 120GP/XP
    LVL 60->99 (LAVAS *LUNAR DIPLO REQ*) - 70GP/XP
    LVL 1->50 (ZMI)  - 140GP/XP
    LVL 50->99 (ZMI) - 100GP/XP
*/
    try {
        var lavaPrice, zmiPrice, arceusPrice, lava2Price, zmi2Price, arceus2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price ${capitalize(msg)} ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 50) {

            if (lvl[1] <= 50) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                lavaPrice = (xpLeft * 120) / 1000000;
                zmiPrice = (xpLeft * 120) / 1000000;
                arceusPrice = (xpLeft * 180) / 1000000;
                totalPrice = lavaPrice;

                r += `\nTotal Minimoun  **${totalPrice.toFixed(2)} M**`
                r += `\n\nLava rune (${lvl[0]}-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
                r += `\nZMI (${lvl[0]}-${lvl[1]})  **${zmiPricePrice.toFixed(2)} M** `;
                r += `\nArceuus Library  (${lvl[0]}-${lvl[1]})  **${arceusPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 50) {

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                
                lavaPrice = (xpLeft * 120) / 1000000;
                zmiPrice = (xpLeft * 120) / 1000000;
                arceusPrice = (xpLeft * 180) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                
                lava2Price = (xpLeft * 75) / 1000000;
                zmi2Price = (xpLeft * 80) / 1000000;
                arceus2Price = (xpLeft * 140) / 1000000;

                totalPrice = lavaPrice + lava2Price;

                r += `\nTotal Minimoun  **${totalPrice.toFixed(2)} M**`;
                r += `\n\nLava rune (${lvl[0]}-50)  **${lavaPrice.toFixed(2)} M** `;
                r += `\nLava rune (50-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
                r += `\n\nZMI (${lvl[0]}-50)  **${zmiPrice.toFixed(2)} M** `;
                r += `\nZMI (50-${lvl[1]})  **${zmi2Price.toFixed(2)} M** `;
                r += `\n\nArceuus Library (${lvl[0]}-50)  **${arceusPrice.toFixed(2)} M** `;
                r += `\nArceuus Library (50-${lvl[1]})  **${arceus2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 50) {

                if (lvl[1] <= 99 & lvl[1] > 50) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    
                    lava2Price = (xpLeft * 75) / 1000000;
                    zmi2Price = (xpLeft * 80) / 1000000;
                    arceus2Price = (xpLeft * 140) / 1000000;

                    totalPrice = lava2Price;

                    r += `\nTotal Minimoun  **${totalPrice.toFixed(2)} M**`;
                    r += `\n\nLava rune (${lvl[0]}-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;
                    r += `\nZMI (${lvl[0]}-${lvl[1]})  **${zmi2Price.toFixed(2)} M** `;
                    r += `\nArceuus Library  (${lvl[0]}-${lvl[1]})  **${arceus2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;
        /*
        var fPrice, lavaPrice, lava2Price, zmiPrice, zmi2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');
        r = `**Price Runecrafting ${lvl[0]}-${lvl[1]} **`;

        //lava
        if (lvl[0] < 23) {

            if (lvl[1] <= 23) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 90) / 1000000;
                r += `\nRegular way  **${fPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 60 & lvl[1] > 23) {

                xpLeft = Math.abs(xpLvl['23'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 90) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['23'])
                lavaPrice = (xpLeft * 120) / 1000000;

                totalPrice = fPrice + lavaPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                r += `\nRegular way (${lvl[0]}-23) **${fPrice.toFixed(2)} M** `;
                r += `\nLava Runes/ZMI (23-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 60) {

                xpLeft = Math.abs(xpLvl['23'] - xpLvl[lvl[0]])
                fPrice = (xpLeft * 90) / 1000000;

                xpLeft = Math.abs(xpLvl['60'] - xpLvl['23'])
                lavaPrice = (xpLeft * 120) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                lava2Price = (xpLeft * 70) / 1000000;

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
                    lavaPrice = (xpLeft * 120) / 1000000;

                    totalPrice = lavaPrice;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nLava Runes/ZMI (${lvl[0]}-${lvl[1]})  **${lavaPrice.toFixed(2)} M** `;
                }
                if (lvl[1] <= 99 & lvl[1] > 60) {

                    xpLeft = Math.abs(xpLvl['60'] - xpLvl[lvl[0]])
                    lavaPrice = (xpLeft * 120) / 1000000;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                    lava2Price = (xpLeft * 70) / 1000000;

                    totalPrice = lavaPrice + lava2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                    r += `\nLava Runes/ZMI (${lvl[0]}-60)  **${lavaPrice.toFixed(2)} M** `;
                    r += `\nLava Runes/ZMI (60-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                }

            } else {
                if (lvl[0] <= 99) {

                    if (lvl[1] <= 99 & lvl[1] > 60) {

                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['60'])
                        lava2Price = (xpLeft * 70) / 1000000;

                        totalPrice = lava2Price;

                        r += `\nTotal Price  **${totalPrice.toFixed(2)} M** \n`;
                        r += `\nLava Runes/ZMI (${lvl[0]}-${lvl[1]})  **${lava2Price.toFixed(2)} M** `;

                    }

                }
            }
        }

        return r;*/
    } catch (error) {
        console.log(error);
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

exports.constructionCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->52  - 35GP/XP
    LVL 52->99 - 15GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Construction ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 52) {

            if (lvl[1] <= 52) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 35) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny type (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 52) {

                xpLeft = Math.abs(xpLvl['52'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 35) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['52'])
                con2Price = (xpLeft * 15) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny type (${lvl[0]}-52)  **${conPrice.toFixed(2)} M** `;
                r += `\nAny type (52-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 52) {

                if (lvl[1] <= 99 & lvl[1] > 52) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 15) / 1000000;

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

exports.farmCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->30  - 60gp/XP  
    LVL 30->99 - 35gp/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price Farming  ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 30) {

            if (lvl[1] <= 30) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 60) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\ntree-allotments-herbs (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 30) {

                xpLeft = Math.abs(xpLvl['30'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 60) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['30'])
                con2Price = (xpLeft * 35) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\ntree-allotments-herbs (${lvl[0]}-30)  **${conPrice.toFixed(2)} M** `;
                r += `\nTithe farm (30-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 30) {

                if (lvl[1] <= 99 & lvl[1] > 30) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 35) / 1000000;

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

exports.cookCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->70 - 50GP/XP
    LVL 70->99 (FISH) - 18GP/XP
    LVL 35->99 (WINNES) - 15GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price ${capitalize(msg)}  ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 70) {

            if (lvl[1] <= 70) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 50) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBest Way (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 70) {

                xpLeft = Math.abs(xpLvl['70'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 50) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                con2Price = (xpLeft * 15) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBest Way (${lvl[0]}-70)  **${conPrice.toFixed(2)} M** `;
                r += `\nFish/Winnes (70-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 70) {

                if (lvl[1] <= 99 & lvl[1] > 70) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 15) / 1000000;

                    totalPrice = con2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nFish/Winnes (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;
        /*
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var winePrice = 0;
        var cookPrice = 0;
        var lvl = q.split('-');

        r = `**Price Cooking ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 70) {

            if (lvl[1] <= 70) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]]);
                conPrice = (xpLeft * 50) / 1000000;

                //wine
                if (lvl[0] >= 35) {
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]]);
                    winePrice = (xpLeft * 15) / 1000000;

                    totalPrice = winePrice;
                } else {
                    if (lvl[1] > 35) {
                        xpLeft = Math.abs(xpLvl['35'] - xpLvl[lvl[0]]);
                        cookPrice = (xpLeft * 50) / 1000000;

                        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['35']);
                        winePrice = (xpLeft * 15) / 1000000;

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
                conPrice = (xpLeft * 50) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['70'])
                con2Price = (xpLeft * 15) / 1000000;

                //wine
                if (lvl[0] >= 35) {
                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]]);
                    winePrice = (xpLeft * 15) / 1000000;

                    totalPrice = winePrice;
                } else {

                    xpLeft = Math.abs(xpLvl['35'] - xpLvl[lvl[0]]);
                    cookPrice = (xpLeft * 50) / 1000000;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['35']);
                    winePrice = (xpLeft * 15) / 1000000;

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
                    con2Price = (xpLeft * 15) / 1000000;

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]]);
                    winePrice = (xpLeft * 15) / 1000000;

                    totalPrice = winePrice;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nWines (${lvl[0]}-${lvl[1]})  **${winePrice.toFixed(2)} M** `;
                    r += `\n\nFish (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        return r;*/
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

exports.slayerCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*(PRICES MIGHT VARIES DEPENDING ON COMBAT LEVEL AND GEAR)
    1->50  - 120GP/XP
    50->99 - 89GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price ${capitalize(msg)} ${lvl[0]}-${lvl[1]} ** \n(Prices might varies depending by combat level and gear)`;

        if (lvl[0] < 50) {

            if (lvl[1] <= 50) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 120) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBest way (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 50) {

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 120) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                con2Price = (xpLeft * 75) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBest way (${lvl[0]}-50)  **${conPrice.toFixed(2)} M** `;
                r += `\nBest way (50-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 50) {

                if (lvl[1] <= 99 & lvl[1] > 50) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 75) / 1000000;

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

exports.fmCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->50  - 45GP/XP
    LVL 50->99 - 15GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price ${capitalize(msg)} ${lvl[0]}-${lvl[1]} **`;

        if (lvl[0] < 50) {

            if (lvl[1] <= 50) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 45) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nLogs (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 50) {

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 45) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                con2Price = (xpLeft * 15) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nLogs (${lvl[0]}-50)  **${conPrice.toFixed(2)} M** `;
                r += `\nwintertodt (50-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 50) {

                if (lvl[1] <= 99 & lvl[1] > 50) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 15) / 1000000;

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

exports.craftingCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->54  - 49.5GP/XP
    LVL 54->99 - 17GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price ${capitalize(msg)} ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 54) {

            if (lvl[1] <= 54) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 45) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny type (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 54) {

                xpLeft = Math.abs(xpLvl['54'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 45) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['54'])
                con2Price = (xpLeft * 13) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny type (${lvl[0]}-54)  **${conPrice.toFixed(2)} M** `;
                r += `\nAny type (54-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 54) {

                if (lvl[1] <= 99 & lvl[1] > 54) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 13) / 1000000;

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

exports.miningCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->72  - 55GP/XP
    LVL 72->99 - 44GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price ${capitalize(msg)} ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 72) {

            if (lvl[1] <= 72) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 50) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nIron ore (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 72) {

                xpLeft = Math.abs(xpLvl['72'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 50) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['72'])
                con2Price = (xpLeft * 40) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nIron ore (${lvl[0]}-72)  **${conPrice.toFixed(2)} M** `;
                r += `\nIron ore (72-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 72) {

                if (lvl[1] <= 99 & lvl[1] > 72) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 40) / 1000000;

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

exports.smithCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 50->99 (BF*GOLD BARS*) - 22GP/XP
    LVL 1->99  (BARS) - 41GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price ${capitalize(msg)} ${lvl[0]}-${lvl[1]} ** `;

        //bow
        if (lvl[0] < 50) {

            if (lvl[1] <= 99 & lvl[1] > 50) {

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 35) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                con2Price = (xpLeft * 20) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBars (${lvl[0]}-50)  **${conPrice.toFixed(2)} M** `;
                r += `\nBF Gold Bars (50-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 50) {

                if (lvl[1] <= 99 & lvl[1] > 50) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 20) / 1000000;

                    totalPrice = con2Price;

                    r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                    r += `\n\nBF Gold Bars (${lvl[0]}-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
                }

            }
        }

        //dart
        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
        conPrice = (xpLeft * 35) / 1000000;
        totalPrice = conPrice;
        r += `\n\nBars (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;

        return r;
    } catch (error) {
        return `Right command is: \n\n **${msg} 1-99 **`;
    }

}

exports.fletchingCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->99 (DARTS) - 11GP/XP
    LVL 50->99 (BOWS) - 16.5GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price ${capitalize(msg)} ${lvl[0]}-${lvl[1]} ** `;

        //dart
        xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
        conPrice = (xpLeft * 10) / 1000000;
        totalPrice = conPrice;

        r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
        r += `\n\nDarts (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
        //bow
        if (lvl[0] < 50) {

            if (lvl[1] <= 99 & lvl[1] > 50) {

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 10) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                con2Price = (xpLeft * 15) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\n\nDarts (${lvl[0]}-50)  **${conPrice.toFixed(2)} M** `;
                r += `\nBow (50-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 50) {

                if (lvl[1] <= 99 & lvl[1] > 50) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 15) / 1000000;

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

exports.agilityCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->60  - 71.5GP/XP
LVL 60->99 - 66GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price ${capitalize(msg)} ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 40) {

            if (lvl[1] <= 40) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 60) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBest way (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 40) {

                xpLeft = Math.abs(xpLvl['40'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 60) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['40'])
                con2Price = (xpLeft * 55) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nBest way (${lvl[0]}-40)  **${conPrice.toFixed(2)} M** `;
                r += `\nBest way (40-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 40) {

                if (lvl[1] <= 99 & lvl[1] > 40) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 55) / 1000000;

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

exports.herbCalc = function(q, msg) {
    //$deberia llegar algo como 1-99
    /*LVL 1->50  - 26GP/XP
LVL 50->99 - 19GP/XP
*/
    try {
        var conPrice, con2Price, xpLeft, totalPrice, r;
        var lvl = q.split('-');

        r = `**Price ${capitalize(msg)} ${lvl[0]}-${lvl[1]} ** `;

        if (lvl[0] < 50) {

            if (lvl[1] <= 50) {

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 20) / 1000000;
                totalPrice = conPrice;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny potion (${lvl[0]}-${lvl[1]})  **${conPrice.toFixed(2)} M** `;
            }
            if (lvl[1] <= 99 & lvl[1] > 50) {

                xpLeft = Math.abs(xpLvl['50'] - xpLvl[lvl[0]])
                conPrice = (xpLeft * 20) / 1000000;

                xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl['50'])
                con2Price = (xpLeft * 15) / 1000000;

                totalPrice = conPrice + con2Price;

                r += `\nTotal Price  **${totalPrice.toFixed(2)} M**`
                r += `\n\nAny potion (${lvl[0]}-50)  **${conPrice.toFixed(2)} M** `;
                r += `\nBest potion possible (50-${lvl[1]})  **${con2Price.toFixed(2)} M** `;
            }

        } else {
            if (lvl[0] >= 50) {

                if (lvl[1] <= 99 & lvl[1] > 50) {

                    xpLeft = Math.abs(xpLvl[lvl[1]] - xpLvl[lvl[0]])
                    con2Price = (xpLeft * 15) / 1000000;

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

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}