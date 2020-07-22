// window.alert("js works")

//phase
let phase = 'homePage'

//global variables
//resources
const resources = {
    colonists: 50,
    shipIntegrety: 50,
    food: 50,
    water: 50,
    year: 2237,
    endgamecounter: 0,
}


//resource variables
    // const food = document.querySelector("#food")
    // const colonists = document.querySelector("#colonists")
    // const water = document.querySelector("#water")
    // const shipIntegrety = document.querySelector("#shipIntegrety")
    // const years = document.querySelector('#year')
    function resourceAssignment(){
        const food = document.querySelector("#food")
        const colonists = document.querySelector("#colonists")
        const water = document.querySelector("#water")
        const shipIntegrety = document.querySelector("#shipIntegrety")
        const years = document.querySelector('#year')
    }


//should be placed at the begining of each page
function resourceUpdate(){
    food.innerText = `Food: ${resources.food}`;
    colonists.innerText = `Colonists: ${resources.colonists}`;
    water.innerText = `Water: ${resources.water}`;
    shipIntegrety.innerText = `Ship Integrety: ${resources.shipIntegrety}%`;
    years.innerText = `Captins Log: Star Date ${resources.year}`;
}


//MainDomSelectors
    const spaceOne = document.querySelector('.one')
    const lane = document.querySelector(".lane")
    const resourcesBar = document.querySelector('.resources')
    const interactiveBox = document.querySelector('#interactiveBox')
    const textBox = document.querySelector('.textContainer')


function createPage(){
    //fleet
    const fleet = document.createElement('div')
    fleet.setAttribute("class", "fleet")
    lane.appendChild(fleet)

    //resource tab
    const resourceList = document.createElement('ul')
    resourcesBar.appendChild(resourceList)
    for(let i = 0; i<4; i++){
        const item = document.createElement('li')
        const resourcesKeys = Object.keys(resources)
        item.setAttribute('id', resourcesKeys[i])
        resourceList.appendChild(item)
    }

    //year
    const captainsLog = document.createElement('h2')
    captainsLog.setAttribute('id', 'years')
    textBox.prepend(captainsLog)

    if(phase === 'homePage' || phase === 'mainPhase'){
        const randomMain = document.createElement('div')
        randomMain.setAttribute("class", "randomEncounterMain")
        spaceOne.appendChild(randomMain)

        phase = 'mainPhase'
    }
    resourceAssignment()
    resourceUpdate()
}


