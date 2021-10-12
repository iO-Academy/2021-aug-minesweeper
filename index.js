
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

//add an event listener to the form
document.getElementById('inputForm').addEventListener('submit', function(e){
        //prevent the form from submitting
        e.preventDefault()

        //grab the total grid number input
        let gridSize = parseInt(document.getElementById('gridSize').value)

        //grab the number of lynx input
        let numLynx = parseInt(document.getElementById('numLynx').value)

       //call the validation function
        let inputValidation = validateInput(gridSize,numLynx)
        console.log(inputValidation)


/*        //call the generate grid function
        let htmlString = generateGrid()

        //add div elements to the DOM
        document.getElementByID('gridDiv').innerHTML = htmlString

        //call the hit/miss event listener function
        hitMissFunction()*/
    }
)