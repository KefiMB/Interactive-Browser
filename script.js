// Our random number generator
function randomNum(max) {
    return Math.floor(Math.random() * max);
}
// create a random number and store it in variable correctAnswer
const correctAnswer = randomNum(100);
let maxGuesses = 5;
// Points
let points = 0;
let maxPoints = 50;
// Log the correct answer for our eyes
console.log(correctAnswer);
let continueGame = true;

for (i = 0; i < maxGuesses; i++) {
    // Ask user for their guess and store it in userAnswer
    let userAnswer = prompt("Guess a number 0 - 100");

    // If userAnswer does not equal correctAnswer tell them why
    if (userAnswer !== correctAnswer) {
        // If userAnswer less than correctAnswer tell the user to go higher
        if (userAnswer < correctAnswer) {
            alert("Too low, go Higher!");
        // If userAnswer is greater than correctAnswer tell the user to go lower
        } else if (userAnswer > correctAnswer) {
            alert("Too high, go Lower");
        }
        maxPoints -= 10;
    }

    // If userAnswer is equal to the correctAnswer then alert them that they have won!
    if (parseInt(userAnswer) === correctAnswer) {
        alert("Congratulations, Your answer is correct!");
        break;
    }
}

console.log(maxPoints);