// window.alert("js works")

//phase
let phase = 'homePage';

//global variables
//resources
const resources = {
    //DO NOT CHANGE ORDER OF FIRST 4
    colonists: 1000,
    shipIntegrety: 50,
    food: 10000,
    water: 10000,
    //DO NOT CHANGE ORDER OF FIRST 4
    foodUpgrades: 1,
    shipIntegretyUpgrade: 1,
    waterUpgrade: 1,
    year: 2237,
    endgamecounter: 0,
    currentRandomEncounter: false,
}

    function resourceAssignment(){
        const food = document.querySelector("#food");
        const colonists = document.querySelector("#colonists");
        const water = document.querySelector("#water");
        const shipIntegrety = document.querySelector("#shipIntegrety");
        const years = document.querySelector('#year');
    }


//should be placed at the begining of each page
function resourceUpdate(){
    food.innerText = `Food: ${resources.food} crates`;
    colonists.innerText = `Colonists: ${resources.colonists} people`;
    water.innerText = `Water: ${resources.water} gallons`;
    shipIntegrety.innerText = `Ship Integrety: ${resources.shipIntegrety}%`;
    years.innerText = `Captins Log: Star Date ${resources.year}`;
}


//MainDomSelectors
    const spaceOne = document.querySelector('.one');
    const resourcesBar = document.querySelector('.resources');
    const interactiveBox = document.querySelector('#interactiveBox');
    const textBox = document.querySelector('.textContainer');
    const main = document.querySelector('main');
    // const mainPhase = document.querySelector('.mainPhase')
    // const travelPhase = document.querySelector('.travelPhase')
    const hiddenStorage = document.querySelector('#storage')
    //const start = document.querySelector('#start')
    const options = document.querySelector('.options')


function createGamePage(){
    //lane
    const lane = document.createElement("div");
    lane.setAttribute('class', 'lane');
    main.insertBefore(lane, spaceOne.nextSibling);


    //fleet
    const fleet = document.createElement('div');
    fleet.setAttribute("class", "fleet");
    lane.appendChild(fleet);

    //resource tab
    const resourceList = document.createElement('ul');
    resourcesBar.appendChild(resourceList);
    for(let i = 0; i<4; i++){
        const item = document.createElement('li');
        const resourcesKeys = Object.keys(resources);
        item.setAttribute('id', resourcesKeys[i]);
        resourceList.appendChild(item);
    }

    //challenge
    // challenge();

    //year
    const captainsLog = document.createElement('h2');
    captainsLog.setAttribute('id', 'years');
    textBox.prepend(captainsLog);


    //random encounter
    if(phase === 'homePage' || phase === 'travelPhase'){
        const randomEncounter = document.createElement('div');
        randomEncounter.setAttribute("class", "randomEncounter");
        spaceOne.appendChild(randomEncounter);

        //randomEncounterSelector
        resources.currentRandomEncounter = encounterSorter(mainPhaseObject)

        //challenge
        challenge(resources.currentRandomEncounter);

        
        createOptions(resources.currentRandomEncounter);

        phase = 'mainPhase';
    }
    else if(phase === 'mainPhase'){
        const randomEncounter = document.createElement('div');
        randomEncounter.setAttribute("class", "randomEncounter");
        lane.appendChild(randomEncounter);

        //randomEncounterSelector
        resources.currentRandomEncounter = encounterSorter(mainPhaseObject)

        //challenge
        challenge(resources.currentRandomEncounter);

        createOptions(resources.currentRandomEncounter);

        phase = 'travelPhase'
    }
    resourceAssignment();
    setTimeout(resourceUpdate(), 1000);
}

//change the game phase
function changePhase(){
    clearPage();
    
    if(resources.endgamecounter >= 300){
        alert('you win')
    }
    else if(resources.colonists <= 0){
        alert('you lose')
    }
    else{
        if(phase === 'travelPhase'){
            resources.year += (Math.floor(Math.random() * 99) + 100);
            resources.endgamecounter +=1;
            resourceChanges();
        }
        createGamePage()
    }
}

//exit animation
function exitAnimation(){
    const fleet = document.querySelector('.fleet');
    fleet.style.animation = 'shipMove2 5s forwards';
    const randomEncounter = document.querySelector('.randomEncounter');
    if(phase === 'mainPhase'){
        randomEncounter.style.animation = 'encounterMove2 5s forwards'
    }
    else if(phase === 'travelPhase'){
        randomEncounter.style.animation = 'encounterDissolve .5s forwards'
    }
    setTimeout(changePhase, 1500)
}

//start button
document.querySelector('#start').addEventListener('click',function(){
    const homeScreen = document.querySelector('.homeScreen')
    homeScreen.remove()
    createGamePage()
})



//clear page
function clearPage(){
    resourcesBar.innerHTML = '';
    spaceOne.innerHTML = '';
    const lane = document.querySelector(".lane");
    lane.remove();
    // hiddenStorage.appendChild(mainPhase);
    // hiddenStorage.appendChild(travelPhase);
    textBox.innerHTML = '';
}

//standard resource changes

function resourceChanges(){
    resources.food -= Math.floor(resources.colonists * 1.5);
    resources.water -= Math.floor(resources.colonists * 1.5);
    resources.shipIntegrety -= 5;
    if(resources.food >= resources.colonists && resources.water >= resources.colonists && resources.shipIntegrety > 0){
        resources.colonists += Math.floor(resources.colonists * .3);
    }
    else if(resources.food < resources.colonists || resources.water < resources.colonists){
        resources.colonists -= Math.floor(resources.colonists * .3) + 100;
        alert('oh no youre losing settlers due to lack of supplies');
        if(resources.shipIntegrety <= 0){
            resources.shipIntegrety -= resources.shipIntegrety
            resources.colonists -= Math.floor(resources.colonists * .5) + 200;
        }
        if(resources.food <= 0){
            resources.food -= resources.food
        }
        if(resources.water <= 0){
            resources.water -= resources.water
        }
    }
    else if(resources.shipIntegrety <= 0){
        resources.colonists -= Math.floor(resources.colonists * .5) +200;
        alert('oh no youre losing settlers due to lack of supplies');
        if(resources.shipIntegrety <= 0){
            resources.shipIntegrety -= resources.shipIntegrety
        }
        if(resources.food < 0 || resources.water < 0){
            resources.colonists -= Math.floor(resources.colonists * .3) + 100;
            if(resources.food <= 0){
                resources.food -= resources.food
            }
            if(resources.water <= 0){
                resources.water -= resources.water
            }
        }
    }
    if(resources.colonists <= 0){
        resources.colonists -= resources.colonists
    }
}

