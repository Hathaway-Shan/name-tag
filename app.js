// grab DOM elements
const nameInput = document.getElementById('name-input');
// get info from user input
console.log(nameInput)

const nameDisplay = document.getElementById('name-display');
nameInput.addEventListener('input', () => {
    console.log(nameInput.value)

    const name = nameInput.value;
    // use user input to update state
    nameDisplay.textContent = name;
    
    // update DOM to reflect the new state
});
// set event listeners


//const pronouns = document.getElementById('prounouns');
//    pronouns.addEventListener('input'), () => {
    
//}    #
