// let num = 0
// while(num < 10){
//     console.log("number is less than 10:", num)
//     num++
// }



// let sum = 0
// let num = 1
// while(num <= 10){
//     sum += num
//     console.log("current number:", num, "sum:", sum)
//     num ++
// }



// Guess the secret word using a while loop

// let secretWord = 'javascript'
// let guess = prompt('guess the secret word:')
// let attempts = 1
// while(guess !== secretWord){
//     console.log(`Attempt ${attempts}: wrong guess, try again`)
//     guess = prompt('guess the secret word:')
//     attempts++
// }
// // console.log("congratulations you guessed the secret word:", secretWord, "in", attempts, "attemptps")
// document.getElementById('demo').innerHTML = `Congratulations you guessed the secret word: ${secretWord} in ${attempts} attempts`



//truthy and falsy values in js
const userInput = prompt("Enter something :")
if(userInput){
    console.log("truthy")
}else{
    console.log("falsy")
}