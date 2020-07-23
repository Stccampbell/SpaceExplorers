//button click event
const option = document.querySelectorAll(".option")

for(let i = 0; i < option.length; i++){
    option[i].addEventListener('click', clickOptions);
}

//button click functions
function clickOptions(){
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

//functions for button clicks

function foodWater(){
    //removes previous options
    option.forEach(element => {
        element.style.display = 'none'
    });
    //changes options
    // const food = document.createElement('li')
    // const water = document.createElement('li')

    
    const food = document.querySelector('#option5')
    const water = document.querySelector('#option6')
    food.style.display = 'block'
    water.style.display = 'block'
}


