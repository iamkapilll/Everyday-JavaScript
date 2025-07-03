let maximum = parseInt(prompt("Enter the maximum number:"));
while (!maximum) {
    maximum = parseInt(prompt("Please enter a valid number:"));
}

const secretNumber = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess (or 'q' to quit):");
let attempts = 1;

while (guess !== 'q') {
    let numGuess = parseInt(guess);

    if (!numGuess) {
        guess = prompt("Please enter a valid number or 'q' to quit:");
        continue;
    }

    if (numGuess === secretNumber) {
        document.querySelector('#guessed').innerHTML =  `Congratulations! You guessed the secret number: ${secretNumber} in ${attempts} attempts.`;
        break;

    } else if (numGuess < secretNumber) {
        guess = prompt("Too low! Try again or 'q' to quit:");
        
    } else {
        guess = prompt("Too high! Try again or 'q' to quit:");
    }

    attempts++;
}

if (guess === 'q') {
    document.querySelector('#quite').innerHTML = `You quit the game after ${attempts} attempts. The secret number was: ${secretNumber}`;
        
}