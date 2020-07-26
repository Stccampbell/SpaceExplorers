const mainPhaseObject = {
    foodPlanet: {
        happened: "no",
        justHappened:"no",
        intro: "a strange forest planet",
        optionInsert: "forest planet",
        text: "We sent a landing party down to the strange forest planet. Upon arrival we found that there are a number of delicous foods that we are able to bring aboard.",
        effect: "food",
        captinsMessage: "Glad to hear it. Lets continue on our journey",
    },
    waterComet: {
        happened: "no",
        justHappened:"no",
        intro: "a passing commet",
        optionInsert: "passing commet",
        text: "We were able to gather water from the trail of the comet!",
        effect: "water",
        captinsMessage: "Glad to hear it. Lets continue on our journey",
    },
    brokenShipRescue: {
        happened: "no",
        justHappened:"no",
        intro: "a broken down space vessel",
        optionInsert: "broken ship",
        text: "We boarded the ship and to our pleasant suprise we found friendly aliens. They decided to join us!",
        effect: "colonists",
        captinsMessage: "Glad to hear it. Lets continue on our journey",
    },
    brokenShipBrainSlug: {
        happened: "no",
        justHappened:"no",
        intro: "an abandonded ship",
        optionInsert: "derlict ship",
        text: "Oh no! we boarded the ship and it was full of brain slugs. We lost a number of colonists.",
        effect: "colonistsBad",
        captinsMessage: "A disaster. Unfortunatly we must persevere on our journey",
    },
    alienTrader: {
        happened: "no",
        justHappened:"no",
        intro: "some sort of flying saucer",
        optionInsert: "mysterious vessel",
        text: "When we boarded the strange vessel it turnout to be friendly aliens. They agreed to sell us some food processers. With these we should be able to produce more food.",
        effect: "foodUpgrade",
        captinsMessage: "Glad to hear it. Lets continue on our journey",
    },
    waterMicrobPlanet: {
        happened: "no",
        justHappened:"no",
        intro: "a planet covered in oceans",
        optionInsert: "ocean planet",
        text: "When we landed on the planet we found that none of the water was drinkable. How ever after studying the microbs in the water our scientists believe they can improve our water purifiers.",
        effect: "waterUpgrade",
        captinsMessage: "Glad to hear it. Lets continue on our journey",
    },
    brokenShipSalvage: {
        happened: "no",
        justHappened:"no",
        intro: "a badly wrecked ship",
        optionInsert: "broken ship",
        text: "While we couldnt find survivers we were able to salvafe the hull and upgrade our own. We should be alittle better protected going through space.",
        effect: "shipIntegrety",
        captinsMessage: "Glad to hear it. Lets continue on our journey",
    },
}

const travelPhaseObject = {
    astroidField: {
        happened: "no",
        justHappened:"no",
        intro: "",
        optionInsert: "",
        text: "",
        effect: "",
    },

    wormHole: {
        happened: "no",
        justHappened:"no",
        intro: "",
        optionInsert: "",
        text: "",
        effect: "",
    },

    wormHoleBad: {
        happened: "no",
        justHappened:"twice",
        intro: "",
        optionInsert: "",
        text: "",
        effect: "",
    },

    solarFlare: {
        happened: "no",
        justHappened:"no",
        intro: "",
        optionInsert: "",
        text: "",
        effect: "",
    },

    blackHole: {
        happened: "no",
        justHappened:"no",
        intro: "",
        optionInsert: "",
        text: "",
        effect: "",
    },

    comet: {
        happened: "no",
        justHappened:"no",
        intro: "",
        optionInsert: "",
        text: "",
        effect: "",
    },

    alienAttack: {
        happened: "no",
        justHappened:"no",
        intro: "",
        optionInsert: "",
        text: "",
        effect: "",
    },

    spaceRats: {
        happened: "no",
        justHappened:"no",
        intro: "",
        optionInsert: "",
        text: "",
        effect: "",
    },

    waterFastFroze: {
        happened: "no",
        justHappened:"no",
        intro: "",
        optionInsert: "",
        text: "",
        effect: "",
    },

    foodSpoiled: {
        happened: "no",
        justHappened:"no",
        intro: "",
        optionInsert: "",
        text: "",
        effect: "",
    },

    waterLeak: {
        happened: "no",
        justHappened:"no",
        intro: "",
        optionInsert: "",
        text: "",
        effect: "",
    },

    waterLeak: {
        happened: "no",
        justHappened:"no",
        intro: "",
        optionInsert: "",
        text: "",
        effect: "",
    }
}




//randomly selects an encounter
function encounterSelector(obj) {
    let keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

//lets the other function know if the element has been used recently or not
function changeEncounterCounter(obj, compare, counter){
    let keys = Object.keys(obj);
    for(let i=0; i < keys.length; i++){
        obj[keys[i]].justHappened = 'no'
        if(obj[keys[i]] === compare){
            obj[keys[i]].happened = counter
            obj[keys[i]].justHappened = 'yes'
        }
    }
}

//checks that the function hasnt been used just now and hasnt been used more than three times
function encounterSorter(obj){
    let cantryagain = false
    while(cantryagain === false){
        let theOption = encounterSelector(obj)
        if(theOption.happened === 'no'){
            changeEncounterCounter(obj, theOption, 'once')
            cantryagain = true
            return theOption
        }
        else if(theOption.happened === 'once' && theOption.justHappened === 'no'){
            changeEncounterCounter(obj, theOption, 'twice')
            cantryagain = true
            return theOption
        }
        else if(theOption.happened === 'twice' && theOption.justHappened === 'no'){
            changeEncounterCounter(obj, theOption, 'three times')
            cantryagain = true
            return theOption
        }
    }
}

function resultsofrandomencounter(text){
    const foodWater = Math.floor(resources.colonists * ((Math.random() * 3) + 2.5))
    const colonist = Math.floor(Math.random() * (resources.colonists * .6))
    const shipIntegrety = Math.floor(Math.random() * 4)
    if(text.effect === 'food'){
        resources.food += foodWater
    }
    else if(text.effect === 'foodBad'){
        resources.food -= foodWater
    }
    else if(text.effect === 'foodUpgrade'){
        resources.foodUpgrades += 1
    }
    else if(text.effect === 'foodDowngrade'){
        resources.foodUpgrades -= 1
    }
    else if(text.effect === 'water'){
        resources.water += foodWater
    }
    else if(text.effect === 'waterBad'){
        resources.water -= foodWater
    }
    else if(text.effect === 'waterUpgrade'){
        resources.waterUpgrades += 1
    }
    else if(text.effect === 'waterDowngrade'){
        resources.waterUpgrades -= 1
    }
    else if(text.effect === 'colonist'){
        resources.colonists += colonist
    }
    else if(text.effect === 'colonistbad'){
        resources.colonists -= colonist
    }
    else if(text.effect === 'shipIntegrity'){
        resources.shipIntegrety += shipIntegrety
    }
    else if(text.effect === 'shipIntegrityBad'){
        resources.shipIntegrety -= shipIntegrety
    }
    else if(text.effect === 'shipIntegrityUpgrade'){
        resources.shipIntegretyUpgrades += 1
    }
    else if(text.effect === 'shipIntegrityDowngrade'){
        resources.shipIntegretyUpgrades -= 1
    }

}

function randomEncounterAvoid(text){
    if(text === 'option1'){}
}