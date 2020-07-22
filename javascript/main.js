//button click event
const option = document.querySelectorAll(".option")

for(let i = 0; i < option.length; i++){
    option[i].addEventListener('click', clickOptions);
}

//button click functions
function clickOptions(){
    if(event.target.id === 'option1'){
        alert('not set up yet');
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
    }

    //speed up
    else if(event.target.id === 'option4'){
        resources.endgamecounter += 1
    }


    //adds food
    else if(event.target.id === 'option5'){
        resources.food += 15;
    }
    else if(event.target.id === 'option6'){
        resources.water += 15
    }

    //moves to next phase
    travelPhase()
}

//functions for button clicks

function foodWater(){
    //removes previous options
    option.forEach(element => {
        element.style.display = 'none'
    });
    //changes options
    const food = document.querySelector('#option5')
    const water = document.querySelector('#option6')
    food.style.display = 'block'
    water.style.display = 'block'
}

//move to travel phase

function travelPhase(){
    resources.endgamecounter +=1
    if(resources.endgamecounter >= 10){
        alert('you win')
    }
    else{
        resources.year += (Math.floor(Math.random() * 99) + 100)
        resourceUpdate()
    }
}