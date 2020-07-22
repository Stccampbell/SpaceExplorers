// window.alert("js works")


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


//resource function
const resourceAssignmentObject = {
    food: document.querySelector("#food"),
    colonists: document.querySelector("#colonists"),
    water: document.querySelector("#water"),
    shipIntegrety: document.querySelector("#shipIntegrety"),
    years: document.querySelector('#year'),
}

//should be placed at the begining of each page
function resourceUpdate(){
    resourceAssignmentObject.food.innerText = `Food: ${resources.food}`;
    resourceAssignmentObject.colonists.innerText = `Colonists: ${resources.colonists}`;
    resourceAssignmentObject.water.innerText = `Water: ${resources.water}`;
    resourceAssignmentObject.shipIntegrety.innerText = `Ship Integrety: ${resources.shipIntegrety}%`;
    resourceAssignmentObject.years.innerText = `Captins Log: Star Date ${resources.year}`;
}

function mainPageDom(){
    const spaceOne = document.getElementById('.one');
    const lane = document.getElementById(".lane");
    const resourcesBar = document.getElementById('.resources');
    const interactiveBox = document.getElementById('#interactiveBox');
    const textBox = document.getElementById('.textContainer')
}

function createPage(){
    //random encounter and fleet
    const fleet = document.createElement('div')
    fleet.setAttribute("class", "fleet")
    mainPageDom.lane.appendChild(fleet)

    const randomMain = document.createElement('div')
    randomMain.setAttribute("class", "randomEncounterMain")
    mainPageDom.spaceOne.appendChild(randomMain)

    //resource tab
    const resourceList = document.createElement('ul')
    mainPageDom.resourcesBar.appendChild(resourceList)
    for(let i = 0; i<4; i++){
        const item = document.createElement('li')
        const resourcesKeys = Object.keys(resources)
        item.setAttribute('id', resourcesKeys[i])
        resourceList.appendChild(item)
    }

    //year
    const captainsLog = document.createElement('h2')
    captainsLog.setAttribute('id', 'year')
    mainPageDom.textBox.appendChild(captainsLog)

    mainPageDom()
    resourceUpdate()
}


createPage()
