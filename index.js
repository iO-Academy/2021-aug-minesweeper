
//function to generate all game tiles
document.querySelector('.form').addEventListener('submit', (e) => {
    //stops form from submitting
    e.preventDefault()
    //Defining total grid size, number of lynx and misses from user input
    const numLynx = parseInt(document.getElementById('numLynx').value)
    const gridSize = parseInt(document.getElementById('gridSize').value)
    const miss = gridSize - numLynx

    //reset
    document.getElementById('gridContainer').innerHTML = ''
    document.getElementById('errorMessage').textContent = ''

    //validates form input
    if (!validateInput(gridSize, numLynx)) {
        document.getElementById('errorMessage').textContent = errorMessage
        document.getElementById('hide').style.display = "none"
        document.querySelector('header').style.minHeight = "100vh"
    } else {
        //execute function
        generateSquares(numLynx, miss)
        turnCard()
        //sets the grid container display to default
        document.getElementById('hide').style.display = "flex"
        //scroll to top of game play area
        document.querySelector('#gameTitle').scrollIntoView({
            behavior: 'smooth'
        })
        document.querySelector('header').style.minHeight = "auto"
    }
})

let errorMessage = ""

function validateInput(gridSize, numLynx) {
    if (!Number.isInteger(gridSize) || !Number.isInteger(numLynx)){
        errorMessage = 'Please only input whole numbers'
        return false
    }
    if (gridSize > 100 || numLynx > 50) {
        errorMessage = 'Grid size must not exceed 100 and number of lynx must not exceed 50'
        return false
    }
    if (Math.sign(gridSize) === 0 || Math.sign(numLynx) === 0) {
        errorMessage = 'Can not input 0'
        return false
    }
    if (Math.sign(gridSize) === -1 || Math.sign(numLynx) === -1) {
        errorMessage = 'You must have a positive grid size and number of lynx to find'
        return false
    }
    if ((gridSize / 2) < numLynx) {
        errorMessage = 'Number of lynx can not exceed half of the number you picked for the Forest size'
        return false
    }

    return true
}

function generateSquares(numLynx, miss) {
    //create empty array
    let squares = []
    //For every hit we are putting a div into the array with data-hit 1
    for (i = 0; i < numLynx; i++) {
        squares.push('<div class="gridItem" data-hit="1"></div>')
    }
    //For every miss we are putting a div into the array with data-hit 0
    for (i = 0; i < miss; i++) {
        squares.push('<div class="gridItem" data-hit="0" ></div>')
    }
    //shuffle the array
    const shuffle = (array) => array.map(a => ({
        sort: Math.random(),
        value: a
    })).sort((a, b) => a.sort - b.sort).map(a => a.value)
    const shuffledArr = shuffle(squares)
    //adding each array element to html of container
    shuffledArr.forEach((square) => {
        document.getElementById('gridContainer').innerHTML += square
    })
}

function turnCard() {
    // Grabs all gridItem divs as gridItems to be used in forEach
    let gridItems = document.querySelectorAll('.gridItem')
    gridItems.forEach((item) => {
        item.addEventListener('click', () => {
            if(item.dataset.hit === '1') {
                item.style.backgroundImage = "url('project-assets/babylynx2.jpg')"
                item.textContent = 'Hooray, you\'ve found a lynx!'
            } else {
                item.style.backgroundImage = "url('project-assets/snakeattack.png')"
                item.textContent = 'OUCH! That\'s a snake'
            }
        })
    })
}

function newGame() {
    //removes grid
    document.getElementById('gridContainer').innerHTML = ''

    //hide the header
    document.getElementById('hide').style.display="none"

    //reset form values to ''
    document.getElementById('numLynx').value = ''
    document.getElementById('gridSize').value = ''

    //reshow splash screen
    document.querySelector('#mainTitle').scrollIntoView({
        behavior: 'smooth'})
}

//pop up modal
document.querySelector(".fake-event").addEventListener("click", () => {
    document.querySelector(".endModal").style.display = "inline-block"
    document.querySelector(".modal-blur").style.filter = "blur(2px)"
})

//play again button
document.querySelector(".play-again").addEventListener('click', () => {
    newGame()
    document.querySelector(".endModal").style.display = "none"
    document.querySelector(".modal-blur").style.filter= "none"
})