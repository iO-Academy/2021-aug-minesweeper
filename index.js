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
        if(item.dataset.hit === '1'){
            item.setAttribute('class', 'hit')
            item.textContent = 'HIT'
        }
        if(item.dataset.hit === '0'){
            item.setAttribute('class', 'miss')
            item.textContent = 'MISS'
        }
    })
})