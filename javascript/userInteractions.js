//button click functions
function clickOptions(){
    if(phase === 'mainPhase'){
        //explores randomEncounter
        if(event.target.id === 'option1'){
            randomEncounterInfoText(resources.currentRandomEncounter, event.target.id);
        }

        //moves to food or water selection menu
        else if(event.target.id === 'option2'){
            foodWater()
        }

        //ship Repairs
        else if(event.target.id === 'option3'){
            resources.shipIntegrety += 10 + (resources.shipIntegretyUpgrade * 5);
            if(resources.shipIntegrety > 100){
                let dif = resources.shipIntegrety - 100;
                resources.shipIntegrety -= dif;
            }
            exitAnimation()
        }

        //speed up
        else if(event.target.id === 'option4'){
            resources.endgamecounter += 1
            exitAnimation()
        }


        //adds food
        else if(event.target.id === 'option5'){
            resources.food += Math.floor(resources.colonists * (2(resources.foodUpgrades + .5)));
            exitAnimation()
        }
        //adds water
        else if(event.target.id === 'option6'){
            resources.water += Math.floor(resources.colonists * (2 + (resources.waterUpgrades + .5)))
            exitAnimation()
        }
        else if(event.target.id === 'option7'){
            exitAnimation()
        }
    }
    else if(phase === 'travelPhase'){
        //explores randomEncounter
        if(event.target.id === 'option1'){
            randomEncounterInfoText(resources.currentRandomEncounter, event.target.id);        }
        //destroys the random encounter
        else if(event.target.id === 'option2'){
            randomEncounterInfoText(resources.currentRandomEncounter, event.target.id);
        }

        //speed up
        else if(event.target.id === 'option3'){
            randomEncounterInfoText(resources.currentRandomEncounter, event.target.id);
        }
        else if(event.target.id === 'option4'){
            exitAnimation()
        }
    }
}

//functions for button clicks

function foodWater(){
    const options = document.querySelector('.options');
    options.innerHTML = '';
    for(let i = 4;i <= 6;i++){
        const li = document.createElement('li');
        li.setAttribute('class', 'option');
        li.setAttribute('id', `option${i}`);
        options.appendChild(li);
        li.addEventListener('click', clickOptions);
    }
    //changes options
    const option5= document.querySelector('#option5');
    option5.innerText = '1. Would you like to divert resources and grow food';

    const option6 = document.querySelector('#option6');
    option6.innerText = '2. Would you like to divert resources to purifying water';
}

//random encounter info text

function randomEncounterInfoText(text, id){
    //selects the UL
    const options = document.querySelector('.options');
    options.innerHTML = '';

    //selects the challenge
    const theChallenge = document.querySelector('.theChallenge');
    
    //makes the move forward button
    const li = document.createElement('li');
    li.setAttribute('class', 'option');
    options.appendChild(li);
    li.addEventListener('click', clickOptions);
    
    //creates the chance of good or bad thing happening
    const goodOrBad = Math.floor(Math.random() * 100)
    
    //creates the scenario if they explore random encounter
    if(id === 'option1'){
    theChallenge.innerText = text.text;
    li.innerText = `1. ${text.captinsMessage}`
        if(phase === 'mainPhase'){
            li.setAttribute('id', `option${7}`);
        }
        else if(phase === 'travelPhase'){
            li.setAttribute('id', `option${4}`);
        }
    }
    
    //makes it so they dont explore the random encounter
    else if(id === `option2` || id === 'option3'){
        li.setAttribute('id', `option${4}`);
        if(id === 'option2'){
            if(goodOrBad <= 15){
                theChallenge.innerText = `We destroyed the ${text.optionInsert}. Our way is unobstructed!`
                li.innerText = `1. Glad to hear it. Lets continue on our journey`
            }
            else if(goodOrBad > 15 && goodOrBad < 85){
                const amount = Math.floor(Math.random() * 10)
                resources.shipIntegrety -= amount
                theChallenge.innerText = `We destroyed the ${text.optionInsert}. Unfortunatly we suffered ${amount}% hull damage.`
                li.innerText = `1. A disaster. Unfortunatly we must persevere on our journey`
            }
            else if(goodOrBad >= 85){
                const amount = Math.floor(Math.random() * 10)
                resources.shipIntegrety -= amount
                endgamecounter -= 1
                theChallenge.innerText = `We destroyed the ${text.optionInsert}. Unfortunatly we suffered ${amount}% hull damage and have been slowed on our journey.`
                li.innerText = `1. A disaster. Unfortunatly we must persevere on our journey`
            }
        }
        else if(id === 'option3'){
            if(goodOrBad <= 33){
                li.innerText = `1. Glad to hear it. Lets continue on our journey`
                theChallenge.innerText = `We made it around the ${text.optionInsert}.`
            }
            else if(goodOrBad >= 33){
                resources.endgamecounter -= 1
                theChallenge.innerText = `We made it around the ${text.optionInsert}. Unfortunately it slowed us down considerably.`
                li.innerText = `1. A disaster. Unfortunatly we must persevere on our journey`
            }
        }
    }
}

//The Challenge
function challenge(text){
    const theChallenge = document.createElement('p');
    theChallenge.setAttribute('class', 'theChallenge');
    textBox.appendChild(theChallenge);
    theChallenge.innerText = `Hello Captain! We have been traveling for ${resources.year -2235} years. We seemed to have encountered ${text.intro}.`
}

// create the options
function createOptions(text){
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'options');
    textBox.appendChild(ul);
    // if(phase === 'travelPhase' || phase === 'homePage'){
    if(phase === 'mainPhase'){
        for(let i = 1;i <= 4;i++){
            const li = document.createElement('li');
            li.setAttribute('class', 'option');
            li.setAttribute('id', `option${i}`);
            ul.appendChild(li);
            li.addEventListener('click', clickOptions);
        }
        mainPhaseOptions(text);
    }
    // else if(phase === 'mainPhase'){
    else if(phase === 'travelPhase'){
        if(text.asset !== 'assets/HiddenEffect.png'){
            for(let i = 1;i <= 4;i++){
                const li = document.createElement('li');
                li.setAttribute('class', 'option');
                li.setAttribute('id', `option${i}`);
                ul.appendChild(li);
                li.addEventListener('click', clickOptions);
            }
            //check if there is a problem
            
            travelPhaseOptions(text);
        }
        else if(text.asset === 'assets/HiddenEffect.png'){
            const li = document.createElement('li');
            li.setAttribute('class', 'option');
            li.setAttribute('id', `option4`);
            ul.appendChild(li);
            li.addEventListener('click', clickOptions);
            const theChallenge = document.querySelector('.theChallenge');
            theChallenge.innerText = text.text
            li.innerText = `1. ${text.captinsMessage}`;
            const randomEvent = document.querySelector('.randomEncounter')
            randomEvent
        }
    }
}

function mainPhaseOptions(text){
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const option4 = document.querySelector('#option4');

    option1.innerHTML = `1. Would you like to explore the ${text.optionInsert}`;
    option2.innerHTML = '2. Would you like to replinish supplies';
    option3.innerHTML = '3. Would you like to repair the ship';
    option4.innerHTML = '4. Would you like to increase your speed';
}

function travelPhaseOptions(text){
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');

    option1.innerHTML = `1. Would you like to explore the ${text.optionInsert}`;
    option2.innerHTML = `2. Would you like to destroy the ${text.optionInsert}`;
    option3.innerHTML = `3. Would you like to try to move around the ${text.optionInsert}`;
}