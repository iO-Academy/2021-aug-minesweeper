<<<<<<< HEAD
// create as many divs as the number that has been inputted to the function
// divs include the class - `grid-item`
// the return of this function is a string (containing the html code)
// each div should have a custom attribute `data-hit` where `1` is true and `0` is a miss
//
//
// GENERAL APPROACH CURRENTLY SUGGESTED:
// Create an array with the total number of grid items as divs,
// use the hit box number to decide how many get the custom data attribute.
// Once assigned then shuffle the array to randomise the order.
// Turn the array back into a string to be returned from the function.
//

// Create an array with the total number of grid items as divs,
// let hit = document.getElementById('hit').value
// let total = document.getElementById('total').value
// let miss = document.getElementById('total').value - document.getElementById('hit').value

//require index.html at top of page
//function to generate all game tiles
let generateSquares = () => {
    //create empty array
    let squares = []
    // replace 10. for every hit we are putting a div into the array with data-hit 1
    for(i=0; i<6; i++) {
        squares.push('<div class="grid-item" data-hit="1"></div>')
    }
 // replace 12. for every hit we are putting a div into the array with data-hit 0
    for(i=0; i<6; i++) {
        squares.push('<div class="grid-item" data-hit="0" ></div>')
    }
    //shuffle the array
    let shuffle = (array) => array.map(a => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map(a => a.value)
    let shuffledArr = shuffle(squares)
    //create empty string
    emptyString = ''
    //adding each 
    shuffledArr.forEach((square) => {
        document.getElementById('gridContainer').innerHTML += square
    })
}

generateSquares()
=======

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

function validateInput(num1, num2){
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

validateInput(10, -6.5)
console.log(errorMessage)
>>>>>>> s3-generateGrid
