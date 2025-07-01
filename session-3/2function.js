// function singsong(){
//     console.log('DO')
//     console.log('RE')
//     console.log('MI')
// }
// singsong()
// alert('who are you')




//excercise

// function rant(message){
//     console.log(`${message.toUpperCase()}`)
// }
// rant('i hate bugs')





// function repeat(message, num){
//     result = ''
//     for(let i = 0; i < num; i++){
//         result = result + message
//         console.log(result)
//     }
// }
// repeat('hello', 5)




//  EXERCISE:3 game if there are two 1s that is numbers then print bad:

// function isBad(num1, num2, attempt) {
//     console.log(`number1 = ${num1}, number2 = ${num2}`);
//     if (num1 == num2) {
//         console.log(`same number number in ${attempt} attempts` );
//     }
//     else {
//         console.log("not matched");
//     }


// }
// let attempt = 1;
// for (let i = 0; i < 5; i++) {
//     attempt++;
//     isBad(Math.floor(Math.random()*5),Math.floor(Math.random()*5),attempt);
//     break;
// }




 // EXERSICE:
//  function lastElement(arr){
//     if(arr.length === 0){
//         return null;
//     }
//     else{
//         return arr[arr.length-1];
//     }
// }

// console.log(lastElement(['kapil', 'dev', 'chaudhary']));






// function sumArray(arr){
//     let sum = 0;
//     for(let num of arr){
//         sum = sum + num
//     }
//         return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15