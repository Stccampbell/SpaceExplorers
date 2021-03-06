// window.alert("js works")

//phase
let phase = 'homePage';

//global variables
//resources
const resources = {
    //DO NOT CHANGE ORDER OF FIRST 4
    colonists: 1000,
    shipIntegrety: 100,
    food: 10000,
    water: 10000,
    //DO NOT CHANGE ORDER OF FIRST 4
    foodUpgrades: 1,
    shipIntegretyUpgrade: 1,
    waterUpgrades: 1,
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
    const starContainer = document.querySelector('.starContainer')


function createGamePage(){
    //lane
    const lane = document.createElement("div");
    lane.setAttribute('class', 'lane');
    main.insertBefore(lane, spaceOne.nextSibling);

    //create stars
    createStars()

    //fleet
    // const fleet = document.createElement('div');
    // fleet.setAttribute("class", "fleet");
    // lane.appendChild(fleet);

    const fleet = document.createElement('img');
    fleet.setAttribute("class", "fleet");
    fleet.setAttribute("src", "assets/Working Material/SpaceExplorers-SpaceShip.png");
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
        phase = 'mainPhase';

        //randomEncounterSelector
        resources.currentRandomEncounter = encounterSorter(mainPhaseObject)

        //randomEncounterArt
        // randomEncounterArt(spaceOne);
        const randomEncounter = document.createElement('img');
        randomEncounter.setAttribute("class", "randomEncounter");
        randomEncounter.setAttribute("src", resources.currentRandomEncounter.asset);
        spaceOne.appendChild(randomEncounter);

        //challenge
        challenge(resources.currentRandomEncounter);

        
        createOptions(resources.currentRandomEncounter);

        // phase = 'mainPhase';
    }
    else if(phase === 'mainPhase'){
        phase = 'travelPhase'

        //randomEncounterSelector
        resources.currentRandomEncounter = encounterSorter(travelPhaseObject)

        //randomEncounterArt
        // randomEncounterArt(lane);
        const randomEncounter = document.createElement('img');
        randomEncounter.setAttribute("class", "randomEncounter");
        randomEncounter.setAttribute("src", resources.currentRandomEncounter.asset);
        lane.appendChild(randomEncounter);

        //challenge
        challenge(resources.currentRandomEncounter);

        createOptions(resources.currentRandomEncounter);

        // phase = 'travelPhase'
    }
    resourceAssignment();
    setTimeout(resourceUpdate(), 1000);
}

//change the game phase
function changePhase(){
    clearPage();
    
    if(resources.endgamecounter >= 10 || resources.colonists <= 0){
        endScreen = document.createElement('div')
        endScreen.setAttribute('class', 'homeScreen')
        main.insertBefore(endScreen ,spaceOne.nextElementSibling)
        winOrLose = document.createElement('h1');
        if(resources.endgamecounter >= 10 ){
            winOrLose.innerText = 'You Win'
        }
        else if(resources.colonists <= 0){
            winOrLose.innerText = 'You Lose'
        }
        let peoplePoints = resources.colonists * 10
        let foodPoints = resources.food
        let waterPoints = resources.water
        let timeTaken = 10000 - (resources.endgamecounter * 1000)
        let total = timeTaken + waterPoints + foodPoints + peoplePoints

        const scoreboard = document.createElement('p')
        scoreboard.innerHTML = `Total: ${total} Points` + "<br />" + `Time Taken: ${timeTaken} Points` + "<br />" + `Colonists Survived: ${peoplePoints} Points` + "<br />" + `Food LeftOver: ${foodPoints} Points` + "<br />" + `Water Leftover: ${waterPoints} Points`
        
        const playAgain = document.createElement('button')
        playAgain.setAttribute('class', 'start')
        playAgain.setAttribute('id', 'restart')
        playAgain.innerHTML = 'Play Again?'
        
        endScreen.appendChild(winOrLose)
        endScreen.appendChild(playAgain)
        endScreen.appendChild(scoreboard)

        restart();
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
    starContainer.innerHTML = '';
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

function randomEncounterArt(destination){
    const randomEncounter = document.createElement('img');
    randomEncounter.setAttribute("class", "randomEncounter");
    if(phase === 'mainPhase'){
        destination.appendChild(randomEncounter);
        randomEncounter.setAttribute('src', 'assets/WaterPlanet.png');
    }
    else if(phase === 'travelPhase'){
        destination.appendChild(randomEncounter);
        randomEncounter.setAttribute('src', 'assets/Astroids.png');
    }
}

function createStars(){
    //const main = document.querySelector('main')
    for (let i=0; i < 20000; i++){
        const starOrNoStar = Math.floor(Math.random() * 100)
        if(starOrNoStar < 90){
            let spacer = document.createElement('div')
            spacer.classList.add('spacer')
            main.append(spacer)
        }
        else if(starOrNoStar >= 90){
            let star = document.createElement('img')
            star.classList.add('star')
            star.setAttribute('src', 'assets/StarLight.png')
            main.append(star)
        }
    }
}


function createStars(){
    for (let i=0; i < 1000; i++){
        const starOrNoStar = Math.floor(Math.random() * 500)


        if(starOrNoStar < 450){
            let spacer = document.createElement('div')
            spacer.classList.add('spacer')
            starContainer.append(spacer)
        }
        else if(starOrNoStar >= 450 && starOrNoStar < 460){
            let star = document.createElement('img')
            star.classList.add('star1')
            star.setAttribute('src', 'assets/StarLight.png')
            starContainer.append(star)
        }
        else if(starOrNoStar > 460 && starOrNoStar < 470){
            let star = document.createElement('img')
            star.classList.add('star2')
            star.setAttribute('src', 'assets/StarLight.png')
            starContainer.append(star)
        }
        else if(starOrNoStar > 470 && starOrNoStar < 480){
            let star = document.createElement('img')
            star.classList.add('star3')
            star.setAttribute('src', 'assets/StarLight.png')
            starContainer.append(star)
        }
        else if(starOrNoStar > 480 && starOrNoStar < 490){
            let star = document.createElement('img')
            star.classList.add('star4')
            star.setAttribute('src', 'assets/StarLight.png')
            starContainer.append(star)
        }
        else if(starOrNoStar >= 490){
            let star = document.createElement('img')
            star.classList.add('star5')
            star.setAttribute('src', 'assets/StarLight.png')
            starContainer.append(star)
        }
    }
}


function restart(){
    document.querySelector('#restart').addEventListener('click', function(){
        const homeScreen = document.querySelector('.homeScreen')
        homeScreen.remove()

        resources.colonists = 1000
        resources.food = 10000
        resources.water = 10000
        resources.shipIntegrety = 100
        resources.waterUpgrades = 1
        resources.foodUpgrades = 1
        resources.year = 2237
        resources.endgamecounter = 0
        resources.currentRandomEncounter = false
        resources.shipIntegretyUpgrade = 1
        
        createGamePage()
    })
}