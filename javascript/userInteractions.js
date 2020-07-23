//button click functions
function clickOptions(){
    if(phase === 'mainPhase'){
        if(event.target.id === 'option1'){
            alert('not set up yet');
            exitAnimation()
        }
        else if(event.target.id === 'option2'){
            foodWater()
        }

        //ship Repairs
        else if(event.target.id === 'option3'){
            resources.shipIntegrety += 15;
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
            resources.food += Math.floor(resources.colonists * 2.5);
            exitAnimation()
        }
        else if(event.target.id === 'option6'){
            resources.water += Math.floor(resources.colonists * 2.5)
            exitAnimation()
        }
    }
    else if(phase === 'travelPhase'){
        if(event.target.id === 'option1'){
            alert('not set up yet');
            exitAnimation()
        }
        else if(event.target.id === 'option2'){
            alert('not set up yet');
            exitAnimation()
        }

        //speed up
        else if(event.target.id === 'option3'){
            resources.endgamecounter += 1
            exitAnimation()
        }
    }
}

//functions for button clicks

function foodWater(){
    const options = document.querySelector('.options');
    options.innerHTML = '';
    for(let i = 5;i <= 6;i++){
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


//The Challenge
function challenge(){
    const theChallenge = document.createElement('p');
    theChallenge.setAttribute('class', 'theChallenge');
    textBox.prepend(theChallenge);
    theChallenge.innerText = `Hello Captain! We have been traveling for ${resources.year -2235} years. We seemed to have encountered BLANK.`
}

// create the options
function createOptions(){
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'options');
    textBox.appendChild(ul);
    if(phase === 'travelPhase' || phase === 'homePage'){
        for(let i = 1;i <= 4;i++){
            const li = document.createElement('li');
            li.setAttribute('class', 'option');
            li.setAttribute('id', `option${i}`);
            ul.appendChild(li);
            li.addEventListener('click', clickOptions);
        }
        mainPhaseOptions();
    }
    else if(phase === 'mainPhase'){
        //test
        for(let i = 1;i <= 4;i++){
            const li = document.createElement('li');
            li.setAttribute('class', 'option');
            li.setAttribute('id', `option${i}`);
            ul.appendChild(li);
            li.addEventListener('click', clickOptions);
        }
        travelPhaseOptions();
    }
}

function mainPhaseOptions(){
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const option4 = document.querySelector('#option4');

    option1.innerHTML = '1. Would you like to explore the random encounter';
    option2.innerHTML = '2. Would you like to replinish supplies';
    option3.innerHTML = '3. Would you like to repair the ship';
    option4.innerHTML = '4. Would you like to increase your speed';
}

function travelPhaseOptions(){
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');

    option1.innerHTML = '1. Would you like to explore the random encounter';
    option2.innerHTML = '2. Would you like to destroy the random encounter';
    option3.innerHTML = '3. Would you like to try to move around the random encounter';
}