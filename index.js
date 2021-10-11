
//Function takes 2 integer inputs from form.
//num1 is grid size.
//num2 is the number of lynx.
//Function checks if number is integer,
// if positive
// and if hitboxes (num2) does not exceed half of the grid size (num1).
//return true if no errors

function validateInput(num1, num2){
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'Please only input whole numbers'
    }
    if (Math.sign(num1) === -1 || Math.sign(num2) === -1) {
        return 'You must have a positive grid size and number of lynx to find'
    }
    if ((num1 / 2) < num2) {
        return 'Number of lynx can not exceed half of the number you picked for the Forest size'
    }

    return true
}


