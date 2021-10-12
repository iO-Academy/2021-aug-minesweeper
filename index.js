
//removes grid container from document flow
document.getElementById('gridContainer').style.display="none"
document.getElementById('gameTitle').style.display="none"


//function to generate all game tiles
document.querySelector('.form').addEventListener('submit', (e) => {
    //stops form from submitting
    e.preventDefault()
    //Defining total grid size, number of lynx and misses from user input
    let numLynx = parseInt(document.getElementById('numLynx').value)
    let gridSize = parseInt(document.getElementById('gridSize').value)
    let miss = gridSize - numLynx

    //reset
    document.getElementById('gridContainer').innerHTML = ''
    document.getElementById('errorMessage').textContent = ''


        let generateSquares = () => {
            //create empty array
            let squares = []
            //For every hit we are putting a div into the array with data-hit 1
            for (i = 0; i < numLynx; i++) {
                squares.push('<div class="grid-item" data-hit="1"></div>')
            }
            //For every hit we are putting a div into the array with data-hit 0
            for (i = 0; i < miss; i++) {
                squares.push('<div class="grid-item" data-hit="0" ></div>')
            }
            //shuffle the array
            let shuffle = (array) => array.map(a => ({
                sort: Math.random(),
                value: a
            })).sort((a, b) => a.sort - b.sort).map(a => a.value)
            let shuffledArr = shuffle(squares)
            //adding each array element to html of container
            shuffledArr.forEach((square) => {
                document.getElementById('gridContainer').innerHTML += square
            })
        }
    //validates form input
    if(!validateInput(gridSize, numLynx)){
        document.getElementById('errorMessage').textContent = errorMessage
    }else {
        //execute function
        generateSquares()
        turnCard()
        //sets the grid container display to default
        document.getElementById('gameTitle').style.display = ""
        document.getElementById('gridContainer').style.display = ""
        //scroll to top of game play area
        document.querySelector('#gameTitle').scrollIntoView({
            behavior: 'smooth'
        });
    }
})


// DOCBLOCK READ PLS
// Function takes 2 integer inputs from form.
//num1 is grid size.
//num2 is the number of lynx.
//Function checks if number is integer,
// if positive
// and if hitboxes (num2) does not exceed half of the grid size (num1).
// global error message is populated upon error, dictated by the conditional, ready to be displayed
//return true if no errors

let errorMessage = ""

function validateInput(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        errorMessage = 'Please only input whole numbers'
        return false
    }
    if (Math.sign(num1) === -1 || Math.sign(num2) === -1) {
        errorMessage = 'You must have a positive grid size and number of lynx to find'
        return false
    }
    if ((num1 / 2) < num2) {
        errorMessage = 'Number of lynx can not exceed half of the number you picked for the Forest size'
        return false
    }

    return true
}

function turnCard() {
// Grabs all grid-item divs as gridItems to be used in forEach
let gridItems = document.querySelectorAll('.grid-item')
// DOCBLOCK BELOW
// Does a forEach over gridItems and checks the data-hit value for each of them
// When clicked, if data-hit is 1: Applies class='hit' and changes textContent to 'HIT'
// When clicked, if data-hit is 0: Applies class='miss' and changes textContent to 'MISS'
// Both .hit and .miss are styled in CSS, ready for application.
// DOCBLOCK ABOVE

gridItems.forEach( (item) => {
    item.addEventListener('click', () => {
        if(item.dataset.hit == '1'){
            item.style.backgroundImage = "url('project-assets/babylynx2.jpg')"
            item.textContent = 'Hooray, you\'ve found a lynx!'
            console.log('lynx')
        }
        if(item.dataset.hit == '0'){
            item.style.backgroundImage = "url('project-assets/snakeattack.png')"
            item.textContent = 'OUCH! That\'s a snake'
            console.log('snake')
        }
    })
})
}

